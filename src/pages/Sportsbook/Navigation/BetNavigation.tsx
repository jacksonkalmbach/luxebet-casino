import React, { useState, useEffect } from "react";
import BetNavLink from "./BetNavLink";

export default function BetNavigation({ sport }: { sport?: string }) {
  const [active, setActive] = useState("GAME");

  useEffect(() => {
    setActive("GAME");
  }, [sport]);

  const handleSelected = (betType: string) => {
    setActive(betType);
  };

  return (
    <div className="w-full flex gap-4 border-b border-[#1c314c]">
      <BetNavLink
        title="GAME"
        sport={sport}
        active={active}
        handleSelected={handleSelected}
      />
      <BetNavLink
        title="PROPS"
        sport={sport}
        active={active}
        handleSelected={handleSelected}
      />
      <BetNavLink
        title="FUTURES"
        sport={sport}
        active={active}
        handleSelected={handleSelected}
      />
    </div>
  );
}
