"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../../utils/cn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// auth
import {
  doCreateUserWithEmailAndPassword,
  doSendEmailVerification,
  doSignOut,
} from "./firebase/auth";


// Icons
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

export const Signup = ({ logHandler }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering && password === confirmPassword) {
      setIsRegistering(true);
      try{
      await doCreateUserWithEmailAndPassword(email, password);
      await doSendEmailVerification();
      await doSignOut();
      await logHandler();
      } catch(error) {
        setIsRegistering(false);
        setErrorMessage(error.code);
        setTimeout(() => {
          toast.error(error.code);
        }, 0);
      }
    }
    if (password !== confirmPassword) {
      setTimeout(() => {
        toast.error("Passwords do not match")
      }, 0);
      setErrorMessage("Passwords do not match!");
    }
  };
  return (
    <div className="max-w-md w-full mx-auto p-4 font-mont lg:static absolute top-20 z-10">
      {/* {isRegistering && <Link to={"/ScriptQuiz/home"} replace={true} />} */}
      <h2 className="font-bold font-montalt text-center text-2xl text-neutral-200">
        Create an account
      </h2>
      <p className="text-neutral-300 text-sm max-w-sm mt-2 text-center m-auto">
        Enter your email below to create an account.
      </p>

      <form className="my-8" onSubmit={onSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">
              First name<span className=" text-red-500">*</span>
            </Label>
            <Input id="firstname" placeholder="Mayank" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">
            Email Address<span className=" text-red-500">*</span>
          </Label>
          <Input
            id="email"
            placeholder="name@email.com"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">
            Password<span className=" text-red-500">*</span>
          </Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            disabled={isRegistering}
            autoComplete="new-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onClick={() => {
              setErrorMessage("");
            }}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">
            Confirm Password<span className=" text-red-500">*</span>
          </Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            disabled={isRegistering}
            autoComplete="off"
            value={confirmPassword}
            onChange={(e) => {
              setconfirmPassword(e.target.value);
            }}
            onClick={() => {
              setErrorMessage("");
            }}
            required
          />
        </LabelInputContainer>
        {errorMessage && (
          <>
            <ToastContainer className="mt-24 hidden lg:block" />
            <span className="text-red-600 font-bold lg:hidden">{errorMessage}</span>
          </>
        )}
        <button
          className=" bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={isRegistering}
        >
          <div className="overflow-hidden h-full w-full relative">
            {isRegistering ? (
              <span className="absolute top-2 left-0 right-0 m-auto animate-fade-up animate-once">
                Registering...
              </span>
            ) : (
              <span className="absolute top-2 left-0 right-0 m-auto animate-fade-down animate-once animate-duration-300">
                SignUp &rarr;
              </span>
            )}
          </div>
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
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
            className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300 " />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm ">
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
