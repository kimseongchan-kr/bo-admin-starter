import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector, setPage, setSearchFilter, setSort } from "slices/searchSlice";
import MenuRedux from "common/menu/MenuRedux";

import { ThemeProvider } from "@material-ui/core";
import SearchTheme from "styles/theme/search";

import SummarySearch from "features/summary/components/Search";
import SummaryTable from "features/summary/components/Table";

export default function Summary() {
    const dispatch = useDispatch();
    const searchList = useSelector(searchSelector);
    const { searchType, searchKeyword, sortNm, sortOrder, pageNumber, pageShow } = searchList;

    const [dataList, setDataList] = useState([]);
    const menu = "Summary";

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
        let search = { searchType, searchKeyword, sortNm, sortOrder, pageNumber, pageShow };

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

    // 페이지 변경하기
    const handlePage = (paging) => {
        console.log("페이지 변경하기...");
        dispatch(setPage(paging));
        handleSearch(paging);
    };

    // 사용여부/노출여부 등 select 데이터 수정하기
    const handleSelect = (type, value) => {
        console.log("changing status...");
    };

    return (
        <>
            <MenuRedux menu="summary" title="Summary" num={2} />
            <ThemeProvider theme={SearchTheme}>
                <SummarySearch menu={menu} handleSearchFilter={handleSearchFilter} handleSearch={handleSearch} />
            </ThemeProvider>
            <SummaryTable menu={menu} data={dataList} handleSelect={handleSelect} handleSort={handleSort} handlePage={handlePage} handleSearch={handleSearch} />
        </>
    );
}
