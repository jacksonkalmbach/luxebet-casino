import React from "react";

import ClubsIcon from "../../icons/Suits/ClubsIcon";
import DiamondIcon from "../../icons/Suits/DiamondIcon";
import HeartsIcon from "../../icons/Suits/HeartsIcon";
import SpadesIcon from "../../icons/Suits/SpadesIcon";

type CardSuit = "clubs" | "spades" | "hearts" | "diamonds";

interface CardProps {
  tilt: "left" | "right" | "";
  suit: CardSuit;
  value: string | number;
  isFaceUp: boolean;
  absolute?: boolean;
}

const suits = {
  hearts: <HeartsIcon />,
  diamonds: <DiamondIcon />,
  clubs: <ClubsIcon />,
  spades: <SpadesIcon />,
};

export default function Card({
  tilt,
  suit,
  value,
  isFaceUp,
  absolute,
}: CardProps) {
  return (
    <div
      className={`${
        absolute ? "absolute" : ""
      } w-full h-full bg-white border border-gray-200 rounded shadow-xl ${
        tilt === "right"
          ? "rotate-[10deg]"
          : tilt === "left"
          ? "-rotate-[10deg]"
          : ""
      }`}
    >
      {isFaceUp ? (
        <div className="flex w-full h-full justify-between p-1">
          <div className="flex flex-col items-center">
            <div
              className={`${
                suit === "hearts" || suit === "diamonds"
                  ? "text-red-500"
                  : "text-black"
              } text-sm`}
            >
              {value}
            </div>
            <div className="text-black h-3 w-3">{suits[suit]}</div>
          </div>
          <div className="text-black w-full h-full flex justify-center items-center">
            {suits[suit]}
          </div>
          <div className="flex flex-col self-end rotate-180 items-center">
            <div
              className={`${
                suit === "hearts" || suit === "diamonds"
                  ? "text-red-500"
                  : "text-black"
              } text-sm`}
            >
              {value}
            </div>
            <div className="text-black h-3 w-3">{suits[suit]}</div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full bg-red-200 rounded border border-white"></div>
      )}
    </div>
  );
}
