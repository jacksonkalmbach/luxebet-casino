import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BetSlipPick = {
  team: string;
  price: number;
  point?: number;
  betType: string;
};

interface BetSlipState {
  betSlipArray: {
    team: string;
    price: number;
    point?: number;
    betType: string;
  }[];
}

const initialState: BetSlipState = {
  betSlipArray: [],
};

const betSlipSlice = createSlice({
  name: "betSlip",
  initialState,
  reducers: {
    addPick(state, action: PayloadAction<BetSlipPick>) {
      state.betSlipArray.push(action.payload);
    },
    removePick(state, action: PayloadAction<BetSlipPick>) {},
    clearBetSlip(state) {
      state.betSlipArray = [];
    },
  },
});

export const { addPick, removePick, clearBetSlip } = betSlipSlice.actions;
export const selectFullBetSlip = (state: { betSlip: BetSlipState }) =>
  state.betSlip.betSlipArray;
export default betSlipSlice.reducer;
