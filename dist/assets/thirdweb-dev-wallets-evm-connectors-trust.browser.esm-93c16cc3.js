import{InjectedConnector as i}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-ebff869b.js";import{ap as e}from"./index-5ec2ec01.js";class p extends i{constructor(t){const s={...{name:"Trust",getProvider(){var r;function n(o){if(o!=null&&o.isTrust)return o}if(e(globalThis.window))return(r=globalThis.window.ethereum)!=null&&r.providers?globalThis.window.ethereum.providers.find(n):n(globalThis.window.ethereum)}},...t.options};super({chains:t.chains,options:s,connectorStorage:t.connectorStorage})}}export{p as TrustConnector};
