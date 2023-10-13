import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addPick,
  removePick,
  selectFullBetSlip,
} from "../../../store/features/sportsbook/betSlipSlice";
import { RootState } from "../../../store/store";

interface MoneylineProps {
  price: number;
  team: string;
}

export default function Moneyline({ team, price }: MoneylineProps) {
  const dispatch = useDispatch();
  const picksArray = useSelector((state: RootState) =>
    selectFullBetSlip(state)
  );
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (picksArray.length === 0) {
      setIsSelected(false);
    }
  }, [picksArray]);

  const handleClick = () => {
    if (isSelected) {
      setIsSelected(!isSelected);
      dispatch(removePick({ team, price, betType: "Moneyline" }));
    } else {
      setIsSelected(!isSelected);
      dispatch(addPick({ team, price, betType: "Moneyline" }));
    }
  };

  return (
    <div
      className={`w-full flex p-2 justify-center items-center cursor-pointer active:scale-95 ${
        isSelected
          ? "bg-[#f1f1f1] text-black font-bold"
          : "hover:bg-gray-500/75 text-fontLight"
      } font-oneset text-xs md:text-base`}
      onClick={handleClick}
    >
      {price > 0 && "+"}
      {price}
    </div>
  );
}
