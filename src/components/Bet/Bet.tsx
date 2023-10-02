import React from "react";

interface BetProps {
  amount: number;
}

export default function Bet({ amount }: BetProps) {
  return (
    <div className="relative flex flex-col rounded-lg border-2 border-[#f3cb16] h-10 w-20 bg-[#23325c] justify-center items-center">
      <div className="absolute w-12 h-12 -left-6 rounded-full border bg-blue-200"></div>
      <div className="text-white ml-5">${amount}</div>
    </div>
  );
}
