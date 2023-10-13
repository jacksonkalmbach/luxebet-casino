import React from "react";

interface ButtonProps {
  text: string;
  isUserTurn?: boolean;
  onClick: () => void;
}

export default function Button({ text, isUserTurn, onClick }: ButtonProps) {
  return (
    <div
      className={`flex justify-center items-center px-3 py-2 rounded-lg bg-[#eec23e] text-black font-oneset transition-all duration-300  ${
        isUserTurn
          ? "cursor-pointer bg-[#eec23e] active:scale-95 hover:bg-[#d6ad32]"
          : "cursor-not-allowed bg-gray-300 opacity-50"
      }`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
