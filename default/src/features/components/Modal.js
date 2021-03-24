import React from "react";
import { useDispatch } from "react-redux";
import { setClose, setDetail, setMessage, setModal, setMsgConfirm } from "slices/modalSlice";
import MenuRedux from "common/menu/MenuRedux";

import theme from "styles/theme/form";
import { makeStyles, ThemeProvider, Grid, Typography } from "@material-ui/core";

import EditModal from "features/summary/modal/DashboardEditModal";
import DetailModal from "features/summary/modal/DetailModal";

import MessageModal from "common/modal/MessageModal";
import ConfirmModal from "common/modal/MessageConfirm";

import AddButton from "common/button/AddButton";
import DeleteButton from "common/button/DeleteButton";

import TableEditButton from "common/table/EditButton";
import TableDeleteButton from "common/table/DeleteButton";

import { sampleDetailData } from "features/summary/Data";

const useStyles = makeStyles(() => ({
    container: {
        width: "100%",
        margin: "0 auto",
        padding: 20,
        background: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column"
    },
    componentContainer: {
        marginBottom: 30,
        "&:last-child": {
            marginBottom: 0
        }
    },
    title: {
        marginBottom: 20
    },
    spacer: {
        marginRight: 20
    },
    cursor: {
        cursor: "pointer",
        textDecoration: "underline"
    }
}));

export default function Modal() {
    const classes = useStyles();
    const dispatch = useDispatch();

    // 수정할 데이터 불러오고 modal 띄우기
    const handleOneData = (modalId) => {
        // 데이터를 불러오고
        // 함께 데이터 넘겨주기
        dispatch(setModal({ open: true, modalStatus: "modify", modalId: modalId, modalData: { dessert: "Cupcake", fat: "3.7", calories: 305 } }));
    };

    // 상세 데이터 불러오고 modal 띄우기
    const handleDetailData = (modalId, pageNumber) => {
        pageNumber = pageNumber ? pageNumber : 1;
        console.log(modalId, pageNumber);
        // 데이터를 불러오고
        // 함께 데이터 넘겨주기
        dispatch(setDetail({ open: true, modalId: modalId, modalData: sampleDetailData }));
    };

    // 데이터 추가하기/수정하기
    const handleSubmit = (data, modalId) => {
        alert("form data::", data, "data id::", modalId);
    };

    // 선택한 데이터 삭제하기
    const handleDelete = () => {
        dispatch(setClose());
        console.log("삭제되었습니다...");
        dispatch(setMessage({ open: true, message: "삭제되었습니다." }));
    };

    // 추가 모달 열기
    const onOpen = () => {
        dispatch(setModal({ open: true, modalId: "", modalStatus: "add" }));
    };

    // 삭제 확인 모달 열기
    const onConfirm = () => {
        dispatch(setMsgConfirm({ open: true, message: "해당 디저트를 삭제하시겠습니까?" }));
    };

    // 모달 닫기
    const onClose = () => {
        dispatch(setClose());
    };

    return (
        <>
            <MenuRedux menu="components" title="Modal" num={7} />
            <div className={classes.container}>
                <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                    상세 모달
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                    <Grid item>
                        <Typography className={classes.cursor} variant="body2" color="inherit" onClick={() => handleDetailData(1)}>
                            Cupcake
                        </Typography>
                    </Grid>
                </Grid>
                <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                    추가 모달
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                    <Grid item>
                        <AddButton onOpen={onOpen} />
                    </Grid>
                </Grid>
                <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                    수정 모달
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                    <Grid item>
                        <Typography className={classes.cursor} variant="body2" color="inherit" onClick={() => handleOneData(1)}>
                            Cupcake
                        </Typography>
                    </Grid>
                    <div className={classes.spacer} />
                    <Grid item>
                        <TableEditButton modalId={1} handleOneData={handleOneData} />
                    </Grid>
                </Grid>
                <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                    삭제하기
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                    <Grid item>
                        <DeleteButton onConfirm={onConfirm} />
                    </Grid>
                    <div className={classes.spacer} />
                    <Grid item>
                        <TableDeleteButton modalId={1} onConfirm={onConfirm} />
                    </Grid>
                </Grid>
            </div>
            <ThemeProvider theme={theme}>
                <EditModal handleDataSubmit={handleSubmit} onClose={onClose} />
            </ThemeProvider>
            <DetailModal handleDetailData={handleDetailData} onClose={onClose} />
            <ConfirmModal onClose={onClose} handleDelete={handleDelete} />
            <MessageModal onClose={onClose} />
        </>
    );
}
