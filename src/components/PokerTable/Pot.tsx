import React from "react";

import { useSelector } from "react-redux";
import PokerChip from "../../icons/PokerChip";
import { selectPotTotal } from "../../store/features/game/potSlice";
import { RootState } from "../../store/store";

export default function Pot() {
  const pot = useSelector((state: RootState) => selectPotTotal(state));
  const potWithCommas = pot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div className="absolute top-[17%] flex flex-col justify-center items-center z-10 p-1 rounded-lg border-white-500/50">
      <span className="text-base text-white font-bold">Current Pot</span>
      <div className="flex gap-1 justify-center items-center bg-tertiaryBg px-3 py-1 rounded-full bg-opacity-50">
        <div className="h-5 w-5">
          <PokerChip />
        </div>
        <span className="text-xl text-white">{potWithCommas}</span>
      </div>
    </div>
  );
}
