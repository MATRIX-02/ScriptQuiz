function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BjSyCAAR.js","assets/index-DESoTCfQ.js","assets/index-C9La773j.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DESoTCfQ.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BjSyCAAR.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
