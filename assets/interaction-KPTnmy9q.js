function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-CM2Gq4LG.js","assets/Ranges-D7VmZKTU.js","assets/index-DDsFG0BU.js","assets/index-DMxirUqY.css","assets/index-ZxPcVFwf.js","assets/OptionsColor-Bcp5yddp.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DDsFG0BU.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-CM2Gq4LG.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
