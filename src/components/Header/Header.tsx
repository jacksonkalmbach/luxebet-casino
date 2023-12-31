import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Logo from "../Logo/Logo";
import Balance from "../Balance/Balance";
import ChevronDownIcon from "../../icons/ChevronDownIcon";
import HamburgerIcon from "../../icons/HamburgerIcon";
import MobileNavigation from "../Navigation/MobileNavigation";
import Dropdown from "../Dropdown/Dropdown";

import {
  selectUserLoginStatus,
  selectUsername,
} from "../../store/features/user/userSlice";

import { setShowMobileNav } from "../../store/features/general/navigationSlice";
import { RootState } from "../../store/store";

export default function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showMobileNav = useSelector(
    (state: RootState) => state.navigation.showMobileNav
  );
  const isLoggedIn = useSelector((state: RootState) =>
    selectUserLoginStatus(state)
  );
  const username = useSelector((state: RootState) => selectUsername(state));
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {showMobileNav && (
        <div className="absolute z-30 bg-black bg-opacity-40 bottom-0 right-0 w-screen h-screen flex justify-end">
          <MobileNavigation />
        </div>
      )}
      {isLoggedIn ? (
        <div className="relative w-full h-full flex bg-secondaryBg justify-between items-center py-3 px-6 gap-10 rounded-xl">
          <div
            className="hidden lg:flex cursor-pointer font-oneset text-fontLight font-bold hover:text-[#eec23e] transition-all duration-200 ease-in-out"
            onClick={() => navigate("/sportsbook/mybets")}
          >
            My Bets
          </div>
          <div className="flex w-full justify-between lg:w-1/3 lg:justify-around items-center">
            <div className="flex gap-4 justify-center items-center">
              <p className="font-lobster text-primaryAccent text-3xl md:hidden">
                LB
              </p>
              <div className="flex w-1/3 px-10">
                <Balance />
              </div>
            </div>
            <div
              className="block md:hidden"
              onClick={() => dispatch(setShowMobileNav(true))}
            >
              <HamburgerIcon color="white" />
            </div>
            <div
              className="hidden md:flex gap-2 justify-center items-center cursor-pointer"
              onClick={handleClick}
            >
              <div className="text-fontLight font-oneset text-sm md:text-base">
                {username}
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
          {isOpen && <Dropdown setIsOpen={setIsOpen} />}
        </div>
      ) : location.pathname === "/auth" ? (
        <div className="md:hidden">
          <Logo variant="primary" />
        </div>
      ) : (
        <div className="relative w-full h-full flex bg-secondaryBg justify-end items-center py-3 px-6 gap-10 rounded-xl">
          <button
            className="bg-primaryAccent font-oneset p-2 rounded-xl active:scale-95"
            onClick={() => navigate("/auth")}
          >
            Sign In
          </button>
        </div>
      )}
    </>
  );
}
