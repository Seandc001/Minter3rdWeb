import{k as l,o as w}from"./index-f6c2953e.js";async function g(e,a,t){const r=e.getProvider(),n=(await l(()=>import("./index-f6c2953e.js").then(d=>d.e9),["./index-f6c2953e.js","./index-12eb4f3a.css"],import.meta.url)).default,s=new w(r,a,n,{},e.storage),o=await e.getSignerAddress(),i=e.address;return(await s.read("allowance",[o,i])).gte(t)}export{g as h};
