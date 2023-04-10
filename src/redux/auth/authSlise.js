import { createSlice } from "@reduxjs/toolkit";
import {register} from 'redux/auth/authOperation'
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user:{name: null, email: null},
    token: null,
    isLoggedIn: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {})
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload
      })
      .addCase(register.rejected, (state, action) => {})
      // .addCase(addContact.pending, (state, action) => {})
      // .addCase(addContact.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.items.push(action.payload);
      // })
      // .addCase(addContact.rejected, handleRejected)
      // .addCase(deleteContact.pending, handlePending)
      // .addCase(deleteContact.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   const index = state.items.findIndex(item => item.id === action.payload.id);
      //   state.items.splice(index, 1);
      // })
      // .addCase(deleteContact.rejected, handleRejected)
  }
});
export default authSlice.reducer;