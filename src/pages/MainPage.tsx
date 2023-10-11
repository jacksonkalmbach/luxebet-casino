import React from "react";
import SideMenu from "../components/SideMenu/SideMenu";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function MainPage() {
  return (
    <div className="flex bg-primaryBg w-screen h-screen justify-start items-center border-8 border-bgBorder">
      <SideMenu />
      <div className="flex flex-col w-full h-full">
      <Header />
      <Outlet />
      </div>
    </div>
  );
}
