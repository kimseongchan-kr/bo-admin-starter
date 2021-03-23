import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "api/Api";

export const getList = createAsyncThunk("example/getExampleList", async (url, { rejectWithValue }) => {
    try {
        const response = await getData(url);
        console.log("api::", response);
        return response.data;
    } catch (error) {
        console.log("error::", error);
        return rejectWithValue(error.response.data);
    }
});

export const exampleSlice = createSlice({
    name: "example",
    initialState: {
        examle: "slice 기본 세팅",
        isLoading: false,
        hasErrors: false,
        errorMsg: "",
        dataList: []
    },
    reducers: {
        setExample: (state, { payload }) => {
            state.example = payload;
        }
    },
    extraReducers: {
        [getList.pending]: (state) => {
            state.isLoading = true;
            state.hasErrors = false;
            state.errorMsg = "";
        },
        [getList.fulfilled]: (state, { payload }) => {
            state.isLoading = true;
            state.dataList = payload.data;
        },
        [getList.rejected]: (state, { payload }) => {
            state.hasErrors = true;
            state.errorMsg = payload.message ? payload.message : "네트워크 에러";
        }
    }
});

export const { setMenu } = exampleSlice.actions;

export const exampleSelector = (state) => state.example;

export default exampleSlice.reducer;
