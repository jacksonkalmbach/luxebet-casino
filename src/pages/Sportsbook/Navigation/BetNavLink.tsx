import React from "react";
import { useNavigate } from "react-router-dom";

interface BetNavLinkProps {
  title: string;
  sport?: string;
  active: string;
  handleSelected: (betType: string) => void;
}

export default function BetNavLink({
  title,
  sport,
  active,
  handleSelected,
}: BetNavLinkProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    handleSelected(title);
    navigate(`/sportsbook/${sport}/category/${title.toLowerCase()}`);
  };
  return (
    <div
      className={`${
        active === title
          ? "text-primaryAccent border-primaryAccent font-bold"
          : "text-white border-transparent"
      } cursor-pointer border-b-2 pb-2 w-[100px] flex justify-center items-center transition-all duration-200 ease-in-out`}
      onClick={handleClick}
    >
      {title}
    </div>
  );
}
