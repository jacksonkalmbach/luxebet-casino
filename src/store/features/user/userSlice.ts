import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  balance: number;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  username: "",
  balance: 1000,
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
      console.log(action.payload);
      state.balance -= action.payload;
    },
    setUserLogIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
    setUserName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
});

export const {
  incrementUserBalance,
  decrementUserBalance,
  setUserLogIn,
  setUserName,
} = userSlice.actions;

export const selectUserBalance = (state: { user: UserState }) =>
  state.user.balance;
export const selectUserLoginStatus = (state: { user: UserState }) =>
  state.user.isLoggedIn;
export const selectUsername = (state: { user: UserState }) =>
  state.user.username;

export default userSlice.reducer;
