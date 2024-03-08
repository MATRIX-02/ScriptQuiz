import React from "react";
import { useNavigate } from "react-router-dom";
import { doSignOut } from "./Authentication/firebase/auth";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div>
      <nav className="w-full h-14 absolute top-0 left-0 right-0 m-auto flex justify-between items-center px-14 font-mont">
        <h1 className="font-extrabold text-[1.5rem] text-white">ScriptQuiz</h1>
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

export default Home;
