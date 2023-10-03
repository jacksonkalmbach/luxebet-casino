import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PotState {
  potTotal: number;
}

const initialState: PotState = {
  potTotal: 0,
};

const potSlice = createSlice({
  name: "pot",
  initialState,
  reducers: {
    incrementPotByAmount(state, action: PayloadAction<number>) {
      state.potTotal += action.payload;
    },
    decrementPotByAmount(state, action: PayloadAction<number>) {
      state.potTotal -= action.payload;
    },
    clearPot(state) {
      state.potTotal = 0;
    },
  },
});

export const { incrementPotByAmount, decrementPotByAmount, clearPot } =
  potSlice.actions;
export const selectPotTotal = (state: { pot: PotState }) => state.pot.potTotal;
export default potSlice.reducer;
