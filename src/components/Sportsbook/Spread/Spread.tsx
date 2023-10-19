import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPick,
  removePick,
  selectBetSlipObject,
} from "../../../store/features/sportsbook/betSlipSlice";
import { RootState } from "../../../store/store";

interface SpreadProps {
  team: string;
  price: number;
  point: number;
}

interface PickObject {
  team: string;
  spread: number;
  price: number;
}

export default function Spread({ team, price, point }: SpreadProps) {
  const dispatch = useDispatch();
  const picksObject = useSelector((state: RootState) =>
    selectBetSlipObject(state)
  );

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const key = `${team}-${"Spread"}-${price}`;
    if (picksObject[key]) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [team, price, picksObject]);

  const handleClick = () => {
    if (isSelected) {
      dispatch(removePick({ team, price, point, betType: "Spread" }));
    } else {
      dispatch(addPick({ team, price, point, betType: "Spread" }));
    }
  };

  return (
    <div
      className={`w-full flex gap-3 p-2 justify-center items-center cursor-pointer active:scale-95 ${
        isSelected
          ? "bg-highlight text-primaryBg font-bold"
          : "hover:bg-highlight hover:bg-opacity-40"
      }`}
      onClick={handleClick}
    >
      <div
        className={`font-oneset text-xs md:text-base ${
          isSelected ? "text-primaryBg" : "text-primaryAccent"
        }`}
      >
        {point > 0 && "+"}
        {point}
      </div>
      <div
        className={`font-oneset text-xs md:text-base ${
          isSelected ? "text-primaryBg" : "text-fontLight"
        }`}
      >
        {price > 0 && "+"}
        {price}
      </div>
    </div>
  );
}
