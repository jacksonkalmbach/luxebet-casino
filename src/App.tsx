import React from "react";
import { Route, Routes } from "react-router-dom";

import TexasHoldEm from "./pages/Games/TexasHoldEm";
import MainPage from "./pages/MainPage";
import StartPage from "./pages/StartPage";
import SportWrapper from "./pages/Sportsbook/SportWrapper";
import Blackjack from "./pages/Games/Blackjack";
import Roulette from "./pages/Games/Roulette";
import SportsBettingMain from "./pages/Sportsbook/SportsBettingMain";
import SportMain from "./pages/Sportsbook/SportMain";

import "./App.css";
import MyBets from "./pages/Sportsbook/MyBets/MyBets";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<StartPage />} />
        <Route path="games">
          <Route path="texas hold'em" element={<TexasHoldEm />} />
          <Route path="blackjack" element={<Blackjack />} />
          <Route path="roulette" element={<Roulette />} />
        </Route>
        <Route path="sportsbook">
          <Route index element={<SportsBettingMain />} />
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
