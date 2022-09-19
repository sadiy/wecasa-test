import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Category } from "../../types";

interface UniverseState {
  error?: string;
  data?: ApiResponse;
}

interface ApiResponse {
  reference: string;
  title: string;
  categories: Category[];
}

export const initialState: UniverseState = {};

const universeSlice = createSlice({
  name: "universe",
  initialState,
  reducers: {
    setUniverse: (state, action: PayloadAction<ApiResponse>) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUniverse, setError } = universeSlice.actions;

export const universeSelector = (state: RootState) => state.universe;

export default universeSlice.reducer;
