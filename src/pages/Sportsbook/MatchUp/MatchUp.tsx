import React, { useState, useEffect } from "react";

import Moneyline from "./Moneyline";
import Spread from "./Spread";
import TeamName from "./TeamName";

interface MatchUpOddsProps {
  matchId: string;
  commenceTime: string;
  homeTeam: string;
  awayTeam: string;
  bookmakers: any;
}

export default function MatchUp({
  matchId,
  commenceTime,
  homeTeam,
  awayTeam,
  bookmakers,
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

  const [h2h, setH2h] = useState<any>();
  const [spreads, setSpreads] = useState<any>();

  const [homeMoneyline, setHomeMoneyline] = useState<number>();
  const [awayMoneyline, setAwayMoneyline] = useState<number>();

  const [homeSpread, setHomeSpread] = useState<number>();
  const [awaySpread, setAwaySpread] = useState<number>();
  const [homeSpreadOdds, setHomeSpreadOdds] = useState<number>();
  const [awaySpreadOdds, setAwaySpreadOdds] = useState<number>();

  useEffect(() => {
    const draftkings = bookmakers.find(
      (bookmaker: any) => bookmaker.key === "draftkings"
    );
    const bovada = bookmakers.find(
      (bookermaker: any) => bookermaker.key === "bovada"
    );
    const betus = bookmakers.find(
      (bookermaker: any) => bookermaker.key === "betus"
    );
    const unibet = bookmakers.find(
      (bookermaker: any) => bookermaker.key === "unibet_us"
    );

    const updateOdds = (bookmaker: any) => {
      const { markets } = bookmaker;

      const h2h = markets.find((market: any) => market.key === "h2h");
      const spreads = markets.find((market: any) => market.key === "spreads");

      if (h2h && h2h.outcomes) {
        setH2h(h2h);
        const [away, home] = h2h.outcomes;
        if (away && home) {
          setAwayMoneyline(away.price);
          setHomeMoneyline(home.price);
        }
      }

      if (spreads) {
        setSpreads(spreads);
        const [away, home] = spreads.outcomes;
        if (away && home) {
          setAwaySpread(away.point);
          setHomeSpread(home.point);
          setAwaySpreadOdds(away.price);
          setHomeSpreadOdds(home.price);
        }
      }
    };

    if (draftkings) {
      updateOdds(draftkings);
    } else if (bovada) {
      updateOdds(bovada);
    } else if (betus) {
      updateOdds(betus);
    } else if (unibet) {
      updateOdds(unibet);
    }
  }, [bookmakers]);

  return (
    <div className="w-full flex text-white p-2 bg-primaryBg rounded-lg">
      <div className="flex flex-col w-3/5 gap-2">
        <div className="border-b cursor-default">
          {formattedToday === formattedDate
            ? "TODAY"
            : formattedDate.toUpperCase()}
        </div>
        <TeamName team={awayTeam} />
        <TeamName team={homeTeam} />
      </div>
      {spreads && (
        <div
          className={`flex flex-col ${
            h2h ? "w-1/5" : "w-2/5"
          } justify-center items-center gap-2`}
        >
          <div className="border-b w-full flex justify-center items-center cursor-default">
            SPREAD
          </div>
          {awaySpreadOdds && awaySpread && (
            <Spread team={awayTeam} price={awaySpreadOdds} point={awaySpread} />
          )}
          {homeSpreadOdds && homeSpread && (
            <Spread team={homeTeam} price={homeSpreadOdds} point={homeSpread} />
          )}
        </div>
      )}
      {h2h && (
        <div
          className={`flex flex-col ${
            spreads ? "w-1/5" : "w-2/5"
          } justify-center items-center gap-2`}
        >
          <div className="border-b w-full flex justify-center items-center cursor-default">
            MONEYLINE
          </div>
          {awayMoneyline && <Moneyline price={awayMoneyline} team={awayTeam} />}
          {homeMoneyline && <Moneyline price={homeMoneyline} team={homeTeam} />}
        </div>
      )}
    </div>
  );
}
