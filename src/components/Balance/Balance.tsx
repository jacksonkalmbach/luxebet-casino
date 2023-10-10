import React from "react";

interface BalanceProps {
  balance: number;
}

export default function Balance({ balance }: BalanceProps) {
  return (
    <div className="text-white">
      <span className="font-bold">Available Balance:</span> ${balance}
    </div>
  );
}
