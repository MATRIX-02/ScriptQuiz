"use client";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

// Components
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../../utils/cn";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doSignInWithGithub,
  doPasswordReset,
} from "./firebase/auth";
import { useAuth } from "./authContext";

// Icons
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

export const Login = () => {
  const { userLoggedIn, isEmailUser } = useAuth();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  



  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (error) {
        setIsSigningIn(false);
        setErrorMessage("Incorrect email or password.");
        return;
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try{
      await doSignInWithGoogle()
      } catch (error) {
        setIsSigningIn(false);
        setErrorMessage(error.message);
      }
    }
  };

  const onGithubSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try{
      await doSignInWithGithub();
    } catch (error){
      setIsSigningIn(false);
      setErrorMessage(error.message);
      return;
    }
    }
  };

  const resetPassword = (e) => {
    e.preventDefault();
    if (email !== "") doPasswordReset(email);
    else setErrorMessage("Please enter email before clicking forgot password");
  };

  console.log("login appeared")

  return (
    <div className="max-w-md w-full mx-auto p-4 font-mont lg:static absolute top-20 -z-10">
      {userLoggedIn && <Navigate to={"/ScriptQuiz/home"} replace={true} />}
      <h2 className="font-bold font-montalt text-center text-2xl text-neutral-200">
        Login
      </h2>
      <p className="text-neutral-300 text-sm max-w-sm mt-2 text-center m-auto">
        Enter your email & password to login.
      </p>

      <form className="my-8" onSubmit={onSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="name@email.com"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onClick={() => {
              setErrorMessage("");
            }}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            autoComplete="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onClick={() => {
              setErrorMessage("");
            }}
            required
          />
          {errorMessage && (
            <span className="text-red-600 font-bold">{errorMessage}</span>
          )}
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          <div className="overflow-hidden h-full w-full relative">
          {isSigningIn ? (<span className="absolute top-2 left-0 right-0 m-auto animate-fade-up animate-once animate-duration-300">Checking...</span>):(<span className="absolute top-2 left-0 right-0 m-auto animate-fade-down animate-once animate-duration-300">Login &rarr;</span>)}
          </div>
          <BottomGradient />
        </button>
        <button onClick={resetPassword} className="text-white mt-2 hover:underline">
          Forgot Password?
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            onClick={(e) => {
              onGoogleSignIn(e);
            }}
            className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            onClick={(e) => onGithubSignIn(e)}
            className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
