function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-BDlSpLNR.js","assets/index-CTssUh1j.js","assets/index-DCtOaev0.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CTssUh1j.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-BDlSpLNR.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
