import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { getContactWithLocaleStorage, setContactToLocaleStorage } from "../methods/methods";

const contactsInitialState = getContactWithLocaleStorage();

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
        setContactToLocaleStorage(state)
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
    },
    removeContact: (state, action) => {
      setContactToLocaleStorage(action.payload);
      return action.payload
    }
  }
});

export const {addContact, removeContact} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;