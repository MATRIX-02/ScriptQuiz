function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-UPxZ2tut.js","assets/index-DESoTCfQ.js","assets/index-C9La773j.css","assets/index-CyhfMucc.js","assets/index-BFPK4bNO.js","assets/index-DXJkIhiL.js","assets/index-BIeI6h1t.js","assets/index-BgIql6HF.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DESoTCfQ.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-UPxZ2tut.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CyhfMucc.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BFPK4bNO.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DXJkIhiL.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BIeI6h1t.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BgIql6HF.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
