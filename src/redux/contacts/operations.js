import { createAsyncThunk } from "@reduxjs/toolkit";
import { postContact, getContacts,deleteContact } from 'api/auth'


export const getAllContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
  return getContacts();
} catch (e) {
  return thunkAPI.rejectWithValue(e.message);
}
});

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async (newContact, thunkAPI) => {
    try {
      return postContact(newContact);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactById = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId, thunkAPI) => {
    try {
      return deleteContact(contactId);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

