import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { apiLink } from "../../../api/asetss";
// Get_all_COURSES
export const get_all = createAsyncThunk("Coursess_Slice/get_all", async () => {
  const response = await axios.get("http://localhost:4000/Courcess");
  return response.data;
});
// get on courcs

export const get_one = createAsyncThunk(
  "Coursess_Slice/get_one",
  async (id) => {
    const response = await axios.get(`${apiLink}/Courcess/${id}`);
    return response.data;
  }
);
// Add cours
export const add_cours = createAsyncThunk(
  "Coursess_Slice/add_cours",
  async (payload) => {
    const response = await axios.post(`${apiLink}/Courcess`, payload);
    if (response.statusCode === 200 || response.statusCode === 201)
      alert("Success");
    return response.data;
  }
);
// edeit cours

export const edit_cours = createAsyncThunk(
  "Coursess_Slice/edit_cours",
  async (payload) => {
    console.log(payload);
    const response = await axios.put(
      `${apiLink}s/Courcess/${payload.id}`,
      payload.data
    );

    if (response.statusText === "OK" && response.data.isfavoret) {
      toast.success("🎈" + "Course add to favorets successfully");
    } else {
      toast.error("💡" + "Course removed from favorets");
    }

    return response.data;
  }
);

const Coursess_Slice = createSlice({
  name: "Coursess_Slice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(get_all.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(get_all.rejected, (state, action) => {
      console.error("Failed to fetch courses:", action.error);
    });
    builder.addCase(get_one.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(add_cours.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
  },
});

export const Coursess_Reducer = Coursess_Slice.reducer;
export default Coursess_Slice.actions;
