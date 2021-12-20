import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // 메시지 모달
    msgOpen: false,
    messageType: "",
    message: "",

    // 이미지 모달
    imgOpen: false,
    imgData: null
};

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        ...initialState,
        // 상세 모달
        detailOpen: false,
        detailData: null,
        // 추가/수정 모달
        editOpen: false,
        editData: null
    },
    reducers: {
        // 메시지 모달 띄우기
        setMessage: (state, { payload }) => {
            state.msgOpen = payload.open;
            state.messageType = payload.type;
            state.message = payload.message;
        },
        // 상세 모달 띄우기
        setDetail: (state, { payload }) => {
            state.detailOpen = payload.open;
            state.detailData = payload.data;
        },
        // 이미지 모달 띄우기
        setImage: (state, { payload }) => {
            state.imgOpen = payload.open;
            state.imgData = payload.data;
        },
        // 추가/수정 모달 띄우기
        setEdit: (state, { payload }) => {
            state.editOpen = payload.open;
            state.editData = payload.data;
        },
        // 메시지, Confirm, 상세, 이미지 모달 닫기
        setClose: (state) => {
            return { ...state, ...initialState };
        },
        // 상세 모달 닫기
        setDetailClose: (state, { payload }) => {
            state.detailOpen = false;
            state.detailData = null;
        },
        // 추가/수정 모달 닫기
        setEditClose: (state, { payload }) => {
            state.editOpen = false;
            state.editData = null;
        }
    }
});

export const { setMessage, setDetail, setImage, setEdit, setClose, setDetailClose, setEditClose } = modalSlice.actions;

export const modalSelector = (state) => state.modal;

export default modalSlice.reducer;
