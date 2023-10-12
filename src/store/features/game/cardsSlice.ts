import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CardSuit = "H" | "D" | "C" | "S";
type CardValue = string | number;

interface CardType {
  suit: CardSuit;
  value: CardValue;
}

interface CardsState {
  cardsOnTable: {
    suit: CardSuit;
    value: CardValue;
  }[];
  userHand: {
    suit: CardSuit;
    value: CardValue;
  }[];
}

const initialState: CardsState = {
  cardsOnTable: [],
  userHand: [
    { suit: "H", value: 2 },
    { suit: "S", value: 8 },
  ],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<CardType>) {
      state.cardsOnTable.push(action.payload);
    },
    clearCards(state) {
      state.cardsOnTable = [];
    },
    dealUserHand(state, action: PayloadAction<CardType>) {
      state.userHand.push(action.payload);
    },
    clearUserHand(state) {
      state.userHand = [];
    },
  },
});

export const { addCard, clearCards, clearUserHand } = cardsSlice.actions;
export const selectCardsOnTable = (state: { cards: CardsState }): CardType[] =>
  state.cards.cardsOnTable;
export const selectUserHand = (state: { cards: CardsState }): CardType[] =>
  state.cards.userHand;
export default cardsSlice.reducer;
