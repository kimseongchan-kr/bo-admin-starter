import { createSlice } from "@reduxjs/toolkit";

export const exampleSlice = createSlice({
    name: "example",
    initialState: {
        examle: "slice 기본 세팅"
    },
    reducers: {
        setExample: (state, { payload }) => {
            state.example = payload;
        }
    }
});

export const { setMenu } = exampleSlice.actions;

export const exampleSelector = (state) => state.example;

export default exampleSlice.reducer;
