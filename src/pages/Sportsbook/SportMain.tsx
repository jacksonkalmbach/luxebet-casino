import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BetSlip from "./BetSlip/BetSlip";
import MatchUp from "./MatchUp/MatchUp";
import MatchUpSkeleton from "./MatchUp/MatchUpSkeleton";
// import BetNavigation from "./Navigation/BetNavigation";

const SPORTS_API_KEY = process.env.REACT_APP_SPORTS_API_KEY;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": SPORTS_API_KEY as string,
    "X-RapidAPI-Host": "odds.p.rapidapi.com",
  },
};

export default function SportMain() {
  const [apiData, setApiData] = useState<any>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { sport, title } = useParams();

  const url = `https://odds.p.rapidapi.com/v4/sports/${title}/odds?regions=us&oddsFormat=american&markets=h2h%2Cspreads&dateFormat=iso`;

  useEffect(() => {
    try {
      const fetchSportOdds = async () => {
        const response = await fetch(url, options);
        if (response.status === 422) {
          setErrorMessage("Sorry, we can't access those odds right now.");
          return;
        } else if (response.ok) {
          const result = await response.json();
          setErrorMessage(null);
          setApiData(result);
        } else {
          console.error("Unexpected response:", response.statusText);
        }
      };
      fetchSportOdds();
    } catch (error) {
      console.error(error);
    }
  }, [url]);

  return (
    <div
      className="flex w-full h-full p-4 bg-transparent gap-4"
      style={{ height: "calc(100% - 80px)" }}
    >
      <div className="relative flex flex-col w-3/5 h-full bg-secondaryBg rounded-2xl justify-start items-start p-10 gap-10">
        <p className="text-fontLight text-2xl w-full font-oneset font-bold">
          {sport?.toUpperCase()} Betting Odds
        </p>
        {/* <BetNavigation sport={sport} /> */}
        <div className="flex w-full h-full justify-around overflow-auto">
          <div className="flex flex-col gap-4 justify-start w-full h-full overflow-auto">
            {errorMessage ? (
              <div className="text-center text-red-600">{errorMessage}</div>
            ) : apiData.length === 0 ? (
              <>
                <MatchUpSkeleton />
                <MatchUpSkeleton />
                <MatchUpSkeleton />
                <MatchUpSkeleton />
              </>
            ) : (
              <>
                {apiData
                  .filter((match: any) => {
                    if (!match.bookmakers || match.bookmakers.length === 0)
                      return false;

                    const validBookmakerKeys = [
                      "draftkings",
                      "bovada",
                      "betus",
                      "unibet_us",
                    ];
                    return match.bookmakers.some((bookmaker: any) =>
                      validBookmakerKeys.includes(bookmaker.key)
                    );
                  })
                  .map((match: any) => {
                    const {
                      id,
                      home_team,
                      away_team,
                      commence_time,
                      bookmakers,
                    } = match;

                    return (
                      <MatchUp
                        key={id}
                        matchId={id}
                        homeTeam={home_team}
                        awayTeam={away_team}
                        commenceTime={commence_time}
                        bookmakers={bookmakers}
                      />
                    );
                  })}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="w-2/5">
        <BetSlip />
      </div>
    </div>
  );
}
