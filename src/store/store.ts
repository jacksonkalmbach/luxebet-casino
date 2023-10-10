import { configureStore } from "@reduxjs/toolkit";

import potReducer from "./features/game/potSlice";
import cardsReducer from "./features/game/cardsSlice";
import userGameReducer from "./features/game/userGameSlice";
import betSlipReducer from "./features/sportsbook/betSlipSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    pot: potReducer,
    cards: cardsReducer,
    userGame: userGameReducer,
    betSlip: betSlipReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
