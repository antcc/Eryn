# -*- coding: utf-8 -*-
from abc import ABC
from copy import deepcopy
import numpy as np

from ..state import State
from .move import Move

__all__ = ["RedBlueMove"]


class RedBlueMove(Move, ABC):
    """
    An abstract red-blue ensemble move with parallelization as described in
    `Foreman-Mackey et al. (2013) <https://arxiv.org/abs/1202.3665>`_.

    # TODO: think about this for reversible jump.

    Args:
        nsplits (int, optional): The number of sub-ensembles to use. Each
            sub-ensemble is updated in parallel using the other sets as the
            complementary ensemble. The default value is ``2`` and you
            probably won't need to change that.

        randomize_split (bool, optional): Randomly shuffle walkers between
            sub-ensembles. The same number of walkers will be assigned to
            each sub-ensemble on each iteration. By default, this is ``True``.

        live_dangerously (bool, optional): By default, an update will fail with
            a ``RuntimeError`` if the number of walkers is smaller than twice
            the dimension of the problem because the walkers would then be
            stuck on a low dimensional subspace. This can be avoided by
            switching between the stretch move and, for example, a
            Metropolis-Hastings step. If you want to do this and suppress the
            error, set ``live_dangerously = True``. Thanks goes (once again)
            to @dstndstn for this wonderful terminology.

    ``kwargs`` are passed to :class:`Move` class.

    """

    def __init__(
        self, nsplits=2, randomize_split=True, live_dangerously=False, **kwargs
    ):
        super(RedBlueMove, self).__init__(**kwargs)
        self.nsplits = int(nsplits)
        self.live_dangerously = live_dangerously
        self.randomize_split = randomize_split

    def setup(self, coords):
        """Any setup necessary for the proposal"""
        pass

    @classmethod
    def get_proposal(self, sample, complement, random, inds=None):
        """Make a proposal

        Args:
            sample (dict): Keys are ``branch_names``. Values are
                np.ndarray[subset size, nleaves_max, ndim]. This is the subset
                whose ``coords`` are being proposed.
            complement (dict): Keys are ``branch_names``. Values are lists of other
                other np.ndarray[nwalkers - subset size, nleaves_max, ndim] from
                all other subsets. This is the compliment whose ``coords`` are
                used to form the proposal for the ``sample`` subset.
            random (object): Current random state of the sampler.
            inds (dict, optional): # TODO check this.

        Returns:
            tuple: Tuple contained proposal information.
                First entry is the new coordinates as a dictionary with keys
                as ``branch_names`` and values as np.ndarray[subset size, ndim * nleaves_max]
                of new coordinates. Second entry is the factors associated with the
                proposal necessary for detailed balance. This is effectively
                any term in the detailed balance fraction. +log of factors if
                in the numerator. -log of factors if in the denominator.

        """

        raise NotImplementedError("The proposal must be implemented by " "subclasses")

    def propose(self, model, state):
        """Use the move to generate a proposal and compute the acceptance

        Args:
            model (:class:`eryn.model.Model`): Carrier of sampler information.
            state (:class:`State`): Current state of the sampler.

        Returns:
            :class:`State`: State of sampler after proposal is complete.

        """
        # Check that the dimensions are compatible.
        ndim_total = 0
        for branch in state.branches.values():
            ntemps, nwalkers, nleaves_, ndim_ = branch.shape
            ndim_total += ndim_ * nleaves_

        if nwalkers < 2 * ndim_total and not self.live_dangerously:
            raise RuntimeError(
                "It is unadvisable to use a red-blue move "
                "with fewer walkers than twice the number of "
                "dimensions."
            )

        # Run any move-specific setup.
        self.setup(state.branches)

        # Split the ensemble in half and iterate over these two halves.
        accepted = np.zeros((ntemps, nwalkers), dtype=bool)
        all_inds = np.tile(np.arange(nwalkers), (ntemps, 1))
        inds = all_inds % self.nsplits
        if self.randomize_split:
            [np.random.shuffle(x) for x in inds]

        for split in range(self.nsplits):
            S1 = inds == split
            nwalkers_here = np.sum(S1[0])

            q = {
                name: np.zeros((ntemps, nwalkers_here, branch.nleaves_max, branch.ndim))
                for name, branch in state.branches.items()
            }
            factors = np.zeros((ntemps, nwalkers_here))

            # Get the two halves of the ensemble.
            for t in range(ntemps):
                sets = {
                    key: [
                        state.branches[key].coords[t, inds[t] == j]
                        for j in range(self.nsplits)
                    ]
                    for key in state.branches
                }
                s = {key: sets[key][split] for key in sets}
                c = {key: sets[key][:split] + sets[key][split + 1 :] for key in sets}

                # Get the move-specific proposal.
                temp_inds = {
                    name: state.branches_inds[name][t, inds[t] == split]
                    for name in state.branches_inds
                }

                q_temp, factors_temp = self.get_proposal(
                    s, c, model.random, inds=temp_inds
                )
                for name in q:
                    q[name][t] = q_temp[name]

                factors[t] = factors_temp

            all_inds_shaped = all_inds[S1].reshape(ntemps, nwalkers_here)

            new_inds = {
                name: np.take_along_axis(
                    state.branches[name].inds, all_inds_shaped[:, :, None], axis=1
                )
                for name in state.branches
            }
            temp_coords = {
                name: np.take_along_axis(
                    state.branches[name].coords,
                    all_inds_shaped[:, :, None, None],
                    axis=1,
                )
                for name in state.branches
            }

            # fix values in q that are not actually being teseted here
            for name in q:
                q[name] = q[name] * (new_inds[name][:, :, :, None]) + temp_coords[
                    name
                ] * (~new_inds[name][:, :, :, None])

            # Compute prior of the proposed position
            logp = model.compute_log_prior_fn(q, inds=new_inds)

            # Compute the lnprobs of the proposed position.
            logl, new_blobs = model.compute_log_prob_fn(q, inds=new_inds, logp=logp)

            # catch and warn about nans
            if np.any(np.isnan(logl)):
                logl[np.isnan(logl)] = -np.inf
                warnings.warn("Getting Nan in likelihood computation.")

            logP = self.compute_log_posterior(logl, logp)

            prev_logl = np.take_along_axis(state.log_prob, all_inds_shaped, axis=1)

            prev_logp = np.take_along_axis(state.log_prior, all_inds_shaped, axis=1)

            # TODO: check about prior = - inf
            # takes care of tempering
            prev_logP = self.compute_log_posterior(prev_logl, prev_logp)

            # TODO: think about factors in tempering
            lnpdiff = factors + logP - prev_logP

            keep = lnpdiff > np.log(model.random.rand(ntemps, nwalkers_here))

            np.put_along_axis(
                accepted, all_inds_shaped, keep, axis=1,
            )

            new_state = State(
                q, log_prob=logl, log_prior=logp, blobs=new_blobs, inds=new_inds
            )

            state = self.update(state, new_state, accepted, subset=all_inds_shaped)

        if self.temperature_control is not None:
            state, accepted = self.temperature_control.temper_comps(state, accepted)

        # make accepted move specific ?
        return state, accepted
