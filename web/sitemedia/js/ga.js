(function(){var g=void 0,h=!0,i=null,k=!1,aa=encodeURIComponent,da=Infinity,ea=setTimeout,fa=decodeURIComponent,l=Math;function ga(a,b){return a.onload=b}function ha(a,b){return a.name=b}
var m="push",ia="slice",n="replace",ja="load",ka="floor",la="charAt",ma="value",p="indexOf",na="match",oa="port",pa="createElement",qa="path",q="name",t="host",u="toString",v="length",w="prototype",sa="clientWidth",x="split",ta="stopPropagation",ua="scope",y="location",va="search",z="protocol",wa="clientHeight",xa="href",A="substring",ya="apply",za="navigator",B="join",C="toLowerCase",D;function Aa(a,b){switch(b){case 0:return""+a;case 1:return 1*a;case 2:return!!a;case 3:return 1E3*a}return a}function Ba(a){return"function"==typeof a}function Ca(a){return a!=g&&-1<(a.constructor+"")[p]("String")}function E(a,b){return g==a||"-"==a&&!b||""==a}function Da(a){if(!a||""==a)return"";for(;a&&-1<" \n\r\t"[p](a[la](0));)a=a[A](1);for(;a&&-1<" \n\r\t"[p](a[la](a[v]-1));)a=a[A](0,a[v]-1);return a}
function F(a){var b=1,c=0,d;if(!E(a)){b=0;for(d=a[v]-1;0<=d;d--)c=a.charCodeAt(d),b=(b<<6&268435455)+c+(c<<14),c=b&266338304,b=0!=c?b^c>>21:b}return b}function Ea(){return l.round(2147483647*l.random())}function Fa(){}function G(a,b){if(aa instanceof Function)return b?encodeURI(a):aa(a);H(68);return escape(a)}function I(a){a=a[x]("+")[B](" ");if(fa instanceof Function)try{return fa(a)}catch(b){H(17)}else H(68);return unescape(a)}
var Ga=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ha=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent&&a.detachEvent("on"+b,c)};function Ia(a,b,c){if(a){var d=J[pa]("script");d.type="text/javascript";d.async=h;d.src=a;d.id=b;ga(d,c);a=J.getElementsByTagName("script")[0];a.parentNode.insertBefore(d,a);return d}}function K(a){return a&&0<a[v]?a[0]:""}function Ja(a){var b=a?a[v]:0;return 0<b?a[b-1]:""}
var Ka=function(){this.prefix="ga.";this.R={}};Ka[w].set=function(a,b){this.R[this.prefix+a]=b};Ka[w].get=function(a){return this.R[this.prefix+a]};Ka[w].contains=function(a){return this.get(a)!==g};function La(a){0==a[p]("www.")&&(a=a[A](4));return a[C]()}function Ma(a,b){var c,d={url:a,protocol:"http",host:"",path:"",d:new Ka,anchor:""};if(!a)return d;c=a[p]("://");0<=c&&(d.protocol=a[A](0,c),a=a[A](c+3));c=a[va]("/|\\?|#");if(0<=c)d.host=a[A](0,c)[C](),a=a[A](c);else return d.host=a[C](),d;c=a[p]("#");0<=c&&(d.anchor=a[A](c+1),a=a[A](0,c));c=a[p]("?");0<=c&&(Na(d.d,a[A](c+1)),a=a[A](0,c));d.anchor&&b&&Na(d.d,d.anchor);a&&"/"==a[la](0)&&(a=a[A](1));d.path=a;return d}
function Oa(a,b){function c(a){var b=(a.hostname||"")[x](":")[0][C](),c=(a[z]||"")[C](),c=1*a[oa]||("http:"==c?80:"https:"==c?443:""),a=a.pathname||"";0==a[p]("/")||(a="/"+a);return[b,""+c,a]}var d=b||J[pa]("a");d.href=J[y][xa];var e=(d[z]||"")[C](),f=c(d),j=d[va]||"",o=e+"//"+f[0]+(f[1]?":"+f[1]:"");0==a[p]("//")?a=e+a:0==a[p]("/")?a=o+a:!a||0==a[p]("?")?a=o+f[2]+(a||j):0>a[x]("/")[0][p](":")&&(a=o+f[2][A](0,f[2].lastIndexOf("/"))+"/"+a);d.href=a;e=c(d);return{protocol:(d[z]||"")[C](),host:e[0],
port:e[1],path:e[2],Ia:d[va]||"",url:a||""}}function Na(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b)[m](c)}for(var d=Da(b)[x]("&"),e=0;e<d[v];e++)if(d[e]){var f=d[e][p]("=");0>f?c(d[e],"1"):c(d[e][A](0,f),d[e][A](f+1))}}function Qa(a,b){var c;E(a)||"["==a[la](0)&&"]"==a[la](a[v]-1)?c="-":(c=J.domain,c=a[p](c+(b&&"/"!=b?b:""))==(0==a[p]("http://")?7:0==a[p]("https://")?8:0)?"0":a);return c};var Ra=0;function Sa(a,b,c){!(1<=Ra)&&!(1<=100*l.random())&&(a=["utmt=error","utmerr="+a,"utmwv=5.2.7","utmn="+Ea(),"utmsp=1"],b&&a[m]("api="+b),c&&a[m]("msg="+G(c[A](0,100))),L.A&&a[m]("aip=1"),Ta(a[B]("&")),Ra++)};var Ua=0,Va={};function M(a){return Wa("x"+Ua++,a)}function Wa(a,b){Va[a]=!!b;return a}
var N=M(),Xa=M(),Ya=M(),Za=M(),$a=M(),O=M(),P=M(),ab=M(),bb=M(),cb=M(),db=M(),eb=M(),fb=M(),gb=M(),hb=M(),ib=M(),jb=M(),kb=M(),lb=M(),mb=M(),nb=M(),ob=M(),pb=M(),qb=M(),rb=M(),sb=M(),tb=M(),ub=M(),vb=M(),wb=M(),xb=M(),yb=M(),zb=M(),Ab=M(),Bb=M(),Q=M(h),Cb=Wa("page"),Db=Wa("title"),Eb=M(),Fb=M(),Gb=M(),Hb=M(),Ib=M(),Jb=M(),Kb=M(),Lb=M(),Mb=M(),R=M(h),Nb=M(h),Ob=M(h),Rb=M(h),Sb=M(h),Tb=M(h),Ub=M(h),Vb=M(h),Wb=M(h),Xb=M(h),Yb=M(h),S=M(h),Zb=M(h),$b=M(h),ac=M(h),bc=M(h),cc=M(h),dc=M(h),ec=M(h),fc=M(h),
gc=M(h),hc=M(h),ic=M(h),jc=M(h),kc=M(h),lc=Wa("campaignParams"),mc=M(),nc=Wa("hitCallback"),oc=M();M();var pc=M(),qc=M(),rc=M(),sc=M(),tc=M(),uc=M(),vc=M(),wc=M(),xc=M(),yc=M(),zc=M(),Dc=M();M();var Ec=M(),Fc=M(),Gc=M();var Ic=function(){function a(a,c,d){T(U[w],a,c,d)}V("_getName",Ya,58);V("_getAccount",N,64);V("_visitCode",R,54);V("_getClientInfo",gb,53,1);V("_getDetectTitle",jb,56,1);V("_getDetectFlash",hb,65,1);V("_getLocalGifPath",tb,57);V("_getServiceMode",ub,59);W("_setClientInfo",gb,66,2);W("_setAccount",N,3);W("_setNamespace",Xa,48);W("_setAllowLinker",db,11,2);W("_setDetectFlash",hb,61,2);W("_setDetectTitle",jb,62,2);W("_setLocalGifPath",tb,46,0);W("_setLocalServerMode",ub,92,g,0);W("_setRemoteServerMode",
ub,63,g,1);W("_setLocalRemoteServerMode",ub,47,g,2);W("_setSampleRate",sb,45,1);W("_setCampaignTrack",ib,36,2);W("_setAllowAnchor",eb,7,2);W("_setCampNameKey",lb,41);W("_setCampContentKey",qb,38);W("_setCampIdKey",kb,39);W("_setCampMediumKey",ob,40);W("_setCampNOKey",rb,42);W("_setCampSourceKey",nb,43);W("_setCampTermKey",pb,44);W("_setCampCIdKey",mb,37);W("_setCookiePath",P,9,0);W("_setMaxCustomVariables",vb,0,1);W("_setVisitorCookieTimeout",ab,28,1);W("_setSessionCookieTimeout",bb,26,1);W("_setCampaignCookieTimeout",
cb,29,1);W("_setReferrerOverride",Eb,49);W("_setSiteSpeedSampleRate",xc,132);a("_trackPageview",U[w].ya,1);a("_trackEvent",U[w].D,4);a("_trackPageLoadTime",U[w].xa,100);a("_trackSocial",U[w].za,104);a("_trackTrans",U[w].Ba,18);a("_sendXEvent",U[w].t,78);a("_createEventTracker",U[w].ea,74);a("_getVersion",U[w].ja,60);a("_setDomainName",U[w].C,6);a("_setAllowHash",U[w].oa,8);a("_getLinkerUrl",U[w].ia,52);a("_link",U[w].link,101);a("_linkByPost",U[w].na,102);a("_setTrans",U[w].sa,20);a("_addTrans",U[w].Y,
21);a("_addItem",U[w].W,19);a("_setTransactionDelim",U[w].ta,82);a("_setCustomVar",U[w].pa,10);a("_deleteCustomVar",U[w].ga,35);a("_getVisitorCustomVar",U[w].ka,50);a("_setXKey",U[w].va,83);a("_setXValue",U[w].wa,84);a("_getXKey",U[w].la,76);a("_getXValue",U[w].ma,77);a("_clearXKey",U[w].ba,72);a("_clearXValue",U[w].ca,73);a("_createXObj",U[w].fa,75);a("_addIgnoredOrganic",U[w].U,15);a("_clearIgnoredOrganic",U[w].Z,97);a("_addIgnoredRef",U[w].V,31);a("_clearIgnoredRef",U[w].$,32);a("_addOrganic",
U[w].X,14);a("_clearOrganic",U[w].aa,70);a("_cookiePathCopy",U[w].da,30);a("_get",U[w].ha,106);a("_set",U[w].qa,107);a("_addEventListener",U[w].addEventListener,108);a("_removeEventListener",U[w].removeEventListener,109);a("_addDevId",U[w].T);a("_getPlugin",Hc,122);a("_setPageGroup",U[w].ra,126);a("_trackTiming",U[w].Aa,124);a("_initData",U[w].u,2);a("_setVar",U[w].ua,22);W("_setSessionTimeout",bb,27,3);W("_setCookieTimeout",cb,25,3);W("_setCookiePersistence",ab,24,1);a("_setAutoTrackOutbound",Fa,
79);a("_setTrackOutboundSubdomains",Fa,81);a("_setHrefExamineLimit",Fa,80)};function Hc(a){var b=this.plugins_;if(b)return b.get(a)}
var T=function(a,b,c,d){a[b]=function(){try{return d!=g&&H(d),c[ya](this,arguments)}catch(a){throw Sa("exc",b,a&&a[q]),a;}}},V=function(a,b,c,d){U[w][a]=function(){try{return H(c),Aa(this.a.get(b),d)}catch(e){throw Sa("exc",a,e&&e[q]),e;}}},W=function(a,b,c,d,e){U[w][a]=function(f){try{H(c),e==g?this.a.set(b,Aa(f,d)):this.a.set(b,e)}catch(j){throw Sa("exc",a,j&&j[q]),j;}}},Jc=function(a,b){return{type:b,target:a,stopPropagation:function(){throw"aborted";}}};var Kc=function(a,b){return"/"!==b?k:(0==a[p]("www.google.")||0==a[p](".google.")||0==a[p]("google."))&&!(-1<a[p]("google.org"))?h:k},Lc=function(a){var b=a.get($a),c=a.c(P,"/");Kc(b,c)&&a[ta]()};var Qc=function(){var a={},b={},c=new Mc;this.j=function(a,b){c.add(a,b)};var d=new Mc;this.e=function(a,b){d.add(a,b)};var e=k,f=k,j=h;this.S=function(){e=h};this.i=function(a){this[ja]();this.set(mc,a,h);a=new Nc(this);e=k;d.execute(this);e=h;b={};this.n();a.Ca()};this.load=function(){e&&(e=k,this.Da(),Oc(this),f||(f=h,c.execute(this),Pc(this),Oc(this)),e=h)};this.n=function(){if(e)if(f)e=k,Pc(this),e=h;else this[ja]()};this.get=function(c){Va[c]&&this[ja]();return b[c]!==g?b[c]:a[c]};this.set=
function(c,d,e){Va[c]&&this[ja]();e?b[c]=d:a[c]=d;Va[c]&&this.n()};this.v=function(b){a[b]=this.b(b,0)+1};this.b=function(a,b){var c=this.get(a);return c==g||""===c?b:1*c};this.c=function(a,b){var c=this.get(a);return c==g?b:c+""};this.Da=function(){if(j){var b=this.c($a,""),c=this.c(P,"/");Kc(b,c)||(a[O]=a[fb]&&""!=b?F(b):1,j=k)}}};Qc[w].stopPropagation=function(){throw"aborted";};
var Nc=function(a){var b=this;this.q=0;var c=a.get(nc);this.Sa=function(){0<b.q&&c&&(b.q--,b.q||c())};this.Ca=function(){!b.q&&c&&ea(c,10)};a.set(oc,b,h)};function Rc(a,b){for(var b=b||[],c=0;c<b[v];c++){var d=b[c];if(""+a==d||0==d[p](a+"."))return d}return"-"}
var Tc=function(a,b,c){c=c?"":a.c(O,"1");b=b[x](".");if(6!==b[v]||Sc(b[0],c))return k;var c=1*b[1],d=1*b[2],e=1*b[3],f=1*b[4],b=1*b[5];if(!(0<=c&&0<d&&0<e&&0<f&&0<=b))return H(110),k;a.set(R,c);a.set(Sb,d);a.set(Tb,e);a.set(Ub,f);a.set(Vb,b);return h},Uc=function(a){var b=a.get(R),c=a.get(Sb),d=a.get(Tb),e=a.get(Ub),f=a.b(Vb,1);b==g?H(113):NaN==b&&H(114);0<=b&&0<c&&0<d&&0<e&&0<=f||H(115);return[a.b(O,1),b!=g?b:"-",c||"-",d||"-",e||"-",f][B](".")},Vc=function(a){return[a.b(O,1),a.b(Yb,0),a.b(S,1),
a.b(Zb,0)][B](".")},Wc=function(a,b,c){var c=c?"":a.c(O,"1"),d=b[x](".");if(4!==d[v]||Sc(d[0],c))d=i;a.set(Yb,d?1*d[1]:0);a.set(S,d?1*d[2]:10);a.set(Zb,d?1*d[3]:a.get(Za));return d!=i||!Sc(b,c)},Xc=function(a,b){var c=G(a.c(Ob,"")),d=[],e=a.get(Q);if(!b&&e){for(var f=0;f<e[v];f++){var j=e[f];j&&1==j[ua]&&d[m](f+"="+G(j[q])+"="+G(j[ma])+"=1")}0<d[v]&&(c+="|"+d[B]("^"))}return c?a.b(O,1)+"."+c:i},Yc=function(a,b,c){c=c?"":a.c(O,"1");b=b[x](".");if(2>b[v]||Sc(b[0],c))return k;b=b[ia](1)[B](".")[x]("|");
0<b[v]&&a.set(Ob,I(b[0]));if(1>=b[v])return h;b=b[1][x](-1==b[1][p](",")?"^":",");for(c=0;c<b[v];c++){var d=b[c][x]("=");if(4==d[v]){var e={};ha(e,I(d[1]));e.value=I(d[2]);e.scope=1;a.get(Q)[d[0]]=e}}return h},$c=function(a,b){var c=Zc(a,b);return c?[a.b(O,1),a.b($b,0),a.b(ac,1),a.b(bc,1),c][B]("."):""},Zc=function(a){function b(b,e){if(!E(a.get(b))){var f=a.c(b,""),f=f[x](" ")[B]("%20"),f=f[x]("+")[B]("%20");c[m](e+"="+f)}}var c=[];b(dc,"utmcid");b(hc,"utmcsr");b(fc,"utmgclid");b(gc,"utmdclid");
b(ec,"utmccn");b(ic,"utmcmd");b(jc,"utmctr");b(kc,"utmcct");return c[B]("|")},bd=function(a,b,c){c=c?"":a.c(O,"1");b=b[x](".");if(5>b[v]||Sc(b[0],c))return a.set($b,g),a.set(ac,g),a.set(bc,g),a.set(dc,g),a.set(ec,g),a.set(hc,g),a.set(ic,g),a.set(jc,g),a.set(kc,g),a.set(fc,g),a.set(gc,g),k;a.set($b,1*b[1]);a.set(ac,1*b[2]);a.set(bc,1*b[3]);ad(a,b[ia](4)[B]("."));return h},ad=function(a,b){function c(a){return(a=b[na](a+"=(.*?)(?:\\|utm|$)"))&&2==a[v]?a[1]:g}function d(b,c){c&&(c=e?I(c):c[x]("%20")[B](" "),
a.set(b,c))}-1==b[p]("=")&&(b=I(b));var e="2"==c("utmcvr");d(dc,c("utmcid"));d(ec,c("utmccn"));d(hc,c("utmcsr"));d(ic,c("utmcmd"));d(jc,c("utmctr"));d(kc,c("utmcct"));d(fc,c("utmgclid"));d(gc,c("utmdclid"))},Sc=function(a,b){return b?a!=b:!/^\d+$/.test(a)};var Mc=function(){this.B=[]};Mc[w].add=function(a,b){this.B[m]({name:a,r:b})};Mc[w].execute=function(a){try{for(var b=0;b<this.B[v];b++)this.B[b].r.call(X,a)}catch(c){}};function cd(a){100!=a.get(sb)&&a.get(R)%1E4>=100*a.get(sb)&&a[ta]()}function dd(a){ed(a.get(N))&&a[ta]()}function fd(a){"file:"==J[y][z]&&a[ta]()}function gd(a){a.get(Db)||a.set(Db,J.title,h);a.get(Cb)||a.set(Cb,J[y].pathname+J[y][va],h)};var hd=new function(){var a=[];this.set=function(b){a[b]=h};this.Va=function(){for(var b=[],c=0;c<a[v];c++)a[c]&&(b[l[ka](c/6)]=b[l[ka](c/6)]^1<<c%6);for(c=0;c<b[v];c++)b[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[la](b[c]||0);return b[B]("")+"~"}};function H(a){hd.set(a)};var X=window,J=document,ed=function(a){var b=X._gaUserPrefs;return b&&b.ioo&&b.ioo()||!!a&&X["ga-disable-"+a]===h},id=function(a,b){ea(a,b)},jd=function(a){for(var b=[],c=J.cookie[x](";"),a=RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),d=0;d<c[v];d++){var e=c[d][na](a);e&&b[m](e[1])}return b},Y=function(a,b,c,d,e,f){e=ed(e)?k:Kc(d,c)?k:h;if(e){if(b&&0<=X[za].userAgent[p]("Firefox"))for(var b=b[n](/\n|\r/g," "),e=0,j=b[v];e<j;++e){var o=b.charCodeAt(e)&255;if(10==o||13==o)b=b[A](0,e)+"?"+b[A](e+1)}b&&2E3<b[v]&&
(b=b[A](0,2E3),H(69));a=a+"="+b+"; path="+c+"; ";f&&(a+="expires="+(new Date((new Date).getTime()+f)).toGMTString()+"; ");d&&(a+="domain="+d+";");J.cookie=a}};var kd,ld,md=function(){if(!kd){var a={},b=X[za],c=X.screen;a.Q=c?c.width+"x"+c.height:"-";a.P=c?c.colorDepth+"-bit":"-";a.language=(b&&(b.language||b.browserLanguage)||"-")[C]();a.javaEnabled=b&&b.javaEnabled()?1:0;a.characterSet=J.characterSet||J.charset||"-";try{var d=J.documentElement,e=J.body,f=e&&e[sa]&&e[wa],b=[];d&&d[sa]&&d[wa]&&("CSS1Compat"===J.compatMode||!f)?b=[d[sa],d[wa]]:f&&(b=[e[sa],e[wa]]);a.Ua=b[B]("x")}catch(j){H(135)}kd=a}},nd=function(){md();for(var a=kd,b=X[za],a=b.appName+b.version+
a.language+b.platform+b.userAgent+a.javaEnabled+a.Q+a.P+(J.cookie?J.cookie:"")+(J.referrer?J.referrer:""),b=a[v],c=X.history[v];0<c;)a+=c--^b++;return F(a)},od=function(a){md();var b=kd;a.set(Gb,b.Q);a.set(Hb,b.P);a.set(Kb,b.language);a.set(Lb,b.characterSet);a.set(Ib,b.javaEnabled);a.set(Mb,b.Ua);if(a.get(gb)&&a.get(hb)){if(!(b=ld)){var c,d,e;d="ShockwaveFlash";if((b=(b=X[za])?b.plugins:g)&&0<b[v])for(c=0;c<b[v]&&!e;c++)d=b[c],-1<d[q][p]("Shockwave Flash")&&(e=d.description[x]("Shockwave Flash ")[1]);
else{d=d+"."+d;try{c=new ActiveXObject(d+".7"),e=c.GetVariable("$version")}catch(f){}if(!e)try{c=new ActiveXObject(d+".6"),e="WIN 6,0,21,0",c.AllowScriptAccess="always",e=c.GetVariable("$version")}catch(j){}if(!e)try{c=new ActiveXObject(d),e=c.GetVariable("$version")}catch(o){}e&&(e=e[x](" ")[1][x](","),e=e[0]+"."+e[1]+" r"+e[2])}b=e?e:"-"}ld=b;a.set(Jb,ld)}else a.set(Jb,"-")};var pd=function(a){if(Ba(a))this.r=a;else{var b=a[0],c=b.lastIndexOf(":"),d=b.lastIndexOf(".");this.g=this.h=this.l="";-1==c&&-1==d?this.g=b:-1==c&&-1!=d?(this.h=b[A](0,d),this.g=b[A](d+1)):-1!=c&&-1==d?(this.l=b[A](0,c),this.g=b[A](c+1)):c>d?(this.h=b[A](0,d),this.l=b[A](d+1,c),this.g=b[A](c+1)):(this.h=b[A](0,d),this.g=b[A](d+1));this.k=a[ia](1);this.Fa=!this.l&&"_require"==this.g;this.H=!this.h&&!this.l&&"_provide"==this.g}},Z=function(){T(Z[w],"push",Z[w][m],5);T(Z[w],"_getPlugin",Hc,121);T(Z[w],
"_createAsyncTracker",Z[w].Qa,33);T(Z[w],"_getAsyncTracker",Z[w].Ra,34);this.G=new Ka;this.p=[]};D=Z[w];D.Ha=function(a,b,c){var d=this.G.get(a);if(!Ba(d))return k;b.plugins_=b.plugins_||new Ka;b.plugins_.set(a,new d(b,c||{}));return h};D.push=function(a){var b=this.Ta[ya](this,arguments),b=this.p.concat(b);for(this.p=[];0<b[v]&&!this.O(b[0])&&!(b.shift(),0<this.p[v]););this.p=this.p.concat(b);return 0};
D.Ta=function(a){for(var b=[],c=0;c<arguments[v];c++)try{var d=new pd(arguments[c]);d.H?this.O(d):b[m](d)}catch(e){}return b};
D.O=function(a){try{if(a.r)a.r[ya](X);else if(a.H)this.G.set(a.k[0],a.k[1]);else{var b="_gat"==a.h?L:"_gaq"==a.h?qd:L.w(a.h);if(a.Fa){if(!this.Ha(a.k[0],b,a.k[2])){if(!a.Ja){var c=Oa(""+a.k[1]),d,e=c[z],f=J[y][z];if(d="https:"==e||e==f?h:"http:"!=e?k:"http:"==f){var j;a:{var o=Oa(J[y][xa]);if(!(c.Ia||0<=c.url[p]("?")||0<=c[qa][p]("://")||c[t]==o[t]&&c[oa]==o[oa]))for(var r="http:"==c[z]?80:443,s=L.Ea,b=0;b<s[v];b++)if(c[t]==s[b][0]&&(c[oa]||r)==(s[b][1]||r)&&0==c[qa][p](s[b][2])){j=h;break a}j=k}d=
j&&!ed()}d&&(a.Ja=Ia(c.url))}return h}}else a.l&&(b=b.plugins_.get(a.l)),b[a.g][ya](b,a.k)}}catch(Pa){}};D.Qa=function(a,b){return L.s(a,b||"")};D.Ra=function(a){return L.w(a)};var ud=function(){function a(a,b,c,d){g==f[a]&&(f[a]={});g==f[a][b]&&(f[a][b]=[]);f[a][b][c]=d}function b(a,b,c){if(g!=f[a]&&g!=f[a][b])return f[a][b][c]}function c(a,b){if(g!=f[a]&&g!=f[a][b]){f[a][b]=g;var c=h,d;for(d=0;d<j[v];d++)if(g!=f[a][j[d]]){c=k;break}c&&(f[a]=g)}}function d(a){var b="",c=k,d,e;for(d=0;d<j[v];d++)if(e=a[j[d]],g!=e){c&&(b+=j[d]);for(var c=[],f=g,ca=g,ca=0;ca<e[v];ca++)if(g!=e[ca]){f="";ca!=Pb&&g==e[ca-1]&&(f+=ca[u]()+Pa);for(var td=e[ca],Ac="",Qb=g,Bc=g,Cc=g,Qb=0;Qb<td[v];Qb++)Bc=
td[la](Qb),Cc=ra[Bc],Ac+=g!=Cc?Cc:Bc;f+=Ac;c[m](f)}b+=o+c[B](s)+r;c=k}else c=h;return b}var e=this,f=[],j=["k","v"],o="(",r=")",s="*",Pa="!",ra={"'":"'0"};ra[r]="'1";ra[s]="'2";ra[Pa]="'3";var Pb=1;e.La=function(a){return g!=f[a]};e.z=function(){for(var a="",b=0;b<f[v];b++)g!=f[b]&&(a+=b[u]()+d(f[b]));return a};e.Ka=function(a){if(a==g)return e.z();for(var b=a.z(),c=0;c<f[v];c++)g!=f[c]&&!a.La(c)&&(b+=c[u]()+d(f[c]));return b};e.f=function(b,c,d){if(!rd(d))return k;a(b,"k",c,d);return h};e.o=function(b,
c,d){if(!sd(d))return k;a(b,"v",c,d[u]());return h};e.getKey=function(a,c){return b(a,"k",c)};e.L=function(a,c){return b(a,"v",c)};e.J=function(a){c(a,"k")};e.K=function(a){c(a,"v")};T(e,"_setKey",e.f,89);T(e,"_setValue",e.o,90);T(e,"_getKey",e.getKey,87);T(e,"_getValue",e.L,88);T(e,"_clearKey",e.J,85);T(e,"_clearValue",e.K,86)};function rd(a){return"string"==typeof a}function sd(a){return"number"!=typeof a&&(g==Number||!(a instanceof Number))||l.round(a)!=a||NaN==a||a==da?k:h};var vd=function(a){var b=X.gaGlobal;a&&!b&&(X.gaGlobal=b={});return b},wd=function(){var a=vd(h).hid;a==i&&(a=Ea(),vd(h).hid=a);return a},xd=function(a){a.set(Fb,wd());var b=vd();if(b&&b.dh==a.get(O)){var c=b.sid;c&&("0"==c&&H(112),a.set(Ub,c),a.get(Nb)&&a.set(Tb,c));b=b.vid;a.get(Nb)&&b&&(b=b[x]("."),1*b[1]||H(112),a.set(R,1*b[0]),a.set(Sb,1*b[1]))}};var yd,zd=function(a,b,c){var d=a.c($a,""),e=a.c(P,"/"),f=a.b(ab,0),a=a.c(N,"");Y(b,c,e,d,a,f)},Pc=function(a){var b=a.c($a,"");a.b(O,1);var c=a.c(P,"/"),d=a.c(N,"");Y("__utma",Uc(a),c,b,d,a.get(ab));Y("__utmb",Vc(a),c,b,d,a.get(bb));Y("__utmc",""+a.b(O,1),c,b,d);var e=$c(a,h);e?Y("__utmz",e,c,b,d,a.get(cb)):Y("__utmz","",c,b,"",-1);(e=Xc(a,k))?Y("__utmv",e,c,b,d,a.get(ab)):Y("__utmv","",c,b,"",-1)},Oc=function(a){var b=a.b(O,1);if(!Tc(a,Rc(b,jd("__utma"))))return a.set(Rb,h),k;var c=!Wc(a,Rc(b,jd("__utmb")));
a.set(Xb,c);bd(a,Rc(b,jd("__utmz")));Yc(a,Rc(b,jd("__utmv")));yd=!c;return h},Ad=function(a){yd||0<jd("__utmb")[v]||(Y("__utmd","1",a.c(P,"/"),a.c($a,""),a.c(N,""),1E4),0==jd("__utmd")[v]&&a[ta]())};var Dd=function(a){a.get(R)==g?Bd(a):a.get(Rb)&&!a.get(Ec)?Bd(a):a.get(Xb)&&Cd(a)},Ed=function(a){a.get(cc)&&!a.get(Wb)&&(Cd(a),a.set(ac,a.get(Vb)))},Bd=function(a){var b=a.get(Za);a.set(Nb,h);a.set(R,Ea()^nd(a)&2147483647);a.set(Ob,"");a.set(Sb,b);a.set(Tb,b);a.set(Ub,b);a.set(Vb,1);a.set(Wb,h);a.set(Yb,0);a.set(S,10);a.set(Zb,b);a.set(Q,[]);a.set(Rb,k);a.set(Xb,k)},Cd=function(a){a.set(Tb,a.get(Ub));a.set(Ub,a.get(Za));a.v(Vb);a.set(Wb,h);a.set(Yb,0);a.set(S,10);a.set(Zb,a.get(Za));a.set(Xb,k)};var Fd="daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,google:q,yahoo:p,yahoo:q,msn:q,bing:q,aol:query,aol:q,lycos:q,lycos:query,ask:q,netscape:query,cnn:query,about:terms,mamma:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,seznam:q,rakuten:qt,biglobe:q,goo.ne:MT,wp:szukaj,onet:qt,yam:k,kvasir:q,ozu:q,terra:query,rambler:query,conduit:q,babylon:q,search-results:q,avg:q,comcast:q,incredimail:q,startsiden:q".split(","),Md=function(a){if(a.get(ib)&&!a.get(Ec)){for(var b=
!E(a.get(dc))||!E(a.get(hc))||!E(a.get(fc))||!E(a.get(gc)),c={},d=0;d<Gd[v];d++){var e=Gd[d];c[e]=a.get(e)}(d=a.get(lc))?(H(149),e=new Ka,Na(e,d),d=e):d=Ma(J[y][xa],a.get(eb)).d;if(!("1"==Ja(d.get(a.get(rb)))&&b)){if(!(d=Hd(a,d)))if(e=Id(a),d=Ma(e,h),!(e!=g&&e!=i&&""!=e&&"0"!=e&&"-"!=e&&0<=e[p]("://"))||d&&-1<d[t][p]("google")&&d.d.contains("q")&&"cse"==d[qa])d=k;else if((e=Jd(a,d))&&!e[2])Kd(a,g,e[0],g,g,"(organic)","organic",e[1],g),d=h;else if(e)d=k;else if(a.get(Wb))b:{for(var e=a.get(yb),f=La(d[t]),
j=0;j<e[v];++j)if(-1<f[p](e[j])){d=k;break b}Kd(a,g,f,g,g,"(referral)","referral",g,"/"+d[qa]);d=h}else d=k;!d&&!b&&a.get(Wb)&&(Kd(a,g,"(direct)",g,g,"(direct)","(none)",g,g),d=h);if(d&&(a.set(cc,Ld(a,c)),b="(direct)"==a.get(hc)&&"(direct)"==a.get(ec)&&"(none)"==a.get(ic),a.get(cc)||a.get(Wb)&&!b))a.set($b,a.get(Za)),a.set(ac,a.get(Vb)),a.v(bc)}}},Hd=function(a,b){function c(c,d){var d=d||"-",e=Ja(b.get(a.get(c)));return e&&"-"!=e?I(e):d}var d=Ja(b.get(a.get(kb)))||"-",e=Ja(b.get(a.get(nb)))||"-",
f=Ja(b.get(a.get(mb)))||"-",j=Ja(b.get("dclid"))||"-",o=c(lb,"(not set)"),r=c(ob,"(not set)"),s=c(pb),Pa=c(qb);if(E(d)&&E(f)&&E(j)&&E(e))return k;var ra=!E(j)&&E(e),Pb=E(s);if(ra||Pb){var ba=Id(a),ba=Ma(ba,h);if((ba=Jd(a,ba))&&!E(ba[1]&&!ba[2]))ra&&(e=ba[0]),Pb&&(s=ba[1])}Kd(a,d,e,f,j,o,r,s,Pa);return h},Jd=function(a,b){for(var c=a.get(wb),d=0;d<c[v];++d){var e=c[d][x](":");if(-1<b[t][p](e[0][C]())){var f=b.d.get(e[1]);if(f&&(f=K(f),!f&&-1<b[t][p]("google.")&&(f="(not provided)"),!e[3]||-1<b.url[p](e[3]))){a:{for(var c=
f,d=a.get(xb),c=I(c)[C](),j=0;j<d[v];++j)if(c==d[j]){c=h;break a}c=k}return[e[2]||e[0],f,c]}}}return i},Kd=function(a,b,c,d,e,f,j,o,r){a.set(dc,b);a.set(hc,c);a.set(fc,d);a.set(gc,e);a.set(ec,f);a.set(ic,j);a.set(jc,o);a.set(kc,r)},Gd=[ec,dc,fc,gc,hc,ic,jc,kc],Ld=function(a,b){function c(a){a=(""+a)[x]("+")[B]("%20");return a=a[x](" ")[B]("%20")}function d(c){var d=""+(a.get(c)||""),c=""+(b[c]||"");return 0<d[v]&&d==c}if(d(fc)||d(gc))return H(131),k;for(var e=0;e<Gd[v];e++){var f=Gd[e],j=b[f]||"-",
f=a.get(f)||"-";if(c(j)!=c(f))return h}return k},Nd=RegExp(/^https:\/\/(www\.)?google(\.com?)?(\.[a-z]{2}t?)?\/?$/i),Id=function(a){a=Qa(a.get(Eb),a.get(P));try{if(Nd.test(a))return H(136),a+"?q="}catch(b){H(145)}return a};var Pd=function(a){Od(a,J[y][xa])?(a.set(Ec,h),H(12)):a.set(Ec,k)},Od=function(a,b){if(!a.get(db))return k;var c=Ma(b,a.get(eb)),d=K(c.d.get("__utma")),e=K(c.d.get("__utmb")),f=K(c.d.get("__utmc")),j=K(c.d.get("__utmx")),o=K(c.d.get("__utmz")),r=K(c.d.get("__utmv")),c=K(c.d.get("__utmk"));if(F(""+d+e+f+j+o+r)!=c){d=I(d);e=I(e);f=I(f);j=I(j);f=Qd(d+e+f+j,o,r,c);if(!f)return k;o=f[0];r=f[1]}if(!Tc(a,d,h))return k;Wc(a,e,h);bd(a,o,h);Yc(a,r,h);Rd(a,j,h);return h},Td=function(a,b,c){var d;d=Uc(a)||"-";
var e=Vc(a)||"-",f=""+a.b(O,1)||"-",j=Sd(a)||"-",o=$c(a,k)||"-",a=Xc(a,k)||"-",r=F(""+d+e+f+j+o+a),s=[];s[m]("__utma="+d);s[m]("__utmb="+e);s[m]("__utmc="+f);s[m]("__utmx="+j);s[m]("__utmz="+o);s[m]("__utmv="+a);s[m]("__utmk="+r);d=s[B]("&");if(!d)return b;e=b[p]("#");if(c)return 0>e?b+"#"+d:b+"&"+d;c="";f=b[p]("?");0<e&&(c=b[A](e),b=b[A](0,e));return 0>f?b+"?"+d+c:b+"&"+d+c},Qd=function(a,b,c,d){for(var e=0;3>e;e++){for(var f=0;3>f;f++){if(d==F(a+b+c))return H(127),[b,c];var j=b[n](/ /g,"%20"),o=
c[n](/ /g,"%20");if(d==F(a+j+o))return H(128),[j,o];j=j[n](/\+/g,"%20");o=o[n](/\+/g,"%20");if(d==F(a+j+o))return H(129),[j,o];try{var r=b[na]("utmctr=(.*?)(?:\\|utm|$)");if(r&&2==r[v]&&(j=b[n](r[1],G(I(r[1]))),d==F(a+j+c)))return H(139),[j,c]}catch(s){}b=I(b)}c=I(c)}};var Ud="|",Wd=function(a,b,c,d,e,f,j,o,r){var s=Vd(a,b);s||(s={},a.get(zb)[m](s));s.id_=b;s.affiliation_=c;s.total_=d;s.tax_=e;s.shipping_=f;s.city_=j;s.state_=o;s.country_=r;s.items_=s.items_||[];return s},Xd=function(a,b,c,d,e,f,j){var a=Vd(a,b)||Wd(a,b,"",0,0,0,"","",""),o;a:{if(a&&a.items_){o=a.items_;for(var r=0;r<o[v];r++)if(o[r].sku_==c){o=o[r];break a}}o=i}r=o||{};r.transId_=b;r.sku_=c;r.name_=d;r.category_=e;r.price_=f;r.quantity_=j;o||a.items_[m](r);return r},Vd=function(a,b){for(var c=
a.get(zb),d=0;d<c[v];d++)if(c[d].id_==b)return c[d];return i};var Yd,Zd=function(a){if(!Yd){var b;b=J[y].hash;var c=X[q],d=/^#?gaso=([^&]*)/;if(c=(b=(b=b&&b[na](d)||c&&c[na](d))?b[1]:K(jd("GASO")))&&b[na](/^(?:[|!]([-0-9a-z.]{1,40})[|!])?([-.\w]{10,1200})$/i))zd(a,"GASO",""+b),L._gasoDomain=a.get($a),L._gasoCPath=a.get(P),a=c[1],Ia("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(a?"prefix="+a+"&":"")+Ea(),"_gasojs");Yd=h}};var Rd=function(a,b,c){c&&(b=I(b));c=a.b(O,1);b=b[x](".");!(2>b[v])&&/^\d+$/.test(b[0])&&(b[0]=""+c,zd(a,"__utmx",b[B](".")))},Sd=function(a,b){var c=Rc(a.get(O),jd("__utmx"));"-"==c&&(c="");return b?G(c):c},$d=function(a){try{var b=Ma(J[y][xa],k),c=fa(Ja(b.d.get("utm_referrer")))||"";c&&a.set(Eb,c);var d=fa(K(b.d.get("utm_expid")));d&&a.set(Gc,d)}catch(e){H(146)}};var ee=function(a,b){var c=l.min(a.b(xc,0),100);if(a.b(R,0)%100>=c)return k;c=ae()||be();if(c==g)return k;var d=c[0];if(d==g||d==da||isNaN(d))return k;0<d?ce(c)?b(de(c)):b(de(c[ia](0,1))):Ga(X,"load",function(){ee(a,b)},k);return h},ge=function(a,b,c,d){var e=new ud;e.f(14,90,b[A](0,64));e.f(14,91,a[A](0,64));e.f(14,92,""+fe(c));d!=g&&e.f(14,93,d[A](0,64));e.o(14,90,c);return e},ce=function(a){for(var b=1;b<a[v];b++)if(isNaN(a[b])||a[b]==da||0>a[b])return k;return h},fe=function(a){return isNaN(a)||
0>a?0:5E3>a?10*l[ka](a/10):5E4>a?100*l[ka](a/100):41E5>a?1E3*l[ka](a/1E3):41E5},de=function(a){for(var b=new ud,c=0;c<a[v];c++)b.f(14,c+1,""+fe(a[c])),b.o(14,c+1,a[c]);return b},ae=function(){var a=X.performance||X.webkitPerformance;if(a=a&&a.timing){var b=a.navigationStart;if(0==b)H(133);else return[a.loadEventStart-b,a.domainLookupEnd-a.domainLookupStart,a.connectEnd-a.connectStart,a.responseStart-a.requestStart,a.responseEnd-a.responseStart,a.fetchStart-b]}},be=function(){if(X.top==X){var a=X.external,
b=a&&a.onloadT;a&&!a.isValidLoadTime&&(b=g);2147483648<b&&(b=g);0<b&&a.setPageReadyTime();return b==g?g:[b]}};var U=function(a,b,c){function d(a){return function(b){if((b=b.get(Fc)[a])&&b[v])for(var c=Jc(e,a),d=0;d<b[v];d++)b[d].call(e,c)}}var e=this;this.a=new Qc;this.get=function(a){return this.a.get(a)};this.set=function(a,b,c){this.a.set(a,b,c)};this.set(N,b||"UA-XXXXX-X");this.set(Ya,a||"");this.set(Xa,c||"");this.set(Za,l.round((new Date).getTime()/1E3));this.set(P,"/");this.set(ab,63072E6);this.set(cb,15768E6);this.set(bb,18E5);this.set(db,k);this.set(vb,50);this.set(eb,k);this.set(fb,h);this.set(gb,
h);this.set(hb,h);this.set(ib,h);this.set(jb,h);this.set(lb,"utm_campaign");this.set(kb,"utm_id");this.set(mb,"gclid");this.set(nb,"utm_source");this.set(ob,"utm_medium");this.set(pb,"utm_term");this.set(qb,"utm_content");this.set(rb,"utm_nooverride");this.set(sb,100);this.set(xc,1);this.set(yc,k);this.set(tb,"/__utm.gif");this.set(ub,1);this.set(zb,[]);this.set(Q,[]);this.set(wb,Fd[ia](0));this.set(xb,[]);this.set(yb,[]);this.C("auto");this.set(Eb,J.referrer);$d(this.a);this.set(Fc,{hit:[],load:[]});
this.a.j("0",Pd);this.a.j("1",Dd);this.a.j("2",Md);this.a.j("3",Ed);this.a.j("4",d("load"));this.a.j("5",Zd);this.a.e("A",dd);this.a.e("B",fd);this.a.e("C",Dd);this.a.e("D",cd);this.a.e("E",Lc);this.a.e("F",he);this.a.e("G",Ad);this.a.e("H",gd);this.a.e("I",od);this.a.e("J",xd);this.a.e("K",d("hit"));this.a.e("L",ie);this.a.e("M",je);0===this.get(Za)&&H(111);this.a.S();this.F=g};D=U[w];D.m=function(){var a=this.get(Ab);a||(a=new ud,this.set(Ab,a));return a};
D.Ga=function(a){for(var b in a){var c=a[b];a.hasOwnProperty(b)&&this.set(b,c,h)}};D.I=function(a){if(this.get(yc))return k;var b=this,c=ee(this.a,function(c){b.set(Cb,a,h);b.t(c)});this.set(yc,c);return c};D.ya=function(a){a&&Ca(a)?(H(13),this.set(Cb,a,h)):"object"===typeof a&&a!==i&&this.Ga(a);this.F=a=this.get(Cb);this.a.i("page");this.I(a)};
D.D=function(a,b,c,d,e){if(""==a||!rd(a)||""==b||!rd(b)||c!=g&&!rd(c)||d!=g&&!sd(d))return k;this.set(qc,a,h);this.set(rc,b,h);this.set(sc,c,h);this.set(tc,d,h);this.set(pc,!!e,h);this.a.i("event");return h};D.Aa=function(a,b,c,d,e){var f=this.a.b(xc,0);1*e===e&&(f=e);if(this.a.b(R,0)%100>=f)return k;c=1*(""+c);if(""==a||!rd(a)||""==b||!rd(b)||!sd(c)||isNaN(c)||0>c||0>f||100<f||d!=g&&(""==d||!rd(d)))return k;this.t(ge(a,b,c,d));return h};
D.za=function(a,b,c,d){if(!a||!b)return k;this.set(uc,a,h);this.set(vc,b,h);this.set(wc,c||J[y][xa],h);d&&this.set(Cb,d,h);this.a.i("social");return h};D.xa=function(){this.set(xc,10);this.I(this.F)};D.Ba=function(){this.a.i("trans")};D.t=function(a){this.set(Bb,a,h);this.a.i("event")};D.ea=function(a){this.u();var b=this;return{_trackEvent:function(c,d,e){H(91);b.D(a,c,d,e)}}};D.ha=function(a){return this.get(a)};
D.qa=function(a,b){if(a)if(Ca(a))this.set(a,b);else if("object"==typeof a)for(var c in a)a.hasOwnProperty(c)&&this.set(c,a[c])};D.addEventListener=function(a,b){var c=this.get(Fc)[a];c&&c[m](b)};D.removeEventListener=function(a,b){for(var c=this.get(Fc)[a],d=0;c&&d<c[v];d++)if(c[d]==b){c.splice(d,1);break}};D.ja=function(){return"5.2.7"};D.C=function(a){this.get(fb);a="auto"==a?La(J.domain):!a||"-"==a||"none"==a?"":a[C]();this.set($a,a)};D.oa=function(a){this.set(fb,!!a)};
D.ia=function(a,b){return Td(this.a,a,b)};D.link=function(a,b){if(this.a.get(db)&&a){var c=Td(this.a,a,b);J[y].href=c}};D.na=function(a,b){this.a.get(db)&&a&&a.action&&(a.action=Td(this.a,a.action,b))};
D.sa=function(){this.u();var a=this.a,b=J.getElementById?J.getElementById("utmtrans"):J.utmform&&J.utmform.utmtrans?J.utmform.utmtrans:i;if(b&&b[ma]){a.set(zb,[]);for(var b=b[ma][x]("UTM:"),c=0;c<b[v];c++){b[c]=Da(b[c]);for(var d=b[c][x](Ud),e=0;e<d[v];e++)d[e]=Da(d[e]);"T"==d[0]?Wd(a,d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8]):"I"==d[0]&&Xd(a,d[1],d[2],d[3],d[4],d[5],d[6])}}};D.Y=function(a,b,c,d,e,f,j,o){return Wd(this.a,a,b,c,d,e,f,j,o)};D.W=function(a,b,c,d,e,f){return Xd(this.a,a,b,c,d,e,f)};
D.ta=function(a){Ud=a||"|"};D.pa=function(a,b,c,d){var e=this.a;if(0>=a||a>e.get(vb)||!b||!c||128<b[v]+c[v])a=k;else{1!=d&&2!=d&&(d=3);var f={};ha(f,b);f.value=c;f.scope=d;e.get(Q)[a]=f;a=h}a&&this.a.n();return a};D.ga=function(a){this.a.get(Q)[a]=g;this.a.n()};D.ka=function(a){return(a=this.a.get(Q)[a])&&1==a[ua]?a[ma]:g};D.va=function(a,b,c){this.m().f(a,b,c)};D.wa=function(a,b,c){this.m().o(a,b,c)};D.la=function(a,b){return this.m().getKey(a,b)};D.ma=function(a,b){return this.m().L(a,b)};
D.ba=function(a){this.m().J(a)};D.ca=function(a){this.m().K(a)};D.fa=function(){return new ud};D.U=function(a){a&&this.get(xb)[m](a[C]())};D.Z=function(){this.set(xb,[])};D.V=function(a){a&&this.get(yb)[m](a[C]())};D.$=function(){this.set(yb,[])};D.X=function(a,b,c,d,e){if(a&&b){a=[a,b[C]()][B](":");if(d||e)a=[a,d,e][B](":");d=this.get(wb);d.splice(c?0:d[v],0,a)}};D.aa=function(){this.set(wb,[])};
D.da=function(a){this.a[ja]();var b=this.get(P),c=Sd(this.a);this.set(P,a);this.a.n();Rd(this.a,c);this.set(P,b)};D.ra=function(a,b){if(0<a&&5>=a&&Ca(b)&&""!=b){var c=this.get(zc)||[];c[a]=b;this.set(zc,c)}};D.T=function(a){a=""+a;if(a[na](/^[A-Za-z0-9]{1,5}$/)){var b=this.get(Dc)||[];b[m](a);this.set(Dc,b)}};D.u=function(){this.a[ja]()};D.ua=function(a){a&&""!=a&&(this.set(Ob,a),this.a.i("var"))};var he=function(a){"trans"!==a.get(mc)&&500<=a.b(Yb,0)&&a[ta]();if("event"===a.get(mc)){var b=(new Date).getTime(),c=a.b(Zb,0),d=a.b(Ub,0),c=l[ka](1*((b-(c!=d?c:1E3*c))/1E3));0<c&&(a.set(Zb,b),a.set(S,l.min(10,a.b(S,0)+c)));0>=a.b(S,0)&&a[ta]()}},je=function(a){"event"===a.get(mc)&&a.set(S,l.max(0,a.b(S,10)-1))};var ke=function(){var a=[];this.add=function(b,c,d){d&&(c=G(""+c));a[m](b+"="+c)};this.toString=function(){return a[B]("&")}},le=function(a,b){(b||2!=a.get(ub))&&a.v(Yb)},me=function(a,b){b.add("utmwv","5.2.7");b.add("utms",a.get(Yb));b.add("utmn",Ea());var c=J[y].hostname;E(c)||b.add("utmhn",c,h);c=a.get(sb);100!=c&&b.add("utmsp",c,h)},oe=function(a,b){b.add("utmac",Da(a.get(N)));a.get(Gc)&&b.add("utmxkey",a.get(Gc),h);a.get(pc)&&b.add("utmni",1);var c=a.get(Dc);c&&0<c[v]&&b.add("utmdid",c[B]("."));
ne(a,b);L.A&&b.add("aip",1);b.add("utmu",hd.Va())},pe=function(a,b){for(var c=a.get(zc)||[],d=[],e=1;e<c[v];e++)c[e]&&d[m](e+":"+G(c[e][n](/%/g,"%25")[n](/:/g,"%3A")[n](/,/g,"%2C")));d[v]&&b.add("utmpg",d[B](","))},ne=function(a,b){function c(a,b){b&&d[m](a+"="+b+";")}var d=[];c("__utma",Uc(a));c("__utmz",$c(a,k));c("__utmv",Xc(a,h));c("__utmx",Sd(a));b.add("utmcc",d[B]("+"),h)},qe=function(a,b){a.get(gb)&&(b.add("utmcs",a.get(Lb),h),b.add("utmsr",a.get(Gb)),a.get(Mb)&&b.add("utmvp",a.get(Mb)),b.add("utmsc",
a.get(Hb)),b.add("utmul",a.get(Kb)),b.add("utmje",a.get(Ib)),b.add("utmfl",a.get(Jb),h))},re=function(a,b){a.get(jb)&&a.get(Db)&&b.add("utmdt",a.get(Db),h);b.add("utmhid",a.get(Fb));b.add("utmr",Qa(a.get(Eb),a.get(P)),h);b.add("utmp",G(a.get(Cb),h),h)},se=function(a,b){for(var c=a.get(Ab),d=a.get(Bb),e=a.get(Q)||[],f=0;f<e[v];f++){var j=e[f];j&&(c||(c=new ud),c.f(8,f,j[q]),c.f(9,f,j[ma]),3!=j[ua]&&c.f(11,f,""+j[ua]))}!E(a.get(qc))&&!E(a.get(rc),h)&&(c||(c=new ud),c.f(5,1,a.get(qc)),c.f(5,2,a.get(rc)),
e=a.get(sc),e!=g&&c.f(5,3,e),e=a.get(tc),e!=g&&c.o(5,1,e));c?b.add("utme",c.Ka(d),h):d&&b.add("utme",d.z(),h)},te=function(a,b,c){var d=new ke;le(a,c);me(a,d);d.add("utmt","tran");d.add("utmtid",b.id_,h);d.add("utmtst",b.affiliation_,h);d.add("utmtto",b.total_,h);d.add("utmttx",b.tax_,h);d.add("utmtsp",b.shipping_,h);d.add("utmtci",b.city_,h);d.add("utmtrg",b.state_,h);d.add("utmtco",b.country_,h);c||(pe(a,d),oe(a,d));return d[u]()},ue=function(a,b,c){var d=new ke;le(a,c);me(a,d);d.add("utmt","item");
d.add("utmtid",b.transId_,h);d.add("utmipc",b.sku_,h);d.add("utmipn",b.name_,h);d.add("utmiva",b.category_,h);d.add("utmipr",b.price_,h);d.add("utmiqt",b.quantity_,h);c||(pe(a,d),oe(a,d));return d[u]()},ve=function(a,b){var c=a.get(mc);if("page"==c)c=new ke,le(a,b),me(a,c),se(a,c),qe(a,c),re(a,c),b||(pe(a,c),oe(a,c)),c=[c[u]()];else if("event"==c)c=new ke,le(a,b),me(a,c),c.add("utmt","event"),se(a,c),qe(a,c),re(a,c),b||(pe(a,c),oe(a,c)),c=[c[u]()];else if("var"==c)c=new ke,le(a,b),me(a,c),c.add("utmt",
"var"),!b&&oe(a,c),c=[c[u]()];else if("trans"==c)for(var c=[],d=a.get(zb),e=0;e<d[v];++e){c[m](te(a,d[e],b));for(var f=d[e].items_,j=0;j<f[v];++j)c[m](ue(a,f[j],b))}else"social"==c?b?c=[]:(c=new ke,le(a,b),me(a,c),c.add("utmt","social"),c.add("utmsn",a.get(uc),h),c.add("utmsa",a.get(vc),h),c.add("utmsid",a.get(wc),h),se(a,c),qe(a,c),re(a,c),pe(a,c),oe(a,c),c=[c[u]()]):c=[];return c},ie=function(a){var b,c=a.get(ub),d=a.get(oc),e=d&&d.Sa,f=0;if(0==c||2==c){var j=a.get(tb)+"?";b=ve(a,h);for(var o=0,
r=b[v];o<r;o++)Ta(b[o],e,j,h),f++}if(1==c||2==c){b=ve(a);o=0;for(r=b[v];o<r;o++)try{Ta(b[o],e),f++}catch(s){s&&Sa(s[q],g,s.message)}}d&&(d.q=f)};var we="https:"==J[y][z]?"https://ssl.google-analytics.com":"http://www.google-analytics.com",xe=function(a){ha(this,"len");this.message=a+"-8192"},ye=function(a){ha(this,"ff2post");this.message=a+"-2036"},Ta=function(a,b,c,d){b=b||Fa;if(d||2036>=a[v])ze(a,b,c);else if(8192>=a[v]){if(0<=X[za].userAgent[p]("Firefox")&&![].reduce)throw new ye(a[v]);Ae(a,b)||Be(a,b)}else throw new xe(a[v]);},ze=function(a,b,c){var c=c||we+"/__utm.gif?",d=new Image(1,1);d.src=c+a;ga(d,function(){ga(d,i);d.onerror=i;b()});
d.onerror=function(){ga(d,i);d.onerror=i;b()}},Ae=function(a,b){var c,d=we+"/p/__utm.gif",e=X.XDomainRequest;if(e)c=new e,c.open("POST",d);else if(e=X.XMLHttpRequest)e=new e,"withCredentials"in e&&(c=e,c.open("POST",d,h),c.setRequestHeader("Content-Type","text/plain"));if(c)return c.onreadystatechange=function(){4==c.readyState&&(b(),c=i)},c.send(a),h},Be=function(a,b){if(J.body){a=aa(a);try{var c=J[pa]('<iframe name="'+a+'"></iframe>')}catch(d){c=J[pa]("iframe"),ha(c,a)}c.height="0";c.width="0";
c.style.display="none";c.style.visibility="hidden";var e=J[y],e=we+"/u/post_iframe.html#"+aa(e[z]+"//"+e[t]+"/favicon.ico"),f=function(){c.src="";c.parentNode&&c.parentNode.removeChild(c)};Ga(X,"beforeunload",f);var j=k,o=0,r=function(){if(!j){try{if(9<o||c.contentWindow[y][t]==J[y][t]){j=h;f();Ha(X,"beforeunload",f);b();return}}catch(a){}o++;ea(r,200)}};Ga(c,"load",r);J.body.appendChild(c);c.src=e}else id(function(){Be(a,b)},100)};var $=function(){this.A=k;this.M={};this.N=[];this.Ma=0;this.Ea=[["www.google-analytics.com","","/plugins/"]];this._gasoCPath=this._gasoDomain=g;T($[w],"_createTracker",$[w].s,55);T($[w],"_getTracker",$[w].Oa,0);T($[w],"_getTrackerByName",$[w].w,51);T($[w],"_getTrackers",$[w].Pa,130);T($[w],"_anonymizeIp",$[w].Na,16);T($[w],"_getPlugin",Hc,120);Ic()};D=$[w];D.Oa=function(a,b){return this.s(a,g,b)};D.s=function(a,b,c){b&&H(23);c&&H(67);b==g&&(b="~"+L.Ma++);a=new U(b,a,c);L.M[b]=a;L.N[m](a);return a};
D.w=function(a){a=a||"";return L.M[a]||L.s(g,a)};D.Pa=function(){return L.N[ia](0)};D.Na=function(){this.A=h};var Ce=function(a){if("prerender"==J.webkitVisibilityState)return k;a();return h};var L=new $;var De=X._gat;De&&Ba(De._getTracker)?L=De:X._gat=L;var qd=new Z;(function(a){if(!Ce(a)){H(123);var b=k,c=function(){!b&&Ce(a)&&(b=h,Ha(J,"webkitvisibilitychange",c))};Ga(J,"webkitvisibilitychange",c)}})(function(){var a=X._gaq,b=k;if(a&&Ba(a[m])&&(b="[object Array]"==Object[w][u].call(Object(a)),!b)){qd=a;return}X._gaq=qd;b&&qd[m][ya](qd,a)});})();