Search.setIndex({docnames:["README","index","tutorial/Eryn_tutorial","user/backend","user/ensemble","user/moves","user/prior","user/state","user/utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,nbsphinx:3,sphinx:56},filenames:["README.rst","index.rst","tutorial/Eryn_tutorial.ipynb","user/backend.rst","user/ensemble.rst","user/moves.rst","user/prior.rst","user/state.rst","user/utils.rst"],objects:{"eryn.backends":{Backend:[3,0,1,""],HDFBackend:[3,0,1,""]},"eryn.backends.Backend":{accepted:[3,1,1,""],betas:[3,1,1,""],blobs:[3,1,1,""],branch_names:[3,1,1,""],chain:[3,1,1,""],dtype:[3,1,1,""],get_a_sample:[3,2,1,""],get_autocorr_thin_burn:[3,2,1,""],get_autocorr_time:[3,2,1,""],get_betas:[3,2,1,""],get_blobs:[3,2,1,""],get_chain:[3,2,1,""],get_evidence_estimate:[3,2,1,""],get_inds:[3,2,1,""],get_info:[3,2,1,""],get_last_sample:[3,2,1,""],get_log_like:[3,2,1,""],get_log_prior:[3,2,1,""],get_nleaves:[3,2,1,""],get_value:[3,2,1,""],grow:[3,2,1,""],has_blobs:[3,2,1,""],inds:[3,1,1,""],initiailized:[3,1,1,""],iteration:[3,1,1,""],log_like:[3,1,1,""],log_prior:[3,1,1,""],nbranches:[3,1,1,""],ndims:[3,1,1,""],nleaves_max:[3,1,1,""],ntemps:[3,1,1,""],nwalkers:[3,1,1,""],reset:[3,2,1,""],reset_args:[3,1,1,""],reset_base:[3,2,1,""],reset_kwargs:[3,1,1,""],rj:[3,1,1,""],rj_accepted:[3,1,1,""],save_step:[3,2,1,""],shape:[3,3,1,""],store_missing_leaves:[3,1,1,""]},"eryn.backends.HDFBackend":{get_a_sample:[3,2,1,""],get_autocorr_thin_burn:[3,2,1,""],get_autocorr_time:[3,2,1,""],get_betas:[3,2,1,""],get_blobs:[3,2,1,""],get_chain:[3,2,1,""],get_evidence_estimate:[3,2,1,""],get_inds:[3,2,1,""],get_info:[3,2,1,""],get_last_sample:[3,2,1,""],get_log_like:[3,2,1,""],get_log_prior:[3,2,1,""],get_nleaves:[3,2,1,""],get_value:[3,2,1,""],grow:[3,2,1,""],has_blobs:[3,2,1,""],open:[3,2,1,""],reset:[3,2,1,""],reset_base:[3,2,1,""],save_step:[3,2,1,""],shape:[3,3,1,""]},"eryn.ensemble":{EnsembleSampler:[4,0,1,""]},"eryn.ensemble.EnsembleSampler":{acceptance_fraction:[4,3,1,""],compute_log_like:[4,2,1,""],compute_log_prior:[4,2,1,""],get_autocorr_time:[4,2,1,""],get_betas:[4,2,1,""],get_blobs:[4,2,1,""],get_chain:[4,2,1,""],get_inds:[4,2,1,""],get_last_sample:[4,2,1,""],get_log_like:[4,2,1,""],get_log_prior:[4,2,1,""],get_model:[4,2,1,""],get_nleaves:[4,2,1,""],get_value:[4,2,1,""],priors:[4,3,1,""],random_state:[4,3,1,""],reset:[4,2,1,""],rj_acceptance_fraction:[4,3,1,""],rj_swap_acceptance_fraction:[4,3,1,""],run_mcmc:[4,2,1,""],sample:[4,2,1,""],swap_acceptance_fraction:[4,3,1,""]},"eryn.moves":{GaussianMove:[5,0,1,""],MHMove:[5,0,1,""],Move:[5,0,1,""],PriorGenerate:[5,0,1,""],RedBlueMove:[5,0,1,""],ReversibleJump:[5,0,1,""],StretchMove:[5,0,1,""]},"eryn.moves.GaussianMove":{compute_log_posterior_basic:[5,2,1,""],get_proposal:[5,2,1,""],propose:[5,2,1,""],tune:[5,2,1,""],update:[5,2,1,""]},"eryn.moves.MHMove":{compute_log_posterior_basic:[5,2,1,""],get_proposal:[5,2,1,""],propose:[5,2,1,""],tune:[5,2,1,""],update:[5,2,1,""]},"eryn.moves.Move":{compute_log_posterior_basic:[5,2,1,""],tune:[5,2,1,""],update:[5,2,1,""]},"eryn.moves.PriorGenerate":{compute_log_posterior_basic:[5,2,1,""],get_proposal:[5,2,1,""],propose:[5,2,1,""],tune:[5,2,1,""],update:[5,2,1,""]},"eryn.moves.RedBlueMove":{compute_log_posterior_basic:[5,2,1,""],get_proposal:[5,2,1,""],propose:[5,2,1,""],setup:[5,2,1,""],tune:[5,2,1,""],update:[5,2,1,""]},"eryn.moves.ReversibleJump":{compute_log_posterior_basic:[5,2,1,""],get_proposal:[5,2,1,""],propose:[5,2,1,""],tune:[5,2,1,""],update:[5,2,1,""]},"eryn.moves.StretchMove":{a:[5,1,1,""],adjust_factors:[5,2,1,""],compute_log_posterior_basic:[5,2,1,""],get_proposal:[5,2,1,""],propose:[5,2,1,""],return_gpu:[5,1,1,""],setup:[5,2,1,""],tune:[5,2,1,""],update:[5,2,1,""],use_gpu:[5,1,1,""],xp:[5,1,1,""]},"eryn.prior":{MappedUniformDistribution:[6,0,1,""],PriorContainer:[6,0,1,""],log_uniform:[6,4,1,""],uniform_dist:[6,4,1,""]},"eryn.prior.MappedUniformDistribution":{logpdf:[6,2,1,""],rvs:[6,2,1,""]},"eryn.prior.PriorContainer":{logpdf:[6,2,1,""],ndim:[6,1,1,""],ppf:[6,2,1,""],priors:[6,1,1,""],priors_in:[6,1,1,""],rvs:[6,2,1,""]},"eryn.state":{Branch:[7,0,1,""],State:[7,0,1,""]},"eryn.state.Branch":{nleaves:[7,3,1,""]},"eryn.state.State":{branches_coords:[7,3,1,""],branches_inds:[7,3,1,""],branches_supplimental:[7,3,1,""],get_log_prob:[7,2,1,""]},"eryn.utils":{PeriodicContainer:[8,0,1,""],PlotContainer:[8,0,1,""],TransformContainer:[8,0,1,""]},"eryn.utils.PeriodicContainer":{distance:[8,2,1,""],wrap:[8,2,1,""]},"eryn.utils.PlotContainer":{add_backend:[8,2,1,""],generate_corner:[8,2,1,""],generate_info_page:[8,2,1,""],generate_k_per_temperature_chains:[8,2,1,""],generate_k_per_tree_chains:[8,2,1,""],generate_leaves_chains:[8,2,1,""],generate_parameter_chains:[8,2,1,""],generate_parameter_chains_per_temperature:[8,2,1,""],generate_parameter_chains_per_temperature_per_walker:[8,2,1,""],generate_plot_info:[8,2,1,""],generate_posterior_chains:[8,2,1,""],generate_temperature_chains:[8,2,1,""],transform:[8,2,1,""]},"eryn.utils.TransformContainer":{fill_values:[8,2,1,""],transform_base_parameters:[8,2,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","property","Python property"],"4":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:attribute","2":"py:method","3":"py:property","4":"py:function"},terms:{"0":[0,1,2,3,4,5,8],"00":2,"00000001":2,"0001":2,"000697616071093":2,"009058310747992":2,"01":2,"01040764":2,"02191783":2,"02297895":2,"02493852":2,"02673368":2,"027584847542167":2,"02898281":2,"03289018":2,"03810478":2,"03817694":2,"04251137":2,"0502107":2,"05237241":2,"05376261":2,"05459089268453":2,"063684185602074":2,"06409617":2,"06704476331893":2,"06it":2,"07206293":2,"07245692":2,"07758357":2,"08587029":2,"09205733316421":2,"0925304":2,"09464227":2,"09561382":2,"0x16e38af40":[],"1":[0,1,2,3,4,5,6,8],"10":2,"100":2,"1000":2,"10000":2,"10277004":2,"10278803":2,"10580722":2,"10581548":2,"11":2,"11210745":2,"12":2,"12148614396511":2,"12718498062653":2,"13":2,"13193638":2,"13212497":2,"13308071":2,"14":2,"14075088":2,"1429558":2,"15":2,"15618694":2,"15662608":2,"15731891":2,"15835422":2,"15955454909765":2,"16":2,"16305075":2,"166666057493867":2,"167339094387502":2,"17":2,"17191406689161":2,"1732853":2,"175":2,"17726471":2,"177275804769963":2,"18":2,"18093864":2,"182025801962808":2,"18410851":2,"1843373":2,"185631833515409":2,"18607669":2,"18991868":2,"19":2,"19307031":2,"19744949":2,"197520429651778":2,"1d":[3,4],"1e":4,"1e300":4,"2":[2,3,4,5],"20":2,"20041906602199":2,"2010":5,"2013":5,"201618828385325":2,"206672383919198":2,"20802127":2,"209947253912995":2,"21":2,"21036777460609":2,"22":2,"220604581103181":2,"22294092":2,"22668818":2,"22766639":2,"23":2,"237":2,"24":2,"24698912":2,"24777582":2,"24853289649521":2,"25":2,"250":2,"25310739":2,"25399003":2,"25650003":2,"2575306":2,"25802303":2,"26":2,"26041351":2,"26045709":2,"263627585992179":2,"27":2,"28":2,"2820529":2,"2837720949975":2,"287975620845916":2,"288874810370201":2,"29":2,"29449201":2,"29488605":2,"2973031911239":2,"29913963":2,"2d":[3,4],"3":[2,4,5],"30":2,"300":4,"306867527629654":2,"31":2,"31311317":2,"318039074525378":2,"318102365933672":2,"319736841299754":2,"32":2,"32066335":2,"32153097":2,"32264582":2,"323718037268904":2,"32560629":2,"32945619":2,"33":2,"330454126226034":2,"333740402421263":2,"33786195":2,"34":2,"34328003":2,"345487493852174":2,"34629761":2,"35":2,"3500181":2,"3527218":2,"35274089":2,"35309536":2,"3584848":2,"358573324153861":2,"36":2,"361187774055535":2,"36123373":2,"36431241":2,"366415981314853":2,"37":2,"37039294":2,"37118884":2,"37653078":2,"38":2,"38031118":2,"3810526":2,"3819265":2,"39":2,"39228333":2,"39368888":2,"39591868":2,"39670766":2,"39747766":2,"3d":[2,3,7],"4":[2,4],"40":2,"40386882":2,"4080743":2,"40855724":2,"41272599":2,"41402824":2,"41587351":2,"41987524":2,"42":2,"42360664":2,"429872284958009":2,"43":2,"43201382":2,"43301692":2,"43378049":2,"44":2,"44184142":2,"44610878":2,"45503317":2,"45549403":2,"455994255558881":2,"45608498":2,"45627855":2,"46391034":2,"46614494":2,"46651653":2,"46929288":2,"47419261":2,"47512843":2,"47641726":2,"477454735452302":2,"47959226":2,"480327598172524":2,"48634414":2,"48777215":2,"493826923458506":2,"49613285":2,"4d":[3,7],"5":[1,4,5],"50":2,"500":2,"5000":2,"508584980057442":2,"51272062":2,"51292546":2,"51465938":2,"51642261":2,"52526005":2,"53454745":2,"534843295419698":2,"53589636":2,"535904414377118":2,"5383962":2,"54166543":2,"55075872":2,"551030240748224":2,"551102404030136":2,"5541193":2,"5583328":2,"56139796":2,"56151466":2,"56313616851288":2,"5652978728914":2,"566688073600343":2,"57594664":2,"577021635399863":2,"57863213":2,"57913187":2,"58751379":2,"590509038171271":2,"59208011":2,"5d":3,"6":2,"60372232":2,"605455861333246":2,"6083427":2,"60856068":2,"61425952":2,"615695504490748":2,"618732680723763":2,"62457723":2,"62876958":2,"6288042":2,"63324244":2,"63670509":2,"6395355":2,"644861845259639":2,"646006173265935":2,"64662908":2,"65374059":2,"65441363":2,"655881269058789":2,"65755241":2,"65807937":2,"6589886":2,"66327643":2,"66435034":2,"66486977":2,"66639971":2,"66910034":2,"6691124060966":2,"671279685052703":2,"67270637":2,"67409531":2,"67496753":2,"67631032":2,"68459496":2,"686210760179495":2,"68678623":2,"6874936":2,"68869336":2,"69374692":2,"693864100180623":2,"69702179":2,"697033973828631":2,"69744231":2,"69858605":2,"6990021540539":2,"7":2,"7003192":2,"70138195":2,"70569247":2,"70767912":2,"71012131":2,"710374958113102":2,"71339587":2,"71557368":2,"71578138":2,"72094673416529":2,"72131899":2,"72150734":2,"72808992":2,"73441074":2,"73450427":2,"73560743":2,"75070212":2,"76500856":2,"769425499474632":2,"770456067028594":2,"77084663":2,"77366496":2,"77505016":2,"77594935":2,"78437773":2,"78508305":2,"79050623":2,"79275524":2,"7938995":2,"79394206":2,"794978368963069":2,"8":2,"80511361":2,"8051769":2,"80681138":2,"807811510546149":2,"81079257":2,"812065097627617":2,"81752866":2,"82081494":2,"82365756":2,"83256203":2,"833588817748547":2,"834456434408597":2,"835571281559565":2,"83741982":2,"838531752608766":2,"84171927":2,"8427905":2,"84518648":2,"84564786":2,"84826231":2,"85349052":2,"856205494617711":2,"862943563633566":2,"865666352455646":2,"86it":2,"8753185":2,"877237875605088":2,"88594767":2,"88613553":2,"889456246665725":2,"88982593":2,"89323664751312":2,"893978068157692":2,"9":2,"90758502":2,"908844140114212":2,"909633127086721":2,"91694682":2,"91765459":2,"92148270602327":2,"92432228":2,"932800709919292":2,"93610511":2,"936532101543465":2,"94306879":2,"954766888488795":2,"96300942":2,"96452927":2,"96569731":2,"96740213":2,"96795863879418":2,"96839538":2,"968419490353646":2,"969010441825302":2,"97683580667583":2,"979070401548165":2,"98065915":2,"98090146":2,"98711807655929":2,"988053893367788":2,"989342729251522":2,"99215316":2,"99565952":2,"99636574":2,"9977553":2,"999269605668973":2,"abstract":5,"boolean":[3,5],"case":[2,4],"class":[1,2,3,4,6,7,8],"default":[2,3,4,5,7,8],"do":[2,4,5,6],"final":[2,8],"float":5,"function":[2,3,4,5,6,8],"import":2,"int":[2,3,4,5,6,8],"new":[2,4,5,8],"public":2,"return":[2,3,4,5,6,7,8],"switch":[4,5],"throw":3,"true":[2,3,4,5,7,8],"try":4,A:[3,4,5,7,8],By:[4,5],For:[2,4,5],If:[2,3,4,5,6,7,8],In:[2,4],It:[2,3,4,5,7,8],That:2,The:[1,3,4,5,6,7],Then:2,These:[2,3,5,8],To:2,With:4,_:[5,6],__:2,__file__:2,__init__:2,abc:5,about:[2,4,5,8],abov:[2,4],accept:[3,4,5],acceptance_fract:4,access:[2,3,4],accord:[6,8],account:2,across:[3,4],ad:[2,3,4,5,8],add:[1,4,5,8],add_backend:8,addit:[2,5],adjust:[3,5],adjust_factor:5,adjust_supps_pre_logl_func:5,adjuststretchproposalscal:4,advanc:[2,4],affin:5,after:[2,4,5,8],again:5,aid:2,al:5,align:5,all:[2,3,4,5,6,7,8],all_coord:5,all_ind:5,all_inds_for_chang:5,all_temp:[3,4],allow:[2,3,4,7],along:8,also:[2,3,8],alwai:2,among:3,amplitud:2,an:[2,3,4,5,6,7,8],anaconda3:2,analyz:4,ani:[2,3,4,5],anoth:[2,4],anyth:5,append:2,appli:[4,7],ar:[2,3,4,5,6,7,8],arang:2,arg:[2,4,5],argument:[2,3,4,5,8],around:7,arrai:[1,3,4,5,7,8],arrang:6,asarrai:2,ask:2,assess:4,assign:[2,4,5],associ:[2,3,4,5,6,7,8],assum:[2,5],attempt:4,attribut:[3,4,8],autocorr:[3,4],autocorrel:[3,4,8],automat:[4,5,8],autoreload:2,avail:[1,2],avoid:5,ax:2,ax_t:2,axi:[2,5],b:2,backend:[1,4,7,8],balanc:5,bar:4,base:[2,3,4,5,6,7,8],base_transform:8,basic:[2,3,4],becaus:[2,4,5],becom:[2,4],been:[3,4],befor:[2,4,8],being:[4,5],belong:[2,4],below:[2,4],beta:[2,3,7],between:[3,4,5,6],bin:2,birth:4,blob:[2,3,4,7],blobs_dtyp:4,blue:1,bn:2,bool:[2,3,4,5,7,8],both:3,boundari:4,branch:[1,3,4,5,7,8],branch_nam:[2,3,4,5,7,8],branch_supp:4,branch_suppliment:7,branches_coord:[4,5,7],branches_ind:[4,5,7],branches_suppliment:7,branchsuppliment:[2,4,7],broadcast:5,build:[2,8],built:[4,6],bunch:2,burn:[2,3,4,8],burnin:8,c:2,c_all:5,calcul:[2,3,4],call:[2,4],callabl:4,can:[2,4,5,8],capabl:2,care:[6,8],carri:[2,4,7],carrier:5,center:2,certain:2,chain:[2,3,4,8],chang:[2,5],check:[2,3,4,5],choos:2,circumst:2,citat:5,cite:2,clariti:2,classmethod:5,clear:3,close:8,code:2,cold:8,color:2,com:2,combin:2,combine_gaussian:2,combine_sin:2,come:8,common:2,commonli:2,complement:5,complementari:5,complet:[5,7],complex:2,complic:2,compliment:5,compon:[2,4,7],compress:3,compression_opt:3,comput:[2,3,4,5,7],compute_log_lik:4,compute_log_posterior_bas:5,compute_log_prior:4,concret:5,condit:4,confus:2,consid:[4,5,7],consist:8,constant:2,construct:4,contain:[1,3,4,5,7],contribut:4,control:[4,5,8],convert:8,coord:[2,4,5,7],coordin:[2,4,5,7,8],coords_in:2,copi:[2,7,8],corner:[2,8],corner_kwarg:8,correct:8,correl:3,correspond:[4,8],could:3,count:[1,3,4],cours:2,cov:[2,5],cov_al:5,covari:[2,5],cover:2,creat:[4,8],creation:[2,8],crimson:2,criteria:4,criterion:4,cube:2,cupi:5,curent:5,current:[0,1,2,3,5,7,8],custom:8,custom_backend:8,data:[2,3,4,8],deal:2,def:2,default_corner_kwarg:8,defin:2,delai:4,denomin:[4,5],depend:4,describ:[2,4,5,6],descript:2,desir:8,detail:[3,5],determin:3,deviat:5,diag:2,diagnost:[3,4,8],dict:[2,3,4,5,6,7,8],dict_kei:2,dictionari:[2,3,4,5,6,7,8],diff:2,differ:[2,4,5,7],dimens:[2,3,4,5,7,8],dimension:[1,3,5,6],direct:[2,8],directli:[2,3,4],discard:[3,4],discuss:2,dist:2,distanc:8,distribut:[1,2,4,5],dlogz:3,doc:[0,1,6],document:[2,3,8],don:4,done:2,dot:2,doubl:[3,4,5,6,7,8],down:[2,5],dr:5,dr_max_it:[4,5],dr_move:4,driver:4,dstndstn:5,dtype:[2,3],due:2,dure:[2,5,7,8],e:1,each:[2,3,4,5,7,8],earli:2,easili:8,effect:5,either:[2,4,5,8],emce:[2,3,4,5],empti:3,end:[2,4],ensebl:2,ensembl:[1,3,5,7],ensemble_pt:2,ensemblesampl:[2,4],ensur:[4,6],enter:2,entir:4,entri:[4,5,8],enumer:2,env:2,equival:[2,4],error:[3,5],eryn:[3,4,5,6,7,8],eryn_env:2,estim:[3,4],et:5,evalu:[2,3,4],evalut:4,everi:[3,4],everyth:[2,4],everywher:2,evid:3,evolut:2,examin:2,exampl:[2,4,5,8],exp:[2,5],expand:3,expect:4,explain:[2,4],explor:4,extra:[2,3,4,8],f:[2,4],f_x:2,fact:4,factor:[2,5],fail:[4,5],fall:5,fals:[2,3,4,5,7,8],fig:2,figur:8,file:[3,4,8],filenam:3,fill:[2,4,7,8],fill_dict1:2,fill_dict2:2,fill_dict:[2,8],fill_ind:[2,8],fill_valu:[2,8],fill_zero_leaves_v:4,find:2,first:[2,3,4,5,8],fit:[4,5],fix:[2,8],fix_chang:5,flag:[3,8],flat:[3,4],flatten:[2,3,4],flip:5,float64:3,focu:2,follow:4,foreman:5,forest:2,form:[2,4,5],former:7,found:[2,8],four:4,fp:8,frac:2,fraction:[4,5],from:[2,3,4,5,6,7,8],full:[2,6,8],fulli:4,fun:2,g:2,gauss:2,gauss_inj_param:2,gauss_out:2,gaussian:[2,5],gaussian_flat:2,gaussianmov:[2,5],gener:[2,4,5,6,7,8],generate_corn:8,generate_info_pag:8,generate_k_per_temperature_chain:8,generate_k_per_tree_chain:8,generate_leaves_chain:8,generate_parameter_chain:8,generate_parameter_chains_per_temperatur:8,generate_parameter_chains_per_temperature_per_walk:8,generate_plot_info:8,generate_posterior_chain:8,generate_temperature_chain:8,get:[1,3,4,5,6,7],get_a_sampl:[2,3],get_autocorr_thin_burn:3,get_autocorr_tim:[3,4],get_beta:[3,4],get_blob:[3,4],get_chain:[2,3,4],get_evidence_estim:3,get_ind:[3,4],get_info:3,get_last_sampl:[2,3,4],get_log_lik:[2,3,4],get_log_prior:[2,3,4],get_log_prob:[2,7],get_model:4,get_nleav:[2,3,4],get_propos:5,get_stat:4,get_valu:[3,4],gibb:5,gibbs_sampling_leaves_p:5,github:2,give:2,given:[2,3,4,5,7],global:[4,5],go:[2,4],goe:5,goodman:5,greater:[4,6],group0:4,group1:[2,4],group2:2,group:[2,3,4,6],groupi:4,groupn:4,groups_from_ind:2,groups_in:2,groupsi:4,grow:[2,3],gt:2,h5:3,h5py:3,ha:[2,3,4,5,7],half:8,handl:[4,5],has_blob:3,hast:1,have:[2,3,4,5,6,8],hdf5:3,hdf:1,hdfbackend:[3,4,8],heavili:2,help:[2,3,8],helper:2,her:8,here:2,high:2,hist:2,hold:[6,8],holder:5,how:[2,4],howev:2,html:[2,6],http:[2,6],hyper:2,i:[1,4],ignor:4,illustr:2,imag:2,imagin:2,implement:1,improp:4,in_model_swaps_accept:3,includ:[2,3,4,5,6],inclus:2,incom:2,inconsist:5,incorrect:[6,7],increas:2,ind:[2,3,4,5,7],independ:2,index:[2,3,4,5,6,8],indic:[3,4,5,8],individu:[2,3,4,5,6],indivud:5,inds1:2,inds_:5,inds_c:5,inf:[4,6],infam:2,infinit:4,info:[3,4,6,8],info_kei:8,info_pag:8,inform:[2,3,4,5,7,8],infrom:8,initi:[2,3,4,8],initiail:3,initial_st:4,inj_param:2,inject:[2,3],input:[2,3,4,6,7,8],insid:6,instal:3,instead:4,integ:[2,4],integrated_tim:[3,4],interest:8,intern:4,intimid:2,inv:2,invalid:5,invari:5,invcov:2,invers:[2,3,4],io:2,isnan:2,isotrop:5,issu:[4,5],iter:[2,3,4,5],its:[2,4],jimp:4,jump:[1,3,4],jupyt:4,just:[2,3,4],k:8,keep:[3,4],kei:[2,3,4,5,6,7,8],kept:7,keyword:[2,3,4,5,8],kwarg:[2,3,4,5,8],l:[2,5],labe:8,label:[2,8],ladder:3,lai:6,lambda:2,last:[2,3,4,5,8],last_stat:2,later:2,latter:3,leaf:[1,3,4,5,7,8],leafm:5,leav:[2,3,4,5,7],legend:2,legnth:3,len:2,length:[2,3,4,8],less:7,let:2,level:[2,3],lib:2,lightskyblu:2,like:[2,4],likeihood:2,likelihood:[2,3,4,5,7],lim:2,limit:2,linalg:2,link:4,linspac:2,list:[3,4,5,6,8],live_danger:5,ll:2,ln:2,lnpostfn:7,lnprob:2,load_ext:2,locat:3,log:[2,3,4,5,6,7],log_lik:[2,3,7],log_like_fn:[2,4],log_prior:[2,3,7],log_prob:2,log_prob_fn:2,log_uniform:6,logarithm:4,logl:5,logp:[4,5],logpdf:[2,4,5,6],loguniform:6,logz:3,look:2,loop:5,low:[2,5],lp:2,lt:2,mackei:5,made:[4,5],mai:[2,6],main:4,make:[2,5,8],make_ladd:2,mani:[2,4],map:[4,6],mappeduniformdistribut:6,mark:5,mask:5,mathcal:2,matplotlib:2,matrix:[2,5],max:[2,6,8],max_k:5,maximum:[2,3,4,5,6],mcmc:[1,3,4,5,7,8],mean:[2,5,6,7],medium:4,memori:[3,4],mesh:5,met:4,metadata:7,metaphor:1,method:[2,4,5,6,8],metropoli:1,mh:1,mhmove:5,michaelkatz:2,mikekatz04:2,min:[2,6],min_k:5,minimum:[3,4,5,6,8],minumum:[3,4],miss:6,mode:[3,5],model:[2,3,4,5,7,8],model_0:[2,3],model_:4,model_n:[2,3],modifi:6,moment:2,more:[2,3,4],most:[2,3,4],move:[1,2,3,4,8],mtrand:4,mu:2,much:[2,3],multipl:[1,4,8],multipli:[3,4],multiply_thin:[3,4],multivari:2,multivariate_norm:2,must:[2,3,4,5,8],mutlipl:2,n:[3,4],name:[2,3,4,8],nan:[2,3,4,7],natur:4,navig:2,nblob:[3,4,7],nbranch:[2,3,4],ndarrai:[3,4,5,6,7,8],ndim:[2,3,4,5,6,7,8],ndim_ful:[2,8],ndim_i:2,ndim_max:2,ndims_new:5,ndims_old:5,necessari:[4,5],need:[2,4,5,7],never:4,new_stat:5,next:2,ngrow:3,niko:4,nleaf:2,nleav:[3,4,7],nleaves_max:[2,3,4,5,7],nleaves_max_i:2,nleaves_min:4,nn:2,nois:2,non:[2,4],none:[2,3,4,5,6,7,8],notabl:4,note:[2,4],notebook:4,notic:2,notimplementederror:5,now:2,np:[2,3,4,5,6,7,8],nsplit:5,nstep:[2,3,4],ntemp:[2,3,4,5,7],num:[2,4],num_group:2,num_repeats_in_model:4,num_repeats_rj:4,number:[2,3,4,5,6,7,8],numer:5,numpi:[2,4,5],nwalker:[2,3,4,5,7],obhect:7,obj:5,object:[1,3,4,5,6,7,8],off:4,old:5,old_stat:5,omdel:2,onc:5,one:[2,4,5,7,8],onefig:8,ones:2,onli:[3,4,5,7],open:[3,8],oper:[2,8],opit:8,option:[3,4,5,6,7,8],org:6,origin:5,ot:4,other:[3,4,5],otherwis:[3,4],our:2,out:2,outer:2,output:[2,3,4,6,7,8],outsid:[4,6],over:[2,3,4,5],overridden:8,overwrit:8,own:4,p1:8,p2:8,p:[5,8],packag:2,page:8,pair:[3,4,8],paper:2,parallel:[2,4,5],param:8,paramet:[2,3,4,5,6,7,8],parameter_transform:[2,8],parameter_transforms1:2,parameter_transforms2:2,params0:4,params1:4,params2:4,params3:4,parent:1,pass:[2,3,4,5,8],path:2,pdf:[6,8],pdfpage:8,per:[2,4,8],perform:[2,4,8],period:[1,4,5],periodic_in:8,periodiccontain:8,phase:2,pi:2,place:5,pleas:[2,4],plot:[2,3,4,8],plot_gener:4,plot_iter:4,plot_nam:4,plotcontain:1,plt:2,point:[2,5,6],pool:4,posit:[2,4,5,7,8],possibl:4,post_burn_upd:4,posterior:[2,5,7,8],ppf:6,practic:4,prefer:4,pretti:2,prevent:4,prevent_swap:5,previou:3,primari:[2,5],print:2,prior:[1,2,3,4,5,7],priorcontain:[2,4,5,6],priorgener:5,priorgeneraterj:4,priors_in:[2,6],probabl:[1,2,3,4,5,7],problem:[2,5],process:2,program:3,progress:[2,4],proper:[2,3,4],properli:8,properti:[2,3,4,7],propos:[2,3,4,5],proposal_branch_nam:5,propto:2,provid:[2,4,5,8],provide_group:[2,4],provide_suppliment:4,ptemce:5,purpos:2,put:8,py:2,pyplot:2,python3:2,quantiti:2,quickli:2,r:3,rais:[2,3,4,5,6,7,8],rand:2,randint:2,randn:2,random:[2,4,5,6,7],random_se:5,random_st:[4,7],randomize_split:5,randomli:[4,5],randomst:4,rang:[2,5,6],rate:4,read:3,read_onli:3,realli:[2,3],reason:2,receiv:3,recent:[3,4],red:1,red_blu:5,redbluemov:5,redredbluemov:5,refer:[6,8],regard:4,regular:[1,2],reject:4,relat:[4,7],relev:3,remov:[2,4,5],repeat:[2,4],reprent:4,repres:[2,5],request:3,requir:[2,4],research:2,reset:[3,4],reset_arg:3,reset_bas:3,reset_kwarg:3,reshap:2,respect:[4,5],result:4,retriev:[2,4,8],return_error:3,return_gpu:5,return_transpos:[2,8],revers:[1,3,4],reversiblejump:5,rj:3,rj_accept:3,rj_acceptance_fract:4,rj_move:[2,4],rj_swap_acceptance_fract:4,rj_swaps_accept:3,run:[2,3,4,7,8],run_mcmc:[2,4],rung:3,runtim:2,runtimeerror:[3,5],rv:[2,5,6],s:[2,4,5],s_all:5,same:[2,3,4,5],sampl:[2,3,4,5,6,8],sampler:[1,3,4,5,7],save:[3,4,7,8],save_step:3,scalar:5,scale:[2,5],scipi:[2,6],search:2,second:[2,4,5,8],see:[3,4,8],seed:[2,5],select:[4,5],self:[3,6,8],sens:2,sent:4,sequenc:4,sequenti:5,serial:4,set:[2,4,5],set_size_inch:2,setup:[2,4,5],shape:[2,3,4,7],share:5,sharex:2,should:[3,4,7,8],show:[2,4],shown:[2,4,8],shuffl:5,side:2,sig1:2,sigma:2,signal:2,signatur:4,silent:4,similar:2,simpl:[2,3],simplest:[2,4],simplic:2,simplifi:2,simultan:[5,7],sin:2,sinc:4,sindarin:2,sine:2,sine_flat:2,sine_inj_param:2,singl:[2,4,8],site:2,size:[2,3,5,6],skip:4,skip_initial_state_check:4,skip_supp_nam:5,slightli:2,small:2,smaller:5,so:[2,3,4,5],some:[3,4],sourc:[4,5,6],space:[2,3,4,7],special:[2,7],specif:[2,3,4,5,7],specifi:[4,5],split:5,standard:5,start:[1,8],startup:4,stat:[2,6],state:[1,3,4,5],step:[2,3,4,5,7],still:7,stop:[2,4],stopping_fn:4,stopping_iter:4,storag:[2,3,4],store:[2,3,4],store_missing_leav:3,str:[3,4,8],stream:[2,4],streamlin:3,stretch:5,stretchmov:[4,5],string:4,structur:[2,5],stuck:5,stuff:2,sub:5,subclass:[4,5],subplot:2,subset:5,subspac:5,suitabl:4,sum:[2,6],supp:4,suppliment:[2,7],support:4,suppress:5,sure:[2,8],swap_acceptance_fract:4,sy:2,t:[2,3,4,5],take:[2,3,4,6],tc:2,techniqu:[2,3],temp:2,temper:[1,4,5,7],temperatur:[2,3,4,5,7,8],temperature_control:5,temperaturecontrol:[4,5],tempering_kwarg:[2,4],temperorarili:8,templat:2,template_gaussian:2,template_sin:2,term:5,terminolog:5,test:[0,1,4,6],than:[2,4,5,6,7],thank:5,thei:[2,7],therefor:2,thi:[2,3,4,5,6,7,8],thin:[2,3,4,8],thin_bi:[2,4],thin_chain_by_ac:8,think:[2,5],third:5,those:[2,5],three:5,through:[2,5],throughout:2,tild:2,time:[2,3,4],todo:[2,4,5],togeth:4,too:7,total:[2,4],total_ndim:2,tqdm:4,trace:8,track:3,transform1:2,transform:[1,8],transform_base_paramet:[2,8],transform_contain:2,transformcontain:[1,2],transpos:[2,8],treat:4,tree:[1,4],truth:[2,3],tune:[4,5],tupl:[2,3,4,5,6,8],turn:5,tutori:[2,4],twice:[5,8],two:2,type:[2,3,4,5,6,7,8],u:5,uncertainti:1,under:5,understand:[2,4],uniform:[2,6],uniform_dist:[2,6],uniformli:5,uniqu:4,unit:[2,3,4],unknown:2,unus:7,up:[2,5],updat:[4,5,8],update_fn:4,update_iter:4,us:[2,3,4,5,6,7,8],use_gpu:5,user:[2,3,4,6],usual:[3,4],util:[1,4],valeu:3,valu:[2,3,4,5,6,7,8],valueerror:[4,5,6,7,8],variabl:4,vec:2,vector:[4,5],verbos:4,veri:2,verifi:2,version:2,via:[2,4],wa:[2,3,5,7],wai:[2,4],waklker:5,walk:2,walker:[2,3,4,5,7,8],want:[4,5],warn:4,wave:2,we:[2,4],wear:5,websit:2,weight:4,well:2,were:[3,4,5],what:2,when:[2,3,4,5,7],where:[2,3,4],whether:[3,4,5],which:[2,3,4,5,6,7,8],which_plot:8,whose:5,wil:4,within:[2,3,4,5,7],without:6,won:5,wonder:5,wood:2,word:2,would:[2,4,5],wrap:8,wrapper:2,write:3,written:4,wrong:7,x0:4,x1:[2,4],x2:2,x:[2,6],x_i:2,xi:4,xn:4,xp:[5,8],xs:2,y:[2,8],yield:4,you:[2,3,4,5,8],your:2,zenodo:2,zero:[2,4,6,7],zip:2},titles:["Eryn","Welcome to Eryn\u2019s documentation!","Eryn","Backends","Ensemble","Moves","Priors","State","Utilities"],titleterms:{"5":2,"class":5,The:2,add:2,arrai:2,avail:6,backend:[2,3],blue:5,branch:2,contain:[2,6,8],count:2,dimension:2,distribut:6,document:1,e:2,ensembl:[2,4],eryn:[0,1,2],get:2,hast:5,hdf:3,i:2,implement:5,jump:[2,5],leaf:2,mcmc:2,metaphor:2,metropoli:5,mh:5,move:5,multipl:2,object:2,parent:5,period:8,plotcontain:8,prior:6,probabl:6,red:5,regular:3,revers:[2,5],s:1,sampler:2,setup:[],start:2,state:[2,7],temper:2,transform:2,transformcontain:8,tree:2,tutori:1,uncertainti:2,util:[2,8],version:[0,1],welcom:1}})