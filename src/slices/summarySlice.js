import { createSlice } from "@reduxjs/toolkit";

export const summarySlice = createSlice({
    name: "summary",
    initialState: {
        open: false,
        modalId: "",
        modalStatus: "",
        modalData: { dessert: "Cupcake", fat: "3.7", calories: 305 },
        detailOpen: false
    },
    reducers: {
        setModal: (state, { payload }) => {
            state.open = payload.open;
            state.modalId = payload.modalId;
            state.modalStatus = payload.modalStatus;
        },
        setDetail: (state, { payload }) => {
            state.detailOpen = payload;
        }
    }
});

export const { setModal, setDetail } = summarySlice.actions;

export const summarySelector = (state) => state.summary;

export default summarySlice.reducer;
