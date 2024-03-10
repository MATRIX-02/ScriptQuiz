function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-CJu4Wn0p.js","assets/index-BeN7biwg.js","assets/index-CP7zbQ8J.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BeN7biwg.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-CJu4Wn0p.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
