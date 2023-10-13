import React from "react";
import { useSelector } from "react-redux";

import UserHand from "./UserHand";

import { selectUserBalance } from "../../../store/features/game/userGameSlice";

import { RootState } from "../../../store/store";
import PokerChip from "../../../icons/PokerChip";

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
        className={`absolute -bottom-16 -left-20 w-24 h-36 flex z-10 transition-all duration-300 ${
          isTurn ? "" : "scale-75 opacity-50"
        }`}
      >
        <UserHand />
      </div>
      <div className="flex flex-col justify-center items-center text-white absolute -bottom-10 left-16 font-bold w-48 h-20 rounded-lg border-2 border-[#f3cb16] bg-primaryBg">
        <p className="text-fontLight font-semibold font-oneset text-md mb-1">
          My Balance
        </p>
        <div className="flex gap-2 justify-center items-center">
          <div className="h-5 w-5">
            <PokerChip />
          </div>
          <p className="text-fontLight font-oneset text-lg">
            {userBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
      </div>
    </div>
  );
}
