import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postData } from "api/Api";
export const login = createAsyncThunk("login/login", async (body, { rejectWithValue }) => {
    try {
        const response = await postData(body.url, null, { body });
        console.log("api::", response);
        return response.data;
    } catch (error) {
        console.log("error::", error);
        return rejectWithValue(error.response.data);
    }
});

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLogin: true,
        hasErrors: false,
        userName: ""
    },
    reducers: {
        // Sample
        // Login API와 연결한 경우 삭제
        // login을 사용
        setIsLogin: (state) => {
            state.isLogin = true;
        },
        setLogOut: (state) => {
            state.isLogin = false;
            state.userName = "";
            localStorage.clear();
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, { payload }) => {
            state.isLogin = true;
        },
        [login.rejected]: (state) => {
            state.hasErrors = true;
        }
    }
});

export const { setIsLogin, setLogOut } = loginSlice.actions;

export const loginSelector = (state) => state.login;

export default loginSlice.reducer;
