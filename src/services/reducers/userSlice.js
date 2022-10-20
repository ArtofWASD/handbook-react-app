import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "User",
    initialState: {
        user:null,
        name: null,
        email: null,
        token: null,
        id: null,
        isLogin: false
    },
    reducers: {
        setUser(state, action) {
            // state.email = action.payload.email;
            // state.token = action.payload.token;
            // state.id = action.payload.id;
            // state.name = action.payload.displayName;
            // state.isLogin = true;
            state.user = action.payload
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.isLogin = false;
        },
    },
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;