import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setUserLogIn } from "../../store/features/user/userSlice";

export default function Dropdown({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="hidden md:flex absolute w-56 text-white right-4 mt-2 top-full z-50 bg-tertiaryBg p-4 rounded-xl flex-col font-oneset gap-3">
      <p
        className="hover:text-primaryAccent cursor-pointer"
        onClick={() => {
          setIsOpen(false);
          navigate("/sportsbook/mybets");
        }}
      >
        My Bets
      </p>
      <p
        className="hover:text-primaryAccent cursor-pointer"
        onClick={() => {
          setIsOpen(false);
          navigate("/deposit");
        }}
      >
        Deposit
      </p>
      <p className="hover:text-primaryAccent cursor-pointer">Contact</p>
      <div className="h-[1px] bg-fontLight w-full"></div>
      <p
        className="hover:text-primaryAccent cursor-pointer"
        onClick={() => {
          dispatch(setUserLogIn(false));
          setIsOpen(false);
          navigate("/");
        }}
      >
        Sign Out
      </p>
    </div>
  );
}
