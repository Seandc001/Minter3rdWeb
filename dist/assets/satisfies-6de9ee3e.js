import{cu as De}from"./index-1222a2a5.js";var se={exports:{}};const Ge="2.0.0",ve=256,xe=Number.MAX_SAFE_INTEGER||9007199254740991,we=16,be=ve-6,Fe=["major","premajor","minor","preminor","patch","prepatch","prerelease"];var ie={MAX_LENGTH:ve,MAX_SAFE_COMPONENT_LENGTH:we,MAX_SAFE_BUILD_LENGTH:be,MAX_SAFE_INTEGER:xe,RELEASE_TYPES:Fe,SEMVER_SPEC_VERSION:Ge,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2};const Xe=typeof De=="object"&&{}&&{}.NODE_DEBUG&&/\bsemver\b/i.test({}.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};var K=Xe;(function(t,e){const{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:s,MAX_LENGTH:n}=ie,o=K;e=t.exports={};const d=e.re=[],O=e.safeRe=[],i=e.src=[],h=e.t={};let R=0;const L="[a-zA-Z0-9-]",D=[["\\s",1],["\\d",n],[L,s]],J=w=>{for(const[y,b]of D)w=w.split(`${y}*`).join(`${y}{0,${b}}`).split(`${y}+`).join(`${y}{1,${b}}`);return w},f=(w,y,b)=>{const T=J(y),F=R++;o(w,F,y),h[w]=F,i[F]=y,d[F]=new RegExp(y,b?"g":void 0),O[F]=new RegExp(T,b?"g":void 0)};f("NUMERICIDENTIFIER","0|[1-9]\\d*"),f("NUMERICIDENTIFIERLOOSE","\\d+"),f("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${L}*`),f("MAINVERSION",`(${i[h.NUMERICIDENTIFIER]})\\.(${i[h.NUMERICIDENTIFIER]})\\.(${i[h.NUMERICIDENTIFIER]})`),f("MAINVERSIONLOOSE",`(${i[h.NUMERICIDENTIFIERLOOSE]})\\.(${i[h.NUMERICIDENTIFIERLOOSE]})\\.(${i[h.NUMERICIDENTIFIERLOOSE]})`),f("PRERELEASEIDENTIFIER",`(?:${i[h.NUMERICIDENTIFIER]}|${i[h.NONNUMERICIDENTIFIER]})`),f("PRERELEASEIDENTIFIERLOOSE",`(?:${i[h.NUMERICIDENTIFIERLOOSE]}|${i[h.NONNUMERICIDENTIFIER]})`),f("PRERELEASE",`(?:-(${i[h.PRERELEASEIDENTIFIER]}(?:\\.${i[h.PRERELEASEIDENTIFIER]})*))`),f("PRERELEASELOOSE",`(?:-?(${i[h.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[h.PRERELEASEIDENTIFIERLOOSE]})*))`),f("BUILDIDENTIFIER",`${L}+`),f("BUILD",`(?:\\+(${i[h.BUILDIDENTIFIER]}(?:\\.${i[h.BUILDIDENTIFIER]})*))`),f("FULLPLAIN",`v?${i[h.MAINVERSION]}${i[h.PRERELEASE]}?${i[h.BUILD]}?`),f("FULL",`^${i[h.FULLPLAIN]}$`),f("LOOSEPLAIN",`[v=\\s]*${i[h.MAINVERSIONLOOSE]}${i[h.PRERELEASELOOSE]}?${i[h.BUILD]}?`),f("LOOSE",`^${i[h.LOOSEPLAIN]}$`),f("GTLT","((?:<|>)?=?)"),f("XRANGEIDENTIFIERLOOSE",`${i[h.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),f("XRANGEIDENTIFIER",`${i[h.NUMERICIDENTIFIER]}|x|X|\\*`),f("XRANGEPLAIN",`[v=\\s]*(${i[h.XRANGEIDENTIFIER]})(?:\\.(${i[h.XRANGEIDENTIFIER]})(?:\\.(${i[h.XRANGEIDENTIFIER]})(?:${i[h.PRERELEASE]})?${i[h.BUILD]}?)?)?`),f("XRANGEPLAINLOOSE",`[v=\\s]*(${i[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[h.XRANGEIDENTIFIERLOOSE]})(?:${i[h.PRERELEASELOOSE]})?${i[h.BUILD]}?)?)?`),f("XRANGE",`^${i[h.GTLT]}\\s*${i[h.XRANGEPLAIN]}$`),f("XRANGELOOSE",`^${i[h.GTLT]}\\s*${i[h.XRANGEPLAINLOOSE]}$`),f("COERCEPLAIN",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`),f("COERCE",`${i[h.COERCEPLAIN]}(?:$|[^\\d])`),f("COERCEFULL",i[h.COERCEPLAIN]+`(?:${i[h.PRERELEASE]})?(?:${i[h.BUILD]})?(?:$|[^\\d])`),f("COERCERTL",i[h.COERCE],!0),f("COERCERTLFULL",i[h.COERCEFULL],!0),f("LONETILDE","(?:~>?)"),f("TILDETRIM",`(\\s*)${i[h.LONETILDE]}\\s+`,!0),e.tildeTrimReplace="$1~",f("TILDE",`^${i[h.LONETILDE]}${i[h.XRANGEPLAIN]}$`),f("TILDELOOSE",`^${i[h.LONETILDE]}${i[h.XRANGEPLAINLOOSE]}$`),f("LONECARET","(?:\\^)"),f("CARETTRIM",`(\\s*)${i[h.LONECARET]}\\s+`,!0),e.caretTrimReplace="$1^",f("CARET",`^${i[h.LONECARET]}${i[h.XRANGEPLAIN]}$`),f("CARETLOOSE",`^${i[h.LONECARET]}${i[h.XRANGEPLAINLOOSE]}$`),f("COMPARATORLOOSE",`^${i[h.GTLT]}\\s*(${i[h.LOOSEPLAIN]})$|^$`),f("COMPARATOR",`^${i[h.GTLT]}\\s*(${i[h.FULLPLAIN]})$|^$`),f("COMPARATORTRIM",`(\\s*)${i[h.GTLT]}\\s*(${i[h.LOOSEPLAIN]}|${i[h.XRANGEPLAIN]})`,!0),e.comparatorTrimReplace="$1$2$3",f("HYPHENRANGE",`^\\s*(${i[h.XRANGEPLAIN]})\\s+-\\s+(${i[h.XRANGEPLAIN]})\\s*$`),f("HYPHENRANGELOOSE",`^\\s*(${i[h.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[h.XRANGEPLAINLOOSE]})\\s*$`),f("STAR","(<|>)?=?\\s*\\*"),f("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),f("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(se,se.exports);var ne=se.exports;const Ue=Object.freeze({loose:!0}),_e=Object.freeze({}),je=t=>t?typeof t!="object"?Ue:t:_e;var ae=je;const le=/^[0-9]+$/,Ne=(t,e)=>{const r=le.test(t),s=le.test(e);return r&&s&&(t=+t,e=+e),t===e?0:r&&!s?-1:s&&!r?1:t<e?-1:1},He=(t,e)=>Ne(e,t);var Ve={compareIdentifiers:Ne,rcompareIdentifiers:He};const z=K,{MAX_LENGTH:oe,MAX_SAFE_INTEGER:B}=ie,{safeRe:ue,t:ce}=ne,qe=ae,{compareIdentifiers:j}=Ve;let Me=class C{constructor(e,r){if(r=qe(r),e instanceof C){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>oe)throw new TypeError(`version is longer than ${oe} characters`);z("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;const s=e.trim().match(r.loose?ue[ce.LOOSE]:ue[ce.FULL]);if(!s)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+s[1],this.minor=+s[2],this.patch=+s[3],this.major>B||this.major<0)throw new TypeError("Invalid major version");if(this.minor>B||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>B||this.patch<0)throw new TypeError("Invalid patch version");s[4]?this.prerelease=s[4].split(".").map(n=>{if(/^[0-9]+$/.test(n)){const o=+n;if(o>=0&&o<B)return o}return n}):this.prerelease=[],this.build=s[5]?s[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(z("SemVer.compare",this.version,this.options,e),!(e instanceof C)){if(typeof e=="string"&&e===this.version)return 0;e=new C(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof C||(e=new C(e,this.options)),j(this.major,e.major)||j(this.minor,e.minor)||j(this.patch,e.patch)}comparePre(e){if(e instanceof C||(e=new C(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{const s=this.prerelease[r],n=e.prerelease[r];if(z("prerelease compare",r,s,n),s===void 0&&n===void 0)return 0;if(n===void 0)return 1;if(s===void 0)return-1;if(s===n)continue;return j(s,n)}while(++r)}compareBuild(e){e instanceof C||(e=new C(e,this.options));let r=0;do{const s=this.build[r],n=e.build[r];if(z("prerelease compare",r,s,n),s===void 0&&n===void 0)return 0;if(n===void 0)return 1;if(s===void 0)return-1;if(s===n)continue;return j(s,n)}while(++r)}inc(e,r,s){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,s);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,s);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,s),this.inc("pre",r,s);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,s),this.inc("pre",r,s);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const n=Number(s)?1:0;if(!r&&s===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[n];else{let o=this.prerelease.length;for(;--o>=0;)typeof this.prerelease[o]=="number"&&(this.prerelease[o]++,o=-2);if(o===-1){if(r===this.prerelease.join(".")&&s===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(n)}}if(r){let o=[r,n];s===!1&&(o=[r]),j(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=o):this.prerelease=o}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};var he=Me;const Ee=he,We=(t,e,r)=>new Ee(t,r).compare(new Ee(e,r));var q=We;const Ye=q,ze=(t,e,r)=>Ye(t,e,r)>0;var Be=ze;const Ze=q,Ke=(t,e,r)=>Ze(t,e,r)<0;var Je=Ke;const Qe=q,ke=(t,e,r)=>Qe(t,e,r)===0;var et=ke;const tt=q,rt=(t,e,r)=>tt(t,e,r)!==0;var st=rt;const it=q,nt=(t,e,r)=>it(t,e,r)>=0;var at=nt;const ht=q,lt=(t,e,r)=>ht(t,e,r)<=0;var ot=lt;const ut=et,ct=st,Et=Be,ft=at,pt=Je,$t=ot,Rt=(t,e,r,s)=>{switch(e){case"===":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t===r;case"!==":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t!==r;case"":case"=":case"==":return ut(t,r,s);case"!=":return ct(t,r,s);case">":return Et(t,r,s);case">=":return ft(t,r,s);case"<":return pt(t,r,s);case"<=":return $t(t,r,s);default:throw new TypeError(`Invalid operator: ${e}`)}};var It=Rt,Q,fe;function vt(){return fe||(fe=1,Q=function(t){t.prototype[Symbol.iterator]=function*(){for(let e=this.head;e;e=e.next)yield e.value}}),Q}var Nt=v;v.Node=_;v.create=v;function v(t){var e=this;if(e instanceof v||(e=new v),e.tail=null,e.head=null,e.length=0,t&&typeof t.forEach=="function")t.forEach(function(n){e.push(n)});else if(arguments.length>0)for(var r=0,s=arguments.length;r<s;r++)e.push(arguments[r]);return e}v.prototype.removeNode=function(t){if(t.list!==this)throw new Error("removing node which does not belong to this list");var e=t.next,r=t.prev;return e&&(e.prev=r),r&&(r.next=e),t===this.head&&(this.head=e),t===this.tail&&(this.tail=r),t.list.length--,t.next=null,t.prev=null,t.list=null,e};v.prototype.unshiftNode=function(t){if(t!==this.head){t.list&&t.list.removeNode(t);var e=this.head;t.list=this,t.next=e,e&&(e.prev=t),this.head=t,this.tail||(this.tail=t),this.length++}};v.prototype.pushNode=function(t){if(t!==this.tail){t.list&&t.list.removeNode(t);var e=this.tail;t.list=this,t.prev=e,e&&(e.next=t),this.tail=t,this.head||(this.head=t),this.length++}};v.prototype.push=function(){for(var t=0,e=arguments.length;t<e;t++)At(this,arguments[t]);return this.length};v.prototype.unshift=function(){for(var t=0,e=arguments.length;t<e;t++)Ot(this,arguments[t]);return this.length};v.prototype.pop=function(){if(this.tail){var t=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,t}};v.prototype.shift=function(){if(this.head){var t=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,t}};v.prototype.forEach=function(t,e){e=e||this;for(var r=this.head,s=0;r!==null;s++)t.call(e,r.value,s,this),r=r.next};v.prototype.forEachReverse=function(t,e){e=e||this;for(var r=this.tail,s=this.length-1;r!==null;s--)t.call(e,r.value,s,this),r=r.prev};v.prototype.get=function(t){for(var e=0,r=this.head;r!==null&&e<t;e++)r=r.next;if(e===t&&r!==null)return r.value};v.prototype.getReverse=function(t){for(var e=0,r=this.tail;r!==null&&e<t;e++)r=r.prev;if(e===t&&r!==null)return r.value};v.prototype.map=function(t,e){e=e||this;for(var r=new v,s=this.head;s!==null;)r.push(t.call(e,s.value,this)),s=s.next;return r};v.prototype.mapReverse=function(t,e){e=e||this;for(var r=new v,s=this.tail;s!==null;)r.push(t.call(e,s.value,this)),s=s.prev;return r};v.prototype.reduce=function(t,e){var r,s=this.head;if(arguments.length>1)r=e;else if(this.head)s=this.head.next,r=this.head.value;else throw new TypeError("Reduce of empty list with no initial value");for(var n=0;s!==null;n++)r=t(r,s.value,n),s=s.next;return r};v.prototype.reduceReverse=function(t,e){var r,s=this.tail;if(arguments.length>1)r=e;else if(this.tail)s=this.tail.prev,r=this.tail.value;else throw new TypeError("Reduce of empty list with no initial value");for(var n=this.length-1;s!==null;n--)r=t(r,s.value,n),s=s.prev;return r};v.prototype.toArray=function(){for(var t=new Array(this.length),e=0,r=this.head;r!==null;e++)t[e]=r.value,r=r.next;return t};v.prototype.toArrayReverse=function(){for(var t=new Array(this.length),e=0,r=this.tail;r!==null;e++)t[e]=r.value,r=r.prev;return t};v.prototype.slice=function(t,e){e=e||this.length,e<0&&(e+=this.length),t=t||0,t<0&&(t+=this.length);var r=new v;if(e<t||e<0)return r;t<0&&(t=0),e>this.length&&(e=this.length);for(var s=0,n=this.head;n!==null&&s<t;s++)n=n.next;for(;n!==null&&s<e;s++,n=n.next)r.push(n.value);return r};v.prototype.sliceReverse=function(t,e){e=e||this.length,e<0&&(e+=this.length),t=t||0,t<0&&(t+=this.length);var r=new v;if(e<t||e<0)return r;t<0&&(t=0),e>this.length&&(e=this.length);for(var s=this.length,n=this.tail;n!==null&&s>e;s--)n=n.prev;for(;n!==null&&s>t;s--,n=n.prev)r.push(n.value);return r};v.prototype.splice=function(t,e,...r){t>this.length&&(t=this.length-1),t<0&&(t=this.length+t);for(var s=0,n=this.head;n!==null&&s<t;s++)n=n.next;for(var o=[],s=0;n&&s<e;s++)o.push(n.value),n=this.removeNode(n);n===null&&(n=this.tail),n!==this.head&&n!==this.tail&&(n=n.prev);for(var s=0;s<r.length;s++)n=Lt(this,n,r[s]);return o};v.prototype.reverse=function(){for(var t=this.head,e=this.tail,r=t;r!==null;r=r.prev){var s=r.prev;r.prev=r.next,r.next=s}return this.head=e,this.tail=t,this};function Lt(t,e,r){var s=e===t.head?new _(r,null,e,t):new _(r,e,e.next,t);return s.next===null&&(t.tail=s),s.prev===null&&(t.head=s),t.length++,s}function At(t,e){t.tail=new _(e,t.tail,null,t),t.head||(t.head=t.tail),t.length++}function Ot(t,e){t.head=new _(e,null,t.head,t),t.tail||(t.tail=t.head),t.length++}function _(t,e,r,s){if(!(this instanceof _))return new _(t,e,r,s);this.list=s,this.value=t,e?(e.next=this,this.prev=e):this.prev=null,r?(r.prev=this,this.next=r):this.next=null}try{vt()(v)}catch{}const gt=Nt,X=Symbol("max"),x=Symbol("length"),H=Symbol("lengthCalculator"),Y=Symbol("allowStale"),U=Symbol("maxAge"),G=Symbol("dispose"),pe=Symbol("noDisposeOnSet"),m=Symbol("lruList"),P=Symbol("cache"),Le=Symbol("updateAgeOnGet"),k=()=>1;class mt{constructor(e){if(typeof e=="number"&&(e={max:e}),e||(e={}),e.max&&(typeof e.max!="number"||e.max<0))throw new TypeError("max must be a non-negative number");this[X]=e.max||1/0;const r=e.length||k;if(this[H]=typeof r!="function"?k:r,this[Y]=e.stale||!1,e.maxAge&&typeof e.maxAge!="number")throw new TypeError("maxAge must be a number");this[U]=e.maxAge||0,this[G]=e.dispose,this[pe]=e.noDisposeOnSet||!1,this[Le]=e.updateAgeOnGet||!1,this.reset()}set max(e){if(typeof e!="number"||e<0)throw new TypeError("max must be a non-negative number");this[X]=e||1/0,W(this)}get max(){return this[X]}set allowStale(e){this[Y]=!!e}get allowStale(){return this[Y]}set maxAge(e){if(typeof e!="number")throw new TypeError("maxAge must be a non-negative number");this[U]=e,W(this)}get maxAge(){return this[U]}set lengthCalculator(e){typeof e!="function"&&(e=k),e!==this[H]&&(this[H]=e,this[x]=0,this[m].forEach(r=>{r.length=this[H](r.value,r.key),this[x]+=r.length})),W(this)}get lengthCalculator(){return this[H]}get length(){return this[x]}get itemCount(){return this[m].length}rforEach(e,r){r=r||this;for(let s=this[m].tail;s!==null;){const n=s.prev;$e(this,e,s,r),s=n}}forEach(e,r){r=r||this;for(let s=this[m].head;s!==null;){const n=s.next;$e(this,e,s,r),s=n}}keys(){return this[m].toArray().map(e=>e.key)}values(){return this[m].toArray().map(e=>e.value)}reset(){this[G]&&this[m]&&this[m].length&&this[m].forEach(e=>this[G](e.key,e.value)),this[P]=new Map,this[m]=new gt,this[x]=0}dump(){return this[m].map(e=>Z(this,e)?!1:{k:e.key,v:e.value,e:e.now+(e.maxAge||0)}).toArray().filter(e=>e)}dumpLru(){return this[m]}set(e,r,s){if(s=s||this[U],s&&typeof s!="number")throw new TypeError("maxAge must be a number");const n=s?Date.now():0,o=this[H](r,e);if(this[P].has(e)){if(o>this[X])return V(this,this[P].get(e)),!1;const i=this[P].get(e).value;return this[G]&&(this[pe]||this[G](e,i.value)),i.now=n,i.maxAge=s,i.value=r,this[x]+=o-i.length,i.length=o,this.get(e),W(this),!0}const d=new Tt(e,r,o,n,s);return d.length>this[X]?(this[G]&&this[G](e,r),!1):(this[x]+=d.length,this[m].unshift(d),this[P].set(e,this[m].head),W(this),!0)}has(e){if(!this[P].has(e))return!1;const r=this[P].get(e).value;return!Z(this,r)}get(e){return ee(this,e,!0)}peek(e){return ee(this,e,!1)}pop(){const e=this[m].tail;return e?(V(this,e),e.value):null}del(e){V(this,this[P].get(e))}load(e){this.reset();const r=Date.now();for(let s=e.length-1;s>=0;s--){const n=e[s],o=n.e||0;if(o===0)this.set(n.k,n.v);else{const d=o-r;d>0&&this.set(n.k,n.v,d)}}}prune(){this[P].forEach((e,r)=>ee(this,r,!1))}}const ee=(t,e,r)=>{const s=t[P].get(e);if(s){const n=s.value;if(Z(t,n)){if(V(t,s),!t[Y])return}else r&&(t[Le]&&(s.value.now=Date.now()),t[m].unshiftNode(s));return n.value}},Z=(t,e)=>{if(!e||!e.maxAge&&!t[U])return!1;const r=Date.now()-e.now;return e.maxAge?r>e.maxAge:t[U]&&r>t[U]},W=t=>{if(t[x]>t[X])for(let e=t[m].tail;t[x]>t[X]&&e!==null;){const r=e.prev;V(t,e),e=r}},V=(t,e)=>{if(e){const r=e.value;t[G]&&t[G](r.key,r.value),t[x]-=r.length,t[P].delete(r.key),t[m].removeNode(e)}};class Tt{constructor(e,r,s,n,o){this.key=e,this.value=r,this.length=s,this.now=n,this.maxAge=o||0}}const $e=(t,e,r,s)=>{let n=r.value;Z(t,n)&&(V(t,r),t[Y]||(n=void 0)),n&&e.call(s,n.value,n.key,t)};var dt=mt,te,Re;function Ae(){if(Re)return te;Re=1;class t{constructor(a,p){if(p=s(p),a instanceof t)return a.loose===!!p.loose&&a.includePrerelease===!!p.includePrerelease?a:new t(a.raw,p);if(a instanceof n)return this.raw=a.value,this.set=[[a]],this.format(),this;if(this.options=p,this.loose=!!p.loose,this.includePrerelease=!!p.includePrerelease,this.raw=a.trim().split(/\s+/).join(" "),this.set=this.raw.split("||").map(c=>this.parseRange(c.trim())).filter(c=>c.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const c=this.set[0];if(this.set=this.set.filter(E=>!f(E[0])),this.set.length===0)this.set=[c];else if(this.set.length>1){for(const E of this.set)if(E.length===1&&w(E[0])){this.set=[E];break}}}this.format()}format(){return this.range=this.set.map(a=>a.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(a){const c=((this.options.includePrerelease&&D)|(this.options.loose&&J))+":"+a,E=r.get(c);if(E)return E;const u=this.options.loose,$=u?O[i.HYPHENRANGELOOSE]:O[i.HYPHENRANGE];a=a.replace($,Pe(this.options.includePrerelease)),o("hyphen replace",a),a=a.replace(O[i.COMPARATORTRIM],h),o("comparator trim",a),a=a.replace(O[i.TILDETRIM],R),o("tilde trim",a),a=a.replace(O[i.CARETTRIM],L),o("caret trim",a);let N=a.split(" ").map(g=>b(g,this.options)).join(" ").split(/\s+/).map(g=>ye(g,this.options));u&&(N=N.filter(g=>(o("loose invalid filter",g,this.options),!!g.match(O[i.COMPARATORLOOSE])))),o("range list",N);const I=new Map,A=N.map(g=>new n(g,this.options));for(const g of A){if(f(g))return[g];I.set(g.value,g)}I.size>1&&I.has("")&&I.delete("");const S=[...I.values()];return r.set(c,S),S}intersects(a,p){if(!(a instanceof t))throw new TypeError("a Range is required");return this.set.some(c=>y(c,p)&&a.set.some(E=>y(E,p)&&c.every(u=>E.every($=>u.intersects($,p)))))}test(a){if(!a)return!1;if(typeof a=="string")try{a=new d(a,this.options)}catch{return!1}for(let p=0;p<this.set.length;p++)if(Ce(this.set[p],a,this.options))return!0;return!1}}te=t;const e=dt,r=new e({max:1e3}),s=ae,n=St(),o=K,d=he,{safeRe:O,t:i,comparatorTrimReplace:h,tildeTrimReplace:R,caretTrimReplace:L}=ne,{FLAG_INCLUDE_PRERELEASE:D,FLAG_LOOSE:J}=ie,f=l=>l.value==="<0.0.0-0",w=l=>l.value==="",y=(l,a)=>{let p=!0;const c=l.slice();let E=c.pop();for(;p&&c.length;)p=c.every(u=>E.intersects(u,a)),E=c.pop();return p},b=(l,a)=>(o("comp",l,a),l=ge(l,a),o("caret",l),l=F(l,a),o("tildes",l),l=Te(l,a),o("xrange",l),l=Se(l,a),o("stars",l),l),T=l=>!l||l.toLowerCase()==="x"||l==="*",F=(l,a)=>l.trim().split(/\s+/).map(p=>Oe(p,a)).join(" "),Oe=(l,a)=>{const p=a.loose?O[i.TILDELOOSE]:O[i.TILDE];return l.replace(p,(c,E,u,$,N)=>{o("tilde",l,c,E,u,$,N);let I;return T(E)?I="":T(u)?I=`>=${E}.0.0 <${+E+1}.0.0-0`:T($)?I=`>=${E}.${u}.0 <${E}.${+u+1}.0-0`:N?(o("replaceTilde pr",N),I=`>=${E}.${u}.${$}-${N} <${E}.${+u+1}.0-0`):I=`>=${E}.${u}.${$} <${E}.${+u+1}.0-0`,o("tilde return",I),I})},ge=(l,a)=>l.trim().split(/\s+/).map(p=>me(p,a)).join(" "),me=(l,a)=>{o("caret",l,a);const p=a.loose?O[i.CARETLOOSE]:O[i.CARET],c=a.includePrerelease?"-0":"";return l.replace(p,(E,u,$,N,I)=>{o("caret",l,E,u,$,N,I);let A;return T(u)?A="":T($)?A=`>=${u}.0.0${c} <${+u+1}.0.0-0`:T(N)?u==="0"?A=`>=${u}.${$}.0${c} <${u}.${+$+1}.0-0`:A=`>=${u}.${$}.0${c} <${+u+1}.0.0-0`:I?(o("replaceCaret pr",I),u==="0"?$==="0"?A=`>=${u}.${$}.${N}-${I} <${u}.${$}.${+N+1}-0`:A=`>=${u}.${$}.${N}-${I} <${u}.${+$+1}.0-0`:A=`>=${u}.${$}.${N}-${I} <${+u+1}.0.0-0`):(o("no pr"),u==="0"?$==="0"?A=`>=${u}.${$}.${N}${c} <${u}.${$}.${+N+1}-0`:A=`>=${u}.${$}.${N}${c} <${u}.${+$+1}.0-0`:A=`>=${u}.${$}.${N} <${+u+1}.0.0-0`),o("caret return",A),A})},Te=(l,a)=>(o("replaceXRanges",l,a),l.split(/\s+/).map(p=>de(p,a)).join(" ")),de=(l,a)=>{l=l.trim();const p=a.loose?O[i.XRANGELOOSE]:O[i.XRANGE];return l.replace(p,(c,E,u,$,N,I)=>{o("xRange",l,c,E,u,$,N,I);const A=T(u),S=A||T($),g=S||T(N),M=g;return E==="="&&M&&(E=""),I=a.includePrerelease?"-0":"",A?E===">"||E==="<"?c="<0.0.0-0":c="*":E&&M?(S&&($=0),N=0,E===">"?(E=">=",S?(u=+u+1,$=0,N=0):($=+$+1,N=0)):E==="<="&&(E="<",S?u=+u+1:$=+$+1),E==="<"&&(I="-0"),c=`${E+u}.${$}.${N}${I}`):S?c=`>=${u}.0.0${I} <${+u+1}.0.0-0`:g&&(c=`>=${u}.${$}.0${I} <${u}.${+$+1}.0-0`),o("xRange return",c),c})},Se=(l,a)=>(o("replaceStars",l,a),l.trim().replace(O[i.STAR],"")),ye=(l,a)=>(o("replaceGTE0",l,a),l.trim().replace(O[a.includePrerelease?i.GTE0PRE:i.GTE0],"")),Pe=l=>(a,p,c,E,u,$,N,I,A,S,g,M,Ct)=>(T(c)?p="":T(E)?p=`>=${c}.0.0${l?"-0":""}`:T(u)?p=`>=${c}.${E}.0${l?"-0":""}`:$?p=`>=${p}`:p=`>=${p}${l?"-0":""}`,T(A)?I="":T(S)?I=`<${+A+1}.0.0-0`:T(g)?I=`<${A}.${+S+1}.0-0`:M?I=`<=${A}.${S}.${g}-${M}`:l?I=`<${A}.${S}.${+g+1}-0`:I=`<=${I}`,`${p} ${I}`.trim()),Ce=(l,a,p)=>{for(let c=0;c<l.length;c++)if(!l[c].test(a))return!1;if(a.prerelease.length&&!p.includePrerelease){for(let c=0;c<l.length;c++)if(o(l[c].semver),l[c].semver!==n.ANY&&l[c].semver.prerelease.length>0){const E=l[c].semver;if(E.major===a.major&&E.minor===a.minor&&E.patch===a.patch)return!0}return!1}return!0};return te}var re,Ie;function St(){if(Ie)return re;Ie=1;const t=Symbol("SemVer ANY");class e{static get ANY(){return t}constructor(R,L){if(L=r(L),R instanceof e){if(R.loose===!!L.loose)return R;R=R.value}R=R.trim().split(/\s+/).join(" "),d("comparator",R,L),this.options=L,this.loose=!!L.loose,this.parse(R),this.semver===t?this.value="":this.value=this.operator+this.semver.version,d("comp",this)}parse(R){const L=this.options.loose?s[n.COMPARATORLOOSE]:s[n.COMPARATOR],D=R.match(L);if(!D)throw new TypeError(`Invalid comparator: ${R}`);this.operator=D[1]!==void 0?D[1]:"",this.operator==="="&&(this.operator=""),D[2]?this.semver=new O(D[2],this.options.loose):this.semver=t}toString(){return this.value}test(R){if(d("Comparator.test",R,this.options.loose),this.semver===t||R===t)return!0;if(typeof R=="string")try{R=new O(R,this.options)}catch{return!1}return o(R,this.operator,this.semver,this.options)}intersects(R,L){if(!(R instanceof e))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new i(R.value,L).test(this.value):R.operator===""?R.value===""?!0:new i(this.value,L).test(R.semver):(L=r(L),L.includePrerelease&&(this.value==="<0.0.0-0"||R.value==="<0.0.0-0")||!L.includePrerelease&&(this.value.startsWith("<0.0.0")||R.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&R.operator.startsWith(">")||this.operator.startsWith("<")&&R.operator.startsWith("<")||this.semver.version===R.semver.version&&this.operator.includes("=")&&R.operator.includes("=")||o(this.semver,"<",R.semver,L)&&this.operator.startsWith(">")&&R.operator.startsWith("<")||o(this.semver,">",R.semver,L)&&this.operator.startsWith("<")&&R.operator.startsWith(">")))}}re=e;const r=ae,{safeRe:s,t:n}=ne,o=It,d=K,O=he,i=Ae();return re}const yt=Ae(),Pt=(t,e,r)=>{try{e=new yt(e,r)}catch{return!1}return e.test(t)};var Gt=Pt;export{Ae as a,St as b,q as c,Gt as d,ot as e,at as f,Be as g,ie as h,Ve as i,et as j,It as k,Je as l,st as n,ne as r,he as s};
