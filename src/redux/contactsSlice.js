import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "@reduxjs/toolkit";

import { fetchContacts } from "./operations.js";
// import {
//   getContactWithLocaleStorage,
//   setContactToLocaleStorage,
// } from "../methods/methods";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  // reducers: {
  //   addContact: {
  //     reducer: (state, action) => {
  //       state.push(action.payload);
  //       setContactToLocaleStorage(state);
  //     },
  //     prepare: (name, number) => {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name,
  //           number,
  //         },
  //       };
  //     },
  //   },
  //   removeContact: (state, action) => {
  //     setContactToLocaleStorage(action.payload);
  //     return action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
