import { createSlice } from "@reduxjs/toolkit";
import {register, logIn, logOut, refresh} from 'redux/auth/operation'
const initialState = {
  user:{},
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {

      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, (state, action) => {})
      .addCase(logIn.pending, (state, action) => {})
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(logIn.rejected,{})
      .addCase(logOut.pending, (state, action) => {})
      .addCase(logOut.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = {};
      })
      .addCase(logOut.rejected,{})
      .addCase(refresh.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.user = action.payload;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.isRefreshing = false;
      })

  }
});
export const authReducer = authSlice.reducer;