import React, { useState } from "react";

const filters = ["ALL", "OPEN", "SETTLED", "WON", "LOST"];

export default function MyBetFilters() {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  return (
    <div className="w-full mb-4 mr-4 flex gap-1 md:gap-3 md:w-1/5 md:flex-col overflow-auto">
      {filters.map((filter: string) => {
        return (
          <p
            className={`font-oneset text-xs w-fit px-2 md:px-3 py-2 rounded-xl cursor-pointer ${
              selectedFilter === filter
                ? "bg-primaryBg font-bold text-white"
                : "text-subduedText"
            } md:text-base md:w-full`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </p>
        );
      })}
    </div>
  );
}
