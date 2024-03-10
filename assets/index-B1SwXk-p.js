function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DW82i_ju.js","assets/index-BeN7biwg.js","assets/index-CP7zbQ8J.css","assets/index-BqZmH3Bh.js","assets/index-CxbCYNoG.js","assets/index-DTZdgY6C.js","assets/index-Deu-TlEX.js","assets/index-oO7jyP0j.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BeN7biwg.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DW82i_ju.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BqZmH3Bh.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CxbCYNoG.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DTZdgY6C.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Deu-TlEX.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-oO7jyP0j.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
