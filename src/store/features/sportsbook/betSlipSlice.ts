import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BetSlipPick = {
  status?: string;
  team: string;
  price: number;
  point?: number;
  betType: string;
  datePlaced?: string;
};

type Wagers = Record<string, number>;

interface BetSlipState {
  betSlipObject: Record<string, BetSlipPick>;
  betSlipTotal: number;
  placedBets: BetSlipPick[];
}

const initialState: BetSlipState = {
  betSlipObject: {},
  betSlipTotal: 0,
  placedBets: [],
};

const betSlipSlice = createSlice({
  name: "betSlip",
  initialState,
  reducers: {
    addPick(state, action: PayloadAction<BetSlipPick>) {
      const { team, price, betType } = action.payload;
      const key = `${team}-${betType}-${price}`;
      state.betSlipObject[key] = action.payload;
    },
    removePick(state, action: PayloadAction<BetSlipPick>) {
      const { team, price, betType } = action.payload;
      const key = `${team}-${betType}-${price}`;
      delete state.betSlipObject[key];
    },
    clearBetSlip(state) {
      state.betSlipObject = {};
    },
    addToBetSlipTotal(state, action: PayloadAction<number>) {
      state.betSlipTotal += action.payload;
    },
    subtractFromBetSlipTotal(state, action: PayloadAction<number>) {
      state.betSlipTotal -= action.payload;
    },
    placeBet(
      state,
      action: PayloadAction<{ picks: BetSlipPick[]; wagers: Wagers }>
    ) {
      const currentDate = new Date().toLocaleString();

      const { picks, wagers } = action.payload;
      console.log(wagers);

      picks.forEach((pick: BetSlipPick) => {
        const { team, betType, price } = pick;
        const key = `${team}-${betType}-${price}`;
        const pickWithDate = {
          ...pick,
          status: "Open",
          datePlaced: currentDate,
          wager: wagers[key],
        };
        state.placedBets.push(pickWithDate);
      });
    },
  },
});

export const {
  addPick,
  removePick,
  clearBetSlip,
  addToBetSlipTotal,
  subtractFromBetSlipTotal,
  placeBet,
} = betSlipSlice.actions;

export const selectFullBetSlip = (state: { betSlip: BetSlipState }) =>
  Object.values(state.betSlip.betSlipObject);
export const selectBetSlipObject = (state: { betSlip: BetSlipState }) =>
  state.betSlip.betSlipObject;
export const selectBetSlipTotal = (state: { betSlip: BetSlipState }) =>
  state.betSlip.betSlipTotal;
export const selectPlacedBetsObject = (state: { betSlip: BetSlipState }) =>
  state.betSlip.placedBets;

export default betSlipSlice.reducer;
