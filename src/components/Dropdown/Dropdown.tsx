import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setUserLogIn } from "../../store/features/user/userSlice";

type DropdownOptionType = {
  title: string;
  path: string;
};

const dropdownOptions: DropdownOptionType[] = [
  { title: "My Bets", path: "/sportsbook/mybets" },
  { title: "Deposit", path: "/deposit" },
  { title: "Contact", path: "/contact" },
];

export default function Dropdown({
  setIsOpen,
}: {
  setIsOpen: (arg: boolean) => void;
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="hidden md:flex absolute w-56 text-white right-4 mt-2 top-full z-50 bg-tertiaryBg p-4 rounded-xl flex-col font-oneset gap-3">
      {dropdownOptions.map((option: DropdownOptionType) => {
        const { title, path } = option;
        return (
          <p
            className="hover:text-primaryAccent cursor-pointer"
            onClick={() => {
              setIsOpen(false);
              navigate(path);
            }}
          >
            {title}
          </p>
        );
      })}

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
