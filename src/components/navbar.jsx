import React, { useState } from "react";
import { SparklesCore } from "./ui/sparkels";
import { HoverEffect } from "./ui/card-hover-effect";
import { Navigate, useNavigate } from "react-router-dom";

// auth
import { useAuth } from "./Authentication/authContext";

// auth
import { doSignOut } from "./Authentication/firebase/auth";

export const navlinks = [
  {
    title: "DSA",
    link: "/ScriptQuiz/dsa-notes"
  },
  {
    title: "Problems",
  },
];

const Header = () => {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <nav className="w-full h-16 fixed top-0 left-0 right-0 m-auto flex justify-between items-center px-14 font-mont backdrop-blur-sm shadow-lg z-20">
      {!userLoggedIn && <Navigate to={"/ScriptQuiz"} replace={true} />}

      <h1
        className=" font-extrabold text-[1.5rem] text-white relative px-3 select-none cursor-pointer overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        ScriptQuiz
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className={`w-full h-full absolute top-0 right-0 left-0 m-auto rounded-2xl animate-fade animate-once animate-duration-900 animate-ease-in-out ${
            isHovering ? "" : "hidden"
          } transition-opacity duration-500`}
          particleColor="#FFFFFF"
        />
        <div className="absolute left-0 right-0 m-auto bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] w-3/4 blur-sm" />
        <div className="absolute left-0 right-0 m-auto bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4" />
        <div className="absolute left-0 right-0 m-auto bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] w-3/4 blur-sm" />
        <div className="absolute left-0 right-0 m-auto bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-3/4" />
        <div className="absolute left-0 right-0 m-auto w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </h1>

      <div className="flex justify-center items-center">
        <HoverEffect items={navlinks} />
        <button className="text-white  font-bold hover:bg-zinc-800 h-3/4  rounded-2xl p-4 relative" onClick={()=>{
          doSignOut().then(()=>{
            navigate("/ScriptQuiz")
          })
        }}>Logout
        <span className="absolute bottom-3 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500" />
        </button>
        
      </div>
    </nav>
  );
};

export default Header;
