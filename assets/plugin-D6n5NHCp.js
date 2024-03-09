function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-K2qo6eEp.js","assets/index-BV2390Rw.js","assets/index-CMQvFecr.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-BV2390Rw.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-K2qo6eEp.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
