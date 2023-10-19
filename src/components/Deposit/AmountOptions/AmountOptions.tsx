import React from "react";

interface AmountOptionsProps {
  selectedAmount: number;
  setSelectedAmount: (amount: number) => void;
}

const amounts: number[] = [25, 50, 100, 250];

export default function AmountOptions({
  selectedAmount,
  setSelectedAmount,
}: AmountOptionsProps) {
  return (
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
  );
}
