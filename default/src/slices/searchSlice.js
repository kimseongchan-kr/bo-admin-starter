import { createSlice } from "@reduxjs/toolkit";
import { format } from "utils/CommonFunction";

const today = format("일간", new Date());

export const initialState = {
    loading: false,
    hasErrors: false,

    useYn: "전체",
    gender: "전체",

    searchType: "전체",
    searchKeyword: "",

    sortNm: "",
    sortOrder: "asc",

    pageNumber: 1,
    pageShow: 10,

    term: "일간",
    startDate: today,
    endDate: today,

    //filter
    cupcake: true,
    cake: true,
    cookie: true,
    macaroon: true,
    example1: false,
    example2: false,
    example3: true,
    example4: false
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setPage: (state, { payload }) => {
            state.pageNumber = payload.pageNumber;
            state.pageShow = payload.pageShow;
        },
        setSort: (state, { payload }) => {
            state.sortNm = payload.sortNm;
            state.sortOrder = payload.sortOrder;
        },
        setSearchFilter: (state, { payload }) => {
            state[payload.type] = payload.value;
        },
        setDate: (state, { payload }) => {
            state[payload.type] = payload.date;
        },
        setFilter: (state, { payload }) => {
            state[payload.name] = payload.checked;
        },
        setSearchBox: (state, { payload }) => {
            state.searchBox = payload;
        },
        reset: (state) => {
            state.gender = "전체";
            state.useYn = "전체";

            state.searchType = "전체";
            state.searchKeyword = "";

            state.sortNm = "";
            state.sortOrder = "desc";

            state.pageNumber = 1;
            state.pageShow = 10;

            state.term = "일간";
            state.startDate = today;
            state.endDate = today;
        }
    }
});

export const { setSort, setPage, setSearchFilter, setDate, setFilter, setSearchBox, reset } = searchSlice.actions;

export const searchSelector = (state) => state.search;

export default searchSlice.reducer;
