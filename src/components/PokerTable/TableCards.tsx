import React, { useEffect, useState } from "react";
import socket from "../../utils/socket";
import Card from "../Card/Card";
import CardOutline from "../Card/CardOutline";

type CardDetail = {
  suit: "H" | "S" | "C" | "D";
  value: number;
  display_value: string;
};

export default function TableCards() {
  const [flopCards, setFlopCards] = useState<CardDetail[] | undefined>();
  const [turnCard, setTurnCard] = useState();
  const [riverCard, setRiverCard] = useState();
  const [cardsOnTable, setCardsOnTable] = useState<(CardDetail | null)[]>(
    Array(5).fill(null)
  );

  useEffect(() => {
    socket.on("flop_cards", (data: any) => {
      setFlopCards(data);
    });

    return () => {
      socket.off("flop_cards");
    };
  }, []);

  useEffect(() => {
    if (flopCards) dealFlopCards(Object.values(flopCards));
  }, [flopCards]);

  // useEffect(() => {
  //   if (turnCard) dealTurnCard();
  // }, [turnCard]);

  // useEffect(() => {
  //   if (riverCard) dealRiverCard();
  // }, [riverCard]);

  const dealFlopCards = (cards: CardDetail[]) => {
    setTimeout(() => setCardsOnTable([cards[0], null, null, null, null]), 1000);
    setTimeout(
      () => setCardsOnTable([cards[0], cards[1], null, null, null]),
      2000
    );
    setTimeout(
      () => setCardsOnTable([cards[0], cards[1], cards[2], null, null]),
      3000
    );
  };

  // const dealTurnCard = (cards: CardDetail[]) => {
  //   setTimeout(() => setCardsOnTable([cards[0], card[1], cards[2], cards[3], null]), 1000);
  // };

  // const dealRiverCard = () => {
  //   setTimeout(() => setCardsOnTable([1, 2, 3, 4, 5]), 5000);
  // };

  // useEffect(() => {
  //   dealFlopCards();
  //   setTimeout(() => dealTurnCard(), 5000);
  //   setTimeout(() => dealRiverCard(), 5000);
  // }, []);

  return (
    <div>
      <div className="flex justify-center items-center gap-2">
        {cardsOnTable.map((card, index) => {
          return (
            <div className="w-8 h-12 md:w-20 md:h-28" key={index}>
              {card ? (
                <Card
                  isFaceUp
                  suit={card.suit}
                  tilt=""
                  value={card.display_value}
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
