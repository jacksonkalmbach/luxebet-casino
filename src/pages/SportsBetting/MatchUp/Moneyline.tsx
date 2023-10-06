import React, { useState } from "react";

interface MoneylineProps {
  price: number;
}

export default function Moneyline({ price }: MoneylineProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div
      className={`w-full flex p-2 justify-center items-center cursor-pointer active:scale-95 ${
        isSelected ? "bg-[#f1f1f1] text-[#0a1f3b] font-bold" : ""
      }`}
      onClick={handleClick}
    >
      {price > 0 && "+"}
      {price}
    </div>
  );
}
