import React from "react";

export default function MyBets() {
  return (
    <div
      className="flex w-full h-full p-8 bg-transparent"
      style={{ height: "calc(100% - 48px)" }}
    >
      <div className="relative flex flex-col w-full h-full bg-[#0a1f3b] rounded-2xl justify-start items-start p-10 border border-[#1c314c] gap-10">
        <p className="text-white">MY BETS</p>
      </div>
    </div>
  );
}
