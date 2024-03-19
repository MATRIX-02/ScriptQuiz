function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CI5aCDM-.js","assets/index-DDsFG0BU.js","assets/index-DMxirUqY.css","assets/index-CRQp0zDP.js","assets/index-XYjjjkWP.js","assets/index-B2V3FD4A.js","assets/index-CJ8a__oe.js","assets/index-CemIdEkI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DDsFG0BU.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CI5aCDM-.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CRQp0zDP.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-XYjjjkWP.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-B2V3FD4A.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CJ8a__oe.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CemIdEkI.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
