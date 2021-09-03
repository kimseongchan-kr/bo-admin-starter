import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: "menu",
    initialState: {
        menu: "summary",
        menuTitle: "Dashboard",
        menuNum: 1
    },
    reducers: {
        setMenu: (state, { payload }) => {
            state.menu = payload.menu;
            state.menuTitle = payload.title;
            state.menuNum = payload.num;
        }
    }
});

export const { setMenu } = menuSlice.actions;

export const menuSelector = (state) => state.menu;

export default menuSlice.reducer;
