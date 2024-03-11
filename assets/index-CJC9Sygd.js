function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BvkCykqa.js","assets/index-D93LAPDq.js","assets/index-CDRT78h0.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-D93LAPDq.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BvkCykqa.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
