import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type CardSuit = "hearts" | "diamonds" | "clubs" | "spades";
// type CardValue = string | number;

// interface CardType {
//   suit: CardSuit;
//   value: CardValue;
// }

interface PokerState {
  totalPlayers: Number;
  playerUp: Number;
  playersIn: Number[];
}

const initialState: PokerState = {
  totalPlayers: 5,
  playerUp: 0,
  playersIn: [],
};

const pokerSlice = createSlice({
  name: "poker",
  initialState,
  reducers: {
    setPlayerUp(state, action: PayloadAction<number>) {
      state.playerUp = action.payload;
    },
  },
});

export const { setPlayerUp } = pokerSlice.actions;
export const selectPlayerUp = (state: { poker: PokerState }): Number =>
  state.poker.playerUp;

export default pokerSlice.reducer;
