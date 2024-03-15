function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-CA8Ffx-M.js","assets/index-eQcUV6rJ.js","assets/index-BrYUp2v-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-eQcUV6rJ.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-CA8Ffx-M.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
