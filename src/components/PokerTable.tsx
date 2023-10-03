import React from "react";

import OpposingPlayer from "./OpposingPlayer/OpposingPlayer";
import Pot from "./PokerTable/Pot";
import Dealer from "./PokerTable/Dealer";
import UserSeat from "./PokerTable/User/UserSeat";
import TableCards from "./PokerTable/TableCards";
import Bets from "./PokerTable/Bets";

export default function PokerTable() {
  return (
    <div className="relative bg-[#23325c] w-[65%] flex flex-col justify-center items-center rounded-full h-[60%] border-[#fad255] border-[20px] shadow-2xl mb-[5%]">
      <Bets />
      <Pot />
      <TableCards />
      <div className="absolute -top-16">
        <Dealer />
      </div>
      <div className="absolute -top-10 -left-14 ">
        <OpposingPlayer
          side="right"
          name="Seb"
          image="https://scontent.ford4-1.fna.fbcdn.net/v/t1.6435-1/49830756_10157052395161180_1806859657294118912_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=lkjGU0N6OpIAX8NdmuG&_nc_ht=scontent.ford4-1.fna&oh=00_AfBT192_ewNW2sibZ3WJdwMqhKy4E_T6JyK3N9NDmjCNqQ&oe=65429F5F"
          cards={[
            {
              suit: "spades",
              value: "A",
            },
            {
              suit: "clubs",
              value: "K",
            },
          ]}
        />
      </div>
      <div className="absolute top-[35%] -left-[25%]">
        <OpposingPlayer
          side="right"
          name="Parker"
          image="https://scontent.ford4-1.fna.fbcdn.net/v/t31.18172-8/13147293_1062793770432872_9024375512352478916_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Xz85EGo6IhcAX-IeZBP&_nc_ht=scontent.ford4-1.fna&oh=00_AfAUweONkY6FzPU6oC2W6V7dDvPk216j-63ZMw4Oe7_iug&oe=6542A27B"
          cards={[
            {
              suit: "spades",
              value: "A",
            },
            {
              suit: "clubs",
              value: "K",
            },
          ]}
        />
      </div>
      <div className="absolute -top-10 -right-14">
        <OpposingPlayer
          side="left"
          name="Jackson"
          image="https://scontent.ford4-1.fna.fbcdn.net/v/t1.6435-9/31195593_10215787817958631_1414508630958407680_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1Xu7eXb6Fo0AX8y_iiX&_nc_ht=scontent.ford4-1.fna&oh=00_AfDnrRAIa7QFyo2lbIJit0M1MObLrJDhFppuAl9jtitzXA&oe=6542BA2B"
          cards={[
            {
              suit: "spades",
              value: "A",
            },
            {
              suit: "clubs",
              value: "K",
            },
          ]}
        />
      </div>
      <div className="absolute top-[35%] -right-[25%]">
        <OpposingPlayer
          side="left"
          name="Chris"
          image="https://scontent.ford4-1.fna.fbcdn.net/v/t1.18169-9/21687527_1477469399012439_995233757785237287_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mUERMn5hNHsAX8G2A8o&_nc_ht=scontent.ford4-1.fna&oh=00_AfA7tYHtVAgwYf2wCGD_Xyn_1N4qXMmMTuQuLet2hEbVcQ&oe=6542D0DD"
          cards={[
            {
              suit: "spades",
              value: "A",
            },
            {
              suit: "clubs",
              value: "K",
            },
          ]}
        />
      </div>
      <div className="absolute -bottom-10 -right-10">
        <OpposingPlayer
          side="left"
          name="Cooper"
          image="https://scontent.ford4-1.fna.fbcdn.net/v/t1.18169-9/12391796_530437953785480_6376424270935454053_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=EYhvDe1nEV8AX_XH_Je&_nc_oc=AQkS_FqfoS_dfh0sienAIlXjjU8uw0E_3bNsRWzeoiBcymtTq2XXZsEuUDz0oCsaKLo&_nc_ht=scontent.ford4-1.fna&oh=00_AfB1KUMHUuYHhjvmQ1oiGM-IoLo9lGOy5o87OxiZHA9mHA&oe=6542C292"
          cards={[
            {
              suit: "spades",
              value: "A",
            },
            {
              suit: "clubs",
              value: "K",
            },
          ]}
        />
      </div>
      <UserSeat />
    </div>
  );
}
