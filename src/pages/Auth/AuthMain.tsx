import React from "react";

interface AuthMainProps {
  onGuestLogIn: () => void;
}

export default function AuthMain({ onGuestLogIn }: AuthMainProps) {
  return (
    <div className="relative flex flex-col w-full h-full bg-[#0a1f3b] rounded-2xl justify-center items-center border border-[#1c314c]">
      <div className="flex flex-col border rounded-lg p-8 flex justify-center items-center gap-4">
        <h1 className="text-[#CCCCCC]">Login to Connect to a new Game</h1>
        <p
          className="text-[#CCCCCC] hover:underline cursor-pointer"
          onClick={onGuestLogIn}
        >
          Or continue as guest
        </p>
        <div className="flex gap-2">
          <p className="text-[#CCCCCC]">Don't have an account?</p>
          <p className="text-[#CCCCCC] font-bold">Sign Up</p>
        </div>
      </div>
    </div>
  );
}
