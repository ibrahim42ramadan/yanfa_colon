import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// get all
import { apiLink } from "../../../api/asetss";
export const get_all = createAsyncThunk("Category_Slice/get_all", async () => {
  const response = await axios.get(`${apiLink}/departmentes`);
  console.log(response.data);
  return response.data;
});

// get one department

export const get_one = createAsyncThunk(
  "Category_Slice/get_one",
  async (id) => {
    const response = await axios.get(`${apiLink}/departmentes/${id} `);
    return response.data;
  }
);
const Category_Slice = createSlice({
  name: "Category_Slice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(get_all.fulfilled, (state, action) => {
      return (state = [...action.payload]);
    });

    builder.addCase(get_all.rejected, (state, action) => {
      alert(action.error);
    });
    builder.addCase(get_one.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(get_one.rejected, (state, action) => {
      console.log("reducer error" + action.error);
    });
  },
});
export const Category_Reducer = Category_Slice.reducer;
export default Category_Slice.actions;
