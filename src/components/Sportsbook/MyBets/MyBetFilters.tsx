import React, { useState } from "react";

export default function MyBetFilters() {
  const [filter, setFilter] = useState<string>("ALL");
  return (
    <div className="w-1/5 mr-4 flex flex-col gap-3">
      <p
        className={`font-oneset  w-full px-3 py-2 rounded-xl cursor-pointer ${
          filter === "ALL"
            ? "bg-primaryBg font-bold text-white"
            : "text-subduedText"
        }`}
        onClick={() => setFilter("ALL")}
      >
        ALL
      </p>
      <p
        className={`font-oneset  w-full px-3 py-2 rounded-xl cursor-pointer ${
          filter === "OPEN"
            ? "bg-primaryBg font-bold text-white"
            : "text-subduedText"
        }`}
        onClick={() => setFilter("OPEN")}
      >
        OPEN
      </p>
      <p
        className={`font-oneset  w-full px-3 py-2 rounded-xl cursor-pointer ${
          filter === "SETTLED"
            ? "bg-primaryBg font-bold text-white"
            : "text-subduedText"
        }`}
        onClick={() => setFilter("SETTLED")}
      >
        SETTLED
      </p>
      <p
        className={`font-oneset  w-full px-3 py-2 rounded-xl cursor-pointer ${
          filter === "WON"
            ? "bg-primaryBg font-bold text-white"
            : "text-subduedText"
        }`}
        onClick={() => setFilter("WON")}
      >
        WON
      </p>
      <p
        className={`font-oneset  w-full px-3 py-2 rounded-xl cursor-pointer ${
          filter === "LOST"
            ? "bg-primaryBg font-bold text-white"
            : "text-subduedText"
        }`}
        onClick={() => setFilter("LOST")}
      >
        LOST
      </p>
    </div>
  );
}
