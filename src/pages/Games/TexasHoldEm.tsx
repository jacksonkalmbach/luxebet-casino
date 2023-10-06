import React from "react";
import { useNavigate } from "react-router-dom";

import PokerTable from "../../components/PokerTable";

import TurnOptions from "../../components/TurnOptions";
// import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import ExitIcon from "../../icons/ExitIcon";

export default function NewGame() {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-full p-8 bg-transparent">
      <div className="relative flex flex-col w-full h-full bg-[#0a1f3b] rounded-2xl justify-center items-center border border-[#1c314c]">
        <div className="absolute top-5 left-10 cursor-pointer active:scale-95">
          <button
            className="flex gap-2 px-3 py-2 rounded hover:bg-[#081a2f] group"
            onClick={() => navigate("/")}
          >
            <ExitIcon color="#CCCCCC" />{" "}
            <p className="text-[#CCCCCC] opacity-0 group-hover:opacity-100">
              Leave Table
            </p>
          </button>
        </div>
        <PokerTable />
        <TurnOptions />
      </div>
    </div>
  );
}
