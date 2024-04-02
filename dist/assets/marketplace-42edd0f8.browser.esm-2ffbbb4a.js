var V=Object.defineProperty;var z=(f,t,r)=>t in f?V(f,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):f[t]=r;var c=(f,t,r)=>(z(f,typeof t!="symbol"?t+"":t,r),r);import{M as x,o as H,A as K,p as Y,z as G,q as Q,s as I,G as Z,r as _,v as w,L as W,B as s,t as C,x as d,E as A,F as q,H as J,T as h,I as D,J as y,K as L,O as X,P as j,Q as E,V as N,X as tt,Y as O,Z as P,$ as rt,k as S,a0 as b}from"./index-5ec2ec01.js";import{D as et,f as F,I as at,a as nt}from"./QueryParams-6f353fc1.browser.esm-e59de9b7.js";import{m as B,v as $,h as M,i as st,a as ot}from"./marketplace-8c81f922.browser.esm-c176d6bc.js";import{C as it}from"./contract-interceptor-d7b164a7.browser.esm-7eabd2ea.js";import{C as ct}from"./contract-platform-fee-fda88a0f.browser.esm-8e3bc38f.js";import{C as dt}from"./contract-roles-65ac12a4.browser.esm-e20dc17c.js";import{c as U}from"./cleanCurrencyAddress-000ac1de.browser.esm-9d70879f.js";let m=function(f){return f[f.Direct=0]="Direct",f[f.Auction=1]="Auction",f}({});class pt{constructor(t,r){c(this,"createListing",d(async t=>{$(t);const r=await y(t.assetContractAddress),e=await y(t.currencyContractAddress);await M(this.contractWrapper,this.getAddress(),r,t.tokenId,await this.contractWrapper.getSignerAddress());const a=await L(this.contractWrapper.getProvider(),t.buyoutPricePerToken,e),n=await L(this.contractWrapper.getProvider(),t.reservePricePerToken,e);let o=Math.floor(t.startTimestamp.getTime()/1e3);const u=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;return o<u&&(o=u),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r,tokenId:t.tokenId,buyoutPricePerToken:a,currencyToAccept:U(e),listingType:m.Auction,quantityToList:t.quantity,reservePricePerToken:n,secondsUntilEndTime:t.listingDurationInSeconds,startTime:s.from(o)}],parse:p=>({id:this.contractWrapper.parseLogs("ListingAdded",p==null?void 0:p.logs)[0].args.listingId,receipt:p})})}));c(this,"createListingsBatch",d(async t=>{const r=(await Promise.all(t.map(e=>this.createListing.prepare(e)))).map(e=>e.encode());return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:e=>this.contractWrapper.parseLogs("ListingAdded",e==null?void 0:e.logs).map(n=>({id:n.args.listingId,receipt:e}))})}));c(this,"buyoutListing",d(async t=>{const r=await this.validateListing(s.from(t)),e=await X(this.contractWrapper.getProvider(),r.currencyContractAddress);return this.makeBid.prepare(t,j(r.buyoutPrice,e.decimals))}));c(this,"makeBid",d(async(t,r)=>{const e=await this.validateListing(s.from(t)),a=await L(this.contractWrapper.getProvider(),r,e.currencyContractAddress);if(a.eq(s.from(0)))throw new Error("Cannot make a bid with 0 value");const n=await this.contractWrapper.read("bidBufferBps",[]),o=await this.getWinningBid(t);if(o){const g=st(o.pricePerToken,a,n);A(g,"Bid price is too low based on the current winning bid and the bid buffer")}else{const g=a,l=s.from(e.reservePrice);A(g.gte(l),"Bid price is too low based on reserve price")}const i=s.from(e.quantity),u=a.mul(i),p=await this.contractWrapper.getCallOverrides()||{};return await E(this.contractWrapper,u,e.currencyContractAddress,p),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"offer",args:[t,e.quantity,e.currencyContractAddress,a,N],overrides:p})}));c(this,"cancelListing",d(async t=>{const r=await this.validateListing(s.from(t)),e=s.from(Math.floor(Date.now()/1e3)),a=s.from(r.startTimeInEpochSeconds),n=await this.contractWrapper.read("winningBid",[t]);if(e.gt(a)&&n.offeror!==w)throw new tt(t.toString());return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"closeAuction",args:[s.from(t),await this.contractWrapper.getSignerAddress()]})}));c(this,"closeListing",d(async(t,r)=>{r||(r=await this.contractWrapper.getSignerAddress());const e=await this.validateListing(s.from(t));try{return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"closeAuction",args:[s.from(t),r]})}catch(a){throw a.message.includes("cannot close auction before it has ended")?new O(t.toString(),e.endTimeInEpochSeconds.toString()):a}}));c(this,"executeSale",d(async t=>{const r=await this.validateListing(s.from(t));try{const e=await this.getWinningBid(t);A(e,"No winning bid found");const a=this.encoder.encode("closeAuction",[t,r.sellerAddress]),n=this.encoder.encode("closeAuction",[t,e.buyerAddress]);return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[a,n]})}catch(e){throw e.message.includes("cannot close auction before it has ended")?new O(t.toString(),r.endTimeInEpochSeconds.toString()):e}}));c(this,"updateListing",d(async t=>h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t.id,t.quantity,t.reservePrice,t.buyoutPrice,t.currencyContractAddress,t.startTimeInEpochSeconds,t.endTimeInEpochSeconds]})));this.contractWrapper=t,this.storage=r,this.encoder=new I(t)}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.listingId.toString()!==t.toString())throw new W(this.getAddress(),t.toString());if(r.listingType!==m.Auction)throw new D(this.getAddress(),t.toString(),"Direct","Auction");return await this.mapListing(r)}async getWinningBid(t){await this.validateListing(s.from(t));const r=await this.contractWrapper.read("winningBid",[t]);if(r.offeror!==w)return await B(this.contractWrapper.getProvider(),s.from(t),r)}async getWinner(t){const r=await this.validateListing(s.from(t)),e=await this.contractWrapper.read("winningBid",[t]),a=s.from(Math.floor(Date.now()/1e3)),n=s.from(r.endTimeInEpochSeconds);if(a.gt(n)&&e.offeror!==w)return e.offeror;const u=(await new _(this.contractWrapper).getEvents("AuctionClosed")).find(p=>p.data.listingId.eq(s.from(t)));if(!u)throw new Error(`Could not find auction with listingId ${t} in closed auctions`);return u.data.winningBidder}async getBidBufferBps(){return this.contractWrapper.read("bidBufferBps",[])}async getMinimumNextBid(t){const[r,e,a]=await Promise.all([this.getBidBufferBps(),this.getWinningBid(t),this.validateListing(s.from(t))]),n=e?e.currencyValue.value:a.reservePrice,o=n.add(n.mul(r).div(1e4));return P(this.contractWrapper.getProvider(),a.currencyContractAddress,o)}async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error(`Error getting the listing with id ${t}`),r}}async mapListing(t){return{assetContractAddress:t.assetContract,buyoutPrice:s.from(t.buyoutPricePerToken),currencyContractAddress:t.currency,buyoutCurrencyValuePerToken:await P(this.contractWrapper.getProvider(),t.currency,t.buyoutPricePerToken),id:t.listingId.toString(),tokenId:t.tokenId,quantity:t.quantity,startTimeInEpochSeconds:t.startTime,asset:await F(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),reservePriceCurrencyValuePerToken:await P(this.contractWrapper.getProvider(),t.currency,t.reservePricePerToken),reservePrice:s.from(t.reservePricePerToken),endTimeInEpochSeconds:t.endTime,sellerAddress:t.tokenOwner,type:m.Auction}}}class ut{constructor(t,r){c(this,"createListing",d(async t=>{$(t);const r=await y(t.assetContractAddress),e=await y(t.currencyContractAddress);await M(this.contractWrapper,this.getAddress(),r,t.tokenId,await this.contractWrapper.getSignerAddress());const a=await L(this.contractWrapper.getProvider(),t.buyoutPricePerToken,e);let n=Math.floor(t.startTimestamp.getTime()/1e3);const i=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;return n<i&&(n=i),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r,tokenId:t.tokenId,buyoutPricePerToken:a,currencyToAccept:U(e),listingType:m.Direct,quantityToList:t.quantity,reservePricePerToken:a,secondsUntilEndTime:t.listingDurationInSeconds,startTime:s.from(n)}],parse:u=>({id:this.contractWrapper.parseLogs("ListingAdded",u==null?void 0:u.logs)[0].args.listingId,receipt:u})})}));c(this,"createListingsBatch",d(async t=>{const r=(await Promise.all(t.map(e=>this.createListing.prepare(e)))).map(e=>e.encode());return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:e=>this.contractWrapper.parseLogs("ListingAdded",e==null?void 0:e.logs).map(n=>({id:n.args.listingId,receipt:e}))})}));c(this,"makeOffer",d(async(t,r,e,a,n)=>{if(q(e))throw new Error("You must use the wrapped native token address when making an offer with a native token");const o=await L(this.contractWrapper.getProvider(),a,e);try{await this.getListing(t)}catch(l){throw console.error("Failed to get listing, err =",l),new Error(`Error getting the listing with id ${t}`)}const i=s.from(r),u=s.from(o).mul(i),p=await this.contractWrapper.getCallOverrides()||{};await E(this.contractWrapper,u,e,p);let g=N;return n&&(g=s.from(Math.floor(n.getTime()/1e3))),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"offer",args:[t,r,e,o,g],overrides:p})}));c(this,"acceptOffer",d(async(t,r)=>{await this.validateListing(s.from(t));const e=await y(r),a=await this.contractWrapper.read("offers",[t,e]);return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"acceptOffer",args:[t,e,a.currency,a.pricePerToken]})}));c(this,"buyoutListing",d(async(t,r,e)=>{const a=await this.validateListing(s.from(t)),{valid:n,error:o}=await this.isStillValidListing(a,r);if(!n)throw new Error(`Listing ${t} is no longer valid. ${o}`);const i=e||await this.contractWrapper.getSignerAddress(),u=s.from(r),p=s.from(a.buyoutPrice).mul(u),g=await this.contractWrapper.getCallOverrides()||{};return await E(this.contractWrapper,p,a.currencyContractAddress,g),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"buy",args:[t,i,u,a.currencyContractAddress,p],overrides:g})}));c(this,"updateListing",d(async t=>h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t.id,t.quantity,t.buyoutPrice,t.buyoutPrice,await y(t.currencyContractAddress),t.startTimeInSeconds,t.secondsUntilEnd]})));c(this,"cancelListing",d(async t=>h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancelDirectListing",args:[t]})));this.contractWrapper=t,this.storage=r}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.assetContract===w)throw new W(this.getAddress(),t.toString());if(r.listingType!==m.Direct)throw new D(this.getAddress(),t.toString(),"Auction","Direct");return await this.mapListing(r)}async getActiveOffer(t,r){await this.validateListing(s.from(t)),A(rt(r),"Address must be a valid address");const e=await this.contractWrapper.read("offers",[t,await y(r)]);if(e.offeror!==w)return await B(this.contractWrapper.getProvider(),s.from(t),e)}async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error(`Error getting the listing with id ${t}`),r}}async mapListing(t){return{assetContractAddress:t.assetContract,buyoutPrice:s.from(t.buyoutPricePerToken),currencyContractAddress:t.currency,buyoutCurrencyValuePerToken:await P(this.contractWrapper.getProvider(),t.currency,t.buyoutPricePerToken),id:t.listingId.toString(),tokenId:t.tokenId,quantity:t.quantity,startTimeInSeconds:t.startTime,asset:await F(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),secondsUntilEnd:t.endTime,sellerAddress:t.tokenOwner,type:m.Direct}}async isStillValidListing(t,r){if(!await ot(this.contractWrapper.getProvider(),this.getAddress(),t.assetContractAddress,t.tokenId,t.sellerAddress))return{valid:!1,error:`Token '${t.tokenId}' from contract '${t.assetContractAddress}' is not approved for transfer`};const a=this.contractWrapper.getProvider(),n=(await S(()=>import("./IERC165-a27c30d6.js"),[],import.meta.url)).default,o=new b(t.assetContractAddress,n,a),i=await o.supportsInterface(at),u=await o.supportsInterface(nt);if(i){const p=(await S(()=>import("./index-5ec2ec01.js").then(T=>T.ea),["./index-5ec2ec01.js","./index-571c3c43.css"],import.meta.url)).default,g=new b(t.assetContractAddress,p,a);let l;try{l=await g.ownerOf(t.tokenId)}catch{}const v=(l==null?void 0:l.toLowerCase())===t.sellerAddress.toLowerCase();return{valid:v,error:v?void 0:`Seller is not the owner of Token '${t.tokenId}' from contract '${t.assetContractAddress} anymore'`}}else if(u){const p=(await S(()=>import("./index-5ec2ec01.js").then(T=>T.ec),["./index-5ec2ec01.js","./index-571c3c43.css"],import.meta.url)).default,v=(await new b(t.assetContractAddress,p,a).balanceOf(t.sellerAddress,t.tokenId)).gte(r||t.quantity);return{valid:v,error:v?void 0:`Seller does not have enough balance of Token '${t.tokenId}' from contract '${t.assetContractAddress} to fulfill the listing`}}else return{valid:!1,error:"Contract does not implement ERC 1155 or ERC 721."}}}const k=class k{constructor(t,r,e){c(this,"getAll",this.getAllListings);c(this,"buyoutListing",d(async(t,r,e)=>{const a=await this.contractWrapper.read("listings",[t]);if(a.listingId.toString()!==t.toString())throw new W(this.getAddress(),t.toString());switch(a.listingType){case m.Direct:return A(r!==void 0,"quantityDesired is required when buying out a direct listing"),await this.direct.buyoutListing.prepare(t,r,e);case m.Auction:return await this.auction.buyoutListing.prepare(t);default:throw Error(`Unknown listing type: ${a.listingType}`)}}));c(this,"makeOffer",d(async(t,r,e)=>{const a=await this.contractWrapper.read("listings",[t]);if(a.listingId.toString()!==t.toString())throw new W(this.getAddress(),t.toString());const n=await this.contractWrapper.getChainID();switch(a.listingType){case m.Direct:return A(e,"quantity is required when making an offer on a direct listing"),await this.direct.makeOffer.prepare(t,e,q(a.currency)?J[n].wrapped.address:a.currency,r);case m.Auction:return await this.auction.makeBid.prepare(t,r);default:throw Error(`Unknown listing type: ${a.listingType}`)}}));c(this,"setBidBufferBps",d(async t=>{await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());const r=await this.getTimeBufferInSeconds();return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAuctionBuffers",args:[r,s.from(t)]})}));c(this,"setTimeBufferInSeconds",d(async t=>{await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());const r=await this.getBidBufferBps();return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAuctionBuffers",args:[s.from(t),r]})}));c(this,"allowListingFromSpecificAssetOnly",d(async t=>{const r=[];return(await this.roles.get("asset")).includes(w)&&r.push(this.encoder.encode("revokeRole",[C("asset"),w])),r.push(this.encoder.encode("grantRole",[C("asset"),t])),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r]})}));c(this,"allowListingFromAnyAsset",d(async()=>{const t=[],r=await this.roles.get("asset");for(const e in r)t.push(this.encoder.encode("revokeRole",[C("asset"),e]));return t.push(this.encoder.encode("grantRole",[C("asset"),w])),h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[t]})}));let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,i=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new H(t,r,n,a,e);this._chainId=o,this.abi=K.parse(n||[]),this.contractWrapper=i,this.storage=e,this.metadata=new Y(this.contractWrapper,G,this.storage),this.app=new Q(this.contractWrapper,this.metadata,this.storage),this.roles=new dt(this.contractWrapper,k.contractRoles),this.encoder=new I(this.contractWrapper),this.estimator=new Z(this.contractWrapper),this.direct=new ut(this.contractWrapper,this.storage),this.auction=new pt(this.contractWrapper,this.storage),this.events=new _(this.contractWrapper),this.platformFees=new ct(this.contractWrapper),this.interceptor=new it(this.contractWrapper)}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.assetContract===w)throw new W(this.getAddress(),t.toString());switch(r.listingType){case m.Auction:return await this.auction.mapListing(r);case m.Direct:return await this.direct.mapListing(r);default:throw new Error(`Unknown listing type: ${r.listingType}`)}}async getActiveListings(t){const r=await this.getAllListingsNoFilter(!0),e=this.applyFilter(r,t),a=s.from(Math.floor(Date.now()/1e3));return e.filter(n=>n.type===m.Auction&&s.from(n.endTimeInEpochSeconds).gt(a)&&s.from(n.startTimeInEpochSeconds).lte(a)||n.type===m.Direct&&s.from(n.quantity).gt(0))}async getAllListings(t){const r=await this.getAllListingsNoFilter(!1);return this.applyFilter(r,t)}async getTotalCount(){return await this.contractWrapper.read("totalListings",[])}async isRestrictedToListerRoleOnly(){return!await this.contractWrapper.read("hasRole",[C("lister"),w])}async getBidBufferBps(){return this.contractWrapper.read("bidBufferBps",[])}async getTimeBufferInSeconds(){return this.contractWrapper.read("timeBuffer",[])}async getOffers(t){const r=await this.events.getEvents("NewOffer",{order:"desc",filters:{listingId:t}});return await Promise.all(r.map(e=>B(this.contractWrapper.getProvider(),s.from(t),{quantityWanted:e.data.quantityWanted,pricePerToken:e.data.quantityWanted.gt(0)?e.data.totalOfferAmount.div(e.data.quantityWanted):e.data.totalOfferAmount,currency:e.data.currency,offeror:e.data.offeror})))}async getAllListingsNoFilter(t){return(await Promise.all(Array.from(Array((await this.contractWrapper.read("totalListings",[])).toNumber()).keys()).map(async e=>{let a;try{a=await this.getListing(e)}catch(n){if(n instanceof W)return;console.warn(`Failed to get listing ${e}' - skipping. Try 'marketplace.getListing(${e})' to get the underlying error.`);return}if(a.type===m.Auction)return a;if(t){const{valid:n}=await this.direct.isStillValidListing(a);if(!n)return}return a}))).filter(e=>e!==void 0)}applyFilter(t,r){let e=[...t];const a=s.from((r==null?void 0:r.start)||0).toNumber(),n=s.from((r==null?void 0:r.count)||et).toNumber();return r&&(r.seller&&(e=e.filter(o=>{var i;return o.sellerAddress.toString().toLowerCase()===((i=r==null?void 0:r.seller)==null?void 0:i.toString().toLowerCase())})),r.tokenContract&&(e=e.filter(o=>{var i;return o.assetContractAddress.toString().toLowerCase()===((i=r==null?void 0:r.tokenContract)==null?void 0:i.toString().toLowerCase())})),r.tokenId!==void 0&&(e=e.filter(o=>{var i;return o.tokenId.toString()===((i=r==null?void 0:r.tokenId)==null?void 0:i.toString())})),e=e.filter((o,i)=>i>=a),e=e.slice(0,n)),e}async prepare(t,r,e){return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}};c(k,"contractRoles",x);let R=k;export{R as Marketplace};
