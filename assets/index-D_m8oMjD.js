function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-Bh1rJJtm.js","assets/index-CTssUh1j.js","assets/index-DCtOaev0.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CTssUh1j.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-Bh1rJJtm.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
