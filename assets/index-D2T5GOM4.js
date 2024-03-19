function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-CfQcISHK.js","assets/index-CTssUh1j.js","assets/index-DCtOaev0.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-CTssUh1j.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-CfQcISHK.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
