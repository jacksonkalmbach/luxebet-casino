import React from "react";

interface MatchUpOddsProps {
  commenceTime: string;
  homeTeam: string;
  awayTeam: string;
  homeSpreadOdds: number;
  awaySpreadOdds: number;
  homeSpread: number;
  awaySpread: number;
  homeMoneyline: number;
  awayMoneyline: number;
}

export default function MatchUpOdds({
  commenceTime,
  homeTeam,
  awayTeam,
  homeSpreadOdds,
  awaySpreadOdds,
  homeSpread,
  awaySpread,
  homeMoneyline,
  awayMoneyline,
}: MatchUpOddsProps) {
  const date = new Date(commenceTime);
  const options: any = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  const today = new Date();
  const formattedToday = new Intl.DateTimeFormat("en-US", options).format(
    today
  );

  return (
    <div className="w-full flex flex-col text-white gap-2 border p-2 bg-[#081a2f]">
      <div className="flex justify-between border-b p-1 items-center w-full">
        <div>
          {formattedToday === formattedDate
            ? "TODAY"
            : formattedDate.toUpperCase()}
        </div>
        <div className="flex w-1/2 justify-around">
          <div>SPREAD</div>
          <div>MONEYLINE</div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/2">{awayTeam}</div>
        <div className="flex w-1/2 justify-around">
          <div className="flex justify-center items-center border w-1/4">
            <p className="p-2 flex justify-center items-center font-bold">
              {awaySpread}
            </p>
            <p className="p-2 flex justify-center items-center text-yellow-300 font-bold">
              {awaySpreadOdds > 0 && "+"}
              {awaySpreadOdds}
            </p>
          </div>
          <p className="p-2 flex justify-center items-center font-bold">
            {awayMoneyline > 0 && "+"}
            {awayMoneyline}
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/2">{homeTeam}</div>
        <div className="flex w-1/2 justify-around">
          <div className="flex justify-center items-center border w-1/4">
            <p className="p-2 flex justify-center items-center font-bold">
              {homeSpread}
            </p>
            <p className="p-2 flex justify-center items-center font-bold text-yellow-300">
              {homeSpreadOdds > 0 && "+"}
              {homeSpreadOdds}
            </p>
          </div>
          <p className="p-2 flex justify-center items-center font-bold">
            {homeMoneyline > 0 && "+"}
            {homeMoneyline}
          </p>
        </div>
      </div>
    </div>
  );
}
