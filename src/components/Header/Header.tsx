import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Balance from "../Balance/Balance";
import ChevronDownIcon from "../../icons/ChevronDownIcon";

import { selectUserBalance } from "../../store/features/user/userSlice";
import { RootState } from "../../store/store";

export default function Header() {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const segment = pathname.split("/")[1];
  const balance = useSelector((state: RootState) => selectUserBalance(state));
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full flex bg-secondaryBg border-b border-bgBorder justify-end items-center py-3 px-6 gap-10">
      {segment === "sportsbook" && (
        <>
          <div
            className="text-white cursor-pointer font-bold hover:text-[#eec23e] transition-all duration-200 ease-in-out"
            onClick={() => navigate("/sportsbook/mybets")}
          >
            My Bets
          </div>
          <div className="w-[2px] h-5 bg-[#f1f1f1] opacity-50"></div>
          <Balance balance={balance} />

          <div className="w-[2px] h-5 bg-[#f1f1f1] opacity-50"></div>
        </>
      )}
      <div className="flex gap-3 justify-center items-center cursor-pointer">
        <div className="text-white">jacksonkalmbach</div>
        <div
          className={`${
            !isOpen ? "" : "rotate-180"
          } transition-all duration-200 ease-in-out`}
          onClick={handleClick}
        >
          <ChevronDownIcon color="white" />
        </div>
      </div>
    </div>
  );
}
