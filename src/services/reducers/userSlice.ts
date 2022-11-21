import { createSlice } from "@reduxjs/toolkit";

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
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;