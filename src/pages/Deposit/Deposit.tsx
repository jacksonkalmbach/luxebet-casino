import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../../components/Logo/Logo";
import { setShowMobileNav } from "../../store/features/general/navigationSlice";
import {
  selectUserBalance,
  incrementUserBalanceByAmount,
} from "../../store/features/game/userGameSlice";
import { RootState } from "../../store/store";

const amounts: number[] = [25, 50, 100, 250];

export default function Deposit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const balance = useSelector((state: RootState) => selectUserBalance(state));

  const [isSuccessfulDeposit, setIsSuccessfulDeposit] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedAmount, setSelectedAmount] = useState<number>(50);

  const handleMakeDeposit = async (amount: number) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch(incrementUserBalanceByAmount(amount));
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
          {/* The Logo component is hidden on small screens */}
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
          <div className="flex flex-col w-full h-full gap-4 font-oneset bg-secondaryBg p-6 rounded-xl md:w-1/2">
            <p className="text-fontLight text-xs md:text-sm">
              <span className="font-bold underline">This is a demo app.</span>{" "}
              No credit cards are needed.
            </p>
            <div className="bg-fontLight p-2 rounded-xl">
              <span>Available Funds: </span>
              <span className="font-bold text-secondaryAccent">
                ${balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </div>
            <div className="text-fontLight text-lg md:text-xl">
              Select Amount
            </div>
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
                Please note: This is just for demonstration purposes. You can
                add any 16 digits. This does not require real card details.
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
        ) : (
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
                onClick={() => setIsSuccessfulDeposit(false)}
                className="flex justify-center items-center px-3 py-2 rounded-lg border-2 text-fontLight font-oneset active:scale-95"
              >
                Make another deposit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
