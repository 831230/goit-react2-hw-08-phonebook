import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action) {
      return action.payload.filter;
    },
    clearFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
