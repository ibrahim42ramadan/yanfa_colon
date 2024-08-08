import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiLink } from "../../../api/asetss";

// get search values
export const get_search_values = createAsyncThunk(
  "Search_Slice/searchValues",
  async (searchValue) => {
    // fetch data from API
    const response = await axios.get(
      `${apiLink}/courcess?courseName_like=${searchValue}`
    );
    return response.data;
  }
);
export const Sreach_slice = createSlice({
  name: "Search_Slice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(get_search_values.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(get_search_values.rejected, (state, action) => {
      console.log(
        "FROM REDUCER" + "Error in fetching search values: ",
        action.error
      );
    });
  },
});
export const Search_Reducer = Sreach_slice.reducer;
export default Sreach_slice.actions;
