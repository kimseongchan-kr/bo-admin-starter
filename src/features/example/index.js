import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuRedux from "common/menu/MenuRedux";
import { searchSelector, setSort } from "slices/searchSlice";
import { setDetail, setModal } from "slices/summarySlice";

import { ThemeProvider, Container } from "@material-ui/core";
import searchTheme from "styles/theme/searchTheme";
import tableTheme from "styles/theme/tableTheme";
import layoutStyles from "styles/customize/LayoutStyles";

import DateTermSearch from "common/search/DateTermSearch";
import ExampleTable from "features/example/components/Table";

import Modal from "react-modal";
import AddModifyModal from "features/example/modal/EditModal";
import DetailModal from "features/example/modal/DetailModal";

export default function Summary() {
    const classes = layoutStyles();
    const dispatch = useDispatch();
    const searchList = useSelector(searchSelector);
    const { term, startDate, endDate, searchType, searchKeyword, sortNm, sortOrder, pageNumber, pageShow } = searchList;

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
        console.log(term, startDate, endDate, searchType, searchKeyword, sortNm, sortOrder, pageNumber, pageShow);
    };

    // 수정할 데이터 불러오고 modal창 띄우기
    const handleOneData = async (modalId) => {
        console.log(modalId);
        await dispatch(setModal({ open: true, modalStatus: "modify" }));
    };

    // 상세 데이터 불러오고 modal 창 띄우기
    const handleDetailData = async (modalId) => {
        console.log(modalId);
        await dispatch(setDetail(true));
    };

    // 데이터 추가/수정하기
    const handleSubmit = async (data) => {
        console.log(data);
    };

    // 사용여부/노출여부 데이터 수정하기
    const handleSelect = async (type, value) => {
        console.log("changing data");
        console.log(type, value);
    };

    return (
        <main className={classes.main}>
            <MenuRedux menu="summary" title="Example 1" num={2} />
            <Container maxWidth={false} className={classes.container} classes={{ root: classes.containerRoot }}>
                <div className={classes.appBarSpacer} />
                <ThemeProvider theme={searchTheme}>
                    <DateTermSearch handleSearch={handleSearch} />
                </ThemeProvider>
                <ExampleTable handleOneData={handleOneData} handleDetailData={handleDetailData} handleSearch={handleSearch} handleSelect={handleSelect} />
            </Container>
            <ThemeProvider theme={tableTheme}>
                <AddModifyModal handleDataSubmit={handleSubmit} />
            </ThemeProvider>
            <DetailModal />
        </main>
    );
}
