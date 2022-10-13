import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../reducers/dataSlice";
import userSlice from "../reducers/userSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    user: userSlice
  },
});