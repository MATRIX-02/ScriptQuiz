function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Cjf7DzS3.js","assets/index-eQcUV6rJ.js","assets/index-BrYUp2v-.css","assets/index-Bsv0_tVs.js","assets/index-DH63T3gY.js","assets/index-BgACIztv.js","assets/index-DQK9BwQH.js","assets/index-BSd5zSPp.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-eQcUV6rJ.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Cjf7DzS3.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Bsv0_tVs.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DH63T3gY.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BgACIztv.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DQK9BwQH.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BSd5zSPp.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
