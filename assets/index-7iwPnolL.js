function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-CrGQjZ1_.js","assets/index-Da163g2H.js","assets/index-CVB-trr-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-Da163g2H.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-CrGQjZ1_.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
