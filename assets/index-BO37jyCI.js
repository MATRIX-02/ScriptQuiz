function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-DGwgNUJ4.js","assets/index-D93LAPDq.js","assets/index-CDRT78h0.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-D93LAPDq.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-DGwgNUJ4.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
