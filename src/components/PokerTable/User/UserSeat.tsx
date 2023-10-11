import React from "react";
import { useSelector } from "react-redux";

import UserHand from "./UserHand";

import { selectUserBalance } from "../../../store/features/game/userGameSlice";

import { RootState } from "../../../store/store";

interface UserSeatProps {
  isTurn: boolean;
}

export default function UserSeat({ isTurn }: UserSeatProps) {
  const userBalance = useSelector((state: RootState) =>
    selectUserBalance(state)
  );

  return (
    <div>
      <div
        className={`absolute -bottom-16 -left-10 w-24 h-36 flex z-10 transition-all duration-300 ${
          isTurn ? "" : "scale-75 opacity-50"
        }`}
      >
        <UserHand />
      </div>
      <div className="flex flex-col justify-center items-center text-white absolute -bottom-10 left-16 font-bold w-48 h-20 rounded-lg border-2 border-[#f3cb16] bg-primaryBg">
        <p className="text-white font-semibold text-md">My Balance</p>
        <p className="text-white text-lg">${userBalance}</p>
      </div>
    </div>
  );
}
