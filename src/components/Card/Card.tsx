import React from "react";

import ClubsIcon from "../../icons/Suits/ClubsIcon";
import DiamondIcon from "../../icons/Suits/DiamondIcon";
import HeartsIcon from "../../icons/Suits/HeartsIcon";
import SpadesIcon from "../../icons/Suits/SpadesIcon";

type CardSuit = "C" | "S" | "H" | "D";

interface CardProps {
  tilt: "left" | "right" | "";
  suit: CardSuit;
  value: string | number;
  isFaceUp?: boolean;
  absolute?: boolean;
  isFolded?: boolean;
}

const suits = {
  H: <HeartsIcon />,
  D: <DiamondIcon />,
  C: <ClubsIcon />,
  S: <SpadesIcon />,
};

export default function Card({
  tilt,
  suit,
  value,
  isFaceUp,
  absolute,
  isFolded,
}: CardProps) {
  return (
    <div
      className={`${
        absolute ? "absolute" : ""
      } w-full h-full  border border-gray-200 rounded shadow-xl ${
        tilt === "right"
          ? "rotate-[10deg]"
          : tilt === "left"
          ? "-rotate-[10deg]"
          : ""
      } transition-all transform-origin duration-200 ${
        isFolded ? "scale-90 bg-gray-200 opacity-80" : "bg-white"
      }`}
    >
      {isFaceUp ? (
        <div className="flex w-full h-full justify-between p-1">
          <div className="flex flex-col items-center">
            <div
              className={`${
                suit === "H" || suit === "D" ? "text-red-500" : "text-black"
              } text-sm`}
            >
              {value}
            </div>
            <div className="hidden text-black h-3 w-3">{suits[suit]}</div>
          </div>
          <div className="text-black w-full h-full flex justify-center items-center">
            {suits[suit]}
          </div>
          <div className="hidden md:flex flex-col self-end rotate-180 items-center">
            <div
              className={`${
                suit === "H" || suit === "D" ? "text-red-500" : "text-black"
              } text-sm`}
            >
              {value}
            </div>
            <div className="flex text-black h-3 w-3">{suits[suit]}</div>
          </div>
        </div>
      ) : (
        <div
          className={`w-full h-full ${
            !isFolded ? "bg-red-300" : "bg-red-100"
          } rounded border border-white`}
        ></div>
      )}
    </div>
  );
}
