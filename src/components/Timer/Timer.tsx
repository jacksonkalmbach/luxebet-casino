import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  setPlayerUp,
  selectPlayerUp,
} from "../../store/features/game/pokerSlice";

import { RootState } from "../../store/store";

const TOTAL_TIME = 20;

interface TimerProps {
  handleNextPlayerTurn?: () => void;
  isUserTurn?: boolean;
}

export default function Timer({
  handleNextPlayerTurn,
  isUserTurn,
}: TimerProps) {
  const dispatch = useDispatch();
  const playerUp = Number(
    useSelector((state: RootState) => selectPlayerUp(state))
  );
  const totalPlayers = useSelector(
    (state: RootState) => state.poker.totalPlayers
  );

  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  // Calculate the circumference of the circle
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  // Calculate how much of the circumference should be shown
  const offset = circumference - (timeLeft / TOTAL_TIME) * circumference;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 1) {
          clearInterval(interval);
          if (playerUp === totalPlayers) {
            dispatch(setPlayerUp(0));
          } else {
            dispatch(setPlayerUp(playerUp + 1));
          }
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [handleNextPlayerTurn, dispatch, playerUp, totalPlayers]);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <svg width="100%" height="100%" viewBox="0 0 120 120">
        <circle
          r="50"
          cx="60"
          cy="60"
          fill="transparent"
          stroke="#eee"
          strokeWidth="5"
        />
        <circle
          r="50"
          cx="60"
          cy="60"
          fill="transparent"
          stroke={timeLeft <= TOTAL_TIME / 4 ? "red" : "blue"}
          strokeWidth="5"
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      {isUserTurn && (
        <p className="absolute text-white font-bold">{timeLeft}</p>
      )}
    </div>
  );
}
