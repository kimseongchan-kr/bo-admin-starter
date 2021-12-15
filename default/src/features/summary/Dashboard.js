import React, { useState } from "react";
import { useLocation } from "react-router";
import { useMutation, useQueryClient } from "react-query";
import { putData, deleteData } from "api";

import useMenu from "hooks/useMenu";
import useMessage from "hooks/useMessage";
import usePageMove from "hooks/usePageMove";
import useSearch from "hooks/useSearch";

import useFetchList from "hooks/useGetList";
import useFetchMultiLists from "hooks/useGetLists";
import useExcelDownload from "hooks/useExcelDownload";

import DashboardSearch from "components/Search/Search";
import DashboardTable from "components/Table/SelectionTable";
import MessageModal from "common/modal/MessageModal";

import { sampleRowData } from "components/Data";

export default function Dashboard() {
    const queryClient = useQueryClient();
    const location = useLocation();

    const [selected, setSelected] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    // 페이지/메뉴 설정하기
    const menu = useMenu({ page: "Dashboard", menu: "summary", menuTitle: "Dashboard", menuNum: 0 });
    const handleMessage = useMessage(); // 메시지 / 확인 모달 열기
    const handlePageClick = usePageMove({ baseUrl: "/" }); // 페이지 이동하기

    // 리스트 데이터 가져오기
    const {
        params,
        isLoading,
        data: dataList,
        refetch: refetchList
    } = useFetchList({
        menu,
        url: "/web/dashboard"
    });

    const [{ data: brandList }, { data: categoryList }] = useFetchMultiLists({
        apiList: [
            { key: "brand-list", url: "/web/brand-list" },
            { key: "category-list", url: "/web/category-list" }
        ]
    });

    // 검색하기
    const handleSearch = useSearch({ params });

    // 엑셀 다운로드
    const [{ excelLoading, excelList }, onExcelClick] = useExcelDownload({
        url: "/web/dashboard/excel",
        params
    });

    // 수정 API
    const {
        isLoading: updateLoading,
        mutate: updateMutation,
        reset: updateReset
    } = useMutation(({ url, fileYn, data }) => putData(url, fileYn, data), {
        onSuccess: (data) => {
            // 새로운 데이터 가져오기
            if (location.search.includes("gender")) {
                return refetchList();
            }

            // API에서 수정된 값 (=data)을 setQueryData를 사용해서 수정된 데이터로 변경하기
            queryClient.setQueryData([menu, { ...params }], (old) => {
                return { ...old, ...data };
            });
        },
        onError: (error) => handleMessage({ type: "message", ...error })
    });

    // 사용여부/노출여부 등 select 데이터 수정하기
    const handleSelect = (name, value, rowIndex) => {
        updateReset();
        setSelectedIndex(rowIndex);
        updateMutation({ url: "/web/put/example", fileYn: false, data: { [name]: value } });
    };

    // 노출순서 등 input 데이터 수정하기
    const handleChange = async ({ target: { name, value } }, rowIndex) => {
        console.log("changing input value...", name, value, rowIndex);
    };

    // 삭제 API
    const {
        isLoading: deleteLoading,
        mutate: deleteMutation,
        reset: deleteReset
    } = useMutation(({ url, data }) => deleteData(url, data), {
        onSuccess: (data) => refetchList(),
        onError: (error) => handleMessage({ type: "message", ...error })
    });

    // 선택한 데이터 삭제하기
    const handleDelete = () => deleteMutation({ url: "/web/delete/example", data: { index: selectedIndex } });

    // 삭제 확인 모달 띄우기
    const onDeleteClick = (_, data) => {
        deleteReset();
        setSelectedIndex(data?.idx);
        handleMessage({ type: "confirm", message: "해당 디저트를 삭제하시겠습니까?" });
    };

    return (
        <>
            <DashboardSearch
                menu={menu}
                heading="Dashboard 검색"
                total={sampleRowData.length} // total={total}
                dataList={{ brand: [brandList] || [], category: [categoryList] || [] }}
                handleSearch={handleSearch}
                onAddButtonClick={handlePageClick}
            />
            <DashboardTable
                menu={menu}
                loading={isLoading}
                excelLoading={excelLoading}
                disabled={updateLoading || deleteLoading}
                data={sampleRowData || dataList} // data={dataList}
                total={sampleRowData.length} // total={total}
                excelData={excelList?.data || []}
                selected={selected}
                setSelected={setSelected}
                handleSelect={handleSelect}
                handleChange={handleChange}
                handleSearch={handleSearch}
                onPageClick={handlePageClick}
                onDeleteClick={onDeleteClick}
                onExcelClick={onExcelClick}
            />
            <MessageModal handleConfirm={handleDelete} />
        </>
    );
}
