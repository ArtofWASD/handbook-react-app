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
  async (postName: any) => {
    let { data: posts } = await supabase
      .from("posts")
      .select("*")
      .eq("title", `${postName}`);
    return posts;
  },
);
export const getGroupPosts = createAsyncThunk(
  "data/getGroupPosts",
  async (query: any) => {    
    let { data: posts, error } = await supabase
      .from("posts")
      .select("*")
      .textSearch("parentPartsGroupIds", `${query}`, { type: "websearch" })
    return posts;
  },
);

export const dataSlice: any = createSlice({
  name: "data",
  initialState: {
    data: [],
    posts: [],
    groupPosts:[],
    currentPost: null,
    isCurrentPostLoad: "",
    isGroupPostLoad:"",
    postsFetchStatus: "",
  },
  reducers: {
    clearPostsArray(state) {
      state.posts = [];
    },
    clearCurrentPost(state) {
      state.currentPost = null;
    },
    clearGroupPostsArray(state) {
      state.groupPosts = []
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
        state.isCurrentPostLoad = "Success"
        state.currentPost = action.payload;
      })
      .addCase(getGroupPosts.pending, (state: any) => {
        state.isGroupPostLoad = "Loading"
      })
      .addCase(getGroupPosts.fulfilled, (state: any, action) => {
        state.isGroupPostLoad = 'Success'
        state.groupPosts = action.payload;
      });
  },
});
export const { clearPostsArray, clearCurrentPost, clearGroupPostsArray } = dataSlice.actions;
export default dataSlice.reducer;
