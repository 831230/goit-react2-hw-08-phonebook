import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const contactsInitialState = JSON.parse(localStorage.getItem('contacts')) || [];

console.log(contactsInitialState);

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
        localStorage.setItem('contacts', JSON.stringify(action.payload))
      },
      prepare: (name, number) => {
        return {
          payload: {
            id: nanoid(),
            name,
            number
          }
        }
      }
    }
  }
});

export const {addContact} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;