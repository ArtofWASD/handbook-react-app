import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../utils/supabase";
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const { data: cars, error } = await supabase.from("cars").select('*, childСars:childCars(*)')  
  return cars
});


export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state: any) => {
        state.status = "Loading";
      })
      .addCase(fetchData.fulfilled, (state: any, action) => {
        state.status = "Resolved";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state: any, action) => {
        state.status = "False";
        state.error = action.payload;
      })

  },
});
export default dataSlice.reducer;