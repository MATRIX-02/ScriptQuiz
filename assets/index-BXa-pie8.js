function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DpO3Is9M.js","assets/index-DQ8r_rv-.js","assets/index-CMQvFecr.css","assets/index-mWk1PXou.js","assets/index-DkMfd5Uy.js","assets/index-DqxYaWdQ.js","assets/index-BoecN3j6.js","assets/index-C3NoTHN8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DQ8r_rv-.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DpO3Is9M.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-mWk1PXou.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DkMfd5Uy.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DqxYaWdQ.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BoecN3j6.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-C3NoTHN8.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
