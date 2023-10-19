import React from "react";

interface PaymentDetailsProps {
  handleMakeDeposit: (amount: number) => void;
  isLoading: boolean;
  selectedAmount: number;
}

export default function PaymentDetails({
  handleMakeDeposit,
  isLoading,
  selectedAmount,
}: PaymentDetailsProps) {
  return (
    <>
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
    </>
  );
}
