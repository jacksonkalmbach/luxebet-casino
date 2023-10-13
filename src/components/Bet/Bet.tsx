import React from "react";
import PokerChip from "../../icons/PokerChip";

interface BetProps {
  amount: number;
  side?: string;
}

export default function Bet({ amount, side = "left" }: BetProps) {
  return (
    <div className="relative flex flex-col rounded-lg border-2 border-[#f3cb16] h-10 w-20 bg-primaryBg justify-center items-center">
      <div
        className={`absolute w-12 h-12 ${
          side === "left" ? "-right-6" : "-left-6"
        } rounded-full border bg-blue-200`}
      >
        <PokerChip />
      </div>
      <div className={`text-fontLight font-oneset ${side === "left" ? "mr-5" : "ml-5"}`}>
        {amount}
      </div>
    </div>
  );
}
