import React from "react";
import SignIn from "../../components/Auth/SignIn";
import BuiltBy from "../../components/BuiltBy/BuildBy";

export default function AuthMain() {
  return (
    <div className="relative flex flex-col w-full h-full rounded-2xl justify-center items-center mt-10 md:mt-0">
      <SignIn />
      <div className="absolute bottom-5 w-full flex flex-col font-oneset text-fontLight text-sm font-thin md:text-base">
        <BuiltBy />
      </div>
    </div>
  );
}
