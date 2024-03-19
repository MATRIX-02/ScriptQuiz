function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DfaqvvA3.js","assets/index-CTssUh1j.js","assets/index-DCtOaev0.css","assets/index-CHbPIUDb.js","assets/index-D5QAGHxQ.js","assets/index-Bolz17MD.js","assets/index-fgYfnQct.js","assets/index-Bo1gZrr4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CTssUh1j.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DfaqvvA3.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CHbPIUDb.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-D5QAGHxQ.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Bolz17MD.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-fgYfnQct.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Bo1gZrr4.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
