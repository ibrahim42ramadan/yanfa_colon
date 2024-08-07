import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const GET_user = createAsyncThunk("");
const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {},
  reducers: {},
  extraReducers: (bulder) => {
    bulder.addCase(GET_user.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});
