import{InjectedConnector as e}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-325f2b62.js";import{ap as s}from"./index-1222a2a5.js";class f extends e{constructor(n){const t={...{name:"Zerion",getProvider(){var r;function i(o){if(o!=null&&o.isZerion)return o}if(s(globalThis.window))return(r=globalThis.window.ethereum)!=null&&r.providers?globalThis.window.ethereum.providers.find(i):i(globalThis.window.ethereum)}},...n.options};super({chains:n.chains,options:t,connectorStorage:n.connectorStorage})}}export{f as ZerionConnector};
