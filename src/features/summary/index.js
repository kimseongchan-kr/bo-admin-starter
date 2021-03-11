import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuRedux from "common/menu/MenuRedux";
import { searchSelector, setSort } from "slices/searchSlice";
import { setDetail, setModal } from "slices/summarySlice";

import { ThemeProvider, Container } from "@material-ui/core";
import searchTheme from "styles/theme/searchTheme";
import tableTheme from "styles/theme/tableTheme";
import layoutStyles from "styles/customize/LayoutStyles";

import SummarySearch from "features/summary/components/Search";
import SummaryTable from "features/summary/components/Table";

import Modal from "react-modal";
import AddModifyModal from "features/summary/modal/EditModal";
import DetailModal from "features/summary/modal/DetailModal";

export default function Summary() {
    const classes = layoutStyles();
    const dispatch = useDispatch();
    const searchList = useSelector(searchSelector);
    const { startDate, endDate, gender, searchType, searchKeyword, sortNm, sortOrder, pageNumber, pageShow } = searchList;
    const [selected, setSelected] = useState([]);

    // 데이터 불러오기
    const handleData = useCallback(async () => {
        if (!sortNm) {
            await dispatch(setSort({ sortNm: "name", sortOrder: "asc" }));
        }
        console.log("데이터 불러오기...");
    }, [dispatch, sortNm]);

    useEffect(() => {
        Modal.setAppElement("body");
        handleData();
    }, [handleData]);

    //데이터 검색하기
    const handleSearch = async () => {
        console.log("데이터 검색하기...");
        console.log(startDate, endDate, gender, searchType, searchKeyword, sortNm, sortOrder, pageNumber, pageShow);
    };

    // 수정할 데이터 불러오고 modal창 띄우기
    const handleOneData = async (modalId) => {
        // console.log(modalId);
        await dispatch(setModal({ open: true, modalStatus: "modify" }));
    };

    // 상세 데이터 불러오고 modal 창 띄우기
    const handleDetailData = async (modalId) => {
        // console.log(modalId);
        await dispatch(setDetail(true));
    };

    // 데이터 추가/수정하기
    const handleSubmit = async (data) => {
        console.log(data);
    };

    // 사용여부/노출여부 데이터 수정하기
    const handleSelect = async (type, value) => {
        console.log("changing data");
        // console.log(type, value);
    };

    // 노출순서 수정하기
    const handleChange = async (value) => {
        console.log("changing sort...");
    };

    return (
        <main className={classes.main}>
            <MenuRedux menu="summary" title="Dashboard" num={1} />
            <Container maxWidth={false} className={classes.container} classes={{ root: classes.containerRoot }}>
                <div className={classes.appBarSpacer} />
                <ThemeProvider theme={searchTheme}>
                    <SummarySearch handleSearch={handleSearch} />
                </ThemeProvider>
                <SummaryTable
                    selected={selected}
                    setSelected={setSelected}
                    handleOneData={handleOneData}
                    handleDetailData={handleDetailData}
                    handleSearch={handleSearch}
                    handleSelect={handleSelect}
                    handleChange={handleChange}
                />
            </Container>
            <ThemeProvider theme={tableTheme}>
                <AddModifyModal handleDataSubmit={handleSubmit} />
            </ThemeProvider>
            <DetailModal />
        </main>
    );
}
