import React from "react";
import { useNavigate } from "react-router-dom";
import { SPORTS } from "./Sportsbook/sports";

export default function MainMenu() {
  const navigate = useNavigate();

  const handleNavigate = (category: string, game: string) => {
    navigate(`/${category}/${game}`);
  };

  return (
    <div className="relative flex flex-col w-full h-full bg-[#0a1f3b] rounded-2xl justify-start items-center p-10 border border-[#1c314c] gap-10">
      <div className="w-full flex flex-col h-2/5 gap-3">
        <h1 className="text-white text-3xl font-bold">Games</h1>
        <div className="flex gap-4 h-full w-full">
          <div
            className="w-[300px] bg-[#CCCCCC] flex justify-center items-center rounded-lg cursor-pointer active:scale-95 transition-all duration-200"
            onClick={() => handleNavigate("games", "texas hold'em")}
          >
            Texas Hold'em
          </div>
          <div
            className="w-[300px] bg-[#CCCCCC] flex justify-center items-center rounded-lg cursor-pointer active:scale-95 transition-all duration-200"
            onClick={() => handleNavigate("games", "blackjack")}
          >
            Blackjack
          </div>
          <div
            className="w-[300px] bg-[#CCCCCC] flex justify-center items-center rounded-lg cursor-pointer active:scale-95 transition-all duration-200"
            onClick={() => handleNavigate("games", "roulette")}
          >
            Roulette
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col h-2/5">
        <h1 className="text-white text-3xl font-bold mb-3">Sportsbook</h1>
        <div className="flex flex-wrap gap-4 w-full">
          {SPORTS.map((sport) => (
            <div
              className="w-fit h-fit py-3 px-6 bg-[#CCCCCC] flex justify-start items-center rounded-lg cursor-pointer active:scale-95 transition-all duration-200"
              onClick={() => handleNavigate("sportsbook", sport.name)}
            >
              <p className="text-base w-fit">{sport.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
