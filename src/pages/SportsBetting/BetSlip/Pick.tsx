import React from "react";

import CloseIcon from "../../../icons/CloseIcon";

interface PickProps {
  team: string;
  price: number;
  point?: number;
  betType: string;
}

export default function Pick({ team, price, point, betType }: PickProps) {
  const handleRemovePick = () => {
    console.log("Remove pick");
  };

  let payout = 0;

  return (
    <div className="flex justify-start items-start w-full gap-2 border-b">
      <div
        className="h-full pt-3 cursor-pointer active:scale-95"
        onClick={handleRemovePick}
      >
        <CloseIcon color="black" />
      </div>
      <div className="flex flex-col py-3 w-3/5">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <p className="font-bold text-xs">{team}</p>{" "}
          </div>
          <p className="text-xs">{price}</p>
        </div>
        <p className="text-xs">
          {betType} {point ? (point > 0 ? `+${point}` : point) : 0}
        </p>
      </div>
      <div className="flex flex-col w-1/4">
        <input
          className="rounded border mt-2 p-1 text-xs w-full"
          placeholder="$ 0.00"
        ></input>
        {payout > 0 && (
          <p className="text-[10px] text-center w-full">Payout: ${payout} </p>
        )}
      </div>
    </div>
  );
}
