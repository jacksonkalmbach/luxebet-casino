import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import PokerTable from "../../components/PokerTable";
import TurnOptions from "../../components/TurnOptions";
import ExitIcon from "../../icons/ExitIcon";

export default function TexasHoldEm() {
  const navigate = useNavigate();
  const [startGame, setStartGame] = useState<boolean>(false);

  const handleStartNewGame = async () => {
    console.log("start game");
    setStartGame(true);
    const res = await fetch("http://localhost:5003/start-game", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        num_players: 5,
      }),
    });

    const json = await res.json();
    console.log(json);
  };

  return (
    <div className="flex w-full h-full p-4 bg-transparent">
      {startGame ? (
        <div className="relative flex flex-col w-full h-full bg-secondaryBg rounded-2xl justify-center items-center overflow-hidden">
          <div className="absolute top-5 left-10 cursor-pointer active:scale-95">
            <button
              className="flex gap-2 px-3 py-2 rounded hover:bg-primaryBg group"
              onClick={() => navigate("/")}
            >
              <ExitIcon color="#CCCCCC" />{" "}
              <p className="text-fontLight opacity-0 group-hover:opacity-100 font-oneset">
                Leave Table
              </p>
            </button>
          </div>
          <PokerTable />
          <TurnOptions />
        </div>
      ) : (
        <div className="relative flex flex-col w-full h-full bg-secondaryBg rounded-2xl justify-center items-center overflow-hidden">
          <div className="flex flex-col gap-2">
            <div className="text-white">How Many Players?</div>
            <input />
            <button
              onClick={handleStartNewGame}
              className="bg-primaryAccent p-2 rounded active:scale-95"
            >
              Start New Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
