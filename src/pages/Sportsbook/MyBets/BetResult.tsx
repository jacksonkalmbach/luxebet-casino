import React from "react";

type ResultType = "Won" | "Lost" | "Open";

interface BetResultProps {
  result: ResultType;
}

const resultBg: Record<ResultType, string> = {
  Won: "bg-secondaryAccent",
  Lost: "bg-tertiaryBg",
  Open: "bg-[#c6a200]",
};

export default function BetResult({ result }: BetResultProps) {
  return (
    <div className="w-full bg-primaryBg rounded-xl flex justify-between items-center p-6">
      <div className="flex flex-col">
        <p className="text-lg text-fontLight font-bold font-oneset">
          Min Vikings +3.5 -110
        </p>
        <p className="text-md text-fontLight font-normal font-oneset mb-2">
          Spread
        </p>
        <div className="flex gap-1 text-sm">
          <p className="font-oneset text-fontLight font-thin">Result:</p>{" "}
          <p className="font-oneset text-primaryAccent">14 : 7</p>
        </div>
        <div className="flex gap-1 text-sm">
          <p className="font-oneset text-fontLight font-thin">Wager:</p>{" "}
          <p className="font-oneset text-fontLight">$5.00</p>
        </div>
        <div className="text-fontLight font-oneset text-xs font-thin mt-6">
          Date/Time Placed
        </div>
      </div>
      <div
        className={`${resultBg[result]} px-2 text-fontLight font-bold rounded self-start`}
      >
        {result}
      </div>
    </div>
  );
}
