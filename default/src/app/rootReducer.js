import { combineReducers } from "@reduxjs/toolkit";

import loginReducer from "slices/loginSlice";
import menuReducer from "slices/menuSlice";
import modalReducer from "slices/modalSlice";
import searchReducer from "slices/searchSlice";

import summaryReducer from "slices/summarySlice";
import exampleReducer from "slices/exampleSlice";

const rootReducer = combineReducers({
    menu: menuReducer,
    modal: modalReducer,
    login: loginReducer,
    search: searchReducer,
    summary: summaryReducer,
    example: exampleReducer
});

export default rootReducer;
