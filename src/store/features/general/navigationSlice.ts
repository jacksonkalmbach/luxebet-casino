import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MobileNavState {
  showMobileNav: boolean;
}

const initialState: MobileNavState = {
  showMobileNav: false,
};

const mobileNavSlice = createSlice({
  name: "mobileNav",
  initialState,
  reducers: {
    setShowMobileNav(state, action: PayloadAction<boolean>) {
      state.showMobileNav = action.payload;
    },
  },
});

export const { setShowMobileNav } = mobileNavSlice.actions;

export const selectShowMobileNav = (state: { mobileNav: MobileNavState }) =>
  state.mobileNav.showMobileNav;

export default mobileNavSlice.reducer;
