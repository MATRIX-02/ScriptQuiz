import React from "react";
import { doSignOut } from "./Authentication/firebase/auth";
import { SparklesCore } from "./ui/sparkels";

const Header = () => {
  return (
    <div clas>
      <nav className="w-full h-14 absolute top-0 left-0 right-0 m-auto flex justify-between items-center px-14 font-mont backdrop-blur-sm shadow-lg z-10">
        <h1 className="font-extrabold text-[1.5rem] text-white relative px-3 select-none cursor-pointer">
          ScriptQuiz
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full absolute top-0 right-0 left-0 m-auto -z-10 "
            particleColor="#FFFFFF"
          />
        <div className="absolute left-0 right-0 m-auto bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] w-3/4 blur-sm" />
        <div className="absolute left-0 right-0 m-auto bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4" />
        <div className="absolute left-0 right-0 m-auto bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] w-3/4 blur-sm" />
        <div className="absolute left-0 right-0 m-auto bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-3/4" />
        <div className="absolute left-0 right-0 m-auto w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </h1>

        <div className=" flex justify-evenly w-1/3">
          <h1 className="text-lg text-white cursor-pointer p-2 rounded-lg hover:bg-zinc-800">
            DSA
          </h1>
          <h1 className="text-lg text-white  cursor-pointer p-2 rounded-lg hover:bg-zinc-800">
            Problems
          </h1>
          <h1
            className="text-lg text-white cursor-pointer p-2 rounded-lg hover:bg-zinc-800 select-none"
            onClick={() => {
              doSignOut().then(() => {
                navigate("/ScriptQuiz");
              });
            }}
          >
            Logout
          </h1>
        </div>
        
      </nav>
        
    </div>
  );
};

export default Header;
