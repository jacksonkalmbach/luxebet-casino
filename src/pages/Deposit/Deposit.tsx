import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Logo from "../../components/Logo/Logo";
import DepositSuccess from "../../components/Deposit/DepositSuccess/DepositSuccess";
import DepositForm from "../../components/Deposit/DepositForm/DepositForm";

import { setShowMobileNav } from "../../store/features/general/navigationSlice";
import { incrementUserBalance } from "../../store/features/user/userSlice";


export default function Deposit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSuccessfulDeposit, setIsSuccessfulDeposit] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleDepositSucces = () => {
    setIsSuccessfulDeposit(!isSuccessfulDeposit);
  };

  const handleMakeDeposit = async (amount: number) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch(incrementUserBalance(amount));
    setIsLoading(false);
    setIsSuccessfulDeposit(true);
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-32 bg-primaryBg flex justify-center items-center gap-4 md:relative overflow-auto">
        <div
          className="absolute left-10 text-primaryAccent font-bold font-lobster text-5xl md:hidden"
          onClick={() => {
            navigate("/");
            dispatch(setShowMobileNav(false));
          }}
        >
          LB
        </div>
        <div className="md:absolute md:left-10 hidden md:block">
          <Logo variant="primary" />
        </div>
        <div className="text-fontLight font-oneset text-3xl md:text-5xl font-bold">
          Deposit
        </div>
      </div>
      <div
        className="flex flex-col p-6 bg-primaryBg w-full h-full justify-center items-center"
        style={{ height: "calc(100% - 8rem)" }}
      >
        {!isSuccessfulDeposit ? (
          <DepositForm
            handleMakeDeposit={handleMakeDeposit}
            isLoading={isLoading}
          />
        ) : (
          <DepositSuccess handleDepositSuccess={toggleDepositSucces} />
        )}
      </div>
    </div>
  );
}
