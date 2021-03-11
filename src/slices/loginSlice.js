import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postData } from "api/Api";

export const fetchLogin = createAsyncThunk("login/fetchLogin", async (body, thunkAPI) => {
    try {
        const response = await postData(body.url, null, { body });
        return response;
    } catch (error) {
        return error.data.payload;
    }
});

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLogin: true,
        userName: "",
        userEmail: "",
        userTel: "",
        position: ""
    },
    reducers: {
        setLogOut: (state, { payload }) => {
            state.isLogin = payload.login;
            state.userName = payload.userName;
            localStorage.clear();
        }
    },
    extraReducers: {
        [fetchLogin.pending]: (state) => {
            state.loading = true;
        },
        [fetchLogin.fulfilled]: (state, { payload }) => {
            state.isLogin = false;
            state.loading = false;
            state.hasErrors = false;
        },
        [fetchLogin.rejected]: (state) => {
            state.loading = false;
            state.hasErrors = true;
        }
    }
});

export const { setIsLogin, setLogOut } = loginSlice.actions;

export const loginSelector = (state) => state.login;

export default loginSlice.reducer;
