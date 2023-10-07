import React, { useState } from "react";
import ChevronDownIcon from "../../icons/ChevronDownIcon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full flex bg-[#0a1f3b] border-b border-[#1c314c] justify-end items-center py-3 px-6">
      <div className="flex gap-3 justify-center items-center cursor-pointer">
        <div className="text-white">jacksonkalmbach</div>

        <div
          className={`${
            isOpen ? "" : "rotate-180"
          } transition-all duration-200 ease-in-out`}
          onClick={handleClick}
        >
          <ChevronDownIcon color="white" />
        </div>
      </div>
    </div>
  );
}
