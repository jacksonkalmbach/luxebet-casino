import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setShowMobileNav } from "../../store/features/general/navigationSlice";
import {
  selectUserLoginStatus,
  setUserLogIn,
} from "../../store/features/user/userSlice";
import { RootState } from "../../store/store";
import Logo from "../Logo/Logo";
import Category from "../SideMenu/Category/Category";

const SPORTS_API_KEY = process.env.REACT_APP_SPORTS_API_KEY;

const url = "https://odds.p.rapidapi.com/v4/sports?all=false";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": SPORTS_API_KEY as string,
    "X-RapidAPI-Host": "odds.p.rapidapi.com",
  },
};

const navlinks = [
  {
    title: "Texas Hold'em",
    path: "/games/texas hold'em",
  },
  {
    title: "Blackjack",
    path: "/games/blackjack",
  },
  {
    title: "Roulette",
    path: "/games/roulette",
  },
];

interface MobileNavigationProps {
  handleShowMobileNav: (path: string) => void;
}

export default function MobileNavigation({
  handleShowMobileNav,
}: MobileNavigationProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state: RootState) =>
    selectUserLoginStatus(state)
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showSubCategories, setShowSubCategories] = useState<boolean>(false);
  const [sports, setSports] = useState<string[]>([]);
  const [subCategories, setSubCategories] = useState<{
    [key: string]: { key: string; title: string }[];
  }>();

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }, []);

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

  return (
    <div
      className={`bg-fontLight ${
        isOpen ? "w-2/3 flex flex-col p-8" : "w-0 "
      } h-full transition-all duration-200 overflow-auto`}
    >
      <div className="flex flex-col w-full justify-start items-center mb-5 md:hidden">
        <Logo variant="secondary" />
      </div>
      <div className={`${isOpen ? "flex flex-col gap-3" : "hidden"}`}>
        <p
          className="font-oneset font-bold text-primaryBg"
          onClick={() => navigate("/deposit")}
        >
          DEPOSIT
        </p>

        <p
          className="font-oneset font-bold text-primaryBg"
          onClick={() => {
            dispatch(setShowMobileNav(false));
            navigate("sportsbook/mybets");
          }}
        >
          MY BETS
        </p>
        <Category
          title="GAMES"
          category="games"
          links={["Texas Hold'em", "Blackjack", "Roulette"]}
          color="primaryBg"
        />
        {sports.length && (
          <Category
            title="SPORTSBOOK"
            category="sportsbook"
            links={sports}
            subCategories={subCategories}
            color="primaryBg"
          />
        )}
        <p
          className="font-oneset font-bold text-primaryBg mt-8"
          onClick={() => {
            dispatch(setUserLogIn(false));
            dispatch(setShowMobileNav(false));
            navigate("/");
          }}
        >
          SIGN OUT
        </p>
      </div>
    </div>
  );
}
