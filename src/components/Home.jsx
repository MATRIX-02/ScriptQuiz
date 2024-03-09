import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

import { useAuth } from "./Authentication/authContext";

const Home = () => {
  const {userLoggedIn} =  useAuth();
  const navigate = useNavigate();

  return (
    <div className="absolute top-14 left-0 right-0 m-auto z-0">
      {!userLoggedIn && <Navigate to={"/ScriptQuiz"} replace={true} />}
      <span className="text-white text-2xl font-semibold">Hello</span><br/>
      <span className="text-white text-2xl font-semibold">Hello</span><br/>
      <span className="text-white text-2xl font-semibold">Hello</span><br/>
      <span className="text-white text-2xl font-semibold">Hello</span><br/>
      
    </div>
  );
};

export default Home;
