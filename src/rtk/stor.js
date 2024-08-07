import { configureStore } from "@reduxjs/toolkit";
import { users_Reducer } from "./Redusers/users/users.slice";
import { Coursess_Reducer } from "./Redusers/Coursess/coursess.slice";
import { Category_Reducer } from "./Redusers/Caregory/Category.slice";
import { Search_Reducer } from "./Redusers/search";
import { Favorets_reducer } from "./Redusers/Favoretss/Favorets";

export const stor = configureStore({
  reducer: {
    Category: Category_Reducer,
    Coursess: Coursess_Reducer,
    users: users_Reducer,
    search: Search_Reducer,
    Favorets: Favorets_reducer,
  },
});
