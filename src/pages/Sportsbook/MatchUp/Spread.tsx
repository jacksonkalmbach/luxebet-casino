import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPick,
  removePick,
  selectFullBetSlip,
} from "../../../store/features/sportsbook/betSlipSlice";
import { RootState } from "../../../store/store";

interface SpreadProps {
  team: string;
  price: number;
  point: number;
}

export default function Spread({ team, price, point }: SpreadProps) {
  const dispatch = useDispatch();
  const picksArray = useSelector((state: RootState) =>
    selectFullBetSlip(state)
  );
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const existsInPicks = picksArray.some(
      (pick) =>
        pick.team === team &&
        pick.price === price &&
        pick.point === point &&
        pick.betType === "Spread"
    );

    setIsSelected(existsInPicks);
  }, [picksArray, team, price, point]);

  const handleClick = () => {
    if (isSelected) {
      dispatch(removePick({ team, price, point, betType: "Spread" }));
    } else {
      dispatch(addPick({ team, price, point, betType: "Spread" }));
    }
  };

  return (
    <div
      className={`w-full flex gap-3 p-2 justify-center items-center cursor-pointer active:scale-95  ${
        isSelected
          ? "bg-highlight text-primaryBg font-bold"
          : "hover:bg-highlight hover:bg-opacity-40"
      }`}
      onClick={handleClick}
    >
      <div
        className={`font-oneset ${
          isSelected ? "text-subduedText" : "text-primaryAccent"
        }`}
      >
        {point > 0 && "+"}
        {point}
      </div>
      <div className="font-oneset text-fontLight">
        {price > 0 && "+"}
        {price}
      </div>
    </div>
  );
}
