var In=Object.create;var B=Object.defineProperty,vn=Object.defineProperties,Tn=Object.getOwnPropertyDescriptor,An=Object.getOwnPropertyDescriptors,Cn=Object.getOwnPropertyNames,q=Object.getOwnPropertySymbols,Gn=Object.getPrototypeOf,ee=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var Ne=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l=(e,t)=>{for(var n in t||(t={}))ee.call(t,n)&&Ne(e,n,t[n]);if(q)for(var n of q(t))Le.call(t,n)&&Ne(e,n,t[n]);return e},y=(e,t)=>vn(e,An(t)),Fe=e=>B(e,"__esModule",{value:!0});var V=(e,t)=>{var n={};for(var r in e)ee.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&q)for(var r of q(e))t.indexOf(r)<0&&Le.call(e,r)&&(n[r]=e[r]);return n};var S=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Rn=(e,t)=>{for(var n in t)B(e,n,{get:t[n],enumerable:!0})},_e=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Cn(t))!ee.call(e,o)&&(n||o!=="default")&&B(e,o,{get:()=>t[o],enumerable:!(r=Tn(t,o))||r.enumerable});return e},I=(e,t)=>_e(Fe(B(e!=null?In(Gn(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),kn=(e=>(t,n)=>e&&e.get(t)||(n=_e(Fe({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var Ke=S((ao,He)=>{He.exports=Ve;Ve.sync=Bn;var We=require("fs");function _n(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var o=n[r].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function qe(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:_n(t,n)}function Ve(e,t,n){We.stat(e,function(r,o){n(r,r?!1:qe(o,e,t))})}function Bn(e,t){return qe(We.statSync(e),e,t)}});var Qe=S((co,Je)=>{Je.exports=ze;ze.sync=Un;var Xe=require("fs");function ze(e,t,n){Xe.stat(e,function(r,o){n(r,r?!1:Ye(o,t))})}function Un(e,t){return Ye(Xe.statSync(e),t)}function Ye(e,t){return e.isFile()&&Mn(e,t)}function Mn(e,t){var n=e.mode,r=e.uid,o=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),u=parseInt("010",8),c=parseInt("001",8),d=a|u,g=n&c||n&u&&o===i||n&a&&r===s||n&d&&s===0;return g}});var et=S((lo,Ze)=>{var uo=require("fs"),H;process.platform==="win32"||global.TESTING_WINDOWS?H=Ke():H=Qe();Ze.exports=oe;oe.sync=$n;function oe(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,o){oe(e,t||{},function(s,i){s?o(s):r(i)})})}H(e,t||{},function(r,o){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,o=!1),n(r,o)})}function $n(e,t){try{return H.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var at=S((po,it)=>{var R=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",tt=require("path"),jn=R?";":":",nt=et(),rt=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),ot=(e,t)=>{let n=t.colon||jn,r=e.match(/\//)||R&&e.match(/\\/)?[""]:[...R?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],o=R?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=R?o.split(n):[""];return R&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:r,pathExt:s,pathExtExe:o}},st=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:o,pathExtExe:s}=ot(e,t),i=[],a=c=>new Promise((d,g)=>{if(c===r.length)return t.all&&i.length?d(i):g(rt(e));let w=r[c],x=/^".*"$/.test(w)?w.slice(1,-1):w,m=tt.join(x,e),h=!x&&/^\.[\\\/]/.test(e)?e.slice(0,2)+m:m;d(u(h,c,0))}),u=(c,d,g)=>new Promise((w,x)=>{if(g===o.length)return w(a(d+1));let m=o[g];nt(c+m,{pathExt:s},(h,v)=>{if(!h&&v)if(t.all)i.push(c+m);else return w(c+m);return w(u(c,d,g+1))})});return n?a(0).then(c=>n(null,c),n):a(0)},Dn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:o}=ot(e,t),s=[];for(let i=0;i<n.length;i++){let a=n[i],u=/^".*"$/.test(a)?a.slice(1,-1):a,c=tt.join(u,e),d=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+c:c;for(let g=0;g<r.length;g++){let w=d+r[g];try{if(nt.sync(w,{pathExt:o}))if(t.all)s.push(w);else return w}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw rt(e)};it.exports=st;st.sync=Dn});var ut=S((fo,se)=>{"use strict";var ct=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};se.exports=ct;se.exports.default=ct});var ft=S((mo,pt)=>{"use strict";var lt=require("path"),Wn=at(),qn=ut();function dt(e,t){let n=e.options.env||process.env,r=process.cwd(),o=e.options.cwd!=null,s=o&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let i;try{i=Wn.sync(e.command,{path:n[qn({env:n})],pathExt:t?lt.delimiter:void 0})}catch{}finally{s&&process.chdir(r)}return i&&(i=lt.resolve(o?e.options.cwd:"",i)),i}function Vn(e){return dt(e)||dt(e,!0)}pt.exports=Vn});var mt=S((ho,ae)=>{"use strict";var ie=/([()\][%!^"`<>&|;, *?])/g;function Hn(e){return e=e.replace(ie,"^$1"),e}function Kn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(ie,"^$1"),t&&(e=e.replace(ie,"^$1")),e}ae.exports.command=Hn;ae.exports.argument=Kn});var gt=S((go,ht)=>{"use strict";ht.exports=/^#!(.*)/});var yt=S((wo,wt)=>{"use strict";var Xn=gt();wt.exports=(e="")=>{let t=e.match(Xn);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),o=n.split("/").pop();return o==="env"?r:r?`${o} ${r}`:o}});var bt=S((yo,St)=>{"use strict";var ce=require("fs"),zn=yt();function Yn(e){let n=Buffer.alloc(150),r;try{r=ce.openSync(e,"r"),ce.readSync(r,n,0,150,0),ce.closeSync(r)}catch{}return zn(n.toString())}St.exports=Yn});var Et=S((So,Ot)=>{"use strict";var Jn=require("path"),xt=ft(),Pt=mt(),Qn=bt(),Zn=process.platform==="win32",er=/\.(?:com|exe)$/i,tr=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function nr(e){e.file=xt(e);let t=e.file&&Qn(e.file);return t?(e.args.unshift(e.file),e.command=t,xt(e)):e.file}function rr(e){if(!Zn)return e;let t=nr(e),n=!er.test(t);if(e.options.forceShell||n){let r=tr.test(t);e.command=Jn.normalize(e.command),e.command=Pt.command(e.command),e.args=e.args.map(s=>Pt.argument(s,r));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function or(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:rr(r)}Ot.exports=or});var Tt=S((bo,vt)=>{"use strict";var ue=process.platform==="win32";function le(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function sr(e,t){if(!ue)return;let n=e.emit;e.emit=function(r,o){if(r==="exit"){let s=It(o,t,"spawn");if(s)return n.call(e,"error",s)}return n.apply(e,arguments)}}function It(e,t){return ue&&e===1&&!t.file?le(t.original,"spawn"):null}function ir(e,t){return ue&&e===1&&!t.file?le(t.original,"spawnSync"):null}vt.exports={hookChildProcess:sr,verifyENOENT:It,verifyENOENTSync:ir,notFoundError:le}});var Gt=S((xo,k)=>{"use strict";var At=require("child_process"),de=Et(),pe=Tt();function Ct(e,t,n){let r=de(e,t,n),o=At.spawn(r.command,r.args,r.options);return pe.hookChildProcess(o,r),o}function ar(e,t,n){let r=de(e,t,n),o=At.spawnSync(r.command,r.args,r.options);return o.error=o.error||pe.verifyENOENTSync(o.status,r),o}k.exports=Ct;k.exports.spawn=Ct;k.exports.sync=ar;k.exports._parse=de;k.exports._enoent=pe});var Dt=S((jo,Y)=>{Y.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&Y.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&Y.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Kt=S((Do,_)=>{var f=global.process,C=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};C(f)?(Wt=require("assert"),L=Dt(),qt=/^win/i.test(f.platform),M=require("events"),typeof M!="function"&&(M=M.EventEmitter),f.__signal_exit_emitter__?b=f.__signal_exit_emitter__:(b=f.__signal_exit_emitter__=new M,b.count=0,b.emitted={}),b.infinite||(b.setMaxListeners(1/0),b.infinite=!0),_.exports=function(e,t){if(!C(global.process))return function(){};Wt.equal(typeof e,"function","a callback must be provided for exit handler"),F===!1&&ye();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){b.removeListener(n,e),b.listeners("exit").length===0&&b.listeners("afterexit").length===0&&J()};return b.on(n,e),r},J=function(){!F||!C(global.process)||(F=!1,L.forEach(function(t){try{f.removeListener(t,Q[t])}catch{}}),f.emit=Z,f.reallyExit=Se,b.count-=1)},_.exports.unload=J,G=function(t,n,r){b.emitted[t]||(b.emitted[t]=!0,b.emit(t,n,r))},Q={},L.forEach(function(e){Q[e]=function(){if(!!C(global.process)){var n=f.listeners(e);n.length===b.count&&(J(),G("exit",null,e),G("afterexit",null,e),qt&&e==="SIGHUP"&&(e="SIGINT"),f.kill(f.pid,e))}}}),_.exports.signals=function(){return L},F=!1,ye=function(){F||!C(global.process)||(F=!0,b.count+=1,L=L.filter(function(t){try{return f.on(t,Q[t]),!0}catch{return!1}}),f.emit=Ht,f.reallyExit=Vt)},_.exports.load=ye,Se=f.reallyExit,Vt=function(t){!C(global.process)||(f.exitCode=t||0,G("exit",f.exitCode,null),G("afterexit",f.exitCode,null),Se.call(f,f.exitCode))},Z=f.emit,Ht=function(t,n){if(t==="exit"&&C(global.process)){n!==void 0&&(f.exitCode=n);var r=Z.apply(this,arguments);return G("exit",f.exitCode,null),G("afterexit",f.exitCode,null),r}else return Z.apply(this,arguments)}):_.exports=function(){return function(){}};var Wt,L,qt,M,b,J,G,Q,F,ye,Se,Vt,Z,Ht});var rn=S((Vo,nn)=>{"use strict";var{PassThrough:Rr}=require("stream");nn.exports=e=>{e=l({},e);let{array:t}=e,{encoding:n}=e,r=n==="buffer",o=!1;t?o=!(n||r):n=n||"utf8",r&&(n=null);let s=new Rr({objectMode:o});n&&s.setEncoding(n);let i=0,a=[];return s.on("data",u=>{a.push(u),o?i=a.length:i+=u.length}),s.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),s.getBufferedLength=()=>i,s}});var on=S((Ho,$)=>{"use strict";var{constants:kr}=require("buffer"),Nr=require("stream"),{promisify:Lr}=require("util"),Fr=rn(),_r=Lr(Nr.pipeline),be=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function xe(e,t){if(!e)throw new Error("Expected a stream");t=l({maxBuffer:1/0},t);let{maxBuffer:n}=t,r=Fr(t);return await new Promise((o,s)=>{let i=a=>{a&&r.getBufferedLength()<=kr.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),s(a)};(async()=>{try{await _r(e,r),o()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new be)})}),r.getBufferedValue()}$.exports=xe;$.exports.buffer=(e,t)=>xe(e,y(l({},t),{encoding:"buffer"}));$.exports.array=(e,t)=>xe(e,y(l({},t),{array:!0}));$.exports.MaxBufferError=be});var an=S((Ko,sn)=>{"use strict";var{PassThrough:Br}=require("stream");sn.exports=function(){var e=[],t=new Br({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(n),t;function n(s){return Array.isArray(s)?(s.forEach(n),this):(e.push(s),s.once("end",o.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function r(){return e.length==0}function o(s){e=e.filter(function(i){return i!==s}),!e.length&&t.readable&&t.end()}}});var eo={};Rn(eo,{default:()=>Zr});var p=require("@raycast/api");var P=require("@raycast/api"),T=require("react");var Be="https://bitwarden.com",Ue={lowercase:!0,uppercase:!0,number:!1,special:!1,passphrase:!1,length:14,words:3,separator:"-",capitalize:!1,includeNumber:!1},A={PASSWORD_OPTIONS:"bw-generate-password-options",PASSWORD_ONE_TIME_WARNING:"bw-generate-password-warning-accepted"},te={password:{length:{label:"Length of the password",hint:"5 - 128",type:"number",errorMessage:"Number between 5 and 128"},uppercase:{label:"Uppercase characters",hint:"ABCDEFGHIJLMNOPQRSTUVWXYZ",type:"boolean"},lowercase:{label:"Lowercase characters",hint:"abcdefghijklmnopqrstuvwxyz",type:"boolean"},number:{label:"Numeric characters",hint:"0123456789",type:"boolean"},special:{label:"Special characters",hint:"!@#$%^&*()_+-=[]{}|;:,./<>?",type:"boolean"}},passphrase:{words:{label:"Number of words",hint:"3 - 20",type:"number",errorMessage:"Number between 3 and 20"},separator:{label:"Word separator",hint:"this-is-a-passphrase",type:"string",errorMessage:"Must be a single character"},capitalize:{label:"Capitalise",hint:"This-Is-A-Passphrase",type:"boolean"},includeNumber:{label:"Include number",hint:"This2-Is-A-Passphrase",type:"boolean"}}};var ne=require("@raycast/api");Object.typedEntries=function(e){return Object.entries(e)};function re(){let{serverUrl:e}=(0,ne.getPreferenceValues)();return e===""||e==="bitwarden.com"||e==="https://bitwarden.com"?"":e}function Me(e){return Object.entries(e).flatMap(([t,n])=>n?[`--${t}`,n]:[])}var $e=e=>e.charAt(0).toUpperCase()+e.slice(1);var Nn={options:void 0,password:void 0,isGenerating:!0},Ln=(e,t)=>{switch(t.type){case"generate":return y(l({},e),{isGenerating:!0});case"setPassword":return y(l({},e),{password:t.password,isGenerating:!1});case"setOptions":return y(l({},e),{options:t.options});case"cancelGenerate":return y(l({},e),{isGenerating:!1});case"clearPassword":return y(l({},e),{isGenerating:!1,password:void 0})}};function je(e){let[g,...w]=(0,T.useReducer)(Ln,Nn),x=g,{options:t}=x,n=V(x,["options"]),[r]=w,{abortControllerRef:o,renew:s,abort:i}=Fn(),a=async(m=t)=>{try{s(),r({type:"generate"});let h=await e.generatePassword(m,o?.current);r({type:"setPassword",password:h})}catch{o?.current.signal.aborted&&r({type:"cancelGenerate"})}},u=()=>{n.isGenerating||a()},c=async(m,h)=>{if(!t||t[m]===h)return;n.isGenerating&&i();let v=y(l({},t),{[m]:h});r({type:"setOptions",options:v}),await Promise.all([P.LocalStorage.setItem(A.PASSWORD_OPTIONS,JSON.stringify(v)),a(v)])},d=async()=>{let m=await P.LocalStorage.getItem(A.PASSWORD_OPTIONS),h=l(l({},Ue),m?JSON.parse(m):{});r({type:"setOptions",options:h}),await a(h)};return(0,T.useEffect)(()=>{d()},[]),y(l({},n),{regeneratePassword:u,options:t,setOption:c})}var De=async()=>{let e=()=>(0,P.popToRoot)({clearSearchBar:!1}),t=()=>P.LocalStorage.setItem(A.PASSWORD_ONE_TIME_WARNING,!0),n=async()=>{await P.LocalStorage.getItem(A.PASSWORD_ONE_TIME_WARNING)||await(0,P.confirmAlert)({title:"Warning",message:"Password history is not available yet, so make sure to store the password after generating it!",icon:P.Icon.ExclamationMark,dismissAction:{title:"Go back",onAction:e},primaryAction:{title:"I understand",onAction:t}})};(0,T.useEffect)(()=>{n()},[])};function Fn(){let e=(0,T.useRef)(new AbortController);return{abortControllerRef:e,renew:()=>{!e.current.signal.aborted||(e.current=new AbortController)},abort:()=>{e.current?.abort()}}}var O=require("@raycast/api");var gn=require("node:buffer"),wn=I(require("node:path"),1),Te=I(require("node:child_process"),1),j=I(require("node:process"),1),yn=I(Gt(),1);function fe(e){let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===n&&(e=e.slice(0,-1)),e}var U=I(require("node:process"),1),N=I(require("node:path"),1),Rt=I(require("node:url"),1);function K(e={}){let{env:t=process.env,platform:n=process.platform}=e;return n!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"}function cr(e={}){let{cwd:t=U.default.cwd(),path:n=U.default.env[K()],execPath:r=U.default.execPath}=e,o,s=t instanceof URL?Rt.default.fileURLToPath(t):t,i=N.default.resolve(s),a=[];for(;o!==i;)a.push(N.default.join(i,"node_modules/.bin")),o=i,i=N.default.resolve(i,"..");return a.push(N.default.resolve(s,r,"..")),[...a,n].join(N.default.delimiter)}function kt(n={}){var r=n,{env:e=U.default.env}=r,t=V(r,["env"]);e=l({},e);let o=K({env:e});return t.path=e[o],e[o]=cr(t),e}var ur=(e,t,n,r)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;let o=Object.getOwnPropertyDescriptor(e,n),s=Object.getOwnPropertyDescriptor(t,n);!lr(o,s)&&r||Object.defineProperty(e,n,s)},lr=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},dr=(e,t)=>{let n=Object.getPrototypeOf(t);n!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,n)},pr=(e,t)=>`/* Wrapped ${e}*/
${t}`,fr=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),mr=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),hr=(e,t,n)=>{let r=n===""?"":`with ${n.trim()}() `,o=pr.bind(null,r,t.toString());Object.defineProperty(o,"name",mr),Object.defineProperty(e,"toString",y(l({},fr),{value:o}))};function me(e,t,{ignoreNonConfigurable:n=!1}={}){let{name:r}=e;for(let o of Reflect.ownKeys(t))ur(e,t,o,n);return dr(e,t),hr(e,t,r),e}var X=new WeakMap,Nt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,o=e.displayName||e.name||"<anonymous>",s=function(...i){if(X.set(s,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return n};return me(s,e),X.set(s,r),s};Nt.callCount=e=>{if(!X.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return X.get(e)};var Lt=Nt;var Mt=require("os");var Ft=function(){let e=he-_t+1;return Array.from({length:e},gr)},gr=function(e,t){return{name:`SIGRT${t+1}`,number:_t+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},_t=34,he=64;var Ut=require("os");var Bt=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];var ge=function(){let e=Ft();return[...Bt,...e].map(wr)},wr=function({name:e,number:t,description:n,action:r,forced:o=!1,standard:s}){let{signals:{[e]:i}}=Ut.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:o,standard:s}};var yr=function(){return ge().reduce(Sr,{})},Sr=function(e,{name:t,number:n,description:r,supported:o,action:s,forced:i,standard:a}){return y(l({},e),{[t]:{name:t,number:n,description:r,supported:o,action:s,forced:i,standard:a}})},$t=yr(),br=function(){let e=ge(),t=64+1,n=Array.from({length:t},(r,o)=>xr(o,e));return Object.assign({},...n)},xr=function(e,t){let n=Pr(e,t);if(n===void 0)return{};let{name:r,description:o,supported:s,action:i,forced:a,standard:u}=n;return{[e]:{name:r,number:e,description:o,supported:s,action:i,forced:a,standard:u}}},Pr=function(e,t){let n=t.find(({name:r})=>Mt.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},_o=br();var Or=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:o,exitCode:s,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${o})`:s!==void 0?`failed with exit code ${s}`:"failed",we=({stdout:e,stderr:t,all:n,error:r,signal:o,exitCode:s,command:i,escapedCommand:a,timedOut:u,isCanceled:c,killed:d,parsed:{options:{timeout:g}}})=>{s=s===null?void 0:s,o=o===null?void 0:o;let w=o===void 0?void 0:$t[o].description,x=r&&r.code,h=`Command ${Or({timedOut:u,timeout:g,errorCode:x,signal:o,signalDescription:w,exitCode:s,isCanceled:c})}: ${i}`,v=Object.prototype.toString.call(r)==="[object Error]",D=v?`${h}
${r.message}`:h,W=[D,t,e].filter(Boolean).join(`
`);return v?(r.originalMessage=r.message,r.message=W):r=new Error(W),r.shortMessage=D,r.command=i,r.escapedCommand=a,r.exitCode=s,r.signal=o,r.signalDescription=w,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(u),r.isCanceled=c,r.killed=d&&!u,r};var z=["stdin","stdout","stderr"],Er=e=>z.some(t=>e[t]!==void 0),jt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return z.map(r=>e[r]);if(Er(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${z.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,z.length);return Array.from({length:n},(r,o)=>t[o])};var Xt=I(require("node:os"),1),zt=I(Kt(),1),Ir=1e3*5,Yt=(e,t="SIGTERM",n={})=>{let r=e(t);return vr(e,t,n,r),r},vr=(e,t,n,r)=>{if(!Tr(t,n,r))return;let o=Cr(n),s=setTimeout(()=>{e("SIGKILL")},o);s.unref&&s.unref()},Tr=(e,{forceKillAfterTimeout:t},n)=>Ar(e)&&t!==!1&&n,Ar=e=>e===Xt.default.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Cr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Ir;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Jt=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Gr=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Qt=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let o,s=new Promise((a,u)=>{o=setTimeout(()=>{Gr(e,n,u)},t)}),i=r.finally(()=>{clearTimeout(o)});return Promise.race([s,i])},Zt=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},en=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let o=(0,zt.default)(()=>{e.kill()});return r.finally(()=>{o()})};function tn(e){return e!==null&&typeof e=="object"&&typeof e.pipe=="function"}var Ee=I(on(),1),cn=I(an(),1),un=(e,t)=>{t===void 0||e.stdin===void 0||(tn(t)?t.pipe(e.stdin):e.stdin.end(t))},ln=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=(0,cn.default)();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},Pe=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},Oe=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?(0,Ee.default)(e,{encoding:t,maxBuffer:r}):Ee.default.buffer(e,{maxBuffer:r})},dn=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:o,maxBuffer:s},i)=>{let a=Oe(e,{encoding:r,buffer:o,maxBuffer:s}),u=Oe(t,{encoding:r,buffer:o,maxBuffer:s}),c=Oe(n,{encoding:r,buffer:o,maxBuffer:s*2});try{return await Promise.all([i,a,u,c])}catch(d){return Promise.all([{error:d,signal:d.signal,timedOut:d.timedOut},Pe(e,a),Pe(t,u),Pe(n,c)])}};var Ur=(async()=>{})().constructor.prototype,Mr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Ur,e)]),Ie=(e,t)=>{for(let[n,r]of Mr){let o=typeof t=="function"?(...s)=>Reflect.apply(r.value,t(),s):r.value.bind(t);Reflect.defineProperty(e,n,y(l({},r),{value:o}))}return e},pn=e=>new Promise((t,n)=>{e.on("exit",(r,o)=>{t({exitCode:r,signal:o})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});var fn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],$r=/^[\w.-]+$/,jr=/"/g,Dr=e=>typeof e!="string"||$r.test(e)?e:`"${e.replace(jr,'\\"')}"`,mn=(e,t)=>fn(e,t).join(" "),hn=(e,t)=>fn(e,t).map(n=>Dr(n)).join(" ");var Wr=1e3*1e3*100,qr=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:o})=>{let s=t?l(l({},j.default.env),e):e;return n?kt({env:s,cwd:r,execPath:o}):s},Vr=(e,t,n={})=>{let r=yn.default._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n=l({maxBuffer:Wr,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||j.default.cwd(),execPath:j.default.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},n),n.env=qr(n),n.stdio=jt(n),j.default.platform==="win32"&&wn.default.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},ve=(e,t,n)=>typeof t!="string"&&!gn.Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?fe(t):t;function Sn(e,t,n){let r=Vr(e,t,n),o=mn(e,t),s=hn(e,t);Zt(r.options);let i;try{i=Te.default.spawn(r.file,r.args,r.options)}catch(x){let m=new Te.default.ChildProcess,h=Promise.reject(we({error:x,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return Ie(m,h)}let a=pn(i),u=Qt(i,r.options,a),c=en(i,r.options,u),d={isCanceled:!1};i.kill=Yt.bind(null,i.kill.bind(i)),i.cancel=Jt.bind(null,i,d);let w=Lt(async()=>{let[{error:x,exitCode:m,signal:h,timedOut:v},D,W,En]=await dn(i,r.options,c),Ce=ve(r.options,D),Ge=ve(r.options,W),Re=ve(r.options,En);if(x||m!==0||h!==null){let ke=we({error:x,exitCode:m,signal:h,stdout:Ce,stderr:Ge,all:Re,command:o,escapedCommand:s,parsed:r,timedOut:v,isCanceled:d.isCanceled||(r.options.signal?r.options.signal.aborted:!1),killed:i.killed});if(!r.options.reject)return ke;throw ke}return{command:o,escapedCommand:s,exitCode:0,stdout:Ce,stderr:Ge,all:Re,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return un(i,r.options.input),i.all=ln(i,r.options),Ie(i,w)}var bn=require("fs"),xn=require("path/posix");var Ae=class{constructor(){let{cliPath:t,clientId:n,clientSecret:r,serverCertsPath:o}=(0,O.getPreferenceValues)(),s=re();if(this.cliPath=t||(process.arch=="arm64"?"/opt/homebrew/bin/bw":"/usr/local/bin/bw"),!(0,bn.existsSync)(this.cliPath))throw new Error(`Bitwarden CLI not found at ${this.cliPath}`);this.env={BITWARDENCLI_APPDATA_DIR:O.environment.supportPath,BW_CLIENTSECRET:r.trim(),BW_CLIENTID:n.trim(),PATH:(0,xn.dirname)(process.execPath)},s&&o&&(this.env.NODE_EXTRA_CA_CERTS=o),this.initPromise=this.checkServerUrl(s)}async checkServerUrl(t){if((await O.LocalStorage.getItem("cliServer")||"")===t)return;let r=await(0,O.showToast)({style:O.Toast.Style.Animated,title:"Switching server...",message:"Bitwarden server preference changed."});try{try{await this.exec(["logout"],{waitForInit:!1})}catch{}await this.exec(["config","server",t||Be],{waitForInit:!1}),await O.LocalStorage.setItem("cliServer",t),r.style=O.Toast.Style.Success,r.title="Success!",r.message="Bitwarden server changed."}catch(o){r.style=O.Toast.Style.Failure,r.title="Unable to switch server.",o instanceof Error?r.message=o.message:r.message="Unknown error occurred."}}async sync(t){await this.exec(["sync","--session",t])}async login(){await this.exec(["login","--apikey"])}async logout(){await this.exec(["logout"])}async listItems(t){let{stdout:n}=await this.exec(["list","items","--session",t]);return JSON.parse(n).filter(o=>!!o.name)}async getTotp(t,n){let{stdout:r}=await this.exec(["get","totp","--session",n,t]);return r}async unlock(t){let{stdout:n}=await this.exec(["unlock",t,"--raw"]);return n}async lock(){await this.exec(["lock"])}async status(){let{stdout:t}=await this.exec(["status"]);return JSON.parse(t)}async generatePassword(t,n){let r=t?Me(t):[],{stdout:o}=await this.exec(["generate",...r],{abortController:n});return o}async exec(t,n={}){let{abortController:r,waitForInit:o=!0}=n;return o&&await this.initPromise,Sn(this.cliPath,t,{env:this.env,input:"",signal:r?.signal})}};var E=require("@raycast/api"),Hr=require("react");function Pn(){return(0,E.showToast)(E.Toast.Style.Failure,"Bitwarden CLI not found"),_jsx(E.Detail,{markdown:`# The Bitwarden CLI was not found
## Please check that:

1. The Bitwarden CLI is [correctly installed](https://bitwarden.com/help/article/cli/#download-and-install)
1. If you did not install bitwarden using brew, please check that path of the installation matches the \`Bitwarden CLI Installation Path\` extension setting
`,actions:_jsx(E.ActionPanel,null,_jsx(E.Action.CopyToClipboard,{title:"Copy Homebrew Installation Command",content:"brew install bitwarden-cli"}),_jsx(E.Action.OpenInBrowser,{url:"https://bitwarden.com/help/article/cli/#download-and-install"}))})}var On=require("react"),Kr=()=>_jsx(p.Form.Description,{text:""});function Xr(){try{let e=new Ae;return _jsx(zr,{bitwardenApi:e})}catch{return _jsx(Pn,null)}}function zr({bitwardenApi:e}){let{password:t,regeneratePassword:n,isGenerating:r,options:o,setOption:s}=je(e);if(De(),!o)return _jsx(p.Detail,{isLoading:!0});let i=c=>s("passphrase",c==="passphrase"),a=c=>d=>{s(c,d)},u=o?.passphrase?"passphrase":"password";return _jsx(p.Form,{isLoading:r,actions:_jsx(p.ActionPanel,null,!!t&&_jsx(_jsxFragment,null,_jsx(p.Action.CopyToClipboard,{title:"Copy password",icon:p.Icon.Clipboard,content:t,shortcut:{key:"enter",modifiers:["cmd"]}}),_jsx(p.Action.Paste,{title:"Paste password to active app",icon:p.Icon.Text,content:t,shortcut:{key:"enter",modifiers:["cmd","shift"]}})),_jsx(p.Action,{title:"Regenerate password",icon:p.Icon.ArrowClockwise,onAction:n,shortcut:{key:"backspace",modifiers:["cmd"]}}),process.env.NODE_ENV==="development"&&_jsx(p.Action,{title:"Clear storage",icon:p.Icon.Trash,onAction:Jr}))},_jsx(p.Form.Description,{title:"\u{1F511}  Password",text:t??"Generating..."}),_jsx(Kr,null),_jsx(p.Form.Separator,null),_jsx(p.Form.Dropdown,{id:"type",title:"Type",value:u,onChange:i,autoFocus:!0},Object.keys(te).map(c=>_jsx(p.Form.Dropdown.Item,{key:c,value:c,title:$e(c)}))),Object.typedEntries(te[u]).map(([c,d])=>_jsx(Yr,{key:c,option:c,field:d,defaultValue:o[c],errorMessage:d.errorMessage,onChange:a(c)})))}function Yr({option:e,defaultValue:t="",onChange:n,errorMessage:r,field:o}){let{hint:s="",label:i,type:a}=o,[u,c]=(0,On.useState)(),d=g=>{Qr(e,g)?(n(g),c(void 0)):c(r)};return a==="boolean"?_jsx(p.Form.Checkbox,{key:e,id:e,title:i,label:s,defaultValue:Boolean(t),onChange:n}):_jsx(p.Form.TextField,{key:e,id:e,title:i,placeholder:s,defaultValue:String(t),onChange:d,error:u})}async function Jr(){for(let e of Object.values(A))await p.LocalStorage.removeItem(e)}function Qr(e,t){return e==="length"?!isNaN(Number(t))&&Number(t)>=5&&Number(t)<=128:e==="separator"?t.length===1:e==="words"?!isNaN(Number(t))&&Number(t)>=3&&Number(t)<=20:!0}var Zr=Xr;module.exports=kn(eo);0&&(module.exports={});