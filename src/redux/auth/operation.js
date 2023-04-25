import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = (token)=>{ 
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => { 
axios.defaults.headers.common.Authorization = null;
};

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const {data} = await axios.post("/users/signup", newUser );
      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (user, thunkAPI) => {
    try {
      const {data} =  await axios.post("/users/login", user);
      setAuthHeader(data.token);
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
      await axios.post("/users/logout");
      clearAuthHeader();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentToken = state.auth.token;
    if (currentToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    };
    setAuthHeader(currentToken);
    try {
      const response = await axios.get(`/users/current`);
      return response.data;
      } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);