import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectUserBalance } from "../../../store/features/user/userSlice";
import { RootState } from "../../../store/store";

interface DepositSuccessProps {
  handleDepositSuccess: () => void;
}

export default function DepositSuccess({
  handleDepositSuccess,
}: DepositSuccessProps) {
  const navigate = useNavigate();
  const balance = useSelector((state: RootState) => selectUserBalance(state));
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p className="text-fontLight font-bold flex gap-1 text-xl">
        Success! Your balance is now:
        <span className="text-secondaryAccent">
          ${balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => navigate("/")}
          className="flex justify-center items-center px-3 py-2 rounded-lg bg-[#eec23e] text-black font-oneset active:scale-95"
        >
          Return to Casino
        </button>
        <button
          onClick={() => handleDepositSuccess()}
          className="flex justify-center items-center px-3 py-2 rounded-lg border-2 text-fontLight font-oneset active:scale-95"
        >
          Make another deposit
        </button>
      </div>
    </div>
  );
}
