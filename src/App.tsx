import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";

import "./App.css";

import PokerTable from "./components/PokerTable";
import TurnOptions from "./components/TurnOptions";

function App() {
  return (
    <Provider store={store}>
      <div className="flex bg-[#081a2f] w-screen h-screen justify-start items-center border-8 border-[#1c2e52]">
        <div className="flex w-[20%] h-full bg-[#0a1f3b] text-white rounded-l-lg border-r border-[#1c314c] p-4 justify-center">
          <div className="font-bold text-2xl">Poker Game</div>
        </div>
        <div className="flex w-full h-full p-8 bg-transparent">
          <div className="relative flex flex-col w-full h-full bg-[#0a1f3b] text-white rounded-2xl justify-center items-center border border-[#1c314c]">
            <div className="absolute top-5 left-10 cursor-pointer active:scale-95">
              {"<-- Exit Game"}
            </div>
            <PokerTable />
            <TurnOptions />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
