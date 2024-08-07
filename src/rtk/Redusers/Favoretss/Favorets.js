import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const AddCours_to_favorets = createAsyncThunk(
  "Favorets_Coursess_silce/AddCours_to_favorets",
  async (course) => {
    const response = await axios.post("http://localhost:4000/favorets", course);
    return response.data;
  }
);
export const Favorets_Coursess_silce = createSlice({
  name: "Favorets_Coursess_silce",
  initialState: [],
  reducers: {},

  extraReducers: (bulder) => {
    bulder.addCase(AddCours_to_favorets.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
    bulder.addCase(AddCours_to_favorets.rejected, (state, action) => {
      console.log("Error in adding course to favorets: ", action.error.message);
    });
  },
});

export const Favorets_reducer = Favorets_Coursess_silce.reducer;
export default Favorets_Coursess_silce.actions;
