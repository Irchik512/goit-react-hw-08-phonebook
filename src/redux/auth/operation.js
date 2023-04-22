import {registration, refreshing, logining, logout, token} from "api/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const data = await registration(credentials);
      token.setAuthHeader(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (credentials, thunkAPI) => {
    try {
      const data =  await logining(credentials);
      console.log(data);
      token.setAuthHeader(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const logOut = createAsyncThunk(
  "auth/logOut",
  async (credentials, thunkAPI) => {
    try {
      logout();
      token.clearAuthHeader();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      console.log(state);
      const currentToken = state.auth.token;
      if (token === null) {
        return state.auth.user;
      };
      token.setAuthHeader(currentToken);

      return await refreshing();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);