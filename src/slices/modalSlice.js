import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        // 추가/수정 모달
        open: false,
        detailOpen: false,
        modalId: "",
        modalStatus: "",
        modalData: null,

        // Confirm/Alert 모달
        msgConfirmOpen: false,
        msgOpen: false,
        message: ""
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
        setMsgConfirm: (state, { payload }) => {
            state.msgConfirmOpen = payload.open;
            state.message = payload.message;
        },
        setMessage: (state, { payload }) => {
            state.msgOpen = payload.open;
            state.message = payload.message;
        },
        setClose: (state, { payload }) => {
            state.open = false;
            state.detailOpen = false;
            state.msgOpen = false;
            state.msgConfirmOpen = false;

            state.modalId = "";
            state.modalStatus = "";
            state.modalData = null;
            state.message = "";
        }
    }
});

export const { setModal, setDetail, setMsgConfirm, setMessage, setClose } = modalSlice.actions;

export const modalSelector = (state) => state.modal;

export default modalSlice.reducer;
