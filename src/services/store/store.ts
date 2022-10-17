import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../reducers/dataSlice";
import userSlice from "../reducers/userSlice";

const store = configureStore({
  reducer: {
    data: dataSlice,
    user: userSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;