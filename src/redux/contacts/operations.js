import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
    return response.data; 
  } catch (e) {
  return thunkAPI.rejectWithValue(e.message);
}
});

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact );
      return response.data
      } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactById = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId, updateContact, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`, updateContact);
      return response.data;
      } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const updateContactById = createAsyncThunk(
  "contacts/updateContacts",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts/${contactId}`);
      return response.data;
      } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

