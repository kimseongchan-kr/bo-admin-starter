import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: "menu",
    initialState: {
        menu: "",
        menuTitle: "",
        menuNum: 1
    },
    reducers: {
        setMenu: (state, { payload }) => {
            state.menu = payload.menu;
            state.menuTitle = payload.menuTitle;
            state.menuNum = payload.menuNum;
        }
    }
});

export const { setMenu } = menuSlice.actions;

export const menuSelector = (state) => state.menu;

export default menuSlice.reducer;
