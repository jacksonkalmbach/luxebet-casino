import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChevronDownIcon from "../../../icons/ChevronDownIcon";
import CategoryLink from "./CategoryLink";

interface CategoryProps {
  title: string;
  links: string[];
  category: string;
  subCategories?: { [key: string]: { key: string; title: string }[] } | undefined;
}

export default function Category({
  title,
  links,
  category,
  subCategories,
}: CategoryProps) {
  return (
    <>
      <div className="flex w-full justify-between">
        <p className="font-bold cursor-default">{title}</p>
      </div>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <CategoryLink
            key={link}
            category={category}
            title={link}
            subCategories={subCategories?.[link]}
          />
        ))}
      </div>
    </>
  );
}
