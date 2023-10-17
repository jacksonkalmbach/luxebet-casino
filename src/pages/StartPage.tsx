import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) =>
    selectUserLoginStatus(state)
  );

  useEffect(() => {
    // Check isLoggedIn and navigate to '/auth' if false
    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, [isLoggedIn, navigate]);

  

  return (
    <div className="w-full h-full flex p-8 bg-transparent overflow-hidden">
      {isLoggedIn && <MainMenu />}
    </div>
  );
}
