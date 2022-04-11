import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Data } from "../../utils/Data";
export const fetchData = createAsyncThunk("data/fetchData", async (_, { rejectWithValue }) => {
  return fetch(Data)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Не пришёл ответ от сервера");
    })
    .then((data) => {
      if (data.success) {
        return data.data;
      }
      throw new Error("Данные не поступили");
    })
    .catch((error) => rejectWithValue(error.message));
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
