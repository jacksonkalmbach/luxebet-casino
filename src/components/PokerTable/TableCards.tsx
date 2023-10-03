import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import CardOutline from "../Card/CardOutline";

type CardDetail = {
  suit: "hearts" | "spades" | "clubs" | "diamonds";
  value: string;
};
type CardOrEmpty = CardDetail | null;

const cardDetails: Record<number, CardOrEmpty> = {
  1: { suit: "hearts", value: "A" },
  2: { suit: "clubs", value: "K" },
  3: { suit: "diamonds", value: "Q" },
  4: { suit: "spades", value: "J" },
  5: { suit: "hearts", value: "10" },
};

export default function TableCards() {
  const [cardsOnTable, setCardsOnTable] = useState<(number | null)[]>(
    Array(5).fill(null)
  );

  const dealCards = () => {
    setTimeout(() => setCardsOnTable([1, null, null, null, null]), 1000);
    setTimeout(() => setCardsOnTable([1, 2, null, null, null]), 2000);
    setTimeout(() => setCardsOnTable([1, 2, 3, null, null]), 3000);
    setTimeout(() => setCardsOnTable([1, 2, 3, 4, null]), 4000);
    setTimeout(() => setCardsOnTable([1, 2, 3, 4, 5]), 5000);
  };

  useEffect(() => {
    dealCards();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center gap-2">
        {cardsOnTable.map((cardId, index) => {
          const card = cardId !== null ? cardDetails[cardId] : null;
          return (
            <div className="w-20 h-28" key={index}>
              {card ? (
                <Card
                  isFaceUp
                  suit={card.suit}
                  tilt=""
                  value={card.value}
                  absolute={false}
                />
              ) : (
                <CardOutline />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
