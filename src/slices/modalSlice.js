import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        open: false,
        modalId: "",
        modalStatus: "",
        modalData: null,
        detailOpen: false
    },
    reducers: {
        setModal: (state, { payload }) => {
            state.open = payload.open;
            state.modalId = payload.modalId;
            state.modalStatus = payload.modalStatus;
            state.modalData = payload.modalData;
        },
        setDetail: (state, { payload }) => {
            state.detailOpen = payload.open;
            state.modalId = payload.modalId;
            state.modalData = payload.modalData;
        },
        setClose: (state, { payload }) => {
            state.open = false;
            state.detailOpen = false;
            state.modalId = "";
            state.modalStatus = "";
            state.modalData = null;
        }
    }
});

export const { setModal, setDetail, setClose } = modalSlice.actions;

export const modalSelector = (state) => state.modal;

export default modalSlice.reducer;
