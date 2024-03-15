import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "./Authentication/authContext";
import { WavyBackground } from "./ui/wavy-background";
import { TracingBeam } from "./ui/tracing-beam";

const Home = () => {
  const { userLoggedIn } = useAuth();

  return (
    <div className="relative top-0 left-0 right-0 m-auto w-11/12 lg:w-3/5">
      {!userLoggedIn && <Navigate to={"/ScriptQuiz"} replace={true} />}
      <div className=" text-white font-mont">
        <WavyBackground>
        <section className="mb-8">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Welcome to ScriptQuiz
          </h1>
          <p className="text-lg mb-4 text-center">
            Whether you're a beginner or an experienced developer, sharpen your
            skills and prepare for frontend interviews with my comprehensive
            resources. From Data Structures and Algorithms to JavaScript
            mastery, I've got everything you need to conquer frontend interviews.
          </p>
        </section>
        </WavyBackground>
        <section className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">DSA</h2>
            <p className="text-lg mb-4">
              Master the fundamentals of Data Structures and Algorithms (DSA)
              with MY extensive collection of practice questions. From arrays
              to graphs, I've made it sure to cover it all to ensure you're well-prepared for any
              technical interview.
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
