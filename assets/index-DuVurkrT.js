function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-HeKeMUQT.js","assets/index-D93LAPDq.js","assets/index-CDRT78h0.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-D93LAPDq.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-HeKeMUQT.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
