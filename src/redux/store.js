import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";

const store = configureStore({
  reducer: {
    contacts : contactsReducer,
    filter: ""
  }
});

export default store;