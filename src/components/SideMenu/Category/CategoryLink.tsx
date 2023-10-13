import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => {
    setOpen(!open);
  };

  const handleNavigate = (category: string) => {
    navigate(`/games/${category}`);
  };

  return (
    <>
      <div
        className="flex ml-3 cursor-pointer justify-between items-center"
        onClick={
          subCategories
            ? handleToggleOpen
            : () => handleNavigate(title.toLowerCase())
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className="text-[#CCCCCC] font-oneset text-base">{title}</p>
        {isHovered && subCategories && (
          <div
            className={`transiton-all duration-200 ${
              !open ? "" : "rotate-180"
            }`}
          >
            <ChevronDownIcon color="#CCCCCC" />
          </div>
        )}
      </div>
      {open && subCategories && (
        <div className="flex flex-col gap-2">
          {subCategories?.map((subCategory) => (
            <SubCategoryLink subCategory={subCategory} category={category} />
          ))}
        </div>
      )}
    </>
  );
}
