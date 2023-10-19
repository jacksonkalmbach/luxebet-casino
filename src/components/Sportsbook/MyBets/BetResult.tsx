import React from "react";

import { calculatePayout } from "../../BetSlip/utils/calculatePayout";

// type ResultType = "Won" | "Lost" | "Open";

interface BetResultProps {
  bet: {
    team: string;
    betType: string;
    price: number;
    point?: number;
    datePlaced?: string;
    wager?: number;
    status?: string;
  };
}

export default function BetResult({ bet }: BetResultProps) {
  const { team, betType, price, point, datePlaced, wager, status } = bet;

  const statusClass =
    status === "Won"
      ? "bg-secondaryAccent"
      : status === "Lost"
      ? "bg-tertiaryBg"
      : "bg-[#c6a200]";

  return (
    <div className="w-full bg-primaryBg rounded-xl flex justify-between items-center p-6">
      <div className="flex flex-col">
        <p className="md:text-lg text-sm text-fontLight font-bold font-oneset">
          {team.split(" ")[0].slice(0, 3).toUpperCase()} {team.split(" ")[1]}
        </p>
        <p className="md:text-md text-sm text-fontLight font-normal font-oneset mb-2 flex gap-2">
          <p>{betType}</p>
          <p>{point && point > 0 ? `+${point}` : point}</p>
          <p>{price && price > 0 ? `+${price}` : price}</p>
        </p>
        {/* <div className="flex gap-1 md:text-sm text-xs">
          <p className="font-oneset text-fontLight font-thin">Result:</p>{" "}
          <p className="font-oneset text-primaryAccent ">14 : 7</p>
        </div> */}
        <div className="flex gap-1 md:text-sm text-xs">
          <p className="font-oneset text-fontLight font-thin">Wager:</p>{" "}
          <p className="font-oneset text-fontLight">${wager?.toFixed(2)}</p>
        </div>
        <div className="flex gap-1 md:text-sm text-xs">
          <p className="font-oneset text-fontLight font-thin">Payout:</p>{" "}
          <p className="font-oneset text-primaryAccent">
            ${wager && calculatePayout(price, wager).toFixed(2)}
          </p>
        </div>
        <div className="text-fontLight font-oneset text-xs font-thin mt-6">
          {datePlaced}
        </div>
      </div>
      <div
        className={`${statusClass} px-2 text-sm md:text-base text-fontLight font-bold rounded self-start`}
      >
        {status}
      </div>
    </div>
  );
}
