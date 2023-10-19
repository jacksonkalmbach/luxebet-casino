import React, { useState } from "react";

const filters = ["ALL", "OPEN", "SETTLED", "WON", "LOST"];

interface MyBetFiltersProps {
  onFilterChange: (filter: string) => void;
}

export default function MyBetFilters({ onFilterChange }: MyBetFiltersProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="w-full mb-4 mr-4 flex gap-1 md:gap-3 md:w-1/5 md:flex-col overflow-auto">
      {filters.map((filter: string, index) => {
        return (
          <p
            key={index}
            className={`font-oneset text-xs w-fit px-2 md:px-3 py-2 rounded-xl cursor-pointer ${
              selectedFilter === filter
                ? "bg-primaryBg font-bold text-white"
                : "text-subduedText"
            } md:text-base md:w-full`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </p>
        );
      })}
    </div>
  );
}
