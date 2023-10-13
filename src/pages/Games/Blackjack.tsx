import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../components/Card/Card";
import ExitIcon from "../../icons/ExitIcon";
import PokerChip from "../../icons/PokerChip";
import feltImg from "../../photos/felt.jpg";
import carpetImg from "../../photos/carpet.jpg";

export default function Blackjack() {
  const navigate = useNavigate();
  const [showChips, setShowChips] = useState<boolean>(false);
  return (
    <div className="flex w-full h-full p-4 bg-transparent">
      <div
        className="relative flex flex-col w-full h-full bg-secondaryBg rounded-2xl justify-start items-center px-10 gap-10"
        // style={{
        //   backgroundImage: `url(${carpetImg})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        // }}
      >
        {/* <div className="absolute top-5 left-10 cursor-pointer active:scale-95">
          <button
            className="flex gap-2 px-3 py-2 rounded hover:bg-primaryBg group"
            onClick={() => navigate("/")}
          >
            <ExitIcon color="#CCCCCC" />{" "}
            <p className="text-fontLight opacity-0 group-hover:opacity-100 font-oneset">
              Leave Table
            </p>
          </button>
        </div> */}
        <div
          className="relative bg-secondaryAccent w-full rounded-b-full h-[90%] border-b-[20px] border-x-[20px] border-primaryAccent"
          style={{
            backgroundImage: `url(${feltImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-10 left-[48%] transform -translate-x-1/2 flex justify-center items-center">
            <div className="h-40 w-28">
              <Card tilt="" suit="H" value={8} isFaceUp />
            </div>
            <div className="h-40 w-28 absolute -right-10 -bottom-5">
              <Card tilt="" suit="H" value={8} />
            </div>
          </div>
          <div className="absolute bottom-52 left-[48%] transform -translate-x-1/2 flex justify-center items-center">
            <div className="h-40 w-28">
              <Card tilt="" suit="H" value={8} isFaceUp />
            </div>
            <div className="h-40 w-28 absolute -right-10 -bottom-5">
              <Card tilt="" suit="H" value={8} isFaceUp />
            </div>
          </div>
          <button className="p-2 bg-brightBlue rounded-xl font-oneset text-fontLight active:scale-95">
            DEAL
          </button>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex justify-center items-center gap-5 p-4 rounded-xl">
            <div className="relative w-20 hover:scale-110 transition-all duration-200 cursor-pointer">
              <PokerChip color="#e0dfdf" />
            </div>

            {showChips ? (
              <>
                <div className="relative w-20 hover:scale-110 transition-all duration-200 cursor-pointer">
                  <PokerChip color="#8b1b13" />
                </div>
                <div className="relative w-20 hover:scale-110 transition-all duration-200 cursor-pointer">
                  <PokerChip color="#1b2a70" />
                </div>
                <div className="relative w-20 hover:scale-110 transition-all duration-200 cursor-pointer">
                  <PokerChip color="#31b20e" />
                </div>
                <div className="relative w-20 hover:scale-110 transition-all duration-200 cursor-pointer">
                  <PokerChip color="black" />
                </div>
              </>
            ) : (
              <button
                className="p-2 bg-brightBlue rounded-xl h-fit font-oneset text-fontLight active:scale-95"
                onClick={() => setShowChips(true)}
              >
                Change Bet
              </button>
            )}
          </div>
        </div>
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 flex flex-col p-6 rounded-xl h-3/4 w-48 justify-around">
          <div className="text-primaryBg font-bold h-1/5 rounded-full flex justify-center items-center cursor-pointer bg-fontLight active:scale-95">
            DOUBLE DOWN
          </div>
          <div className="text-primaryBg font-bold h-1/5 rounded-full flex justify-center items-center cursor-pointer bg-fontLight active:scale-95">
            SPLIT
          </div>
          <div className="text-primaryBg font-bold h-1/5 rounded-full flex justify-center items-center cursor-pointer bg-fontLight active:scale-95">
            STAND
          </div>
          <div className="text-primaryBg font-bold h-1/5 rounded-full flex justify-center items-center cursor-pointer bg-fontLight active:scale-95">
            HIT
          </div>
        </div>
      </div>
    </div>
  );
}
