import{W as w,_ as o,a,c as d,U as c,d as p,n as u,f as l,h as g,an as C,i as v,ao as y,S as P,k as f}from"./index-5ec2ec01.js";class _ extends w{constructor(e){let{chains:t,options:s,connectorStorage:n}=e;const r={shimDisconnect:!0,...s};super({chains:t,options:r}),o(this,"id","frame"),o(this,"name","Frame"),o(this,"ready",!0),o(this,"shimDisconnectKey",`${this.id}.shimDisconnect`),o(this,"onAccountsChanged",i=>{i.length===0?this.emit("disconnect"):this.emit("change",{account:d(i[0])})}),o(this,"onChainChanged",i=>{const h=u(i),m=this.isChainUnsupported(h);this.emit("change",{chain:{id:h,unsupported:m}})}),o(this,"onDisconnect",()=>{this.emit("disconnect"),this.options.shimDisconnect&&this.connectorStorage.removeItem(this.shimDisconnectKey)}),this.connectorStorage=n}async connect(e){try{const t=await this.getProvider();if(!t)throw new a;this.setupListeners(),this.emit("message",{type:"connecting"});const s=await t.request({method:"eth_requestAccounts"}),n=d(s[0]);let r=await this.getChainId(),i=this.isChainUnsupported(r);return e!=null&&e.chainId&&r!==(e==null?void 0:e.chainId)&&(r=(await this.switchChain(e==null?void 0:e.chainId)).chainId,i=this.isChainUnsupported(r)),this.options.shimDisconnect&&this.connectorStorage.setItem(this.shimDisconnectKey,"true"),{account:n,provider:t,chain:{id:r,unsupported:i}}}catch(t){throw this.isUserRejectedRequestError(t)?new c(t):t.code===-32002?new p(t):t}}async disconnect(){const e=await this.getProvider();e!=null&&e.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.isInjected()||e.close(),this.options.shimDisconnect&&this.connectorStorage.removeItem(this.shimDisconnectKey))}async getAccount(){const e=await this.getProvider();if(!e)throw new a;const t=await e.request({method:"eth_accounts"});return d(t[0])}async getChainId(){const e=await this.getProvider();if(!e)throw new a;const t=await e.request({method:"eth_chainId"});return u(t)}async getProvider(){return this._provider=this.isInjected()?this.injectedProvider():await this.createProvider(),this._provider}async getSigner(){let{chainId:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[t,s]=await Promise.all([this.getProvider(),this.getAccount()]);return new l(t,e).getSigner(s)}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.connectorStorage.getItem(this.shimDisconnectKey))return!1;if(!await this.getProvider())throw new a;return!!await this.getAccount()}catch{return!1}}async switchChain(e){const t=await this.getProvider();if(!t)throw new a;const s=g(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:s}]}),new Promise(n=>this.on("change",r=>{let{chain:i}=r;(i==null?void 0:i.id)===e&&n()}))]),this.chains.find(n=>n.chainId===e)??{chainId:e,name:`Chain ${s}`,slug:`${s}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0}}catch(n){const r=this.chains.find(i=>i.chainId===e);if(!r)throw new C({chainId:e,connectorId:this.id});if(n.code===4902)try{if(await t.request({method:"wallet_addEthereumChain",params:[{chainId:s,chainName:r.name,nativeCurrency:r.nativeCurrency,rpcUrls:v(r),blockExplorerUrls:this.getBlockExplorerUrls(r)}]}),await this.getChainId()!==e)throw new c(new Error("User rejected switch after adding network."));return r}catch(i){throw this.isUserRejectedRequestError(i)?new c(i):new y(i.message)}throw this.isUserRejectedRequestError(n)?new c(n):new P(n)}}async watchAsset(e){let{address:t,decimals:s=18,image:n,symbol:r}=e;const i=await this.getProvider();if(!i)throw new a;return i.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:s,image:n,symbol:r}}})}async setupListeners(){const e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}isUserRejectedRequestError(e){return e.code===4001}injectedProvider(){return window==null?void 0:window.ethereum}isInjected(){var e;return!!((e=this.injectedProvider())!=null&&e.isFrame)}async createProvider(){const e=(await f(()=>import("./browser-d7d12822.js").then(t=>t.b),["./browser-d7d12822.js","./index-5ec2ec01.js","./index-571c3c43.css"],import.meta.url)).default;return e("frame")}}export{_ as FrameConnector};
