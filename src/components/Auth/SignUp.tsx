import React from "react";
import GoogleIcon from "../../icons/GoogleIcon";

export default function SignUp({ handleToggle }: { handleToggle: () => void }) {
  return (
    <div className="flex flex-col md:bg-secondaryBg w-full h-full md:h-2/3 md:w-1/2 rounded-lg p-8 justify-start items-center gap-4 font-oneset md:justify-center">
      <h1 className="text-fontLight text-2xl font-bold">Sign Up</h1>
      <form className="flex flex-col gap-2 w-full md:w-4/5 items-center">
        <input
          className="w-full h-10 rounded-lg p-2"
          placeholder="Email Address"
          type="email"
        />
        <input
          className="w-full h-10 rounded-lg p-2"
          placeholder="Password"
          type="password"
        />
        <input
          className="w-full h-10 rounded-lg p-2"
          placeholder="Confirm Password"
          type="password"
        />
        <button className="w-full h-10 rounded-lg bg-yellow-300 text-black font-bold">
          Register
        </button>
        <p className="text-[#CCCCCC]">- OR -</p>
        <button className="w-full h-10 rounded-lg bg-gray-300 text-black font-bold flex justify-center items-center gap-4">
          <GoogleIcon width="24px" /> Continue With Google
        </button>
        <div className="flex gap-2">
          <p className="text-[#CCCCCC]">Already have an account?</p>
          <p
            className="text-[#CCCCCC] font-bold cursor-pointer hover:underline"
            onClick={() => handleToggle()}
          >
            Sign In
          </p>
        </div>
      </form>
    </div>
  );
}
