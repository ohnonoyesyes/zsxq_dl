(function () {
	'use strict';

	var t$1;(function(s){s[s.All=0]="All",s[s.Debug=1]="Debug",s[s.Info=2]="Info",s[s.Warn=3]="Warn",s[s.Error=4]="Error",s[s.None=5]="None";})(t$1||(t$1={}));const c$1={mode:"pro",website_home:"https://github.com/ohnonoyesyes/zsxq_dl",cache_max_age:47*60*60*1e3,zsxq_base_url:"https://api.zsxq.com/v2",log_level:3,doc_url:"https://github.com/ohnonoyesyes/zsxq_dl",support_url:"https://github.com/ohnonoyesyes/zsxq_dl",key_usage_doc_url:"https://github.com/ohnonoyesyes/zsxq_dl#xRraen",server_host:"https://github.com/ohnonoyesyes/zsxq_dl",free_download_limit:100000,task_count_limit:20};

	let i=t$1.All;function f(o,...n){i<=t$1.Error&&console.error(o,...n);}function c(o,...n){i<=t$1.Warn&&console.warn(o,...n);}function l$1(o,...n){i<=t$1.Info&&console.info(o,...n);}function r(o,...n){i<=t$1.Debug&&console.debug(o,...n);}function t(o){i=o;}const u={d:r,i:l$1,w:c,e:f,init:t};

	const n={download:"__zsxq_downloader__download"};function s(){chrome.runtime.onMessage.addListener((o,e,d)=>(o.type===n.download&&(l(o.download_url,`${o.group_name}-${o.name}`),d({type:n.download,message:"success"})),!0)),chrome.runtime.onInstalled.addListener(o=>{o.reason===chrome.runtime.OnInstalledReason.INSTALL&&chrome.tabs.create({url:c$1.website_home});});}function l(o,e){chrome.downloads.download({url:o,filename:e},()=>{u.d(`download ${e} success!`);});}s();

})();
