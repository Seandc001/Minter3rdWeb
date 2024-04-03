var u=Object.defineProperty;var d=(s,a,t)=>a in s?u(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;var o=(s,a,t)=>(d(s,typeof a!="symbol"?a+"":a,t),t);import{N as g,o as C,A as f,p as w,D as y,q as W,r as T,s as A,G as R,t as E,v as k,x as i,T as v,B as S}from"./index-5ec2ec01.js";import{C as b}from"./contract-interceptor-d7b164a7.browser.esm-7eabd2ea.js";import{C as N,a as O}from"./contract-owner-14a6d0f9.browser.esm-116fc1c1.js";import{C as B}from"./contract-platform-fee-fda88a0f.browser.esm-8e3bc38f.js";import{C as I}from"./contract-roles-65ac12a4.browser.esm-e20dc17c.js";import{C as P}from"./contract-sales-5f56e732.browser.esm-0b2abba1.js";import{D as F}from"./erc-1155-19e3f474.browser.esm-c1bfc2c1.js";import{S as x}from"./erc-1155-standard-9662c39f.browser.esm-5328f531.js";import{P as D}from"./thirdweb-checkout-66d62250.browser.esm-3a633c8e.js";import"./QueryParams-6f353fc1.browser.esm-e59de9b7.js";import"./index-ab0d2d80.js";class _{constructor(a){this.events=a}async getAllClaimerAddresses(a){const t=(await this.events.getEvents("TokensClaimed")).filter(r=>r.data&&S.isBigNumber(r.data.tokenId)?r.data.tokenId.eq(a):!1);return Array.from(new Set(t.filter(r=>{var e;return typeof((e=r.data)==null?void 0:e.claimer)=="string"}).map(r=>r.data.claimer)))}}const p=class p extends x{constructor(t,r,e){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,m=arguments.length>5?arguments[5]:void 0,l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,r,c,n,e);super(l,e,m);o(this,"createBatch",i(async(t,r)=>this.erc1155.lazyMint.prepare(t,r)));o(this,"claimTo",i((()=>{var t=this;return async function(r,e,n){let c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;return t.erc1155.claimTo.prepare(r,e,n,{checkERC20Allowance:c})}})()));o(this,"claim",i((()=>{var t=this;return async function(r,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const c=await t.contractWrapper.getSignerAddress();return t.claimTo.prepare(c,r,e,n)}})()));o(this,"burnTokens",i(async(t,r)=>this.erc1155.burn.prepare(t,r)));this.abi=f.parse(c),this.metadata=new w(this.contractWrapper,y,this.storage),this.app=new W(this.contractWrapper,this.metadata,this.storage),this.roles=new I(this.contractWrapper,p.contractRoles),this.royalties=new N(this.contractWrapper,this.metadata),this.sales=new P(this.contractWrapper),this.claimConditions=new F(this.contractWrapper,this.metadata,this.storage),this.events=new T(this.contractWrapper),this.history=new _(this.events),this.encoder=new A(this.contractWrapper),this.estimator=new R(this.contractWrapper),this.platformFees=new B(this.contractWrapper),this.interceptor=new b(this.contractWrapper),this.checkout=new D(this.contractWrapper),this.owner=new O(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t,r){return this.erc1155.getOwned(t,r)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[E("transfer"),k])}async getClaimTransaction(t,r,e){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;return this.erc1155.getClaimTransaction(t,r,e,{checkERC20Allowance:n})}async prepare(t,r,e){return v.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}};o(p,"contractRoles",g);let h=p;export{h as EditionDrop};
