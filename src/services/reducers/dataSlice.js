import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDatabase, ref, child, get } from "firebase/database";

export const fetchData = createAsyncThunk("data/fetchData", async (_, { rejectWithValue }) => {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, `/`)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val()
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
});


export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducer: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.error = null;
      state.status = "Loading";
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.data = action.payload;
    },
    [fetchData.rejected]: (state, action) => {
      state.status = "False";
      state.error = action.payload;
    },
  },
});

export default dataSlice.reducer;
