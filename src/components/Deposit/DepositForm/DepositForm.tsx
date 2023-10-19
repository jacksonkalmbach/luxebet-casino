import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectUserBalance } from "../../../store/features/user/userSlice";
import { RootState } from "../../../store/store";

const amounts: number[] = [25, 50, 100, 250];

interface DepositFormProps {
  handleMakeDeposit: (amount: number) => void;
  isLoading: boolean;
}

export default function DepositForm({
  handleMakeDeposit,
  isLoading,
}: DepositFormProps) {
  const balance = useSelector((state: RootState) => selectUserBalance(state));

  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  return (
    <div className="flex flex-col w-full h-full gap-4 font-oneset bg-secondaryBg p-6 rounded-xl md:w-1/2">
      <p className="text-fontLight text-xs md:text-sm">
        <span className="font-bold underline">This is a demo app.</span> No
        credit cards are needed.
      </p>
      <div className="bg-fontLight p-2 rounded-xl">
        <span>Available Funds: </span>
        <span className="font-bold text-secondaryAccent">
          ${balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      </div>
      <div className="text-fontLight text-lg md:text-xl">Select Amount</div>
      <div className="flex gap-2 w-full justify-around">
        {amounts.map((amount: number) => {
          return (
            <div
              key={amount}
              className={`p-2 bg-fontLight w-1/4 flex justify-center items-center border-4 rounded-xl cursor-pointer ${
                selectedAmount === amount
                  ? "border-primaryAccent"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedAmount(amount)}
            >
              ${amount}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col w-full bg-fontLight rounded-xl p-4 gap-2">
        <p className="text-sm">Other Amount</p>
        <input className="bg-fontLight p-2" placeholder="$0.00" />
      </div>
      <div className="text-fontLight text-lg md:text-xl">
        Add Payment Details
      </div>
      <div className="bg-fontLight rounded-xl w-full h-full p-4 flex flex-col gap-3">
        <p className="text-xs">
          Please note: This is just for demonstration purposes. You can add any
          16 digits. This does not require real card details.
        </p>
        <div className="w-full flex flex-col">
          <p className="text-sm md:text-base">Card Number</p>
          <input placeholder="16 Digits" className="p-2 rounded-xl" />
        </div>
        <div className="flex justify-around gap-2">
          <div className="flex flex-col w-1/2">
            <p className="text-sm md:text-base">Exp. Date (mm/yy)</p>
            <input className="p-2 rounded-xl" placeholder="mm/yy" />
          </div>
          <div className="flex flex-col w-1/2">
            <p className="text-sm md:text-base">CVV</p>
            <input className="p-2 rounded-xl" placeholder="ex. 123" />
          </div>
        </div>
        <button
          onClick={() => {
            handleMakeDeposit(selectedAmount);
          }}
          className="flex justify-center items-center px-3 py-2 rounded-lg bg-[#eec23e] text-black font-oneset transition-all duration-300"
        >
          {isLoading ? "Authorizing..." : "Make Deposit"}
        </button>
      </div>
    </div>
  );
}
