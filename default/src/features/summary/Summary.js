import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector, setPage, setSearchFilter, setSort } from "slices/searchSlice";
import { getList, summarySelector } from "slices/summarySlice";
import { setClose, setMessage } from "slices/modalSlice";
import MenuRedux from "common/menu/MenuRedux";

import { ThemeProvider } from "@material-ui/core";
import search from "styles/theme/search";

import SummarySearch from "features/summary/components/Search";
import SummaryTable from "features/summary/components/Table";

import MessageModal from "common/modal/MessageModal";

export default function Summary() {
    const dispatch = useDispatch();
    const summaryList = useSelector(summarySelector);
    const { dataList, isLoading, hasErrors, errorMsg } = summaryList;

    const searchList = useSelector(searchSelector);
    const { searchType, searchKeyword, sortNm, sortOrder, pageNumber, pageShow } = searchList;

    const [keyword, setKeyword] = useState(searchKeyword ? searchKeyword : "");

    const menu = "Summary";

    // 데이터 불러오기
    const handleData = useCallback(() => {
        console.log("데이터 불러오기...");
        dispatch(getList("/web/user"));
    }, [dispatch]);

    useEffect(() => {
        handleData();
    }, [handleData]);

    // SAMPLE
    // 에러 메시지
    // -> 네트워크 오류입니다.
    // -> 다시 시도해주세요.
    useEffect(() => {
        dispatch(setMessage({ open: hasErrors, message: errorMsg }));
    }, [dispatch, hasErrors, errorMsg]);

    // 검색 조건 변경하기
    const handleSearchFilter = (searchFilterItems) => {
        console.log("검색 조건 변경하기");
        dispatch(setSearchFilter(searchFilterItems));
    };

    // 검색하기
    const handleSearch = (searchItems) => {
        console.log("데이터 검색하기...");
        let search = { searchType, keyword, sortNm, sortOrder, pageNumber, pageShow };

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

    // 테이블 페이지 변경하기
    const handlePage = (paging) => {
        console.log("페이지 변경하기...");
        dispatch(setPage(paging));
        handleSearch(paging);
    };

    // 테이블 - 사용여부/노출여부 등 select 데이터 수정하기
    const handleSelect = (type, value) => {
        console.log("changing status...", type, value);
    };

    // 모달 닫기
    const onClose = () => {
        dispatch(setClose());
    };

    return (
        <>
            <MenuRedux menu="summary" title="Summary" num={2} />
            <ThemeProvider theme={search}>
                <SummarySearch menu={menu} keyword={keyword} setKeyword={setKeyword} handleSearchFilter={handleSearchFilter} handleSearch={handleSearch} />
            </ThemeProvider>
            <SummaryTable menu={menu} loading={isLoading} data={dataList ? dataList : []} handleSelect={handleSelect} handleSort={handleSort} handlePage={handlePage} handleSearch={handleSearch} />
            <MessageModal onClose={onClose} />
        </>
    );
}
