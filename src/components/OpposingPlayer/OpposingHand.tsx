import React from "react";

import Card from "../Card/Card";

interface OpposingHandProps {
  side?: "left" | "right";
  cards: {
    suit: string;
    value: string;
  }[];
}

export default function OpposingHand({ side, cards }: OpposingHandProps) {
  return (
    <div className="absolute w-full">
      <div
        className={`absolute w-8 h-12 -top-5 ${
          side === "left" ? "-left-20" : "-right-14"
        }`}
      >
        <Card isFaceUp={false} tilt="left" suit="clubs" value="K" />
      </div>
      <div
        className={`absolute w-8 h-12 -top-5 ${
          side === "left" ? "-left-14" : "-right-20"
        }`}
      >
        <Card isFaceUp={false} tilt="right" suit="clubs" value="K" />
      </div>
    </div>
  );
}
