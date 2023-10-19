import React, { useState } from "react";
import { useSelector } from "react-redux";

import AmountOptions from "../AmountOptions/AmountOptions";
import PaymentDetails from "./PaymentDetails/PaymentDetails";

import { selectUserBalance } from "../../../store/features/user/userSlice";
import { RootState } from "../../../store/store";

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
      <AmountOptions
        selectedAmount={selectedAmount}
        setSelectedAmount={setSelectedAmount}
      />
      <div className="flex flex-col w-full bg-fontLight rounded-xl p-4 gap-2">
        <p className="text-sm">Other Amount</p>
        <input className="bg-fontLight p-2" placeholder="$0.00" />
      </div>
      <PaymentDetails
        handleMakeDeposit={handleMakeDeposit}
        isLoading={isLoading}
        selectedAmount={selectedAmount}
      />
    </div>
  );
}
