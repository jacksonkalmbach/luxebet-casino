import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removePick } from "../../../store/features/sportsbook/betSlipSlice";
import CloseIcon from "../../../icons/CloseIcon";
import { calculatePayout } from "./utils/calculatePayout";

interface PickProps {
  id: string;
  team: string;
  price: number;
  point?: number;
  betType: string;
  onChange: (amount: number, team: string) => void;
}

export default function Pick({
  id,
  team,
  price,
  point,
  betType,
  onChange,
}: PickProps) {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState<number>(0);
  const [payout, setPayout] = useState(0);

  const handleRemovePick = () => {
    dispatch(removePick({ team, price, point, betType }));
  };

  useEffect(() => {
    const calculatedPayout = calculatePayout(price, inputValue);
    setPayout(calculatedPayout);
  }, [inputValue, price]);

  return (
    <div className="flex justify-start items-start w-full gap-2 border-b">
      <div
        className="h-full pt-3 cursor-pointer active:scale-95"
        onClick={handleRemovePick}
      >
        <CloseIcon color="#e0dfdf" />
      </div>
      <div className="flex flex-col py-3 w-3/5">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <p className="font-bold text-fontLight font-oneset text-xs">
              {team}
            </p>
          </div>
          <p className="text-xs text-fontLight font-oneset">{price}</p>
        </div>
        <p className="text-xs text-fontLight font-oneset">
          {betType} {point ? (point > 0 ? `+${point}` : point) : ""}
        </p>
      </div>
      <div className="flex flex-col w-[30%] items-center">
        <input
          className="rounded border mt-2 p-1 text-xs w-4/5 text-end"
          placeholder="$0.00"
          value={inputValue || ""}
          onChange={(e) => {
            const value = Number(e.target.value);
            setInputValue(value);
            onChange(value, id);
          }}
        ></input>
        {payout > 0 && (
          <p className="text-[10px] text-center w-full font-oneset text-fontLight">
            Payout: ${payout}{" "}
          </p>
        )}
      </div>
    </div>
  );
}
