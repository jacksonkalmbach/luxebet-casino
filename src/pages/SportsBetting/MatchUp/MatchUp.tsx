import React from "react";
import Moneyline from "./Moneyline";
import Spread from "./Spread";
import TeamName from "./TeamName";

interface MatchUpOddsProps {
  matchId: string;
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

export default function MatchUp({
  matchId,
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
    <div className="w-full flex text-white border p-2 bg-[#081a2f] rounded-lg">
      <div className="flex flex-col w-3/5 gap-2">
        <div className="border-b">
          {formattedToday === formattedDate
            ? "TODAY"
            : formattedDate.toUpperCase()}
        </div>
        <TeamName team={awayTeam} />
        <TeamName team={homeTeam} />
      </div>
      <div className="flex flex-col w-1/5 justify-center items-center gap-2">
        <div className="border-b w-full flex justify-center items-center">
          SPREAD
        </div>
        <Spread team={awayTeam} price={awaySpreadOdds} point={awaySpread} />
        <Spread team={homeTeam} price={homeSpreadOdds} point={homeSpread} />
      </div>
      <div className="flex flex-col w-1/5 justify-center items-center gap-2">
        <div className="border-b w-full flex justify-center items-center">
          MONEYLINE
        </div>
        <Moneyline price={awayMoneyline} team={awayTeam} />
        <Moneyline price={homeMoneyline} team={homeTeam} />
      </div>
    </div>
  );
}
