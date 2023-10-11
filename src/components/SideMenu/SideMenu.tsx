import React, { useEffect, useState } from "react";
import ChevronLeftIcon from "../../icons/ChevronLeftIcon";

import Category from "./Category/Category";

const SPORTS_API_KEY = process.env.REACT_APP_SPORTS_API_KEY;

const url = "https://odds.p.rapidapi.com/v4/sports?all=false";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": SPORTS_API_KEY as string,
    "X-RapidAPI-Host": "odds.p.rapidapi.com",
  },
};

export default function SideMenu() {
  const [miniMenu, setMiniMenu] = useState(false);
  const [showMenuWords, setShowMenuWords] = useState(true);
  const [subCategories, setSubCategories] = useState<{
    [key: string]: { key: string; title: string }[];
  }>();
  const [sports, setSports] = useState<string[]>([]);

  useEffect(() => {
    try {
      const fetchSports = async () => {
        const response = await fetch(url, options);
        const result = await response.json();
        const newSubCategories = result.reduce(
          (
            acc: { [key: string]: { key: string; title: string }[] },
            sport: any
          ) => {
            if (!acc[sport.group]) {
              acc[sport.group] = [];
            }
            acc[sport.group].push({ key: sport.key, title: sport.title });
            return acc;
          },
          {}
        );

        const groups = Object.keys(newSubCategories);
        setSports(groups);
        setSubCategories(newSubCategories);
      };
      fetchSports();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleToggleMiniMenu = () => {
    setMiniMenu(!miniMenu);
    if (miniMenu) {
      setTimeout(() => {
        setShowMenuWords(true);
      }, 300);
    } else {
      setShowMenuWords(false);
    }
  };

  return (
    <>
      <div
        className={`hidden md:flex flex-col overflow-auto ${
          miniMenu ? "w-[5%]" : "w-[20%]"
        } h-full bg-secondaryBg text-white rounded-l-lg border-r border-bgBorder p-4 justify-center items-center justify-between transition-all duration-500`}
      >
        <div className="flex flex-col gap-4 w-full p-6">
          <div className="flex justify-center items-start">
            <div className=" transition-all duration-500 w-fit">
              {showMenuWords && (
                <div className="flex flex-col justify-center items-center">
                  <div className="flex gap-2">
                    <p className="text-primaryAccent font-bold font-lobster text-5xl">
                      LuxeBet
                    </p>
                  </div>
                  <p className="text-white font-bold text-base font-monserrat font-light">
                    CASINO
                  </p>
                </div>
              )}
            </div>
          </div>
          {showMenuWords && (
            <div className="flex flex-col gap-4">
              <Category
                title="GAMES"
                category="games"
                links={["Texas Hold'em", "Blackjack", "Roulette"]}
              />
              {sports.length && (
                <Category
                  title="SPORTSBOOK"
                  category="sportsbook"
                  links={sports}
                  subCategories={subCategories}
                />
              )}
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
