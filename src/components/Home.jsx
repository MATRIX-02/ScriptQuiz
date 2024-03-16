import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "./Authentication/authContext";
import { WavyBackground } from "./ui/wavy-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Home = () => {
  const { userLoggedIn } = useAuth();
  const words = " Whether you're a beginner or an experienced developer, sharpen your skills and prepare for frontend interviews with my comprehensive resources. From Data Structures and Algorithms to JavaScript mastery, I've got everything you need to conquer frontend interviews.";
  return (
    <div className="relative top-0 left-0 right-0 m-auto w-11/12 lg:w-3/5">
      {!userLoggedIn && <Navigate to={"/ScriptQuiz"} replace={true} />}
      <div className=" text-white font-mont">
        <WavyBackground>
          <section className="mb-8 bg-[#1d1c20] backdrop-blur-sm bg-opacity-50 p-6 pt-16 rounded-lg relative">
            <div className="h-6 bg-zinc-900 absolute top-0 left-0 right-0 m-auto rounded-t-lg flex items-center justify-start gap-1 px-3">
              <div className="w-3.5 h-3.5 rounded-full bg-[#FF671F]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#FFFFFF] flex justify-center items-center">
                {/* <div className="w-2 h-2 rounded-full bg-[#06038D]"></div> */}
              </div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#046A38]"></div>
            </div>
            
            <h1 className="text-5xl font-bold mb-9 text-center">
              Welcome to ScriptQuiz
            </h1>
          
            <p className="text-base mb-4 text-center">
            <TextGenerateEffect words={words} />
              
            </p>
          </section>
        </WavyBackground>
        <section className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">DSA</h2>
            <p className="text-lg mb-4">
              Master the fundamentals of Data Structures and Algorithms (DSA)
              with MY extensive collection of practice questions. From arrays to
              graphs, I've made it sure to cover it all to ensure you're
              well-prepared for any technical interview.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img
              src=""
              alt="Practice Questions"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </section>

        <section className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4 order-last md:order-first">
            <img
              src=""
              alt="JavaScript Mastery"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">JavaScript Mastery</h2>
            <p className="text-lg mb-4">
              Dive deep into JavaScript with our curated set of practice
              questions. Whether it's closures, prototypes, or async-await,
              we've got you covered. Sharpen your skills and become a JavaScript
              ninja!
            </p>
          </div>
        </section>

        <section className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">
              Machine Coding Challenges
            </h2>
            <p className="text-lg mb-4">
              Put your coding skills to the test with our challenging machine
              coding questions. Practice building real-world applications,
              improve your problem-solving abilities, and gain the confidence to
              tackle any coding challenge thrown your way.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img
              src=""
              alt="Machine Coding Challenges"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </section>

        <section className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4 order-last md:order-first">
            <img
              src=""
              alt="Comprehensive Notes"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Notes</h2>
            <p className="text-lg mb-4">
              Access our comprehensive notes to reinforce your understanding of
              key concepts. Whether you need a refresher on algorithms or want
              to review JavaScript best practices, our notes provide concise
              explanations and examples to help you succeed.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
