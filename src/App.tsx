import React from "react";
import { Route, Routes } from "react-router-dom";

import NewGame from "./pages/Games/TexasHoldEm";
import MainPage from "./pages/MainPage";

import "./App.css";
import StartPage from "./pages/StartPage";

import Blackjack from "./pages/Games/Blackjack";
import Roulette from "./pages/Games/Roulette";
import SportsBettingMain from "./pages/SportsBetting/SportsBettingMain";
import SportMain from "./pages/SportsBetting/SportMain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<StartPage />} />

        <Route path="/games/texas hold'em" element={<NewGame />} />
        <Route path="/games/blackjack" element={<Blackjack />} />
        <Route path="/games/roulette" element={<Roulette />} />
        <Route path="/sports-betting" element={<SportsBettingMain />} />
        <Route path="/sports-betting/:sport" element={<SportMain />} />
      </Route>
    </Routes>
  );
}

export default App;
