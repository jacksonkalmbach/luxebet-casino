import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChevronDownIcon from "../../../icons/ChevronDownIcon";
import CategoryLink from "./CategoryLink";

interface CategoryProps {
  title: string;
  links: string[];
  category: string;
}

export default function Category({ title, links, category }: CategoryProps) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const handleToggleOpen = () => {
    setOpen(!open);
  };

  const handleNavigate = () => {
    navigate(`/${category}`);
  };

  return (
    <>
      <div className="flex justify-between">
        <p
          className="font-bold hover:underline cursor-pointer"
          onClick={handleNavigate}
        >
          {title}
        </p>
        <div
          className={`${
            !open ? "" : "rotate-180"
          } transiton-all duration-500 cursor-pointer`}
          onClick={handleToggleOpen}
        >
          <ChevronDownIcon color="#CCCCCC" />
        </div>
      </div>
      <div
        className={`flex flex-col gap-2 transition-all duration-500 
              ${
                open
                  ? "opacity-100 max-h-[500px]"
                  : "opacity-0 max-h-0 overflow-hidden"
              }`}
      >
        {links.map((link) => (
          <CategoryLink key={link} category={category} title={link} />
        ))}
      </div>
    </>
  );
}
