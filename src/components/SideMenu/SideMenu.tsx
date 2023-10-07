import React, { useState } from "react";
import ChevronLeftIcon from "../../icons/ChevronLeftIcon";
import ChevronDownIcon from "../../icons/ChevronDownIcon";
import PokerChip from "../../icons/PokerChip";
import Category from "./Category/Category";
import { SPORTS } from "../../pages/Sportsbook/sports";

export default function SideMenu() {
  const [miniMenu, setMiniMenu] = useState(false);
  const [showMenuWords, setShowMenuWords] = useState(true);

  const handleToggleMiniMenu = () => {
    setMiniMenu(!miniMenu);
    if (miniMenu) {
      setTimeout(() => {
        setShowMenuWords(true);
      }, 450);
    } else {
      setShowMenuWords(false);
    }
  };

  return (
    <>
      <div
        className={`hidden md:flex flex-col ${
          miniMenu ? "w-[5%]" : "w-[20%]"
        } h-full bg-[#0a1f3b] text-white rounded-l-lg border-r border-[#1c314c] p-4 justify-center items-center justify-between transition-all duration-500`}
      >
        <div className="flex flex-col gap-4 w-full p-6">
          <div className="flex justify-center items-center mb-8">
            <div className="w-8 h-8">
              <PokerChip />
            </div>
            <div
              className=" transition-all duration-500 w-fit"
              style={{ width: miniMenu ? 0 : "100px" }}
            >
              {showMenuWords && (
                <p className="text-white font-bold text-3xl ml-3">CASINO</p>
              )}
            </div>
          </div>
          {!miniMenu && (
            <div className="flex flex-col gap-4">
              <Category
                title="Games"
                category="games"
                links={["Texas Hold'em", "Blackjack", "Roulette"]}
              />
              <Category
                title="Sportsbook"
                category="sportsbook"
                links={SPORTS.map((sport) => sport.name)}
              />
            </div>
          )}
        </div>

        <button
          onClick={handleToggleMiniMenu}
          className={
            "flex items-center justify-center border p-2 rounded-full bg-[#CCCCCC] opacity-40 hover:opacity-100"
          }
        >
          <div
            className={`transition-all duration-500 ${
              miniMenu ? "rotate-180" : ""
            }`}
          >
            <ChevronLeftIcon color="#1c314c" />{" "}
          </div>
          <div
            className="overflow-hidden transition-all duration-500"
            style={{ width: miniMenu ? 0 : "100px" }}
          >
            {showMenuWords && <p className="text-[#1c314c]">Hide Menu</p>}
          </div>
        </button>
      </div>
    </>
  );
}
