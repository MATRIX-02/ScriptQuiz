function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-7iwPnolL.js","assets/index-Da163g2H.js","assets/index-CVB-trr-.css","assets/index-QDx2W5c1.js","assets/index-CBd3GmiT.js","assets/index-CWd2_R4m.js","assets/index-C5IIvNrj.js","assets/index-cbSYx12f.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Da163g2H.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-7iwPnolL.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-QDx2W5c1.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CBd3GmiT.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CWd2_R4m.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-C5IIvNrj.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-cbSYx12f.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
