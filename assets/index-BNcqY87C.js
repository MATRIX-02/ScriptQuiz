function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DXv1bdXj.js","assets/index-DpjjRYU3.js","assets/index-COPBUWTU.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DpjjRYU3.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DXv1bdXj.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
