import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import MainMenu from "./MainMenu";

import { selectUserLoginStatus } from "../store/features/user/userSlice";
import { RootState } from "../store/store";

export default function StartPage() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) =>
    selectUserLoginStatus(state)
  );

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div
      className="flex w-full p-4 bg-transparent"
      style={{ height: "calc(100% - 80px)" }}
    >
      {isLoggedIn && <MainMenu />}
    </div>
  );
}
