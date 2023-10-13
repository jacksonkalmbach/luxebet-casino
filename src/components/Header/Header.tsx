import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Balance from "../Balance/Balance";
import ChevronDownIcon from "../../icons/ChevronDownIcon";

import { selectUserBalance } from "../../store/features/user/userSlice";
import { RootState } from "../../store/store";
import HamburgerIcon from "../../icons/HamburgerIcon";

export default function Header() {
  const navigate = useNavigate();
  const balance = useSelector((state: RootState) => selectUserBalance(state));
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative w-full h-full flex bg-secondaryBg justify-between items-center py-3 px-6 gap-10 rounded-xl">
      <div
        className="hidden lg:flex cursor-pointer font-oneset text-fontLight font-bold hover:text-[#eec23e] transition-all duration-200 ease-in-out"
        onClick={() => navigate("/sportsbook/mybets")}
      >
        My Bets
      </div>

      <div className="flex w-full justify-between lg:w-1/3 lg:justify-around">
        <div className="flex w-1/3 pl-10">
          <Balance balance={balance} />
        </div>
        <div className="block md:hidden">
          <HamburgerIcon color="white" />
        </div>
        <div
          className="hidden md:flex gap-2 justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          <div className="text-fontLight font-oneset text-sm md:text-base">
            jacksonkalmbach
          </div>
          <div
            className={`${
              !isOpen ? "" : "rotate-180"
            } transition-all duration-200 ease-in-out`}
          >
            <ChevronDownIcon color="#e0dfdf" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="hidden md:flex absolute w-56 text-white right-4 mt-2 top-full z-50 bg-tertiaryBg p-4 rounded-xl flex-col font-oneset gap-3">
          <p className="hover:text-primaryAccent cursor-pointer">My Account</p>
          <p className="hover:text-primaryAccent cursor-pointer">My Bets</p>
          <p className="hover:text-primaryAccent cursor-pointer">Contact</p>
          <p className="hover:text-primaryAccent mt-4 cursor-pointer">
            Sign Out
          </p>
        </div>
      )}
    </div>
  );
}
