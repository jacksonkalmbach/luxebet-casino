import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import BetSlip from "./BetSlip/BetSlip";
import MatchUp from "../../components/Sportsbook/MatchUp/MatchUp";
import MatchUpSkeleton from "../../components/Sportsbook/MatchUp/MatchUpSkeleton";

import { MatchUpType } from "../../types/Sportsbook/MatchUpType";
const SPORTS_API_KEY = process.env.REACT_APP_SPORTS_API_KEY;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": SPORTS_API_KEY as string,
    "X-RapidAPI-Host": "odds.p.rapidapi.com",
  },
};

export default function SportMain() {
  const { sport, title } = useParams();
  const url = `https://odds.p.rapidapi.com/v4/sports/${title}/odds?regions=us&oddsFormat=american&markets=h2h%2Cspreads&dateFormat=iso`;

  const { data, error: errorMessage, isLoading } = useFetch<any>(url, options);

  return (
    <div
      className="flex w-full h-full p-4 bg-transparent md:gap-4"
      style={{ height: "calc(100% - 80px)" }}
    >
      <div className="relative flex flex-col w-full lg:w-3/5 h-full bg-secondaryBg rounded-2xl justify-start items-start p-4 lg:p-10 gap-5 md:gap-10">
        <p className="text-fontLight text-xl md:text-2xl w-full font-oneset font-bold">
          {sport?.toUpperCase()} Betting Odds
        </p>
        <div className="flex w-full h-full justify-around overflow-auto">
          <div className="flex flex-col gap-4 justify-start w-full h-full overflow-auto">
            {errorMessage ? (
              <p className="text-center text-red-600">
                Sorry, we can't retrieve those odds right now.
              </p>
            ) : isLoading ? (
              <>
                <MatchUpSkeleton />
                <MatchUpSkeleton />
                <MatchUpSkeleton />
                <MatchUpSkeleton />
              </>
            ) : (
              <>
                {data &&
                  data
                    .filter((match: MatchUpType) => {
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
      <div className="lg:w-2/5">
        <BetSlip />
      </div>
    </div>
  );
}
