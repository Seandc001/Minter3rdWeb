import{SmartWalletConnector as o}from"./thirdweb-dev-wallets-evm-connectors-smart-wallet.browser.esm-4764d178.js";import{dI as a,au as n}from"./index-5c39588f.js";class c extends o{constructor(t){super({...t,factoryAddress:t.registryAddress||a}),this.tbaConfig=t}defaultFactoryInfo(){return{createAccount:async t=>t.prepare("createAccount",[this.tbaConfig.accountImplementation,this.chainId,this.tbaConfig.tokenContract,this.tbaConfig.tokenId,this.tbaConfig.salt,n("")]),getAccountAddress:async t=>await t.call("account",[this.tbaConfig.accountImplementation,this.chainId,this.tbaConfig.tokenContract,this.tbaConfig.tokenId,this.tbaConfig.salt])}}}export{c as TokenBoundSmartWalletConnector};