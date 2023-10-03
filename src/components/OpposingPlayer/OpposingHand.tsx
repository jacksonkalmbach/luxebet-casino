import React from "react";
import Card from "../Card/Card";

interface OpposingHandProps {
  side: "left" | "right";
  cards: {
    suit: "clubs" | "diamonds" | "hearts" | "spades";
    value: string;
  }[];
  isFolded?: boolean;
  showCards?: boolean | undefined;
}

export default function OpposingHand({
  side,
  cards,
  showCards,
  isFolded,
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
          className={`absolute w-8 h-12 transition-all duration-200 ${
            isFolded ? "scale-95 " : ""
          } -top-5 ${cardPositions[side][index]}`}
        >
          <Card
            isFaceUp={showCards}
            tilt={index === 0 ? "left" : "right"}
            suit={card.suit}
            value={card.value}
            isFolded={isFolded}
          />
        </div>
      ))}
    </div>
  );
}
