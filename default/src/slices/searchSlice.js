import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    useYn: "",
    gender: "",
    dessert: "",
    sweets: "",
    food: "",
    drink: "",

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
        setSearchFilter: (state, { payload }) => {
            state[payload.type] = payload.value;
        },
        setSearchFilters: (state, { payload }) => {
            return { ...state, ...payload };
        },
        reset: () => initialState
    }
});

export const { setSearchFilter, setSearchFilters, reset } = searchSlice.actions;

export const searchSelector = (state) => state.search;

export default searchSlice.reducer;
