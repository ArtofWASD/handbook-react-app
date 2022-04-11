import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../reducers/data-slice";

export const store = configureStore({
  reducer: {
    data: dataSlice
  },
});