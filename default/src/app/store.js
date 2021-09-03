import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "app/rootReducer";

const reducer = (state, action) => {
    // 로그아웃할 때 모든 state 초기화하기
    if (action.type === "login/setLogOut") {
        state = undefined;
    }

    return rootReducer(state, action);
};

export default configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production"
});
