import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../reducers/dataSlice.js";
import userSlice from "../reducers/userSlice.js";

const store = configureStore({
  reducer: {
    data: dataSlice,
    user: userSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;