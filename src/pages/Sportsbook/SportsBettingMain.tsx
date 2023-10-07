import React from "react";

import { SPORTS } from "./sports";

export default function SportsBettingMain() {
  return (
    <div className="flex flex-col w-full h-full p-8 bg-transparent">
      <div className="flex flex-col w-full h-full bg-[#0a1f3b] rounded-2xl justify-start items-center p-10 border border-[#1c314c] gap-10">
        <p className="text-white">SPORTS BETTING</p>
        <div className="w-full h-full flex justify-center items-start p-6 gap-4">
          <div className="w-full h-fit flex gap-6 flex-wrap justify-center items-start ">
            {SPORTS.map((sport) => (
              <div className="w-1/5 h-fit bg-green-500">
                <div className="text-white text-2xl text-center font-bold">
                  {sport.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
