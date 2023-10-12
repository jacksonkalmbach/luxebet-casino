import React from "react";
import CasinoDealer from "../../icons/CasinoDealer";

import Card from "../Card/Card";

export default function Dealer() {
  return (
    <div className="relative w-fit rounded-full bg-secondaryBg border-4">
      <div className="bg-gray-200 rounded-full h-20 w-20 overflow-hidden">
        <div className="flex justify-center items-center">
          <CasinoDealer />
        </div>
      </div>
      <div className="absolute w-8 h-12 -bottom-16 left-1/2 transform -translate-x-1/2">
        {/* <Card
          isFaceUp={false}
          suit="clubs"
          tilt=""
          value="4"
          absolute={false}
        /> */}
      </div>
    </div>
  );
}
