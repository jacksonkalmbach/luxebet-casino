import React from "react";

interface AuthMainProps {
  onGuestLogIn: () => void;
}

export default function AuthMain({ onGuestLogIn }: AuthMainProps) {
  return (
    <div className="relative flex flex-col w-full h-full rounded-2xl justify-center items-center">
      <div className="flex flex-col bg-secondaryBg w-1/2 rounded-lg p-8 flex justify-center items-center gap-4 font-oneset">
        <h1 className="text-fontLight text-2xl font-bold">Sign In</h1>
        <form className="flex flex-col gap-2 w-4/5 items-center">
          <input
            className="w-full h-10 rounded-lg p-2"
            placeholder="Username"
          />
          <input
            className="w-full h-10 rounded-lg p-2"
            placeholder="Password"
            type="password"
          />
          <button className="w-full h-10 rounded-lg bg-yellow-300 text-black font-bold">
            Login
          </button>
          <p
            className="text-fontLight hover:underline cursor-pointer"
            onClick={onGuestLogIn}
          >
            Continue as guest
          </p>
          <p className="text-[#CCCCCC]">- OR -</p>
          <button className="w-full h-10 rounded-lg bg-gray-300 text-black font-bold">
            Sign In With Google
          </button>
          <div className="flex gap-2">
            <p className="text-[#CCCCCC]">Don't have an account?</p>
            <p className="text-[#CCCCCC] font-bold cursor-pointer">Sign Up</p>
          </div>
        </form>
      </div>
    </div>
  );
}
