import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "api/Api";

export const getExampleList = createAsyncThunk("example/getExampleList", async (body, { rejectWithValue }) => {
    try {
        const response = await getData(body.url, body.params);
        return response.data;
    } catch (error) {
        return rejectWithValue({ statusCode: error.response.status, ...error.response.data });
    }
});

const initialState = {
    status: "idle",
    statusCode: "",
    errorMsg: "",
    dataList: [],
    total: 0,
    data: null,
    images: []
};

// Slice 작성 예제
export const exampleSlice = createSlice({
    name: "example",
    initialState,
    reducers: {
        clearError: (state) => {
            state.status = "finished";
            state.statusCode = "";
            state.errorMsg = "";
        },
        resetStates: () => initialState,
        setDataList: (state, { payload }) => {
            state.dataList = payload.dataList;
        },
        setData: (state, { payload }) => {
            state.data = payload.data;
        },
        setImages: (state, { payload }) => {
            state.images = payload.images;
        }
    },
    extraReducers: {
        [getExampleList.pending]: (state) => {
            state.status = "loading";
            state.statusCode = "";
            state.errorMsg = "";
        },
        [getExampleList.fulfilled]: (state, { payload }) => {
            state.status = "succeeded";
            state.dataList = payload.data;
        },
        [getExampleList.rejected]: (state, { payload }) => {
            state.status = "failed";
            state.statusCode = payload && payload.statusCode ? payload.statusCode : "";
            state.errorMsg = payload && payload.message ? payload.message : "네트워크 에러";
        }
    }
});

export const { setExample } = exampleSlice.actions;

export const exampleSelector = (state) => state.example;

export default exampleSlice.reducer;
