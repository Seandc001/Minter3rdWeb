import{k as l,o as w}from"./index-d8db2d72.js";async function g(e,a,t){const r=e.getProvider(),n=(await l(()=>import("./index-d8db2d72.js").then(d=>d.e9),["./index-d8db2d72.js","./index-fee6107f.css"],import.meta.url)).default,s=new w(r,a,n,{},e.storage),o=await e.getSignerAddress(),i=e.address;return(await s.read("allowance",[o,i])).gte(t)}export{g as h};
