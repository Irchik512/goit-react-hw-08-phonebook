import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://64299bbe5a40b82da4d6a8e2.mockapi.io/contacts";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", credentials );
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/logIn", credentials );
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
