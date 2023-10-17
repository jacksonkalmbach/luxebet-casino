import React from "react";
import CategoryLink from "./CategoryLink";

interface CategoryProps {
  title: string;
  links: string[];
  category: string;
  subCategories?:
    | { [key: string]: { key: string; title: string }[] }
    | undefined;
  color?: string;
}

export default function Category({
  title,
  links,
  category,
  subCategories,
  color,
}: CategoryProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full justify-start">
        <p
          className={`font-bold cursor-default font-oneset ${
            color ? color : "text-fontLight"
          }`}
        >
          {title}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <CategoryLink
            key={link}
            category={category}
            title={link}
            subCategories={subCategories?.[link]}
            color={color}
          />
        ))}
      </div>
    </div>
  );
}
