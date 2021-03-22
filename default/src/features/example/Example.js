import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector, setFilter, setPage, setSearchFilter, setSort } from "slices/searchSlice";
import { setClose, setDetail, setMessage, setModal, setMsgConfirm } from "slices/modalSlice";
import MenuRedux from "common/menu/MenuRedux";

import { ThemeProvider } from "@material-ui/core";
import SearchTheme from "styles/theme/search";
import TableTheme from "styles/theme/table";

import DateTermSearch from "common/search/DateTermSearch";
import ExampleTable from "features/example/components/Table";

import Modal from "react-modal";
import EditModal from "features/example/modal/EditModal";
import DetailModal from "features/example/modal/DetailModal";
import { SampleDetailData } from "features/example/Data";
import MessageModal from "common/modal/MessageModal";
import ConfirmModal from "common/modal/MessageConfirm";

export default function Example() {
    const dispatch = useDispatch();
    const searchList = useSelector(searchSelector);
    const { term, startDate, endDate, sortNm, sortOrder, pageNumber, pageShow } = searchList;

    const [dataList, setDataList] = useState([]);
    const [contents, setContents] = useState("hello");
    const menu = "Example";

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
    const handleDelete = () => {
        dispatch(setClose());
        console.log("삭제되었습니다...");
        dispatch(setMessage({ open: true, message: "삭제되었습니다." }));
    };

    // 사용여부/노출여부 등 select 데이터 수정하기
    const handleSelect = (type, value) => {
        console.log("changing status...");
    };

    // 노출순서 등 input 데이터 수정하기
    const handleChange = (value) => {
        console.log("changing sort...");
    };

    // 추가 모달 열기
    const onOpen = () => {
        dispatch(setModal({ open: true, modalId: "", modalStatus: "add" }));
    };

    // 삭제 확인 모달 열기
    const onConfirm = () => {
        dispatch(setMsgConfirm({ open: true, message: "해당 디저트를 삭제하시겠습니까?" }));
    };

    // modal 닫기
    const onClose = () => {
        dispatch(setClose());
    };

    return (
        <>
            <MenuRedux menu="example" title="Example" num={3} />
            <ThemeProvider theme={SearchTheme}>
                <DateTermSearch handleSearchFilter={handleSearchFilter} handleSearch={handleSearch} />
            </ThemeProvider>
            <ExampleTable
                menu={menu}
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
                onOpen={onOpen}
                onConfirm={onConfirm}
            />
            <ThemeProvider theme={TableTheme}>
                <EditModal contents={contents} setContents={setContents} handleDataSubmit={handleSubmit} onClose={onClose} />
            </ThemeProvider>
            <DetailModal handleDetailData={handleDetailData} onClose={onClose} />
            <ConfirmModal onClose={onClose} handleDelete={handleDelete} />
            <MessageModal onClose={onClose} />
        </>
    );
}
