function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BtqJRunN.js","assets/index-AM0bILrw.js","assets/index-DCtOaev0.css","assets/index-x878EaE3.js","assets/index-ghfF7YQA.js","assets/index-C2LZtZ1M.js","assets/index-7z-5jBDJ.js","assets/index-DHNheAbd.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-AM0bILrw.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BtqJRunN.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-x878EaE3.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-ghfF7YQA.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-C2LZtZ1M.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-7z-5jBDJ.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DHNheAbd.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};