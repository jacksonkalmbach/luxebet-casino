import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <div
      className="flex justify-center items-center px-3 py-2 border rounded-lg bg-[#eec23e] text-black active:scale-95 hover:bg-[#d6ad32] cursor-pointer"
      onClick={onClick}
    >
      {text}
    </div>
  );
}
