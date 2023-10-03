import React from "react";

import Card from "../Card/Card";

export default function Dealer() {
  return (
    <div className="relative w-fit p-2 border rounded-lg bg-[#23325c] border-2 border-[#f3cb16]">
      <p className="text-white">Dealer</p>
      <div className="absolute w-8 h-12 left-1/2 transform -translate-x-1/2">
        <Card
          isFaceUp={false}
          suit="clubs"
          tilt=""
          value="4"
          absolute={false}
        />
      </div>
    </div>
  );
}
