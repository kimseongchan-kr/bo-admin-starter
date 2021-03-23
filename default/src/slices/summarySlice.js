import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getData } from "api/Api";

export const getList = createAsyncThunk("summary/getSummaryList", async (url, { rejectWithValue }) => {
    try {
        const response = await getData(url);
        console.log(response);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const summarySlice = createSlice({
    name: "summary",
    initialState: {
        summary: "summary slice",
        isLoading: false,
        hasErrors: false,
        errorMsg: "",
        dataList: []
    },
    reducers: {
        setSummary: (state, { payload }) => {
            state.summary = payload;
        }
    },
    extraReducers: {
        [getList.pending]: (state) => {
            state.isLoading = true;
        },
        [getList.fulfilled]: (state, { payload }) => {
            state.isLoading = true;
            state.dataList = payload.data;
        },
        [getList.rejected]: (state, { payload }) => {
            state.hasErrors = true;
            state.errorMsg = payload;
        }
    }
});

export const { setSummary } = summarySlice.actions;

export const summarySelector = (state) => state.summary;

export default summarySlice.reducer;
