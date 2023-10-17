import { configureStore } from "@reduxjs/toolkit";

import potReducer from "./features/game/potSlice";
import pokerReduer from "./features/game/pokerSlice";
import cardsReducer from "./features/game/cardsSlice";
import userGameReducer from "./features/game/userGameSlice";
import betSlipReducer from "./features/sportsbook/betSlipSlice";
import userReducer from "./features/user/userSlice";
import navReducer from "./features/general/navigationSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    pot: potReducer,
    poker: pokerReduer,
    cards: cardsReducer,
    userGame: userGameReducer,
    betSlip: betSlipReducer,
    navigation: navReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
