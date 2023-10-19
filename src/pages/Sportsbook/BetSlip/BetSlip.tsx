import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserBalance } from "../../../store/features/game/userGameSlice";
import {
  selectFullBetSlip,
  clearBetSlip,
  placeBet,
} from "../../../store/features/sportsbook/betSlipSlice";
import {
  decrementUserBalance,
  selectUserLoginStatus,
} from "../../../store/features/user/userSlice";
import { RootState } from "../../../store/store";
import Pick from "./Pick";

export default function BetSlip() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) =>
    selectUserLoginStatus(state)
  );
  const picksObject = useSelector((state: RootState) =>
    selectFullBetSlip(state)
  );

  const [showFullBetSlip, setShowFullBetSlip] = useState<boolean>(true);
  const [betSlipSum, setBetSlipSum] = useState(0);
  const [pickAmounts, setPickAmounts] = useState<Record<string, number>>({});

  const balance = useSelector((state: RootState) => selectUserBalance(state));

  const clearAllBets = () => {
    dispatch(clearBetSlip());
    setPickAmounts({});
  };

  const handleAddBet = useCallback((amount: number, team: string) => {
    setPickAmounts((prev) => ({ ...prev, [team]: amount }));
  }, []);

  const handleShowFullBetSlip = () => {
    setShowFullBetSlip(!showFullBetSlip);
  };

  useEffect(() => {
    const total = Object.values(pickAmounts).reduce(
      (sum, amount) => sum + amount,
      0
    );
    setBetSlipSum(total);
  }, [pickAmounts]);

  const handlePlaceBet = () => {
    if (isLoggedIn) {
      if (betSlipSum === 0) return;
      if (betSlipSum <= balance) {
        dispatch(decrementUserBalance(betSlipSum));
        dispatch(placeBet({ picks: picksObject, wagers: pickAmounts }));
        dispatch(clearBetSlip());
      } else {
        alert("Insufficient Funds");
      }
    } else {
      navigate("/auth");
    }
  };

  return (
    <div
      className={`md:static md:left-auto md:bottom-auto md:bg-secondaryBg ${
        Object.values(picksObject).length === 0 ? "hidden" : ""
      } absolute left-0 bottom-0 bg-tertiaryBg h-fit lg:flex p-6 rounded-xl w-full lg:h-full flex-col bg-secondaryBg shadow-xl overflow-auto`}
    >
      <div
        className="flex w-full justify-between items-center border-b"
        onClick={handleShowFullBetSlip}
      >
        <div className="flex gap-1 items-center">
          <div className="text-fontLight font-oneset text-2xl p-2 font-bold">
            {Object.values(picksObject).length}
          </div>
          <p className="text-fontLight font-oneset text-2xl font-bold">
            BET SLIP
          </p>
        </div>
        {Object.values(picksObject).length > 0 && (
          <button
            onClick={clearAllBets}
            className="text-sm text-fontLight font-oneset active:scale-95"
          >
            Clear Bets
          </button>
        )}
      </div>

      {Object.values(picksObject).length === 0 ? (
        <div
          className="sticky flex justify-center items-center h-full w-full"
          style={{ top: "0px" }}
        >
          <p className="text-fontLight font-oneset font-bold text-sm">
            YOUR PICKS WILL SHOW UP HERE.
          </p>
        </div>
      ) : (
        <div
          className={`${
            showFullBetSlip ? "" : "hidden"
          } md:flex flex-col gap-2 justify-start h-full`}
        >
          <div className="flex flex-col w-full h-full">
            {Object.values(picksObject).map((pick) => {
              const { team, price, point, betType } = pick;
              return (
                <Pick
                  key={`${team}-${betType}-${price}`}
                  id={`${team}-${betType}-${price}`}
                  onChange={handleAddBet}
                  team={team}
                  price={price}
                  point={point}
                  betType={betType}
                />
              );
            })}
          </div>
          <button
            className={`bg-primaryAccent mt-3 w-full p-2 rounded-lg font-bold font-oneset text-black justify-self-end  ${
              betSlipSum === 0
                ? "cursor-not-allowed opacity-50 disabled"
                : "cursor-pointer active:scale-95 opacity-100"
            }`}
            onClick={handlePlaceBet}
          >
            {betSlipSum === 0
              ? "Enter Wager Amount"
              : isLoggedIn
              ? `Place Bet $${betSlipSum.toFixed(2)}`
              : "Sign In to Place Wager"}
          </button>
        </div>
      )}
    </div>
  );
}
