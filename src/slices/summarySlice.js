import { createSlice } from "@reduxjs/toolkit";

export const summarySlice = createSlice({
    name: "summary",
    initialState: {
        summary: "summary slice"
    },
    reducers: {
        setSummary: (state, { payload }) => {
            state.summary = payload;
        }
    }
});

export const { setSummary } = summarySlice.actions;

export const summarySelector = (state) => state.summary;

export default summarySlice.reducer;
