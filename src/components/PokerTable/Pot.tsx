import React from "react";

import { useSelector } from "react-redux";
import { selectPotTotal } from "../../store/features/game/potSlice";
import { RootState } from "../../store/store";

export default function Pot() {
  const pot = useSelector((state: RootState) => selectPotTotal(state));
  return (
    <div className="absolute top-10 flex justify-center items-center z-10 bg-[#23325c] p-2 rounded-lg border border-2 border-white-500/50 gap-2">
      <span className="text-xl">Pot:</span>
      <span className="text-xl">${pot}</span>
    </div>
  );
}
