import React, { useState } from "react";
import WalletIcon from "../../icons/WalletIcon";

interface BalanceProps {
  balance: number;
}

export default function Balance({ balance }: BalanceProps) {
  const [makeDeposit, setMakeDeposit] = useState<boolean>(false);

  const handleClick = () => {
    if (makeDeposit) {
      setMakeDeposit(false);
    } else {
      setMakeDeposit(true);
      setTimeout(() => setMakeDeposit(false), 2000);
    }
  };

  return (
    <div className="relative text-fontLight font-oneset flex justify-center items-center gap-2 ">
      <div
        className="absolute transition-transform duration-300 -left-10 p-2 z-10 rounded-xl bg-primaryAccent cursor-pointer"
        onClick={handleClick}
      >
        <WalletIcon color="black" />
      </div>
      <span
        className={`absolute -left-5 transition-all ease-in-out duration-300 text-primaryAccent shadow-yellow rounded-full py-1 ${
          makeDeposit ? "opacity-0 w-0" : "opacity-100 pl-8 pr-3 cursor-default"
        }`}
      >
        ${balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>
      <span
        className={`absolute -left-5 transition-all ease-in-out duration-300 text-black bg-primaryAccent shadow-yellow rounded-full py-1  ${
          !makeDeposit
            ? "opacity-0 w-0"
            : "opacity-100 pl-8 pr-3 cursor-pointer active:scale-95 hover:bg-fontLight"
        }`}
        onClick={() => console.log("make deposit")}
      >
        Deposit
      </span>
    </div>
  );
}
