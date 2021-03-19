import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuRedux from "common/menu/MenuRedux";
import { searchSelector, setFilter, setPage, setSearchFilter, setSort } from "slices/searchSlice";
import { setClose, setDetail, setModal } from "slices/modalSlice";

import { ThemeProvider } from "@material-ui/core";
import searchTheme from "styles/theme/search";
import tableTheme from "styles/theme/table";

import DateTermSearch from "common/search/DateTermSearch";
import ExampleTable from "features/example/components/Table";

import Modal from "react-modal";
import AddModifyModal from "features/example/modal/EditModal";
import DetailModal from "features/example/modal/DetailModal";
import { SampleDetailData } from "./Data";

export default function Example() {
    const dispatch = useDispatch();
    const searchList = useSelector(searchSelector);
    const { term, startDate, endDate, sortNm, sortOrder, pageNumber, pageShow } = searchList;

    const [dataList, setDataList] = useState([]);
    const [contents, setContents] = useState("hello");

    // 데이터 불러오기
    const handleData = useCallback(() => {
        console.log("데이터 불러오기...");

        if (!sortNm) {
            dispatch(setSort({ sortNm: "name", sortOrder: "asc" }));
        } else {
            setDataList([]);
        }
    }, [dispatch, sortNm]);

    useEffect(() => {
        Modal.setAppElement("body");
        handleData();
    }, [handleData]);

    // 검색 조건 변경하기
    const handleSearchFilter = (searchFilterItems) => {
        console.log("검색 조건 변경하기");
        dispatch(setSearchFilter(searchFilterItems));
    };

    // 검색하기
    const handleSearch = (searchItems) => {
        console.log("데이터 검색하기...");
        let search = { term, startDate, endDate, sortNm, sortOrder, pageNumber, pageShow };

        if (searchItems) {
            search = { ...search, ...searchItems };
        }
        console.log(search);
    };

    // 테이블 데이터 정렬하기
    const handleSort = (sortItems) => {
        console.log("데이터 정렬하기...");
        dispatch(setSort(sortItems));
        handleSearch(sortItems);
    };

    // 테이블 데이터 필터하기
    const handleFilter = (filterItems) => {
        console.log("데이터 필터링...");
        dispatch(setFilter(filterItems));
    };

    // 페이지 변경하기
    const handlePage = (paging) => {
        console.log("페이지 변경하기...");
        dispatch(setPage(paging));
        handleSearch(paging);
    };

    // 수정할 데이터 불러오고 modal 띄우기
    const handleOneData = (modalId) => {
        // 데이터를 불러오고
        // 함께 데이터 넘겨주기
        dispatch(setModal({ open: true, modalStatus: "modify", modalId: modalId, modalData: { title: "Editor 제목" } }));
    };

    // 상세 데이터 불러오고 modal 띄우기
    const handleDetailData = (modalId, pageNumber) => {
        pageNumber = pageNumber ? pageNumber : 1;
        console.log(modalId, pageNumber);
        // 데이터를 불러오고
        // 함께 데이터 넘겨주기
        dispatch(setDetail({ open: true, modalId: modalId, modalData: SampleDetailData }));
    };

    // 데이터 추가하기/수정하기
    const handleSubmit = (data, modalId) => {
        console.log(data, modalId);
    };

    // 데이터 삭제하기
    const handleDelete = (modalId) => {
        console.log("deleting data...");
    };

    // 사용여부/노출여부 등 select 데이터 수정하기
    const handleSelect = (type, value) => {
        console.log("changing status...");
    };

    // 노출순서 등 input 데이터 수정하기
    const handleChange = (value) => {
        console.log("changing sort...");
    };

    // modal 닫기
    const onClose = () => {
        dispatch(setClose());
    };

    return (
        <>
            <MenuRedux menu="example" title="Example" num={3} />
            <ThemeProvider theme={searchTheme}>
                <DateTermSearch handleSearchFilter={handleSearchFilter} handleSearch={handleSearch} />
            </ThemeProvider>
            <ExampleTable
                data={dataList}
                handleOneData={handleOneData}
                handleDetailData={handleDetailData}
                handleDelete={handleDelete}
                handleSelect={handleSelect}
                handleChange={handleChange}
                handleSort={handleSort}
                handlePage={handlePage}
                handleFilter={handleFilter}
                handleSearch={handleSearch}
            />
            <ThemeProvider theme={tableTheme}>
                <AddModifyModal contents={contents} setContents={setContents} handleDataSubmit={handleSubmit} onClose={onClose} />
            </ThemeProvider>
            <DetailModal handleDetailData={handleDetailData} onClose={onClose} />
        </>
    );
}
