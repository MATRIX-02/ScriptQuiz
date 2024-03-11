function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DuVurkrT.js","assets/index-D93LAPDq.js","assets/index-CDRT78h0.css","assets/index-BQAFR0oo.js","assets/index-BVgmm_9Q.js","assets/index-fTPfsd81.js","assets/index-DFP18Zre.js","assets/index-BO37jyCI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-D93LAPDq.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DuVurkrT.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BQAFR0oo.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BVgmm_9Q.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-fTPfsd81.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DFP18Zre.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BO37jyCI.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
