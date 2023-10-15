import React from "react";
import BetResult from "./BetResult";
import MyBetFilters from "./MyBetFilters";

export default function MyBets() {
  return (
    <div
      className="flex w-full h-full p-4 bg-transparent gap-4"
      style={{ height: "calc(100% - 80px)" }}
    >
      <div className="relative flex flex-col w-full h-full bg-secondaryBg rounded-2xl justify-start items-start p-10 gap-10">
        <p className="text-fontLight font-oneset text-2xl">MY BETS</p>
        <div className="flex w-full h-full overflow-hidden">
          <MyBetFilters />
          <div className="w-full h-full flex flex-col gap-3 overflow-auto">
            <BetResult result="Open" />
            <BetResult result="Lost" />
            <BetResult result="Won" />
            <BetResult result="Lost" />
          </div>
        </div>
      </div>
    </div>
  );
}
