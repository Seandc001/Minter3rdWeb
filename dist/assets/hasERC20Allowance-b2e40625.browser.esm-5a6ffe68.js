import{f as l,k as w}from"./index-34c9dff5.js";async function g(e,a,t){const r=e.getProvider(),n=(await l(()=>import("./index-34c9dff5.js").then(d=>d.e7),["./index-34c9dff5.js","./index-30c3319e.css"],import.meta.url)).default,s=new w(r,a,n,{},e.storage),o=await e.getSignerAddress(),i=e.address;return(await s.read("allowance",[o,i])).gte(t)}export{g as h};
