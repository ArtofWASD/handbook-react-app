import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createClient } from '@supabase/supabase-js'
import { supabaseService_role_key, supabaseUrl } from "../../utils/supabase";

const supabase = createClient(supabaseUrl, supabaseService_role_key)

export const createUser = createAsyncThunk("user/createUser", async (userData:{email:string, password:string, name:string}) => {
    const { data } = await supabase.auth.admin.createUser({
        email: `${userData.email}`,
        password: `${userData.password}`,
        user_metadata: { name: `${userData.name}` }
      })
    return data;
  });

export const sighInUser = createAsyncThunk('user/signInUser', async (signInData:{email:string, password:string}) => {
    const { data } = await supabase.auth.signInWithPassword({
        email: `${signInData.email}`,
        password: `${signInData.password}`
    })
    return data
})

export const userSlice = createSlice({
    name: "User",
    initialState: {
        data:null,
        isLogin: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(sighInUser.fulfilled, (state:any, action) => {
                state.data = action.payload;
                state.isLogin = true;
        })
    },
})

// export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;