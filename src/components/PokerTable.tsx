import React from "react";
import CardOutline from "./Card/CardOutline";
import Card from "./Card/Card";
import OpposingPlayer from "./OpposingPlayer/OpposingPlayer";
import Bet from "./Bet/Bet";
import CardPair from "./CardPair/CardPair";

const cards = {
  1: <Card isFaceUp suit="clubs" tilt="" value="4" absolute={false} />,
  2: <Card isFaceUp suit="hearts" tilt="" value="8" absolute={false} />,
  3: <Card isFaceUp suit="spades" tilt="" value="6" absolute={false} />,
  4: null,
  5: null,
};

export default function PokerTable() {
  return (
    <div className="relative bg-[#23325c] w-[65%] flex flex-col justify-center items-center rounded-full h-[60%] border-[#fad255] border-[20px] shadow-2xl mb-[5%]">
      <div className="absolute border-2 border-white-500/50 w-[80%] h-[70%] rounded-full">
        <div className="absolute left-10 -top-2">
          <Bet amount={100} />
        </div>
        <div className="absolute -left-8 top-[53%]">
          <Bet amount={90} />
        </div>
        <div className="absolute -right-12 top-[53%]">
          <Bet amount={70} />
        </div>
        <div className="absolute right-10 -top-2">
          <Bet amount={80} />
        </div>
        <div className="absolute right-8 bottom-0">
          <Bet amount={60} />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 flex justify-center items-center">
          <Bet amount={50} />
        </div>
      </div>
      <div className="absolute top-6 flex flex-col justify-center items-center z-10 bg-[#23325c] p-2 rounded-lg border border-2 border-white-500/50">
        <span className="text-xl">Current Pot</span>
        <span className="text-xl">$8,000</span>
      </div>
      <div className="flex justify-center items-center gap-2">
        {Object.values(cards).map((value, index) => {
          return value ? (
            <div className="w-20 h-28" key={index}>
              {value}
            </div>
          ) : (
            <div key={index}>
              <CardOutline />
            </div>
          );
        })}
      </div>
      <div className="absolute -top-10 left-0 ">
        <OpposingPlayer
          side="right"
          name="Seb"
          image="https://scontent.ford4-1.fna.fbcdn.net/v/t1.6435-1/49830756_10157052395161180_1806859657294118912_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=lkjGU0N6OpIAX8NdmuG&_nc_ht=scontent.ford4-1.fna&oh=00_AfBT192_ewNW2sibZ3WJdwMqhKy4E_T6JyK3N9NDmjCNqQ&oe=65429F5F"
        />
      </div>
      <div className="absolute top-[35%] -left-[25%]">
        <OpposingPlayer
          side="right"
          name="Parker"
          image="https://scontent.ford4-1.fna.fbcdn.net/v/t31.18172-8/13147293_1062793770432872_9024375512352478916_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Xz85EGo6IhcAX-IeZBP&_nc_ht=scontent.ford4-1.fna&oh=00_AfAUweONkY6FzPU6oC2W6V7dDvPk216j-63ZMw4Oe7_iug&oe=6542A27B"
        />
      </div>
      <div className="absolute -top-10 right-0">
        <OpposingPlayer
          side="left"
          name="Jackson"
          image="https://scontent.ford4-1.fna.fbcdn.net/v/t1.6435-9/31195593_10215787817958631_1414508630958407680_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1Xu7eXb6Fo0AX8y_iiX&_nc_ht=scontent.ford4-1.fna&oh=00_AfDnrRAIa7QFyo2lbIJit0M1MObLrJDhFppuAl9jtitzXA&oe=6542BA2B"
        />
      </div>
      <div className="absolute top-[35%] -right-[25%]">
        <OpposingPlayer
          side="left"
          name="Chris"
          image="https://scontent.ford4-1.fna.fbcdn.net/v/t1.18169-9/21687527_1477469399012439_995233757785237287_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mUERMn5hNHsAX8G2A8o&_nc_ht=scontent.ford4-1.fna&oh=00_AfA7tYHtVAgwYf2wCGD_Xyn_1N4qXMmMTuQuLet2hEbVcQ&oe=6542D0DD"
        />
      </div>
      <div className="absolute -bottom-5 -right-10">
        <OpposingPlayer
          side="left"
          name="Cooper"
          image="https://scontent.ford4-1.fna.fbcdn.net/v/t1.18169-9/12391796_530437953785480_6376424270935454053_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=EYhvDe1nEV8AX_XH_Je&_nc_oc=AQkS_FqfoS_dfh0sienAIlXjjU8uw0E_3bNsRWzeoiBcymtTq2XXZsEuUDz0oCsaKLo&_nc_ht=scontent.ford4-1.fna&oh=00_AfB1KUMHUuYHhjvmQ1oiGM-IoLo9lGOy5o87OxiZHA9mHA&oe=6542C292"
        />
      </div>
      <div>
        <div className="absolute -bottom-16 -left-10 w-24 h-36 flex z-10">
          <CardPair />
        </div>
        <div className="flex flex-col justify-center items-center text-white absolute -bottom-10 left-16 font-bold w-48 h-20 rounded-lg border-2 border-[#f3cb16] bg-[#23325c]">
          <p className="text-white font-semibold text-md">My Balance</p>
          <p className="text-white text-lg">$2,345</p>
        </div>
      </div>
    </div>
  );
}
