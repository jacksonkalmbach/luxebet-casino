import React from "react";
import Card from "../Card/Card";

interface OpposingHandProps {
  side?: "left" | "right" | undefined;
  cards: {
    suit: "clubs" | "diamonds" | "hearts" | "spades";
    value: string;
  }[];
}

export default function OpposingHand({
  side = "left",
  cards,
}: OpposingHandProps) {
  if (cards.length === 0) return null;

  const cardPositions = {
    left: ["-left-20", "-left-14"],
    right: ["-right-14", "-right-20"],
  };

  return (
    <div className="absolute w-full">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`absolute w-8 h-12 -top-5 ${cardPositions[side][index]}`}
        >
          <Card
            isFaceUp={false}
            tilt={index === 0 ? "left" : "right"}
            suit={card.suit}
            value={card.value}
          />
        </div>
      ))}
    </div>
  );
}
