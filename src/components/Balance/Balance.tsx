import React from "react";

interface BalanceProps {
  balance: number;
}

export default function Balance({ balance }: BalanceProps) {
  return (
    <div className="text-fontLight font-oneset">
      <span className="font-bold">Available Balance:</span> $
      {balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </div>
  );
}
