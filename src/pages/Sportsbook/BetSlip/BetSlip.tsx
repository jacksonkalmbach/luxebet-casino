import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Pick from "./Pick";

import {
  selectFullBetSlip,
  clearBetSlip,
} from "../../../store/features/sportsbook/betSlipSlice";

import { RootState } from "../../../store/store";

export default function BetSlip() {
  const dispatch = useDispatch();
  const picksArray = useSelector((state: RootState) =>
    selectFullBetSlip(state)
  );

  const [betSlipSum, setBetSlipSum] = useState(0);

  const clearAllBets = () => {
    dispatch(clearBetSlip());
  };

  const handleAddBet = useCallback(
    (amount: number) => {
      setBetSlipSum(betSlipSum + amount);
    },
    [betSlipSum]
  );

  return (
    <div className="p-6 rounded-lg w-[30%] flex flex-col bg-[#f1f1f1] shadow-xl overflow-auto">
      <div className="flex w-full justify-between items-center border-b">
        <div className="flex gap-1 items-center">
          <div className="text-[#0a1f3b] text-2xl p-2 font-bold">
            {picksArray.length}
          </div>
          <p className="text-[#0a1f3b] text-2xl font-bold">BET SLIP</p>
        </div>
        {picksArray.length > 0 && (
          <button onClick={clearAllBets} className="text-sm active:scale-95">
            Clear Bets
          </button>
        )}
      </div>

      {picksArray.length === 0 ? (
        <div
          className="sticky flex justify-center items-center h-full w-full"
          style={{ top: "0px" }}
        >
          <p className="text-[#0a1f3b] font-bold text-sm">
            YOUR PICKS WILL SHOW UP HERE.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-2 justify-start h-full">
          <div className="flex flex-col w-full h-full">
            {picksArray.map((pick) => {
              const { team, price, point, betType } = pick;
              return (
                <Pick
                  key={team}
                  onChange={handleAddBet}
                  team={team}
                  price={price}
                  point={point}
                  betType={betType}
                />
              );
            })}
          </div>
          <button className="bg-[#eec23e] w-full p-2 rounded-lg font-bold text-black justify-self-end active:scale-95">
            Place Bet
          </button>
        </div>
      )}
    </div>
  );
}
