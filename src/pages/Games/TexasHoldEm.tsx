import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewPokerGame from "../../components/PokerTable/NewPokerGame/NewPokerGame";

import PokerTable from "../../components/PokerTable/PokerTable";
import TurnOptions from "../../components/TurnOptions";
import ExitIcon from "../../icons/ExitIcon";

export default function TexasHoldEm() {
  const navigate = useNavigate();
  const [startGame, setStartGame] = useState<boolean>(false);

  // const handleStartNewGame = async () => {
  //   console.log("start game");
  //   setStartGame(true);
  //   const res = await fetch("http://localhost:5003/start-game",
  //   // {
  //     // method: "POST",
  //     // headers: {
  //     //   "Content-Type": "application/json",
  //     // },
  //     // body: JSON.stringify({
  //     //   num_players: 5,
  //     // }),
  //   // }
  //   );

  //   const json = await res.json();
  //   console.log(json);
  // };

  const handleStartNewGame = async () => {
    console.log("start game");
    setStartGame(true);
    const res = await fetch("http://localhost:5004/start-game");
    if (res.ok) {
      const data = await res.json();
      console.log(data.message);
    } else {
      console.error("Failed to start the game");
    }
  };

  return (
    <div
      className="flex w-full p-4 bg-transparent"
      style={{ height: "calc(100% - 80px)" }}
    >
      <div className="relative flex flex-col w-full h-full bg-secondaryBg rounded-2xl justify-center items-center p-10 gap-10">
        <p className="text-white font-oneset">Texas Hold'em Coming Soon...</p>
      </div>
    </div>
    // <div
    //   className="flex w-full p-4 bg-transparent"
    //   style={{ height: "calc(100% - 80px)" }}
    // >
    //   {startGame ? (
    //     <div className="relative flex flex-col w-full h-full bg-secondaryBg rounded-2xl justify-center items-center overflow-hidden">
    //       <div className="absolute top-5 left-10 cursor-pointer active:scale-95">
    //         <button
    //           className="flex gap-2 px-3 py-2 rounded hover:bg-primaryBg group"
    //           onClick={() => navigate("/")}
    //         >
    //           <ExitIcon color="#CCCCCC" />{" "}
    //           <p className="text-fontLight opacity-0 group-hover:opacity-100 font-oneset">
    //             Leave Table
    //           </p>
    //         </button>
    //       </div>
    //       <PokerTable />
    //       <TurnOptions />
    //     </div>
    //   ) : (
    //     <NewPokerGame handleStartNewGame={handleStartNewGame} />
    //   )}
    // </div>
  );
}
