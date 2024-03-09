function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CA3AaHHS.js","assets/index-BV2390Rw.js","assets/index-CMQvFecr.css","assets/index-BOYb0YTG.js","assets/index-Ctx5r1kP.js","assets/index-CIMl1BRA.js","assets/index-BSytjDP_.js","assets/index-CzQS36mJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BV2390Rw.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CA3AaHHS.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BOYb0YTG.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Ctx5r1kP.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CIMl1BRA.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BSytjDP_.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CzQS36mJ.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
