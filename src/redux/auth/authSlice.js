import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout } from "./operations";

const initialState = {
  loading: false,
  user: {name: null, email: null},
  token: null,
  isLoggedIn: false
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
    // --------------------REGISTER----------------------
    .addCase(register.pending, (state) => {
      state.loading = true
    })
    .addCase(register.fulfilled, (state, action) => {
      state.loading = false
      state.token = action.payload.token
      state.user = action.payload.user
      state.isLoggedIn = true
    })
    .addCase(register.rejected, (state) => {
      state.loading = false
    })
    // ---------------------LOGIN------------------------
    .addCase(login.pending, (state) => {
      state.loading = true
    })
    .addCase(login.fulfilled, (state, action) => {
      state.loading = false
      state.token = action.payload.token
      state.user = action.payload.user
      state.isLoggedIn = true
    })
    .addCase(login.rejected, (state) => {
      state.loading = false
    })
    // ---------------------LOGOUT------------------------
    .addCase(logout.fulfilled, () => initialState)
  }
});


export const authReducer = authSlice.reducer;