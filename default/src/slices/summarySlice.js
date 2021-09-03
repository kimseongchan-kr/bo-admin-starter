import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, putData, deleteData } from "api/Api";

export const getSummaryList = createAsyncThunk("summary/getSummaryList", async (data, { rejectWithValue }) => {
    try {
        const response = await getData(data.url, data.params);
        return response.data;
    } catch (error) {
        return rejectWithValue({ statusCode: error.response.status, ...error.response.data });
    }
});

export const getSummaryInfo = createAsyncThunk("summary/getSummaryInfo", async (url, { rejectWithValue }) => {
    try {
        const response = await getData(url);
        return response.data;
    } catch (error) {
        return rejectWithValue({ statusCode: error.response.status, ...error.response.data });
    }
});

export const createSummaryInfo = createAsyncThunk("summary/createSummaryInfo", async (body, { rejectWithValue }) => {
    try {
        const response = await postData(body.url, body.fileYn ? body.fileYn : true, body.data);
        return response.data;
    } catch (error) {
        return rejectWithValue({ statusCode: error.response.status, ...error.response.data });
    }
});

export const updateSummaryInfo = createAsyncThunk("summary/updateSummaryInfo", async (body, { rejectWithValue }) => {
    try {
        const response = await putData(body.url, body.fileYn ? body.fileYn : true, body.data);
        return response.data;
    } catch (error) {
        return rejectWithValue({ statusCode: error.response.status, ...error.response.data });
    }
});

export const deleteSummaryInfo = createAsyncThunk("summary/deleteSummaryInfo", async (body, { rejectWithValue }) => {
    try {
        const response = await deleteData(body.url, body.data);
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

export const summarySlice = createSlice({
    name: "summary",
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
        [getSummaryList.pending]: (state) => {
            state.status = "loading";
            state.statusCode = "";
            state.errorMsg = "";
            state.dataList = [];
            state.total = "";
        },
        [getSummaryList.fulfilled]: (state, { payload }) => {
            state.status = "succeeded";
            state.dataList = payload.dataList;
            state.total = payload.total;
        },
        [getSummaryList.rejected]: (state, { payload }) => {
            state.status = "failed";
            state.statusCode = payload && payload.statusCode ? payload.statusCode : "";
            state.errorMsg = payload && payload.message ? payload.message : "네트워크 에러";
        },
        [getSummaryInfo.pending]: (state) => {
            state.status = "loading";
            state.statusCode = "";
            state.errorMsg = "";
            state.data = null;
            state.images = [];
        },
        [getSummaryInfo.fulfilled]: (state, { payload }) => {
            state.status = "succeeded";
            state.data = payload.data;
            state.images = payload.images;
        },
        [getSummaryInfo.rejected]: (state, { payload }) => {
            state.status = "failed";
            state.statusCode = payload && payload.statusCode ? payload.statusCode : "";
            state.errorMsg = payload && payload.message ? payload.message : "네트워크 에러";
        }
    }
});

export const { setImages, setDataList, resetStates, clearError } = summarySlice.actions;

export const summarySelector = (state) => state.summary;

export default summarySlice.reducer;
