function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-C6a-3Rqj.js","assets/index-eQcUV6rJ.js","assets/index-BrYUp2v-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-eQcUV6rJ.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-C6a-3Rqj.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
