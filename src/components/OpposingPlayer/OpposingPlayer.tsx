import React from "react";

import LittleBlind from "../PokerTable/Blind/LittleBlind";
import BigBlind from "../PokerTable/Blind/BigBlind";
import OpposingHand from "./OpposingHand";

interface OpposingPlayerProps {
  side: "left" | "right";
  image?: string;
  name?: string;
  cards?:
    | {
        suit: "clubs" | "diamonds" | "hearts" | "spades";
        value: string;
      }[];
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
  isFolded,
  isOccupied,
  isSmallBlind,
  isBigBlind,
}: OpposingPlayerProps) {
  return (
    <div className="w-fit h-fit flex flex-col justify-center items-center shadow-xl">
      <div
        className={`relative w-48 ${
          isOccupied
            ? " flex bg-[#23325c] px-2 py-1 items-center justify-center rounded-lg border-2 border-[#f3cb16]"
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
          <img
            src={image}
            alt="profile"
            className={`absolute ${
              side === "left" ? "-left-7" : "-right-7"
            } h-20 w-20 flex rounded-full bg-gray-200 border-2 border-[#f3cb16]`}
          />
        ) : (
          <div
            className={`absolute ${
              side === "left" ? "-left-7" : "-right-7"
            } h-20 w-20 flex rounded-full bg-gray-200 border-2 border-[#f3cb16]`}
          ></div>
        )}
        {isOccupied && (
          <>
            <OpposingHand side={side} cards={cards || []} isFolded={isFolded} />
            <div
              className={`flex flex-col justify-center items-center w-full ${
                side === "left" ? "ml-6" : "mr-6"
              }`}
            >
              <p className="text-white font-semibold text-sm">{name}</p>
              <p className="text-white">$1,000</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
