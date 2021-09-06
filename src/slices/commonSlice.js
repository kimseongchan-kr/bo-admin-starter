import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "api/Api";

export const getExcelList = createAsyncThunk("common/getExcelList", async (data, { rejectWithValue }) => {
    try {
        const response = await getData(data.url, data.params);
        return response.data;
    } catch (error) {
        return rejectWithValue({ statusCode: error.response.status, ...error.response.data });
    }
});

const initialState = {
    status: "idle",
    statusCode: "",
    errorMsg: "",
    excelList: []
};

export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        clearExcelData: (state, { payload }) => {
            state.status = "idle";
            state.statusCode = "";
            state.errorMsg = "";
            state.excelList = [];
        }
    },
    extraReducers: {
        [getExcelList.pending]: (state, { payload }) => {
            state.status = "loading";
            state.excelList = [];
        },
        [getExcelList.fulfilled]: (state, { payload }) => {
            const result = payload && payload.data;
            state.status = "succeeded";
            state.excelList = result;
        },
        [getExcelList.rejected]: (state, { payload }) => {
            state.status = "failed";
            state.statusCode = payload && payload.statusCode ? payload.statusCode : null;
            state.errorMsg = payload && payload.message ? payload.message : "네트워크 에러";
        }
    }
});

export const { clearExcelData } = commonSlice.actions;

export const commonSelector = (state) => state.common;

export default commonSlice.reducer;
