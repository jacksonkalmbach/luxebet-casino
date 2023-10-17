import React from "react";
import { useDispatch } from "react-redux";
import SignIn from "../../components/Auth/SignIn";

// interface AuthMainProps {
//   onGuestLogIn: () => void;
// }

export default function AuthMain() {
  return (
    <div className="relative flex flex-col w-full h-full rounded-2xl justify-center items-center">
      <SignIn />
    </div>
  );
}
