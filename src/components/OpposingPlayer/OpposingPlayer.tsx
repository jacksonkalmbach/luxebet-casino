import React from "react";

import LittleBlind from "../PokerTable/Blind/LittleBlind";
import BigBlind from "../PokerTable/Blind/BigBlind";
import OpposingHand from "./OpposingHand";
import Timer from "../Timer/Timer";
import PokerChip from "../../icons/PokerChip";

interface OpposingPlayerProps {
  side: "left" | "right";
  image?: string;
  name?: string;
  cards?:
    | {
        suit: "D" | "C" | "H" | "S";
        value: number;
        display_value: string;
      }[];
  isTurn?: boolean;
  isFolded?: boolean;
  isOccupied?: boolean;
  isSmallBlind?: boolean;
  isBigBlind?: boolean;
}

export default function OpposingPlayer({
  side,
  image,
  name,
  cards,
  isTurn,
  isFolded,
  isOccupied,
  isSmallBlind,
  isBigBlind,
}: OpposingPlayerProps) {
  const playerBalance = 1000;
  const playerBalanceWithCommas = playerBalance
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div
      className={`w-fit h-fit flex flex-col justify-center items-center shadow-xl transition-all duration-300 ${
        !isTurn ? "scale-75 opacity-75" : ""
      }`}
    >
      <div
        className={`relative w-48 ${
          isOccupied
            ? " flex bg-primaryBg px-2 py-1 items-center justify-center rounded-lg border-2 border-[#f3cb16]"
            : ""
        }`}
      >
        <div
          className={`absolute -top-3 ${
            side === "right" ? "-left-3" : "-right-3"
          }`}
        >
          {isBigBlind && <BigBlind />}
          {isSmallBlind && <LittleBlind />}
        </div>
        {isOccupied ? (
          <>
            <img
              src={image}
              alt="profile"
              className={`absolute ${
                side === "left" ? "-left-7" : "-right-7"
              } h-20 w-20 flex rounded-full bg-gray-200 border-2 border-[#f3cb16]`}
            />
            {isTurn && (
              <div
                className={`absolute ${
                  side === "left" ? "-left-9" : "-right-9"
                } h-24 w-24 flex rounded-full`}
              >
                <Timer />
              </div>
            )}
          </>
        ) : (
          <div
            className={`absolute ${
              side === "left" ? "-left-7" : "-right-7"
            } h-20 w-20 flex rounded-full bg-gray-200 border-2 border-[#f3cb16]`}
          ></div>
        )}
        {isOccupied && (
          <>
            <OpposingHand
              side={side}
              cards={cards || []}
              isFolded={isFolded}
              showCards={false}
            />
            <div
              className={`flex flex-col justify-center items-center w-full ${
                side === "left" ? "ml-6" : "mr-6"
              }`}
            >
              <p className="text-fontLight font-oneset font-semibold text-sm">
                {name}
              </p>
              <div className="flex gap-1 justify-center items-center">
                <div className="h-4 w-4">
                  <PokerChip />
                </div>
                <p className="text-fontLight font-oneset">
                  {playerBalanceWithCommas}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
