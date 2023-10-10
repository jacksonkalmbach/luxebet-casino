import React from "react";
import { useNavigate } from "react-router-dom";

interface SubCategoryLinkProps {
  category: string;
  subCategory: { key: string; title: string };
}

export default function SubCategoryLink({
  category,
  subCategory,
}: SubCategoryLinkProps) {
  const navigate = useNavigate();
  const { key, title } = subCategory;
  const handleNavigate = (subCategory: string) => {
    navigate(`/${category}/${title.toLowerCase()}/${encodeURIComponent(key)}`);
  };

  return (
    <p
      key={subCategory.key}
      className="flex ml-6 hover:underline text-sm cursor-pointer items-center text-[#CCCCCC]"
      onClick={() => handleNavigate(subCategory.title)}
    >
      {subCategory.title}
    </p>
  );
}
