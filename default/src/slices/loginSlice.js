import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLogin: true,
        hasErrors: false,
        data: ""
    },
    reducers: {
        setIsLogin: (state) => {
            state.isLogin = true;
        },
        setLogOut: (state) => {
            state.isLogin = false;
            state.userName = "";
            localStorage.clear();
        }
    },
    extraReducers: {}
});

export const { setIsLogin, setLogOut } = loginSlice.actions;

export const loginSelector = (state) => state.login;

export default loginSlice.reducer;
