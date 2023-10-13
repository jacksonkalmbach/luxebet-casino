import React from "react";
import { useSelector, useDispatch } from "react-redux";

import AuthMain from "./Auth/AuthMain";
import MainMenu from "./MainMenu";

import {
  selectUserLoginStatus,
  setUserLogIn,
  setUserName,
} from "../store/features/user/userSlice";
import { RootState } from "../store/store";

import { guestUsernames } from "../utils/guest/guestUsernames";

export default function StartPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) =>
    selectUserLoginStatus(state)
  );

  const handleGuestLogin = () => {
    dispatch(setUserLogIn(true));
    dispatch(
      setUserName(
        guestUsernames[Math.floor(Math.random() * guestUsernames.length)]
      )
    );
  };

  return (
    <div className="w-full h-full flex p-8 bg-transparent">
      {isLoggedIn ? <MainMenu /> : <AuthMain onGuestLogIn={handleGuestLogin} />}
    </div>
  );
}
