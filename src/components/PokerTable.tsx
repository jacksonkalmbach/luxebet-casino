import React from "react";

import OpposingPlayer from "./OpposingPlayer/OpposingPlayer";
import Pot from "./PokerTable/Pot";
import Dealer from "./PokerTable/Dealer";
import UserSeat from "./PokerTable/User/UserSeat";
import TableCards from "./PokerTable/TableCards";
import Bets from "./PokerTable/Bets";

const seats = {
  1: {
    className: "absolute -top-10 -left-14",
    side: "right",
    playerName: "Seb",
    image:
      "https://scontent.ford4-1.fna.fbcdn.net/v/t1.6435-1/49830756_10157052395161180_1806859657294118912_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=lkjGU0N6OpIAX8NdmuG&_nc_ht=scontent.ford4-1.fna&oh=00_AfBT192_ewNW2sibZ3WJdwMqhKy4E_T6JyK3N9NDmjCNqQ&oe=65429F5F",
    cards: [],
  },
  2: {
    className: "absolute -top-10 -right-14",
    side: "left",
    playerName: "Jackson",
    image: "",
    cards: [],
  },
  3: {
    className: "absolute top-[35%] -right-[25%]",
    side: "left",
    playerName: "",
    image: "",
    cards: [],
  },
  4: {
    className: "absolute top-[35%] -left-[25%]",
    side: "right",
    playerName: "Parker",
    image: "",
    cards: [],
  },
  5: {
    className: "absolute -bottom-10 -right-10",
    side: "left",
    playerName: "Cooper",
    image: "",
    cards: [],
  },
};

export default function PokerTable() {
  return (
    <div className="relative bg-[#23325c] w-[80%] md:w-[65%] flex flex-col justify-center items-center rounded-full h-[70%] md:h-[60%] border-[#fad255]  border-8 md:border-[20px] shadow-2xl mb-[5%]">
      <Bets />
      <Pot />
      <TableCards />
      <div className="absolute -top-16">
        <Dealer />
      </div>
      <div>
        {Object.keys(seats).map((key) => {
          const seat = key as unknown as keyof typeof seats;
          return (
            <div key={seat} className={seats[seat].className}>
              {seats[seat].playerName !== "" ? (
                <OpposingPlayer
                  side={seats[seat].side as "left" | "right"}
                  name={seats[seat].playerName}
                  image={seats[seat].image}
                  cards={seats[seat].cards}
                  isFolded={false}
                  isOccupied={true}
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
      <UserSeat />
    </div>
  );
}
