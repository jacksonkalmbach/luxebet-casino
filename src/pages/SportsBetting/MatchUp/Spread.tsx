import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPick } from "../../../store/features/sportsbook/betSlipSlice";

interface SpreadProps {
  team: string;
  price: number;
  point: number;
}

export default function Spread({ team, price, point }: SpreadProps) {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    dispatch(addPick({ team, price, point, betType: "Spread" }));
  };

  return (
    <div
      className={`w-full flex gap-3 p-2 justify-center items-center cursor-pointer active:scale-95 ${
        isSelected ? "bg-[#f1f1f1] text-[#0a1f3b] font-bold" : ""
      }`}
      onClick={handleClick}
    >
      <div>
        {point > 0 && "+"}
        {point}
      </div>
      <div className="text-yellow-600">
        {price > 0 && "+"}
        {price}
      </div>
    </div>
  );
}
