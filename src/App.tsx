import React from "react";
import { Route, Routes } from "react-router-dom";

import TexasHoldEm from "./pages/Games/TexasHoldEm";
import MainPage from "./pages/MainPage";
import StartPage from "./pages/StartPage";
import SportWrapper from "./pages/Sportsbook/SportWrapper";
import Blackjack from "./pages/Games/Blackjack";
import Roulette from "./pages/Games/Roulette";
import SportMain from "./pages/Sportsbook/SportOdds";
import AuthMain from "./pages/Auth/AuthMain";

import "./App.css";
import MyBets from "./components/Sportsbook/MyBets/MyBets";
import Deposit from "./pages/Deposit/Deposit";

function App() {
  return (
    <Routes>
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/" element={<MainPage />}>
        <Route index element={<StartPage />} />
        <Route path="auth" element={<AuthMain />} />
        <Route path="games">
          <Route path="texas hold'em" element={<TexasHoldEm />} />
          <Route path="blackjack" element={<Blackjack />} />
          <Route path="roulette" element={<Roulette />} />
        </Route>
        <Route path="sportsbook">
          <Route path="mybets" element={<MyBets />} />
          <Route path=":sport" element={<SportWrapper />}>
            <Route index element={<SportMain />} />
            <Route path=":title" element={<SportMain />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
