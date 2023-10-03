import { configureStore } from "@reduxjs/toolkit";

import potReducer from "./features/game/potSlice";
import cardsReducer from "./features/game/cardsSlice";
import userGameReducer from "./features/game/userGameSlice";

const store = configureStore({
  reducer: {
    pot: potReducer,
    cards: cardsReducer,
    userGame: userGameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
