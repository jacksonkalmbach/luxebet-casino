import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setShowMobileNav } from "../../../store/features/general/navigationSlice";

interface SubCategoryLinkProps {
  category: string;
  subCategory: { key: string; title: string };
  color?: string;
}

export default function SubCategoryLink({
  category,
  subCategory,
  color,
}: SubCategoryLinkProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { key, title } = subCategory;
  const handleNavigate = (subCategory: string) => {
    navigate(`/${category}/${title.toLowerCase()}/${encodeURIComponent(key)}`);
    dispatch(setShowMobileNav(false));
  };

  return (
    <p
      key={subCategory.key}
      className={`flex ml-6 hover:underline text-sm cursor-pointer items-center ${
        color ? color : "text-fontLight"
      } font-oneset`}
      onClick={() => handleNavigate(subCategory.title)}
    >
      {subCategory.title}
    </p>
  );
}
