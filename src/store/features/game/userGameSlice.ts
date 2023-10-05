import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserGameState {
  isUserTurn: boolean;
  userBalance: number;
  userBetTotal: number;
  userBetPlacedTotal: number;
  isUserBetPlaced: boolean;
  isFolded: boolean;
}

const initialState: UserGameState = {
  isUserTurn: true,
  userBalance: 1000,
  userBetTotal: 10,
  userBetPlacedTotal: 10,
  isUserBetPlaced: false,
  isFolded: false,
};

const userGameSlice = createSlice({
  name: "userGame",
  initialState,
  reducers: {
    setIsUserTurn(state, action: PayloadAction<boolean>) {
      state.isUserTurn = action.payload;
    },
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
    setIsBetPlaced(state, action: PayloadAction<boolean>) {
      state.isUserBetPlaced = action.payload;
    },
    setIsFolded(state, action: PayloadAction<boolean>) {
      state.isFolded = action.payload;
    },
  },
});

export const {
  setIsUserTurn,
  incrementUserBalanceByAmount,
  decrementUserBalanceByAmount,
  clearUserBalance,
  incrementUserBetByAmount,
  decrementUserBetByAmount,
  clearUserBetTotal,
  setUserPlacedBetTotal,
  setIsBetPlaced,
  setIsFolded,
} = userGameSlice.actions;

export const selectIsUserTurn = (state: { userGame: UserGameState }) =>
  state.userGame.isUserTurn;
export const selectUserBalance = (state: { userGame: UserGameState }) =>
  state.userGame.userBalance;
export const selectUserBetTotal = (state: { userGame: UserGameState }) =>
  state.userGame.userBetTotal;
export const selectUserBetPlacedTotal = (state: { userGame: UserGameState }) =>
  state.userGame.userBetPlacedTotal;
export const selectIsUserBetPlaced = (state: { userGame: UserGameState }) =>
  state.userGame.isUserBetPlaced;
export const selectIsFolded = (state: { userGame: UserGameState }) =>
  state.userGame.isFolded;

export default userGameSlice.reducer;
