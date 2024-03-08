import { useState } from "react";

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

  const logHandler = () =>{
    setLogType(()=>!logType);
  }

  return (
    <>
      <div className="flex">
        <div className="w-2/4 h-screen p-14 flex flex-col justify-between bg-gradient-to-tr from-[#160040] from-10% via-[#4C0070] via-30% via-[#79018C] via-60% to-[#9A0680] to-90%">
          <div className="z-10">
            <h1 className="text-white font-extrabold text-[4rem] font-mont">
              ScriptQuiz
            </h1>
            <h3 className="text-white font-madurai">
              Ace your next frontend interview with confidence.
            </h3>
          </div>
          <span className="text-white font-madurai">
            Created with ❤️ by Mayank.
          </span>
        </div>
        <div className="w-2/4 h-screen p-14 relative z-10 flex justify-center items-center">
          <button onClick={()=>logHandler()} className="text-white p-2 font-mont text-lg absolute top-14 right-14 rounded-lg hover:bg-zinc-800 transition-all">
            {logType ? (<>Login</>): (<>SignUp</>)}
          </button>

            {logType ? (<Login />):(<Signup />)}
            

          <button
            onClick={()=>animationHandler()}
            className="text-white p-2 font-mont text-sm absolute bottom-14 right-14 rounded-lg hover:bg-zinc-800 transition-all flex items-center "
          >
            {showAnimation ? <> <FaCirclePause className="mx-2"/> Stop Animation  </>: <><IoIosPlayCircle className="mx-2 scale-125" />  Start Animation </> } 
          </button>
        </div>
        {showAnimation ? <BackgroundBeams className="" /> : <></>}
      </div>
    </>
  );
};

export default Default;
