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
  betSlipTotal: number;
}

const initialState: BetSlipState = {
  betSlipArray: [],
  betSlipTotal: 0,
};

const betSlipSlice = createSlice({
  name: "betSlip",
  initialState,
  reducers: {
    addPick(state, action: PayloadAction<BetSlipPick>) {
      state.betSlipArray.push(action.payload);
    },
    removePick(state, action: PayloadAction<BetSlipPick>) {
      const index = state.betSlipArray.findIndex(
        (pick) => pick.team === action.payload.team
      );
      state.betSlipArray.splice(index, 1);
    },
    clearBetSlip(state) {
      state.betSlipArray = [];
    },
    addToBetSlipTotal(state, action: PayloadAction<number>) {
      state.betSlipTotal += action.payload;
    },
    subtractFromBetSlipTotal(state, action: PayloadAction<number>) {
      state.betSlipTotal -= action.payload;
    },
  },
});

export const {
  addPick,
  removePick,
  clearBetSlip,
  addToBetSlipTotal,
  subtractFromBetSlipTotal,
} = betSlipSlice.actions;

export const selectFullBetSlip = (state: { betSlip: BetSlipState }) =>
  state.betSlip.betSlipArray;
export const selectBetSlipTotal = (state: { betSlip: BetSlipState }) =>
  state.betSlip.betSlipTotal;

export default betSlipSlice.reducer;
