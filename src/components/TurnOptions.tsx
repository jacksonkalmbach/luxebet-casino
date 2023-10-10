import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "./ui/Button";

import { Slider } from "@mui/material";

import {
  decrementUserBalanceByAmount,
  selectUserBalance,
  selectUserBetTotal,
  incrementUserBetByAmount,
  decrementUserBetByAmount,
  setUserPlacedBetTotal,
  setIsBetPlaced,
  setIsFolded,
} from "../store/features/game/userGameSlice";

import { incrementPotByAmount } from "../store/features/game/potSlice";
import { RootState } from "../store/store";

export default function TurnOptions() {
  const dispatch = useDispatch();

  const [betValue, setBetValue] = useState<number>(10);

  const userBetTotal = useSelector((state: RootState) =>
    selectUserBetTotal(state)
  );
  const userBalance = useSelector((state: RootState) =>
    selectUserBalance(state)
  );
  const playerUp = useSelector((state: RootState) => state.poker.playerUp);

  const handleUserFold = () => {
    dispatch(setIsFolded(true));
  };

  const handleBetIncrease = (amount: number) => {
    if (userBalance > amount) {
      dispatch(incrementUserBetByAmount(amount));
      setBetValue((prevValue) => prevValue + amount);
    } else {
      return;
    }
  };

  const handleBetDecrease = (amount: number) => {
    dispatch(decrementUserBetByAmount(amount));
    setBetValue((prevValue) => Math.max(prevValue - amount, 0));
  };

  const handleSubmitBet = (amount: number) => {
    dispatch(decrementUserBalanceByAmount(amount));
    dispatch(incrementPotByAmount(amount));
    dispatch(setUserPlacedBetTotal(amount));
    dispatch(setIsBetPlaced(true));
  };

  return (
    <div className="w-full h-[10%] flex justify-center gap-3 items-center text-white absolute bottom-0 bg-[#0c2748]">
      <Button
        text="-"
        onClick={() => handleBetDecrease(10)}
        isUserTurn={playerUp === 0}
      />
      <div className="w-1/5">
        <Slider
          defaultValue={betValue}
          value={betValue}
          aria-label="Default"
          valueLabelDisplay="auto"
          step={10}
          disabled={playerUp !== 0}
          onChange={(e, value) => setBetValue(value as number)}
          sx={{
            color: "#eec23e",
            "& .MuiSlider-rail": {
              backgroundColor: "#eec23e",
            },
            "& .MuiSlider-thumb": {
              "&:hover, &.Mui-focusVisible": {
                boxShadow: "0px 0px 0px 8px rgba(238, 194, 62, 0.16)",
              },
            },
          }}
        />
      </div>
      <Button
        text="+"
        onClick={() => handleBetIncrease(10)}
        isUserTurn={playerUp === 0}
      />
      <Button
        text={`Bet ${userBetTotal}`}
        onClick={() => handleSubmitBet(betValue)}
        isUserTurn={playerUp === 0}
      />
      <Button
        text="Check"
        onClick={() => handleSubmitBet(0)}
        isUserTurn={playerUp === 0}
      />
      <Button
        text={`Call ${800}`}
        onClick={() => handleSubmitBet(800)}
        isUserTurn={playerUp === 0}
      />
      <Button
        text="All In"
        onClick={() => handleSubmitBet(userBalance)}
        isUserTurn={playerUp === 0}
      />
      <Button
        text="Fold"
        onClick={handleUserFold}
        isUserTurn={playerUp === 0}
      />
    </div>
  );
}
