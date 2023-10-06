import React, { useState } from "react";
import AuthMain from "./Auth/AuthMain";
import MainMenu from "./MainMenu";

export default function StartPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGuestLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="w-full h-full flex p-8 bg-transparent">
      {isLoggedIn ? <MainMenu /> : <AuthMain onGuestLogIn={handleGuestLogin} />}
    </div>
  );
}
