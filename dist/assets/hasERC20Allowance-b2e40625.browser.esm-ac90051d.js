import{k as l,o as w}from"./index-ad1313fc.js";async function g(e,a,t){const r=e.getProvider(),n=(await l(()=>import("./index-ad1313fc.js").then(d=>d.e9),["./index-ad1313fc.js","./index-571c3c43.css"],import.meta.url)).default,s=new w(r,a,n,{},e.storage),o=await e.getSignerAddress(),i=e.address;return(await s.read("allowance",[o,i])).gte(t)}export{g as h};
