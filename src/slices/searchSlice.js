import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    useYn: "",
    gender: "",

    searchType: "",
    searchKeyword: "",

    sort: "latest",
    pageNumber: 1,
    pageShow: 10,

    term: "daily",
    startDate: null,
    endDate: null
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setPage: (state, { payload }) => {
            state.pageNumber = payload.page;
            state.pageShow = payload.pageShow;
        },
        setSearchFilter: (state, { payload }) => {
            state[payload.type] = payload.value;
        },
        reset: () => initialState
    }
});

export const { setPage, setSearchFilter, reset } = searchSlice.actions;

export const searchSelector = (state) => state.search;

export default searchSlice.reducer;
