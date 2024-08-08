import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { apiLink } from "../../../api/asetss";
const api_Link = apiLink;
// get all users
export const get_all_users = createAsyncThunk(
  "users_Slice/get_all_users ",
  async () => {
    const response = await axios.get(`${api_Link}/users`);
    return response.data;
  }
);
// create a new user
export const create_user = createAsyncThunk(
  "users_Slice/create_user",
  async (payload) => {
    const req = await axios
      .post(`${api_Link}/users`, payload)
      .then((response) => {
        console.log(response);
        if ((response.statusText = "Created")) {
          toast.success("created successfully");
        } else {
          toast.rejected("Failed to create user");
        }
        return req;
      });
  }
);
// delete user
export const delete_User = createAsyncThunk(
  "users_Slice/delete_User",
  async (id) => {
    await axios.delete(`${api_Link}/users/${id}`);
    toast.success(" Deleted user is  successfully");
  }
);

// get_users_by_type

export const get_users_by_type = createAsyncThunk(
  "users_Slice/get_users_by_type",
  async (type) => {
    const clean_type = type.toLowerCase().trim();
    const response = await axios.get(`${api_Link}/users?type=${clean_type}`);
    return response.data;
  }
);
const users_Slice = createSlice({
  name: "users_Slice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    // create a user
    builder.addCase(create_user.fulfilled, (state, action) => {
      toast.success("User created");
      return (state = action.payload);
    });
    builder.addCase(create_user.rejected, (state, action) => {
      return state;
    });
    // get all users
    builder.addCase(get_all_users.fulfilled, (state, action) => {
      return (state = action.payload);
    });
    builder.addCase(get_all_users.rejected, (state, action) => {
      return state;
    });
    // delete user
    builder.addCase(delete_User.fulfilled, (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    });
    builder.addCase(delete_User.rejected, (state, action) => {
      return state;
    });
    // get_users_by_type
    builder.addCase(get_users_by_type.fulfilled, (state, action) => {
      console.log(action.payload);

      return action.payload;
    });
  },
});
export const users_Reducer = users_Slice.reducer;
export default users_Slice.actions;
