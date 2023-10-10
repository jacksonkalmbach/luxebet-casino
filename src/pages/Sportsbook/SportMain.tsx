import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BetSlip from "./BetSlip/BetSlip";
import MatchUp from "./MatchUp/MatchUp";
import MatchUpSkeleton from "./MatchUp/MatchUpSkeleton";
import BetNavigation from "./Navigation/BetNavigation";

import { NFL_DATA } from "./NFL_ODDS";



export default function SportMain() {
  const [apiData, setApiData] = useState<any>([]);
  const { sport, title } = useParams();
  const params = useParams();
  console.log(params);

  

  useEffect(() => {
    try {
      const fetchSportOdds = async () => {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setApiData(result);
      };
      fetchSportOdds();
    } catch (error) {
      console.error(error);
    }
  }, [url]);

  return (
    <div
      className="flex w-full h-full p-8 bg-transparent"
      style={{ height: "calc(100% - 48px)" }}
    >
      <div className="relative flex flex-col w-full h-full bg-[#0a1f3b] rounded-2xl justify-start items-start p-10 border border-[#1c314c] gap-10">
        <p className="text-white text-2xl w-full font-bold">
          {sport?.toUpperCase()} Betting Odds
        </p>
        <BetNavigation sport={sport} />
        <div className="flex w-full h-full justify-around overflow-auto">
          <div className="flex flex-col gap-4 justify-start w-2/3 h-full overflow-auto">
            {apiData.length === 0 ? (
              <>
                <MatchUpSkeleton />
                <MatchUpSkeleton />
                <MatchUpSkeleton />
                <MatchUpSkeleton />
              </>
            ) : (
              <>
                {Array.isArray(apiData) && apiData.map((match: any) => {
                  const { home_team, away_team, commence_time } = match;

                  const [awayMoneyLineOdds, homeMoneyLineOdds] =
                    match?.bookmakers?.[2]?.markets?.[0]?.outcomes;

                  const [awaySpreadOdds, homeSpreadOdds] =
                    match?.bookmakers?.[2]?.markets?.[1]?.outcomes;

                  return (
                    <MatchUp
                      key={match.id}
                      matchId={match.id}
                      homeTeam={home_team}
                      awayTeam={away_team}
                      commenceTime={commence_time}
                      homeSpreadOdds={homeSpreadOdds.price}
                      awaySpreadOdds={awaySpreadOdds.price}
                      homeSpread={
                        "point" in homeSpreadOdds ? homeSpreadOdds.point : 0
                      }
                      awaySpread={
                        "point" in awaySpreadOdds ? awaySpreadOdds.point : 0
                      }
                      homeMoneyline={homeMoneyLineOdds.price}
                      awayMoneyline={awayMoneyLineOdds.price}
                    />
                  );
                })}
              </>
            )}
          </div>
          <BetSlip />
        </div>
      </div>
    </div>
  );
}
