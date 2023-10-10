import React, { useState } from "react";

import ChevronDownIcon from "../../../icons/ChevronDownIcon";
import SubCategoryLink from "./SubCategoryLink";

export default function CategoryLink({
  title,
  category,
  subCategories,
}: {
  title: string;
  category: string;
  subCategories?: { key: string; title: string }[] | undefined;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
 

  const handleToggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className="flex ml-3 hover:underline cursor-pointer justify-between items-center"
        onClick={handleToggleOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className="text-[#CCCCCC]">{title}</p>
        {isHovered && (
          <div
            className={`transiton-all duration-200 ${
              !open ? "" : "rotate-180"
            }`}
          >
            <ChevronDownIcon color="#CCCCCC" />
          </div>
        )}
      </div>
      {open && (
        <div className="flex flex-col gap-2">
          {subCategories?.map((subCategory) => (
            <SubCategoryLink subCategory={subCategory} category={category}/>
          ))}
        </div>
      )}
    </>
  );
}
