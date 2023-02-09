import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../utils/supabase";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const { data: cars } = await supabase
    .from("cars")
    .select(
      "*, childCars(*, engines(*, engine(*)), gearboxes(*, gearbox(*)), series(*, shortWeelbase(*), mediumWeelbase(*), longWeelbase(*)), partsGroup(part(*)))",
    )
    .order("name", { foreignTable: "childCars" });
  return cars;
});

export const fetchTreeData = createAsyncThunk(
  "data/fetchTreeData",
  async () => {
    const { data: cars } = await supabase
      .from("cars")
      .select("id, name, childCars(id, name, partsGroup(id, part(id, name)))");
    return cars;
  },
);

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
  async (postName: string) => {
    let { data: posts } = await supabase
      .from("posts")
      .select("*")
      .eq("title", `${postName}`);
    return posts;
  },
);

export const getGroupPosts = createAsyncThunk(
  "data/getGroupPosts",
  async (query: string) => {
    let { data: posts } = await supabase
      .from("posts")
      .select("*")
      .textSearch("parentPartsGroupIds", `${query}`, { type: "websearch" });
    return posts;
  },
);

export const getEngineInfo = createAsyncThunk(
  "data/getEngineInfo",
  async (engineInfo: string) => {
    if (engineInfo !== null) {
      let { data: engineInformation } = await supabase
        .from("engineInformation")
        .select("*")
        .eq("id", `${engineInfo}`);
      return engineInformation;
    }
  },
);

type TCarInfo = {
  engineInfo: {
    id: string;
    infoId: string;
    name: string;
    type: string;
  };
};

type TPartsGroup = {
  part: {
    id: string;
    name: string;
    imgUrl: string;
    label: string;
  };
};

type TchildCars = {
  id: string;
  name: string;
  year: string;
  imgUrl: string;
  parent_id: string;
  partsGroup: Array<TPartsGroup>;
  carInfo: Array<TCarInfo>;
};

type TData = {
  id: string;
  name: string;
  year: string;
  imgUrl: string;
  childCars: Array<TchildCars>;
};

type TPostsData = {
  id: string;
  title: string;
  text: string;
  imgUrl: string;
  parentPartsGroupIds: string;
};

type TTreeData = any;

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [] as Array<TData> | null,
    posts: [] as Array<TPostsData> | null,
    groupPosts: [] as Array<TPostsData> | null,
    currentPost: [] as Array<TPostsData> | null,
    engineInfo: [] as Array<any> | null | undefined,
    treeData: [] as any,
    fetchDataStatus: "",
    isCurrentPostLoad: "",
    isGroupPostLoad: "",
    postsFetchStatus: "",
    getEngineInfoStatus: "",
  },
  reducers: {
    clearPostsArray(state) {
      state.posts = [];
    },
    clearCurrentPost(state) {
      state.currentPost = null;
    },
    clearGroupPostsArray(state) {
      state.groupPosts = [];
    },
    clearEngineInfo(state) {
      state.engineInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.fetchDataStatus = "Loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.fetchDataStatus = "Resolved";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.fetchDataStatus = "Error";
      })
      .addCase(fetchSearchPostQuery.pending, (state) => {
        state.postsFetchStatus = "Loading";
      })
      .addCase(fetchSearchPostQuery.fulfilled, (state, action) => {
        state.postsFetchStatus = "Resolved";
        state.posts = action.payload;
      })
      .addCase(fetchSearchPostQuery.rejected, (state) => {
        state.postsFetchStatus = "Error";
      })
      .addCase(getCurrentPost.fulfilled, (state, action) => {
        state.isCurrentPostLoad = "Success";
        state.currentPost = action.payload;
      })
      .addCase(getGroupPosts.pending, (state) => {
        state.isGroupPostLoad = "Loading";
      })
      .addCase(getGroupPosts.fulfilled, (state, action) => {
        state.isGroupPostLoad = "Success";
        state.groupPosts = action.payload;
      })
      .addCase(getEngineInfo.pending, (state) => {
        state.getEngineInfoStatus = "Loading";
      })
      .addCase(getEngineInfo.fulfilled, (state, action) => {
        state.getEngineInfoStatus = "Success";
        state.engineInfo = action.payload;
      })
      .addCase(fetchTreeData.fulfilled, (state, action) => {
        state.treeData = action.payload;
      });
  },
});
export const {
  clearPostsArray,
  clearCurrentPost,
  clearGroupPostsArray,
  clearEngineInfo,
} = dataSlice.actions;
export default dataSlice.reducer;
