import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
// 참고: https://github.com/rt2zz/redux-persist#storage-engines
import storage from "redux-persist/lib/storage"; // localStorage
// sessionStorage
// import storageSession from 'redux-persist/lib/storage/session'
import rootReducer from "app/rootReducer";

// 참고: https://github.com/rt2zz/redux-persist#blacklist--whitelist
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["menu", "login", "search"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }),
    devTools: process.env.NODE_ENV !== "production"
});
