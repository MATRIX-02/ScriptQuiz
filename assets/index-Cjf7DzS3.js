function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-BBJ3TRM9.js","assets/index-eQcUV6rJ.js","assets/index-BrYUp2v-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-eQcUV6rJ.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-BBJ3TRM9.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
