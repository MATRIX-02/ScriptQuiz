function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-Biy3w1sp.js","assets/index-Da163g2H.js","assets/index-CVB-trr-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Da163g2H.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-Biy3w1sp.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};