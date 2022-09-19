import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Prestation } from "../../types";

interface ShoppingBasketState {
  items: Item[];
  totalPrice: number;
  totalDuration: number;
}

export interface Item {
  reference: string;
  title: string;
  price: number;
  duration: number;
  quantity: number;
}

export const initialState: ShoppingBasketState = {
  items: [],
  totalPrice: 0.0,
  totalDuration: 0
};

const shoppingBasketSlice = createSlice({
  name: "shoppingBasket",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Prestation>) => {
      const findItem = state.items.find(
        (item) => item.reference === action.payload.reference
      );

      if (findItem) {
        state.items = state.items.map((item) => item.reference === findItem.reference ? ({
          ...item,
          quantity: item.quantity + 1,
        }) : item);
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalPrice = state.items.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0);

      state.totalDuration = state.items.reduce((accumulator, item) => {
        return accumulator + item.duration * item.quantity;
      }, 0);
    },
    deleteItem: (state, action: PayloadAction<Prestation>) => {
      const findItem = state.items.find(
        (item) => item.reference === action.payload.reference
      );

      if (findItem) {
        if (findItem.quantity > 1) {
          state.items = state.items.map((item) => item.reference === findItem.reference ? ({
            ...item,
            quantity: item.quantity - 1,
          }) : item);
        } else {
          state.items = state.items.filter(
            (item) => item.reference !== findItem.reference
          );
        }
      }

      state.totalPrice = state.items.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0);

      state.totalDuration = state.items.reduce((accumulator, item) => {
        return accumulator + item.duration * item.quantity;
      }, 0);
    },
  },
});

export const { addItem, deleteItem } = shoppingBasketSlice.actions;

export const shoppingBasketSelector = (state: RootState) =>
  state.shoppingBasket;

export default shoppingBasketSlice.reducer;
