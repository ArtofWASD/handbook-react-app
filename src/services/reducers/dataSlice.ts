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
      .textSearch("title", `${query}`, { type: "websearch" });
    return posts;
  },
);

export const getCurrentPost = createAsyncThunk(
  "data/getCurrentPost",
  async (postId) => {
    let { data: posts } = await supabase.from("posts").select(`${postId}`);
    return posts;
  },
);

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    posts: [],
    currentPost: null,
    postsFetchStatus: '',
  },
  reducers: {
    clearPostsArray(state) {
      state.posts = [];
    },
    clearCurrentPost(state) {
      state.currentPost = null;
    }
  },
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
      .addCase(fetchSearchPostQuery.pending, (state: any) => {
        state.postsFetchStatus = "Loading";
      })
      .addCase(fetchSearchPostQuery.fulfilled, (state: any, action) => {
        state.postsFetchStatus = "Resolved";
        state.posts = action.payload;
      })
      .addCase(fetchSearchPostQuery.rejected, (state: any, action) => {
        state.postsFetchStatus = "Error";
        state.error = action.payload;
      })
      .addCase(getCurrentPost.fulfilled, (state: any, action) => {
        
      state.currentPost = action.payload;
    })
  },
});
export const { clearPostsArray, clearCurrentPost } = dataSlice.actions;
export default dataSlice.reducer;
