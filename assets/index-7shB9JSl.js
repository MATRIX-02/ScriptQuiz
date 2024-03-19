function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BUi8L-2S.js","assets/index-CtWchdog.js","assets/index-DCtOaev0.css","assets/index-CpX2htLG.js","assets/index-BoBDNoRy.js","assets/index-C2RNCKJt.js","assets/index-BBlXs-Lr.js","assets/index-D7wj74Uq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CtWchdog.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BUi8L-2S.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CpX2htLG.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BoBDNoRy.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-C2RNCKJt.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BBlXs-Lr.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-D7wj74Uq.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
