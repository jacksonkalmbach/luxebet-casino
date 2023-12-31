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
  const [turnCard, setTurnCard] = useState<CardDetail[] | undefined>();
  const [riverCard, setRiverCard] = useState<CardDetail[] | undefined>();
  // const [cardsOnTable, setCardsOnTable] = useState<(CardDetail | null)[]>([
  //   { suit: "C", value: 10, display_value: "10" },
  //   { suit: "D", value: 2, display_value: "2" },
  //   { suit: "H", value: 7, display_value: "7" },
  //   { suit: "C", value: 13, display_value: "Q" },
  //   { suit: "S", value: 10, display_value: "10" },
  // ]);
  const [cardsOnTable, setCardsOnTable] = useState<(CardDetail | null)[]>(
    Array(5).fill(null)
  );

  useEffect(() => {
    socket.on("flop_cards", (data: any) => {
      setFlopCards(data);
    });

    socket.on("turn_card", (data: any) => {
      setTurnCard(data);
    });

    socket.on("river_card", (data: any) => {
      setRiverCard(data);
    });

    return () => {
      socket.off("flop_cards");
      socket.off("turn_card");
      socket.off("river_card");
    };
  }, []);

  useEffect(() => {
    if (flopCards) dealFlopCards(Object.values(flopCards));
  }, [flopCards]);

  useEffect(() => {
    if (turnCard) dealTurnCard(Object.values(turnCard));
  }, [turnCard]);

  useEffect(() => {
    if (riverCard) dealRiverCard(Object.values(riverCard));
  }, [riverCard]);

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

  const dealTurnCard = (cards: CardDetail[]) => {
    setTimeout(
      () => setCardsOnTable([cards[0], cards[1], cards[2], cards[3], null]),
      1000
    );
  };

  const dealRiverCard = (cards: CardDetail[]) => {
    setTimeout(
      () => setCardsOnTable([cards[0], cards[1], cards[2], cards[3], cards[4]]),
      1000
    );
  };

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
