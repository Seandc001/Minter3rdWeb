import{bd as a,d9 as rs}from"./index-c333a099.js";var Bs=ps,ds=Object.prototype.hasOwnProperty;function ps(){for(var t={},e=0;e<arguments.length;e++){var s=arguments[e];for(var i in s)ds.call(s,i)&&(t[i]=s[i])}return t}const{Transform:zs}=rs;var ws=t=>class as extends zs{constructor(s,i,c,h,r){super(r),this._rate=s,this._capacity=i,this._delimitedSuffix=c,this._hashBitLength=h,this._options=r,this._state=new t,this._state.initialize(s,i),this._finalized=!1}_transform(s,i,c){let h=null;try{this.update(s,i)}catch(r){h=r}c(h)}_flush(s){let i=null;try{this.push(this.digest())}catch(c){i=c}s(i)}update(s,i){if(!a.Buffer.isBuffer(s)&&typeof s!="string")throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Digest already called");return a.Buffer.isBuffer(s)||(s=a.Buffer.from(s,i)),this._state.absorb(s),this}digest(s){if(this._finalized)throw new Error("Digest already called");this._finalized=!0,this._delimitedSuffix&&this._state.absorbLastFewBits(this._delimitedSuffix);let i=this._state.squeeze(this._hashBitLength/8);return s!==void 0&&(i=i.toString(s)),this._resetState(),i}_resetState(){return this._state.initialize(this._rate,this._capacity),this}_clone(){const s=new as(this._rate,this._capacity,this._delimitedSuffix,this._hashBitLength,this._options);return this._state.copy(s._state),s._finalized=this._finalized,s}};const{Transform:ks}=rs;var bs=t=>class ls extends ks{constructor(s,i,c,h){super(h),this._rate=s,this._capacity=i,this._delimitedSuffix=c,this._options=h,this._state=new t,this._state.initialize(s,i),this._finalized=!1}_transform(s,i,c){let h=null;try{this.update(s,i)}catch(r){h=r}c(h)}_flush(){}_read(s){this.push(this.squeeze(s))}update(s,i){if(!a.Buffer.isBuffer(s)&&typeof s!="string")throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Squeeze already called");return a.Buffer.isBuffer(s)||(s=a.Buffer.from(s,i)),this._state.absorb(s),this}squeeze(s,i){this._finalized||(this._finalized=!0,this._state.absorbLastFewBits(this._delimitedSuffix));let c=this._state.squeeze(s);return i!==void 0&&(c=c.toString(i)),c}_resetState(){return this._state.initialize(this._rate,this._capacity),this}_clone(){const s=new ls(this._rate,this._capacity,this._delimitedSuffix,this._options);return this._state.copy(s._state),s._finalized=this._finalized,s}};const Ss=ws,ys=bs;var xs=function(t){const e=Ss(t),s=ys(t);return function(i,c){switch(typeof i=="string"?i.toLowerCase():i){case"keccak224":return new e(1152,448,null,224,c);case"keccak256":return new e(1088,512,null,256,c);case"keccak384":return new e(832,768,null,384,c);case"keccak512":return new e(576,1024,null,512,c);case"sha3-224":return new e(1152,448,6,224,c);case"sha3-256":return new e(1088,512,6,256,c);case"sha3-384":return new e(832,768,6,384,c);case"sha3-512":return new e(576,1024,6,512,c);case"shake128":return new s(1344,256,31,c);case"shake256":return new s(1088,512,31,c);default:throw new Error("Invald algorithm: "+i)}}},us={};const hs=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648];us.p1600=function(t){for(let e=0;e<24;++e){const s=t[0]^t[10]^t[20]^t[30]^t[40],i=t[1]^t[11]^t[21]^t[31]^t[41],c=t[2]^t[12]^t[22]^t[32]^t[42],h=t[3]^t[13]^t[23]^t[33]^t[43],r=t[4]^t[14]^t[24]^t[34]^t[44],f=t[5]^t[15]^t[25]^t[35]^t[45],_=t[6]^t[16]^t[26]^t[36]^t[46],d=t[7]^t[17]^t[27]^t[37]^t[47],p=t[8]^t[18]^t[28]^t[38]^t[48],z=t[9]^t[19]^t[29]^t[39]^t[49];let o=p^(c<<1|h>>>31),n=z^(h<<1|c>>>31);const fs=t[0]^o,_s=t[1]^n,_t=t[10]^o,dt=t[11]^n,pt=t[20]^o,zt=t[21]^n,wt=t[30]^o,kt=t[31]^n,bt=t[40]^o,St=t[41]^n;o=s^(r<<1|f>>>31),n=i^(f<<1|r>>>31);const yt=t[2]^o,xt=t[3]^n,gt=t[12]^o,mt=t[13]^n,Bt=t[22]^o,vt=t[23]^n,qt=t[32]^o,Lt=t[33]^n,Et=t[42]^o,Tt=t[43]^n;o=c^(_<<1|d>>>31),n=h^(d<<1|_>>>31);const Dt=t[4]^o,Ot=t[5]^n,Ft=t[14]^o,jt=t[15]^n,Kt=t[24]^o,Nt=t[25]^n,Pt=t[34]^o,Ct=t[35]^n,Ut=t[44]^o,$t=t[45]^n;o=r^(p<<1|z>>>31),n=f^(z<<1|p>>>31);const At=t[6]^o,It=t[7]^n,Rt=t[16]^o,Gt=t[17]^n,Ht=t[26]^o,Jt=t[27]^n,Mt=t[36]^o,Qt=t[37]^n,Vt=t[46]^o,Wt=t[47]^n;o=_^(s<<1|i>>>31),n=d^(i<<1|s>>>31);const Xt=t[8]^o,Yt=t[9]^n,Zt=t[18]^o,ts=t[19]^n,ss=t[28]^o,is=t[29]^n,es=t[38]^o,os=t[39]^n,ns=t[48]^o,cs=t[49]^n,w=fs,k=_s,b=dt<<4|_t>>>28,S=_t<<4|dt>>>28,y=pt<<3|zt>>>29,x=zt<<3|pt>>>29,g=kt<<9|wt>>>23,m=wt<<9|kt>>>23,B=bt<<18|St>>>14,v=St<<18|bt>>>14,q=yt<<1|xt>>>31,L=xt<<1|yt>>>31,E=mt<<12|gt>>>20,T=gt<<12|mt>>>20,D=Bt<<10|vt>>>22,O=vt<<10|Bt>>>22,F=Lt<<13|qt>>>19,j=qt<<13|Lt>>>19,K=Et<<2|Tt>>>30,N=Tt<<2|Et>>>30,P=Ot<<30|Dt>>>2,C=Dt<<30|Ot>>>2,U=Ft<<6|jt>>>26,$=jt<<6|Ft>>>26,A=Nt<<11|Kt>>>21,I=Kt<<11|Nt>>>21,R=Pt<<15|Ct>>>17,G=Ct<<15|Pt>>>17,H=$t<<29|Ut>>>3,J=Ut<<29|$t>>>3,M=At<<28|It>>>4,Q=It<<28|At>>>4,V=Gt<<23|Rt>>>9,W=Rt<<23|Gt>>>9,X=Ht<<25|Jt>>>7,Y=Jt<<25|Ht>>>7,Z=Mt<<21|Qt>>>11,tt=Qt<<21|Mt>>>11,st=Wt<<24|Vt>>>8,it=Vt<<24|Wt>>>8,et=Xt<<27|Yt>>>5,ot=Yt<<27|Xt>>>5,nt=Zt<<20|ts>>>12,ct=ts<<20|Zt>>>12,ht=is<<7|ss>>>25,rt=ss<<7|is>>>25,at=es<<8|os>>>24,lt=os<<8|es>>>24,ut=ns<<14|cs>>>18,ft=cs<<14|ns>>>18;t[0]=w^~E&A,t[1]=k^~T&I,t[10]=M^~nt&y,t[11]=Q^~ct&x,t[20]=q^~U&X,t[21]=L^~$&Y,t[30]=et^~b&D,t[31]=ot^~S&O,t[40]=P^~V&ht,t[41]=C^~W&rt,t[2]=E^~A&Z,t[3]=T^~I&tt,t[12]=nt^~y&F,t[13]=ct^~x&j,t[22]=U^~X&at,t[23]=$^~Y&lt,t[32]=b^~D&R,t[33]=S^~O&G,t[42]=V^~ht&g,t[43]=W^~rt&m,t[4]=A^~Z&ut,t[5]=I^~tt&ft,t[14]=y^~F&H,t[15]=x^~j&J,t[24]=X^~at&B,t[25]=Y^~lt&v,t[34]=D^~R&st,t[35]=O^~G&it,t[44]=ht^~g&K,t[45]=rt^~m&N,t[6]=Z^~ut&w,t[7]=tt^~ft&k,t[16]=F^~H&M,t[17]=j^~J&Q,t[26]=at^~B&q,t[27]=lt^~v&L,t[36]=R^~st&et,t[37]=G^~it&ot,t[46]=g^~K&P,t[47]=m^~N&C,t[8]=ut^~w&E,t[9]=ft^~k&T,t[18]=H^~M&nt,t[19]=J^~Q&ct,t[28]=B^~q&U,t[29]=v^~L&$,t[38]=st^~et&b,t[39]=it^~ot&S,t[48]=K^~P&V,t[49]=N^~C&W,t[0]^=hs[e*2],t[1]^=hs[e*2+1]}};const u=us;function l(){this.state=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.blockSize=null,this.count=0,this.squeezing=!1}l.prototype.initialize=function(t,e){for(let s=0;s<50;++s)this.state[s]=0;this.blockSize=t/8,this.count=0,this.squeezing=!1};l.prototype.absorb=function(t){for(let e=0;e<t.length;++e)this.state[~~(this.count/4)]^=t[e]<<8*(this.count%4),this.count+=1,this.count===this.blockSize&&(u.p1600(this.state),this.count=0)};l.prototype.absorbLastFewBits=function(t){this.state[~~(this.count/4)]^=t<<8*(this.count%4),t&128&&this.count===this.blockSize-1&&u.p1600(this.state),this.state[~~((this.blockSize-1)/4)]^=128<<8*((this.blockSize-1)%4),u.p1600(this.state),this.count=0,this.squeezing=!0};l.prototype.squeeze=function(t){this.squeezing||this.absorbLastFewBits(1);const e=a.Buffer.alloc(t);for(let s=0;s<t;++s)e[s]=this.state[~~(this.count/4)]>>>8*(this.count%4)&255,this.count+=1,this.count===this.blockSize&&(u.p1600(this.state),this.count=0);return e};l.prototype.copy=function(t){for(let e=0;e<50;++e)t.state[e]=this.state[e];t.blockSize=this.blockSize,t.count=this.count,t.squeezing=this.squeezing};var gs=l,vs=xs(gs);export{Bs as i,vs as j};
