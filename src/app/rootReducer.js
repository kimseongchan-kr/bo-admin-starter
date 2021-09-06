import { combineReducers } from "@reduxjs/toolkit";

import loginReducer from "slices/loginSlice";
import menuReducer from "slices/menuSlice";
import modalReducer from "slices/modalSlice";
import searchReducer from "slices/searchSlice";

import commonReducer from "slices/commonSlice";
import summaryReducer from "slices/summarySlice";
import exampleReducer from "slices/exampleSlice";

const rootReducer = combineReducers({
    login: loginReducer,
    menu: menuReducer,
    modal: modalReducer,
    search: searchReducer,

    common: commonReducer,
    summary: summaryReducer,
    example: exampleReducer
});

export default rootReducer;
