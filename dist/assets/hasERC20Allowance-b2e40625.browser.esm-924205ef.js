import{f as l,k as w}from"./index-aae14169.js";async function g(e,a,t){const r=e.getProvider(),n=(await l(()=>import("./index-aae14169.js").then(d=>d.e7),["./index-aae14169.js","./index-3a974cc1.css"],import.meta.url)).default,s=new w(r,a,n,{},e.storage),o=await e.getSignerAddress(),i=e.address;return(await s.read("allowance",[o,i])).gte(t)}export{g as h};
