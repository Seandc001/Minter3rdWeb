import{InjectedConnector as i}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-4d99bf97.js";import{ao as e}from"./index-34c9dff5.js";class p extends i{constructor(t){const s={...{name:"Trust",getProvider(){var r;function n(o){if(o!=null&&o.isTrust)return o}if(e(globalThis.window))return(r=globalThis.window.ethereum)!=null&&r.providers?globalThis.window.ethereum.providers.find(n):n(globalThis.window.ethereum)}},...t.options};super({chains:t.chains,options:s,connectorStorage:t.connectorStorage})}}export{p as TrustConnector};