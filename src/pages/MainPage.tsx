import React from "react";
import SideMenu from "../components/SideMenu/SideMenu";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function MainPage() {
  return (
    <div className="flex bg-primaryBg w-screen h-screen justify-start items-center">
      <SideMenu />
      <div className="flex flex-col w-full h-full">
        <div className="w-full h-20 px-4 pt-4">
          <Header />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
