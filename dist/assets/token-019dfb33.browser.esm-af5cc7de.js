var w=Object.defineProperty;var C=(i,e,t)=>e in i?w(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var o=(i,e,t)=>(C(i,typeof e!="symbol"?e+"":e,t),t);import{N as y,o as T,A as b,p as v,bW as E,q as A,r as R,s as S,G as B,J as g,t as O,v as u,x as p,T as m,B as f,Z as F}from"./index-1222a2a5.js";import{C as V}from"./contract-interceptor-d7b164a7.browser.esm-7eabd2ea.js";import{C as x}from"./contract-platform-fee-fda88a0f.browser.esm-a0071dce.js";import{C as M}from"./contract-roles-65ac12a4.browser.esm-67778582.js";import{C as N}from"./contract-sales-5f56e732.browser.esm-7e24621c.js";import{a as P}from"./erc-20-41afddd1.browser.esm-5cd39490.js";import{S as D}from"./erc-20-standard-e65ec1fb.browser.esm-5a6e9417.js";import"./drop-claim-conditions-125436e5.browser.esm-a2b359cd.js";import"./index-745c8d1e.js";class H{constructor(e,t){this.contractWrapper=e,this.events=t}async getAllHolderBalances(){const t=(await this.events.getEvents("Transfer")).map(a=>a.data),r={};t.forEach(a=>{const n=a==null?void 0:a.from,c=a==null?void 0:a.to,d=a==null?void 0:a.value;n!==u&&(n in r||(r[n]=f.from(0)),r[n]=r[n].sub(d)),c!==u&&(c in r||(r[c]=f.from(0)),r[c]=r[c].add(d))});const s=Object.entries(r),l=await Promise.all(s.map(a=>{let[,n]=a;return F(this.contractWrapper.getProvider(),this.contractWrapper.address,n)}));return s.map((a,n)=>{let[c]=a;return{holder:c,balance:l[n]}})}}const h=class h extends D{constructor(t,r,s){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new T(t,r,a,l,s);super(c,s,n);o(this,"mint",p(async t=>this.erc20.mint.prepare(t)));o(this,"mintTo",p(async(t,r)=>this.erc20.mintTo.prepare(t,r)));o(this,"mintBatchTo",p(async t=>this.erc20.mintBatchTo.prepare(t)));o(this,"delegateTo",p(async t=>m.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await g(t)]})));o(this,"burn",p(t=>this.erc20.burn.prepare(t)));o(this,"burnFrom",p(async(t,r)=>this.erc20.burnFrom.prepare(t,r)));this.abi=b.parse(a||[]),this.metadata=new v(this.contractWrapper,E,this.storage),this.app=new A(this.contractWrapper,this.metadata,this.storage),this.roles=new M(this.contractWrapper,h.contractRoles),this.sales=new N(this.contractWrapper),this.events=new R(this.contractWrapper),this.history=new H(this.contractWrapper,this.events),this.encoder=new S(this.contractWrapper),this.estimator=new B(this.contractWrapper),this.platformFees=new x(this.contractWrapper),this.interceptor=new V(this.contractWrapper),this.signature=new P(this.contractWrapper,this.roles)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.read("getVotes",[t]))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.read("delegates",[await g(t)])}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[O("transfer"),u])}async getMintTransaction(t,r){return this.erc20.getMintTransaction(t,r)}async prepare(t,r,s){return m.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:s})}async call(t,r,s){return this.contractWrapper.call(t,r,s)}};o(h,"contractRoles",y);let W=h;export{W as Token};
