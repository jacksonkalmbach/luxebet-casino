import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserGameState {
  userBalance: number;
  userBetTotal: number;
  userBetPlacedTotal: number;
}

const initialState: UserGameState = {
  userBalance: 1000,
  userBetTotal: 10,
  userBetPlacedTotal: 0,
};

const userGameSlice = createSlice({
  name: "userGame",
  initialState,
  reducers: {
    incrementUserBalanceByAmount(state, action: PayloadAction<number>) {
      state.userBalance += action.payload;
    },
    decrementUserBalanceByAmount(state, action: PayloadAction<number>) {
      state.userBalance -= action.payload;
    },
    clearUserBalance(state) {
      state.userBalance = 0;
    },
    incrementUserBetByAmount(state, action: PayloadAction<number>) {
      state.userBetTotal += action.payload;
    },
    decrementUserBetByAmount(state, action: PayloadAction<number>) {
      state.userBetTotal -= action.payload;
    },
    clearUserBetTotal(state) {
      state.userBetTotal = 0;
    },
    setUserPlacedBetTotal(state, action: PayloadAction<number>) {
      state.userBetPlacedTotal = action.payload;
    },
  },
});

export const {
  incrementUserBalanceByAmount,
  decrementUserBalanceByAmount,
  clearUserBalance,
  incrementUserBetByAmount,
  decrementUserBetByAmount,
  clearUserBetTotal,
  setUserPlacedBetTotal,
} = userGameSlice.actions;

export const selectUserBalance = (state: { userGame: UserGameState }) =>
  state.userGame.userBalance;
export const selectUserBetTotal = (state: { userGame: UserGameState }) =>
  state.userGame.userBetTotal;
export const selectUserBetPlacedTotal = (state: { userGame: UserGameState }) =>
  state.userGame.userBetPlacedTotal;

export default userGameSlice.reducer;
