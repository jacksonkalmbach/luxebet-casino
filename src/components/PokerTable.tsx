import React from "react";
import { useSelector } from "react-redux";

import OpposingPlayer from "./OpposingPlayer/OpposingPlayer";
import Pot from "./PokerTable/Pot";
import Dealer from "./PokerTable/Dealer";
import UserSeat from "./PokerTable/User/UserSeat";
import TableCards from "./PokerTable/TableCards";
import Bets from "./PokerTable/Bets";
import Timer from "./Timer/Timer";

import { RootState } from "../store/store";
import { selectPlayerUp } from "../store/features/game/pokerSlice";

const seats = {
  1: {
    className: "absolute -top-10 -left-14",
    side: "right",
    playerName: "Seb",
    image: "https://robohash.org/5",
    cards: [],
    isTurn: false,
    isBigBlind: true,
    isLittleBlind: false,
  },
  2: {
    className: "absolute -top-10 -right-14",
    side: "left",
    playerName: "Jackson",
    image: "https://robohash.org/1",
    cards: [],
    isTurn: true,
    isBigBlind: false,
    isLittleBlind: true,
  },
  3: {
    className: "absolute top-[35%] -right-[25%]",
    side: "left",
    playerName: "Chris",
    image: "https://robohash.org/2",
    cards: [],
    isTurn: false,
    isBigBlind: false,
    isLittleBlind: false,
  },
  4: {
    className: "absolute -bottom-10 -right-10",
    side: "left",
    playerName: "Parker",
    image: "https://robohash.org/3",
    cards: [],
    isTurn: false,
    isBigBlind: false,
    isLittleBlind: false,
  },
  5: {
    className: "absolute top-[35%] -left-[25%]",
    side: "right",
    playerName: "Cooper",
    image: "https://robohash.org/4",
    cards: [],
    isTurn: false,
    isBigBlind: false,
    isLittleBlind: false,
  },
};

export default function PokerTable() {
  const playerTurn = useSelector((state: RootState) => state.poker.playerUp);

  return (
    <div className="relative bg-[#23325c] w-[80%] md:w-[65%] flex flex-col justify-center items-center rounded-full h-[70%] md:h-[60%] border-[#fad255]  border-8 md:border-[20px] shadow-2xl mb-[5%]">
      <Bets />
      <Pot />
      <TableCards />
      <div className="absolute -top-24">
        <Dealer />
      </div>
      <div>
        {Object.keys(seats).map((key) => {
          const seat = key as unknown as keyof typeof seats;
          const { isBigBlind, isLittleBlind, side, playerName, image, cards } =
            seats[seat];
          return (
            <div key={seat} className={seats[seat].className}>
              {seats[seat].playerName !== "" ? (
                <OpposingPlayer
                  side={side as "left" | "right"}
                  name={playerName}
                  image={image}
                  cards={cards}
                  isFolded={false}
                  isOccupied={true}
                  isTurn={playerTurn === Number(seat)}
                  isSmallBlind={isLittleBlind}
                  isBigBlind={isBigBlind}
                />
              ) : (
                <OpposingPlayer
                  side={seats[seat].side as "left" | "right"}
                  isOccupied={false}
                />
              )}
            </div>
          );
        })}
      </div>
      <UserSeat isTurn={playerTurn === 0} />
      <div className="absolute -bottom-10 -left-1/4 w-20 h-20">
        {playerTurn === 0 && <Timer isUserTurn={true} />}
      </div>
    </div>
  );
}
