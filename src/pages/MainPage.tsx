import React from "react";
import SideMenu from "../components/SideMenu/SideMenu";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="flex bg-[#081a2f] w-screen h-screen justify-start items-center border-8 border-[#1c2e52]">
      <SideMenu />
      <Outlet />
    </div>
  );
}
