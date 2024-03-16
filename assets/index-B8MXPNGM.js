function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Cv6YA3gH.js","assets/index-AlcXwsaE.js","assets/index-BGBziLIo.css","assets/index-DkIy2UPm.js","assets/index-1I8sSCmn.js","assets/index-D9Y5FYli.js","assets/index-CdNw1Cq7.js","assets/index-Dj5qW2q9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-AlcXwsaE.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Cv6YA3gH.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DkIy2UPm.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-1I8sSCmn.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-D9Y5FYli.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CdNw1Cq7.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Dj5qW2q9.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
