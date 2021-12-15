import { combineReducers } from "@reduxjs/toolkit";

import loginReducer from "slices/loginSlice";
import menuReducer from "slices/menuSlice";
import modalReducer from "slices/modalSlice";
import searchReducer from "slices/searchSlice";

const rootReducer = combineReducers({
    login: loginReducer,
    menu: menuReducer,
    modal: modalReducer,
    search: searchReducer
});

export default rootReducer;
