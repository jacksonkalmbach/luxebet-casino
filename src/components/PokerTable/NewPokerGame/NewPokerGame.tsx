import React from "react";

import pokerImg from "../../../photos/poker-bg.webp";

interface NewPokerGameProps {
  handleStartNewGame: () => void;
}

export default function NewPokerGame({
  handleStartNewGame,
}: NewPokerGameProps) {
  return (
    <div className="relative flex flex-col w-full h-full bg-secondaryBg rounded-2xl justify-center items-center overflow-hidden">
      <div className="flex flex-col gap-2 font-oneset w-1/2 h-1/2 border">
        <div className="overflow-hidden object-fit">
          <img src={pokerImg} alt="poker-bg" />
        </div>
        <div className="text-white">How Many Players?</div>

        <button
          onClick={handleStartNewGame}
          className="bg-primaryAccent p-2 rounded active:scale-95"
        >
          Start New Game
        </button>
      </div>
    </div>
  );
}
