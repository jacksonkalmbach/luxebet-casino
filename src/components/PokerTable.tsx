import React, { useEffect, useState } from "react";
import socket from "../utils/socket";
import { useSelector } from "react-redux";

import OpposingPlayer from "./OpposingPlayer/OpposingPlayer";
import Pot from "./PokerTable/Pot";
import Dealer from "./PokerTable/Dealer";
import UserSeat from "./PokerTable/User/UserSeat";
import TableCards from "./PokerTable/TableCards";
import Bets from "./PokerTable/Bets";
import Timer from "./Timer/Timer";

import feltImg from "../photos/felt.jpg";

import { RootState } from "../store/store";

const initialSeats = {
  0: {
    className: "absolute -top-10 -left-14",
    side: "right",
    playerName: "Seb",
    image: "https://robohash.org/5",
    cards: [],
    isTurn: false,
    isBigBlind: true,
    isLittleBlind: false,
    isOccupied: true,
  },
  1: {
    className: "absolute -top-10 -right-14",
    side: "left",
    playerName: "Jackson",
    image: "https://robohash.org/1",
    cards: [],
    isTurn: true,
    isBigBlind: false,
    isLittleBlind: true,
    isOccupied: true,
  },
  2: {
    className: "absolute top-[35%] -right-[25%]",
    side: "left",
    playerName: "Chris",
    image: "https://robohash.org/2",
    cards: [],
    isTurn: false,
    isBigBlind: false,
    isLittleBlind: false,
    isOccupied: true,
  },
  3: {
    className: "absolute -bottom-10 -right-10",
    side: "left",
    playerName: "Parker",
    image: "https://robohash.org/3",
    cards: [],
    isTurn: false,
    isBigBlind: false,
    isLittleBlind: false,
    isOccupied: true,
  },
  4: {
    className: "absolute top-[35%] -left-[25%]",
    side: "right",
    playerName: "",
    image: "https://robohash.org/4",
    cards: [],
    isTurn: false,
    isBigBlind: false,
    isLittleBlind: false,
    isOccupied: false,
  },
};

export default function PokerTable() {
  const playerTurn = useSelector((state: RootState) => state.poker.playerUp);
  const [seatsState, setSeatsState] = useState(initialSeats);

  useEffect(() => {
    socket.on("blind_positions", (data: any) => {
      setSeatsState((prevState: any) => {
        let updatedSeats = { ...prevState };
        Object.keys(prevState).forEach((key) => {
          updatedSeats[key].isBigBlind = Number(key) === data.bb_pos;
          updatedSeats[key].isLittleBlind = Number(key) === data.sb_pos;
        });
        return updatedSeats;
      });
    });

    socket.on("player_cards", (data: any) => {
      setSeatsState((prevState: any) => ({
        ...prevState,
        [data.player_id]: {
          ...prevState[data.player_id],
          cards: [data.first_card, data.second_card],
        },
      }));
    });

    socket.on("place_bet", (data: any) => {
      console.log("PLACE A BET");
    });

    return () => {
      socket.off("blind_positions");
      socket.off("player_cards");
      socket.off("place_bet");
    };
  }, []);

  return (
    <div
      className="relative bg-secondaryAccent w-[80%] md:w-[65%] flex flex-col justify-center items-center rounded-full h-[70%] md:h-[60%] border-[#fad255]  border-8 md:border-[20px] shadow-2xl mb-[5%]"
      style={{
        backgroundImage: `url(${feltImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Bets />
      <Pot />
      <TableCards />
      <div className="absolute -top-24">
        <Dealer />
      </div>
      <div>
        {Object.keys(seatsState).map((key) => {
          const seat = key as unknown as keyof typeof seatsState;
          const { isBigBlind, isLittleBlind, side, playerName, image, cards } =
            seatsState[seat];
          return (
            <div key={seat} className={seatsState[seat].className}>
              {seatsState[seat].playerName !== "" ? (
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
                  side={seatsState[seat].side as "left" | "right"}
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
