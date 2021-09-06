import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import useMenu from "hooks/useMenu";
import useSearchParams from "hooks/useSearchParams";
import useErrorMsg from "hooks/useErrorMsg";

import { queryToString } from "utils/common";

import { summarySelector, getSummaryList, updateSummaryInfo, deleteSummaryInfo, clearError, resetStates } from "slices/summarySlice";
import { commonSelector, getExcelList, clearExcelData } from "slices/commonSlice";
import { searchSelector, setPage, setSearchFilter } from "slices/searchSlice";
import { setClose, setMessage, setMsgConfirm, setMsgConfirmClose } from "slices/modalSlice";

import DashboardSearch from "components/Search";
import DashboardTable from "components/SelectionTable";
import MessageModal from "common/modal/MessageModal";
import ConfirmModal from "common/modal/ConfirmModal";

import { searchParams, sampleRowData } from "components/Data";

export default function Dashboard() {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const { dataList, total, status, errorMsg, statusCode } = useSelector(summarySelector);
    const { excelList } = useSelector(commonSelector);
    const { startDate, endDate, gender, searchType, searchKeyword, sort, pageNumber, pageShow } = useSelector(searchSelector);

    const [selected, setSelected] = useState([]);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [urlParams, setUrlParams] = useState({
        startDate,
        endDate,
        gender,
        searchType,
        searchKeyword,
        sort,
        pageNumber,
        pageShow
    });

    // 페이지/메뉴 설정하기
    const menu = useMenu({ page: "Dashboard", menu: "summary", title: "Dashboard", num: 1 });

    // search params 설정하기
    const params = useSearchParams(searchParams[menu], urlParams);

    // 데이터 불러오기
    const handleData = useCallback(() => {
        const dataParams = params ? params : { sort: "latest" };
        // dispatch(getSummaryList({ url: "/web/dashboard", params: dataParams }));
    }, [dispatch, params]);

    useEffect(() => {
        handleData();
    }, [handleData]);

    // 에러 메시지 노출하기
    useErrorMsg(status, statusCode, errorMsg);

    // 검색 조건 변경하기
    const handleSearchFilter = (searchFilterItems) => {
        dispatch(setSearchFilter(searchFilterItems));
    };

    // 검색하기
    const handleSearch = (searchItems) => {
        let search = { startDate, endDate, gender, searchType, searchKeyword, sort, pageNumber, pageShow };

        if (searchItems) {
            search = { ...search, ...searchItems };
        }

        setUrlParams(search);
        const params = queryToString(search);
        return history.push({ pathname: "/", search: params });
    };

    // 테이블 데이터 정렬하기
    const handleSort = (e) => {
        dispatch(setSearchFilter({ type: e.target.name, value: e.target.value }));
        handleSearch({ sort: e.target.value });
    };

    // 테이블 페이지 변경하기
    const handlePage = (paging) => {
        dispatch(setPage(paging));
        handleSearch(paging);
    };

    // 사용여부/노출여부 등 select 데이터 수정하기
    const handleSelect = async (name, value, rowIndex) => {
        console.log("changing status...", name, value, rowIndex);

        const resultAction = await dispatch(updateSummaryInfo({ url: "/web/example", fileYn: false, data: { example: "test" } }));
        if (updateSummaryInfo.fulfilled.match(resultAction)) {
            // 성공
        } else {
            if (resultAction.payload) {
                dispatch(setMessage({ open: true, message: resultAction.payload.message }));
            } else {
                dispatch(setMessage({ open: true, message: "네트워크 에러" }));
            }
        }
    };

    // 노출순서 등 input 데이터 수정하기
    const handleChange = async (value) => {
        console.log("changing input value...", value);

        const resultAction = await dispatch(updateSummaryInfo({ url: "/web/example", fileYn: false, data: { example: "test" } }));
        if (updateSummaryInfo.fulfilled.match(resultAction)) {
            // 성공
        } else {
            if (resultAction.payload) {
                dispatch(setMessage({ open: true, message: resultAction.payload.message }));
            } else {
                dispatch(setMessage({ open: true, message: "네트워크 에러" }));
            }
        }
    };

    // 선택한 데이터 삭제하기
    const handleDelete = async () => {
        dispatch(setMsgConfirmClose());
        // 삭제 API 호출
        const resultAction = await dispatch(deleteSummaryInfo({ url: "/web/example", data: { example: "test" } }));
        if (deleteSummaryInfo.fulfilled.match(resultAction)) {
            // 삭제 성공
            dispatch(setMessage({ open: true, message: "삭제되었습니다." }));
        } else {
            if (resultAction.payload) {
                dispatch(setMessage({ open: true, message: resultAction.payload.message }));
            } else {
                dispatch(setMessage({ open: true, message: "네트워크 에러" }));
            }
        }
    };

    // 상세 페이지로 이동하기
    const handleOneData = (index) => {
        dispatch(resetStates());
        return history.push({
            pathname: `/dashboard/detail/${index}`,
            search: location.search
        });
    };

    // 업로드 페이지로 이동하기
    const handleNewData = () => {
        dispatch(resetStates());
        return history.push({
            pathname: "/dashboard/upload",
            search: location.search
        });
    };

    // 수정 페이지로 이동하기
    const handleEditData = (idx) => {
        dispatch(resetStates());
        return history.push({
            pathname: `/dashboard/edit/${idx}`,
            search: location.search
        });
    };

    // 엑셀 다운로드 데이터 불러오기
    const onDownloadButtonClick = async () => {
        setButtonLoading(true);
        const resultAction = await dispatch(getExcelList({ url: "/web/excel-example", params: urlParams }));
        if (getExcelList.fulfilled.match(resultAction)) {
            setButtonLoading(false);
        } else {
            if (resultAction.payload) {
                dispatch(setMessage({ open: true, message: resultAction.payload.message }));
            } else {
                dispatch(setMessage({ open: true, message: "네트워크 에러" }));
            }
        }
    };

    // 엑셀 다운로드하기
    useEffect(() => {
        if (excelList && excelList.length > 0) {
            let e = document.createEvent("MouseEvents");
            e.initEvent("click", true, true);
            document.querySelector(".file-download").dispatchEvent(e);
            dispatch(clearExcelData());
        }
    }, [excelList, dispatch]);

    // 삭제 확인 모달 띄우기
    const onConfirm = () => {
        dispatch(setMsgConfirm({ open: true, message: "해당 디저트를 삭제하시겠습니까?" }));
    };

    // 모달 닫기
    const onClose = () => {
        dispatch(setClose());
        dispatch(clearError());
    };

    return (
        <>
            <DashboardSearch
                heading="Dashboard 검색"
                menu={menu}
                // total={total}
                total={sampleRowData.length}
                handleSearchFilter={handleSearchFilter}
                handleSearch={handleSearch}
                handleSort={handleSort}
                onAddButtonClick={handleNewData}
            />
            <DashboardTable
                menu={menu}
                loading={status === "loading" ? true : false}
                buttonLoading={buttonLoading}
                // data={dataList}
                data={sampleRowData}
                // total={total}
                total={sampleRowData.length}
                excelData={excelList}
                selected={selected}
                setSelected={setSelected}
                handleSelect={handleSelect}
                handleChange={handleChange}
                handlePage={handlePage}
                handleOneData={handleOneData}
                handleEditData={handleEditData}
                onDelete={onConfirm}
                onExcel={onDownloadButtonClick}
            />
            <MessageModal onClose={onClose} />
            <ConfirmModal handleConfirm={handleDelete} onClose={onClose} />
        </>
    );
}
