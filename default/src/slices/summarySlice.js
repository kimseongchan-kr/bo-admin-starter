import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "api/Api";

export const getList = createAsyncThunk("summary/getSummaryList", async (url, { rejectWithValue }) => {
    try {
        const response = await getData(url);
        console.log("api::", response);
        return response.data;
    } catch (error) {
        console.log("error::", error);
        return rejectWithValue(error.response.data);
    }
});

export const summarySlice = createSlice({
    name: "summary",
    initialState: {
        summary: "summary slice", // Sample
        isLoading: false,
        hasErrors: false,
        errorMsg: "",
        dataList: []
    },
    reducers: {
        // Sample
        setSummary: (state, { payload }) => {
            state.summary = payload;
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
            state.errorMsg = payload && payload.message ? payload.message : "네트워크 에러";
        }
    }
});

export const { setSummary } = summarySlice.actions;

export const summarySelector = (state) => state.summary;

export default summarySlice.reducer;
