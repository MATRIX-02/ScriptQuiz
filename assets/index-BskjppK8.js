function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BHUxKqfY.js","assets/index-DpjjRYU3.js","assets/index-COPBUWTU.css","assets/index-DC3zGH9e.js","assets/index-D4l6oslh.js","assets/index-CDL_frNo.js","assets/index-C1y6FwH4.js","assets/index-Bu8bc7WD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DpjjRYU3.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BHUxKqfY.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DC3zGH9e.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-D4l6oslh.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CDL_frNo.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-C1y6FwH4.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Bu8bc7WD.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
