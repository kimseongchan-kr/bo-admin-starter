import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useMenu from "hooks/useMenu";
import useSearchParams from "hooks/useSearchParams";

import { queryToString } from "utils/common";

import { exampleSelector, getExampleList } from "slices/exampleSlice";
import { searchSelector, setSearchFilter, setPage } from "slices/searchSlice";
import { setDetail, setMessage, setMsgConfirm, setClose, setEdit, setEditClose, modalSelector } from "slices/modalSlice";

import ExampleSearch from "components/DateTermSearch";
import ExampleTable from "components/Table";
import UploadModal from "features/example/ExampleUploadModal";
import DetailModal from "features/example/ExampleDetailModal";
import MessageModal from "common/modal/MessageModal";
import ConfirmModal from "common/modal/ConfirmModal";

import { searchParams, sampleRowData, sampleDetailData } from "components/Data";
import useErrorMsg from "hooks/useErrorMsg";

export default function Example() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { dataList, total, status, errorMsg, statusCode } = useSelector(exampleSelector);
    const { editData } = useSelector(modalSelector);
    const { startDate, endDate, pageNumber, pageShow } = useSelector(searchSelector);

    const [urlParams, setUrlParams] = useState({
        startDate,
        endDate,
        pageNumber,
        pageShow
    });
    const [reset, setReset] = useState(false);

    // 페이지/메뉴 설정하기
    const menu = useMenu({ page: "Example", menu: "example", title: "Example", num: 3 });

    // search params 설정하기
    const params = useSearchParams(searchParams[menu], urlParams);

    // 데이터 불러오기
    const handleData = useCallback(() => {
        const dataParams = params ? params : { sort: "latest" };
        // dispatch(getExampleList({ url: "/web/example", params: dataParams }));
    }, [dispatch, params]);

    useEffect(() => {
        handleData();
    }, [handleData]);

    // 에러 메시지
    useErrorMsg(status, statusCode, errorMsg);

    // 검색 조건 변경하기
    const handleSearchFilter = (searchFilterItems) => {
        dispatch(setSearchFilter(searchFilterItems));
    };

    // 검색하기
    const handleSearch = (searchItems) => {
        let search = { startDate, endDate, pageNumber, pageShow };

        if (searchItems) {
            search = { ...search, ...searchItems };
        }

        setUrlParams(search);
        const params = queryToString(search);
        return history.push({ pathname: "/example", search: params });
    };

    // 테이블 데이터 정렬하기
    const handleSort = (e) => {
        dispatch(setSearchFilter({ type: e.target.name, value: e.target.value }));
        handleSearch({ sort: e.target.value });
    };

    // 페이지 변경하기
    const handlePage = (paging) => {
        dispatch(setPage(paging));
        handleSearch(paging);
    };

    // 상세 데이터 불러오고 modal 띄우기
    const handleDetailData = (index, pageNumber) => {
        pageNumber = pageNumber ? pageNumber : 1;
        console.log(index, pageNumber);
        // 데이터를 불러오고
        // 함께 데이터 넘겨주기
        dispatch(setDetail({ open: true, data: sampleDetailData }));
    };

    // 수정할 데이터 불러오고 modal 띄우기
    const handleOneData = (index, data) => {
        // 데이터를 불러오고
        // 함께 데이터 넘겨주기
        dispatch(setEdit({ open: true, data: { index, modalStatus: "modify", contents: "hello", ...data, category: { value: data.category, label: data.category } } }));
    };

    // 데이터 추가하기/수정하기
    const handleSubmit = () => {
        alert(JSON.stringify(editData, null, 2));
    };

    // 데이터 삭제하기
    const handleDelete = () => {
        dispatch(setClose());
        dispatch(setMessage({ open: true, message: "삭제되었습니다." }));
    };

    // 사용여부/노출여부 등 select 데이터 수정하기
    const handleSelect = (name, value, rowIndex) => {
        console.log("changing status...", name, value, rowIndex);
    };

    // 노출순서 등 input 데이터 수정하기
    const handleChange = async (e, rowIndex) => {
        console.log("changing input value...", e.target.name, e.target.value, rowIndex);
    };

    // 추가 모달 열기
    const onAdd = () => {
        setReset(true);
        dispatch(setEdit({ open: true }));
    };

    // 삭제 확인 모달 열기
    const onConfirm = () => {
        dispatch(setMsgConfirm({ open: true, message: "해당 디저트를 삭제하시겠습니까?" }));
    };

    // modal 닫기
    const onClose = () => {
        dispatch(setClose());
    };

    // 추가/수정 모달 닫기
    const onEditClose = () => {
        setReset(false);
        dispatch(setEditClose());
    };

    return (
        <>
            {/* total={total} */}
            <ExampleSearch menu={menu} total={sampleRowData.length} handleSearchFilter={handleSearchFilter} handleSort={handleSort} handleSearch={handleSearch} />
            <ExampleTable
                menu={menu}
                // data={dataList}
                data={sampleRowData}
                // total={total}
                total={sampleRowData.length}
                handleOneData={handleOneData}
                handleDetailData={handleDetailData}
                handleSelect={handleSelect}
                handleChange={handleChange}
                handlePage={handlePage}
                onAdd={onAdd}
                onConfirm={onConfirm}
            />
            <MessageModal onClose={onClose} />
            <ConfirmModal onClose={onClose} handleConfirm={handleDelete} />
            <DetailModal menu={menu} title="Example 상세 조회" handleDetailData={handleDetailData} onClose={onClose} />
            <UploadModal reset={reset} handleDataSubmit={handleSubmit} onClose={onEditClose} />
        </>
    );
}
