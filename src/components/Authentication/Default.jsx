import { useState } from "react";
import { motion } from "framer-motion";

//Components
import { BackgroundBeams } from "../ui/BackgroundBeams";
import { Login } from "./Login";
import { Signup } from "./SignUp";

//Icons
import { FaCirclePause } from "react-icons/fa6";
import { IoIosPlayCircle } from "react-icons/io";

const Default = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [logType, setLogType] = useState(true);

  const animationHandler = () => {
    setShowAnimation(() => !showAnimation);
  };

  const logHandler = () => {
    setLogType(() => !logType);
  };

  return (
    <>
      <div className="flex">
        <motion.div
          className={`hidden w-2/4 h-screen p-14 lg:flex flex-col justify-between transition-all bg-gradient-to-tr from-[#160040] from-10% via-[#4C0070] via-30% via-[#79018C] via-60% to-[#9A0680] to-90%`}
        >
          <div className="z-10">
            <h1 className="text-white font-extrabold text-[4rem] font-mont">
              ScriptQuiz
            </h1>
            <h3 className="text-white font-madurai">
              Ace your next frontend interview with confidence.
            </h3>
          </div>
          <span className="text-white font-madurai">
            Created with <span className="animate-pulse">❤️</span> by Mayank.
          </span>
        </motion.div>
        <div className="lg:w-2/4  w-full h-screen p-14 relative z-10 flex flex-col justify-center items-center">
          <nav className="w-full px-5 items-center fixed top-0 left-0 right-0 m-auto flex justify-between lg:hidden py-3 backdrop-blur-sm shadow-md">
            <h1 className="text-white font-extrabold text-[1.5rem] font-mont">
              ScriptQuiz
            </h1>
            <div className="flex justify-between">
              <button
                onClick={() => logHandler()}
                className="block bg-slate-800 no-underline group cursor-pointer shadow-2xl shadow-zinc-900 rounded-full p-px text-base font-semibold leading-6  text-white"
              >
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-5 ring-1 ring-white/10 ">
                  <span>{logType ? <>SignUp</> : <>Login</>}</span>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
              <button
                onClick={() => animationHandler()}
                className="text-white p-2 font-mont text-sm flex rounded-lg hover:bg-zinc-800 transition-all items-center "
              >
                {showAnimation ? (
                  <>
                    {" "}
                    <FaCirclePause className="mx-2 scale-[2]" />
                  </>
                ) : (
                  <>
                    <IoIosPlayCircle className="mx-2 scale-[2.4]" />
                  </>
                )}
              </button>
            </div>
          </nav>

          <button
            onClick={() => logHandler()}
            className="hidden lg:inline-block bg-slate-800 no-underline group cursor-pointer absolute top-14 right-14  shadow-2xl shadow-zinc-900 rounded-full p-px text-base font-semibold leading-6  text-white"
          >
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-5 ring-1 ring-white/10 ">
              <span>{logType ? <>SignUp</> : <>Login</>}</span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>

          {logType ? <Login /> : <Signup logHandler={logHandler} />}

          <button
            onClick={() => animationHandler()}
            className="text-white p-2 font-mont text-sm hidden lg:flex absolute bottom-14 right-14 rounded-lg hover:bg-zinc-800 transition-all items-center "
          >
            {showAnimation ? (
              <>
                {" "}
                <FaCirclePause className="mx-2" /> Stop Animation{" "}
              </>
            ) : (
              <>
                <IoIosPlayCircle className="mx-2 scale-125" /> Start Animation{" "}
              </>
            )}
          </button>
        </div>
        {showAnimation ? <BackgroundBeams className="" /> : <></>}
      </div>
    </>
  );
};

export default Default;
