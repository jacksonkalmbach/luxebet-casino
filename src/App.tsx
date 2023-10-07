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

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<StartPage />} />
        <Route path="/games/texas hold'em" element={<TexasHoldEm />} />
        <Route path="/games/blackjack" element={<Blackjack />} />
        <Route path="/games/roulette" element={<Roulette />} />
        <Route path="/sportsbook" element={<SportsBettingMain />} />
        <Route path="/sportsbook/:sport" element={<SportWrapper />}>
          <Route index element={<SportMain />} />
          <Route path="category/:categoryName" element={<SportMain />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
