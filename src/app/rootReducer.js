import { combineReducers } from "@reduxjs/toolkit";

import loginReducer from "slices/loginSlice";
import menuReducer from "slices/menuSlice";
import searchReducer from "slices/searchSlice";

import summaryReducer from "slices/summarySlice";
import exampleReducer from "slices/exampleSlice";

const rootReducer = combineReducers({
    menu: menuReducer,
    login: loginReducer,
    search: searchReducer,
    summary: summaryReducer,
    example: exampleReducer
});

export default rootReducer;
