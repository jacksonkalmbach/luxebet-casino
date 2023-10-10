import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  balance: number;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  username: "",
  balance: 500,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    incrementUserBalance(state, action: PayloadAction<number>) {
      state.balance += action.payload;
    },
    decrementUserBalance(state, action: PayloadAction<number>) {
      state.balance -= action.payload;
    },
  },
});

export const { incrementUserBalance, decrementUserBalance } = userSlice.actions;

export const selectUserBalance = (state: { user: UserState }) =>
  state.user.balance;

export default userSlice.reducer;
