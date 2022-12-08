import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../utils/supabase";

export const createUser = createAsyncThunk("user/createUser", async (userData:any) => {
    const { data, error } = await supabase.auth.admin.createUser({
        email: `${userData.email}`,
        password: `${userData.password}`,
        user_metadata: { name: `${userData.name}` }
      })
    return data;
  });


export const userSlice = createSlice({
    name: "User",
    initialState: {
        name: null,
        email: null,
        token: null,
        id: null,
        isLogin: false
    },
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.isLogin = true;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.isLogin = false;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(createUser.fulfilled, (state: any, action) => {
            
        })
    },
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;