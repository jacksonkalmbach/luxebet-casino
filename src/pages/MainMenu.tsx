import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../icons/CloseIcon";

import pokerImg from "../photos/poker-bg.webp";
import rouletteImg from "../photos/roulette-wheel.jpg";
import blackjackImg from "../photos/blackjack.png";
import BuiltBy from "../components/BuiltBy/BuildBy";

const SPORTS_API_KEY = process.env.REACT_APP_SPORTS_API_KEY;

const url = "https://odds.p.rapidapi.com/v4/sports?all=false";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": SPORTS_API_KEY as string,
    "X-RapidAPI-Host": "odds.p.rapidapi.com",
  },
};

export default function MainMenu() {
  const navigate = useNavigate();

  const [selectedSport, setSelectedSport] = useState<string>("");
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

  const handleNavigate = (
    category: string,
    game: string,
    sport_key?: string
  ) => {
    navigate(`/${category}/${game}/${sport_key}`);
  };

  return (
    <div className="relative flex flex-col w-full bg-secondaryBg rounded-2xl justify-start items-center p-10 gap-10">
      <div className="w-full flex flex-col  h-44 gap-3">
        <h1 className="text-white text-xl md:text-3xl font-bold">Games</h1>
        <div className="flex flex-col md:flex-row gap-4 h-full w-full">
          <div
            className="w-full md:w-[300px] flex justify-center items-center rounded-lg cursor-pointer active:scale-95 transition-all duration-200"
            style={{
              backgroundImage: `url(${pokerImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            onClick={() => handleNavigate("games", "texas hold'em", "")}
          >
            <p className="font-oneset w-full h-full text-white z-10 bg-primaryBg flex justify-center items-center p-2 bg-opacity-80 hover:bg-opacity-0 transition-all duration-300">
              Texas Hold'em
            </p>
          </div>
          <div
            className="w-full md:w-[300px] bg-[#CCCCCC] flex justify-center items-center rounded-lg cursor-pointer active:scale-95 transition-all duration-200"
            style={{
              backgroundImage: `url(${blackjackImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            onClick={() => handleNavigate("games", "blackjack", "")}
          >
            <p className="font-oneset w-full h-full text-white z-10 bg-primaryBg flex justify-center items-center p-2 bg-opacity-80 hover:bg-opacity-0 transition-all duration-300">
              Blackjack
            </p>
          </div>
          <div
            className="w-full md:w-[300px] bg-[#CCCCCC] flex justify-center items-center rounded-lg cursor-pointer active:scale-95 transition-all duration-200"
            style={{
              backgroundImage: `url(${rouletteImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            onClick={() => handleNavigate("games", "roulette", "")}
          >
            <p className="font-oneset w-full h-full text-white z-10 bg-primaryBg flex justify-center items-center p-2 bg-opacity-80 hover:bg-opacity-0 transition-all duration-300">
              Roulette
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col h-full overflow-hidden">
        <h1 className="text-white text-xl md:text-3xl font-bold mb-3">
          Sportsbook
        </h1>
        <div className="flex flex-wrap gap-4 w-full overflow-auto">
          {selectedSport !== "" && (
            <div
              className="flex flex-col w-full"
              onClick={() => setSelectedSport("")}
            >
              <div className="w-fit h-fit py-3 px-6 gap-2 bg-fontLight font-oneset text-primaryBg flex justify-start items-center rounded-lg cursor-pointer active:scale-95 hover:bg-fontLight hover:text-primaryBg transition-all duration-200">
                <p className="text-sm md:text-base w-fit">{selectedSport}</p>
                <CloseIcon color="black" />{" "}
              </div>
              <div className="flex flex-col min-h-5 max-h-52 flex-wrap bg-tertiaryBg font-oneset text-fontLight gap-3 rounded-xl p-4 overflow-auto mt-4">
                {subCategories &&
                  subCategories[selectedSport].map((sub) => (
                    <p
                      key={sub.key}
                      className="text-sm md:text-base w-fit hover:underline cursor-pointer"
                      onClick={() =>
                        handleNavigate("sportsbook", selectedSport, sub.key)
                      }
                    >
                      {sub.title}
                    </p>
                  ))}
              </div>
            </div>
          )}
          {sports.map((sport) => (
            <div
              className={`${
                selectedSport === sport ? "hidden" : "flex flex-col"
              }`}
              onClick={() => setSelectedSport(sport)}
            >
              <div className="w-fit h-fit py-3 px-6 bg-tertiaryBg font-oneset text-fontLight flex justify-start items-center rounded-lg cursor-pointer active:scale-95 hover:bg-fontLight hover:text-primaryBg transition-all duration-200">
                <p className="text-sm md:text-base w-fit">{sport}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
