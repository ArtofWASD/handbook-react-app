import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../utils/supabase";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const { data: cars } = await supabase
    .from("cars")
    .select("*, childCars(*, partsGroup(part(*)))")
    .order("name", { foreignTable: "childCars" });
  return cars;
});

export const fetchSearchPostQuery = createAsyncThunk(
  "data/fetchSearchPostQuery",
  async (query: string) => {    
    const { data: posts } = await supabase
      .from("posts")
      .select("*")
      .textSearch("title", `${query}`, {type: "websearch"});
    return posts;
  },
);
export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    posts: [],
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
        state.status = "Error";
        state.error = action.payload;
      })
      .addCase(fetchSearchPostQuery.fulfilled, (state: any, action) => {
        state.postsFetchStatus = "Resolved";
        state.posts = action.payload;
      })
      .addCase(fetchSearchPostQuery.rejected, (state: any, action) => {
        state.postsFetchStatus = "Error";
        state.error = action.payload;
      });
  },
});
export default dataSlice.reducer;
