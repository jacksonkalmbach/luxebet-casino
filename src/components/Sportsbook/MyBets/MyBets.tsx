import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectPlacedBetsObject } from "../../../store/features/sportsbook/betSlipSlice";
import { RootState } from "../../../store/store";
import BetResult from "./BetResult";
import MyBetFilters from "./MyBetFilters";

export default function MyBets() {
  const placedBets = useSelector((state: RootState) =>
    selectPlacedBetsObject(state)
  );

  const [filterBy, setFilterBy] = useState<string>("ALL");

  const handleFilterChange = (filter: string) => {
    setFilterBy(filter);
  };

  const filteredBets = placedBets.filter((bet) => {
    if (filterBy === "ALL") {
      return true;
    } else if (bet.status) {
      return bet.status.toUpperCase() === filterBy;
    }
  });

  return (
    <div
      className="flex w-full h-full p-4 bg-transparent gap-4"
      style={{ height: "calc(100% - 80px)" }}
    >
      <div className="relative flex flex-col w-full h-full bg-secondaryBg rounded-2xl justify-start items-start p-10 gap-6 md:gap-10">
        <p className="text-fontLight font-oneset text-2xl font-bold">MY BETS</p>
        <div className="flex flex-col md:flex-row w-full h-full overflow-hidden">
          <MyBetFilters onFilterChange={handleFilterChange} />
          <div className="w-full h-full flex flex-col gap-3 overflow-auto">
            {filteredBets.map((bet, index) => {
              return <BetResult bet={bet} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
