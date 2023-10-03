import React from "react";

import Bet from "../Bet/Bet";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { selectUserBetPlacedTotal } from "../../store/features/game/userGameSlice";

export default function Bets() {
  const userBetPlacedTotal = useSelector((state: RootState) =>
    selectUserBetPlacedTotal(state)
  );

  return (
    <div className="absolute border-2 border-white-500/50 w-[80%] h-[70%] rounded-full">
      <div className="absolute left-10 -top-5">
        <Bet amount={100} side="left" />
      </div>
      <div className="absolute -left-[12%] top-[55%]">
        <Bet amount={90} side="left" />
      </div>
      <div className="absolute -right-[12%] top-[55%]">
        <Bet amount={70} side="right" />
      </div>
      <div className="absolute right-10 -top-5">
        <Bet amount={80} side="right" />
      </div>
      <div className="absolute right-8 -bottom-5">
        <Bet amount={60} side="right" />
      </div>
      <div className="absolute left-[43%] -translate-x-1/2 -bottom-5 flex justify-center items-center">
        {userBetPlacedTotal > 0 && <Bet amount={userBetPlacedTotal} />}
      </div>
    </div>
  );
}
