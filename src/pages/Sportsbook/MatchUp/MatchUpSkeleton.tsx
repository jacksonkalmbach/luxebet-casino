import React from "react";

export default function MatchUpSkeleton() {
  return (
    <div className="w-full flex text-white p-2 bg-primaryBg rounded-lg animate-pulse">
      <div className="flex flex-col w-3/5 gap-2">
        <div className="bg-[#CCCCCC] w-1/4 rounded-full text-transparent cursor-default">
          date
        </div>
        <div className=" w-1/2 bg-[#CCCCCC] rounded-full text-transparent px-3">
          spread
        </div>
        <div className=" w-1/2 bg-[#CCCCCC] rounded-full text-transparent px-3">
          spread
        </div>
      </div>
      <div className="flex flex-col w-1/5 justify-center items-center gap-2">
        <div className="border-b w-4/5 flex justify-center items-center cursor-default bg-[#CCCCCC] rounded-full">
          <p className="text-transparent">SPREAD</p>
        </div>
        <div className="bg-[#CCCCCC] rounded-full text-transparent px-3">
          spread
        </div>
        <div className="bg-[#CCCCCC] rounded-full text-transparent px-3">
          spread
        </div>
      </div>
      <div className="flex flex-col w-1/5 justify-center items-center gap-2">
        <div className="border-b w-4/5 flex justify-center items-center cursor-default bg-[#CCCCCC] rounded-full">
          <p className="text-transparent">SPREAD</p>
        </div>
        <div className="bg-[#CCCCCC] rounded-full text-transparent px-3">
          spread
        </div>
        <div className="bg-[#CCCCCC] rounded-full text-transparent px-3">
          spread
        </div>
      </div>
    </div>
  );
}
