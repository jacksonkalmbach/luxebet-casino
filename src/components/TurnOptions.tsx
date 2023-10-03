import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  decrementUserBalanceByAmount,
  incrementUserBalanceByAmount,
  selectUserBalance,
  selectUserBetTotal,
  incrementUserBetByAmount,
  decrementUserBetByAmount,
  clearUserBetTotal,
  setUserPlacedBetTotal,
} from "../store/features/game/userGameSlice";

import { incrementPotByAmount } from "../store/features/game/potSlice";

import { clearUserHand } from "../store/features/game/cardsSlice";
import { RootState } from "../store/store";

import { Slider } from "@mui/material";
import Button from "./ui/Button";

export default function TurnOptions() {
  const dispatch = useDispatch();

  const [betValue, setBetValue] = useState<number>(10);

  const userBetTotal = useSelector((state: RootState) =>
    selectUserBetTotal(state)
  );
  const userBalance = useSelector((state: RootState) =>
    selectUserBalance(state)
  );

  const handleUserFold = () => {
    dispatch(clearUserHand());
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
    dispatch(clearUserBetTotal());
    dispatch(incrementPotByAmount(amount));
    dispatch(setUserPlacedBetTotal(amount));
  };

  return (
    <div className="w-full h-[10%] flex justify-center gap-3 items-center text-white absolute bottom-0 bg-[#0c2748]">
      <Button text="-" onClick={() => handleBetDecrease(10)} />
      <div className="w-1/5">
        <Slider
          defaultValue={betValue}
          value={betValue}
          aria-label="Default"
          valueLabelDisplay="auto"
          step={10}
          onChange={(e, value) => setBetValue(value as number)}
          sx={{
            color: "#eec23e",
            "& .MuiSlider-rail": {
              backgroundColor: "#eec23e",
            },
            "& .MuiSlider-thumb": {
              "&:hover, &.Mui-focusVisible": {
                boxShadow: "0px 0px 0px 8px rgba(238, 194, 62, 0.16)", // Add a yellow focus shadow around the thumb
              },
            },
          }}
        />
      </div>
      <Button text="+" onClick={() => handleBetIncrease(10)} />
      <Button
        text={`Bet ${userBetTotal}`}
        onClick={() => handleSubmitBet(betValue)}
      />
      <Button text="Check" onClick={() => handleSubmitBet(0)} />
      <Button text="Call" onClick={() => handleSubmitBet(userBetTotal)} />
      <Button text="All In" onClick={() => handleSubmitBet(userBalance)} />
      <Button text="Fold" onClick={handleUserFold} />
    </div>
  );
}
