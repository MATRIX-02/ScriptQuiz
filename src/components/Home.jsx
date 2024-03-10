import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "./Authentication/authContext";

const Home = () => {
  const { userLoggedIn } = useAuth();

  return (
    <div className="absolute top-14 left-0 right-0 m-auto w-11/12 lg:w-3/5">
      <div className="container mx-auto p-8 text-white">
        <section className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to ScriptQuiz!
          </h1>
          <p className="text-lg mb-4">
            Whether you're a beginner or an experienced developer, sharpen your
            skills and prepare for frontend interviews with our comprehensive
            resources. From Data Structures and Algorithms to JavaScript
            mastery, we've got everything you need to succeed!
          </p>
        </section>

        <section className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Practice Questions</h2>
            <p className="text-lg mb-4">
              Master the fundamentals of Data Structures and Algorithms (DSA)
              with our extensive collection of practice questions. From arrays
              to graphs, we cover it all to ensure you're well-prepared for any
              technical interview.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img
              src="/images/practice-questions.jpg"
              alt="Practice Questions"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </section>

        <section className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4 order-last md:order-first">
            <img
              src="/images/javascript.jpg"
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
              src="/images/machine-coding.jpg"
              alt="Machine Coding Challenges"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </section>

        <section className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4 order-last md:order-first">
            <img
              src="/images/notes.jpg"
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
