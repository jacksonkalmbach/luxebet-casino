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
  // const [open, setOpen] = useState(true);

  // const handleToggleOpen = () => {
  //   setOpen(!open);
  // };

  return (
    <>
      <div className="flex justify-between">
        <p className="font-bold cursor-default">{title}</p>
        {/* <div
          className={`${
            !open ? "" : "rotate-180"
          } transiton-all duration-500 cursor-pointer`}
          onClick={handleToggleOpen}
        >
          <ChevronDownIcon color="#CCCCCC" />
        </div> */}
      </div>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <CategoryLink key={link} category={category} title={link} />
        ))}
      </div>
    </>
  );
}
