function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BRSV759c.js","assets/index-BV2390Rw.js","assets/index-CMQvFecr.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BV2390Rw.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BRSV759c.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
