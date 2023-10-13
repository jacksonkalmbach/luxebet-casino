import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import AuthMain from "./Auth/AuthMain";
import MainMenu from "./MainMenu";

import {
  selectUserLoginStatus,
  setUserLogIn,
} from "../store/features/user/userSlice";
import { RootState } from "../store/store";

export default function StartPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) =>
    selectUserLoginStatus(state)
  );

  const handleGuestLogin = () => {
    dispatch(setUserLogIn(true));
  };

  return (
    <div className="w-full h-full flex p-8 bg-transparent">
      {isLoggedIn ? <MainMenu /> : <AuthMain onGuestLogIn={handleGuestLogin} />}
    </div>
  );
}
