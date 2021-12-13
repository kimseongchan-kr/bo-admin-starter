import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getData, putData, deleteData } from "api";

import useMenu from "hooks/useMenu";
import useMessage from "hooks/useMessage";
import useSearch from "hooks/useSearch";
import useFetchList from "hooks/useGetList";

import { setDetail, setEdit } from "slices/modalSlice";

import ExampleSearch from "components/Search/DateTermSearch";
import ExampleTable from "components/Table/Table";
import UploadModal from "features/example/ExampleUpload";
import DetailModal from "features/example/ExampleDetail";
import MessageModal from "common/modal/MessageModal";

import { sampleRowData, sampleDetailData } from "components/Data";

export default function Example() {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const location = useLocation();

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(null);

    // 페이지/메뉴 설정하기
    const menu = useMenu({ page: "Example", menu: "example", menuTitle: "Example", menuNum: 1 });

    // 리스트 데이터 가져오기
    const {
        params,
        isLoading,
        data: dataList,
        refetch: refetchList
    } = useFetchList({
        menu,
        url: "/web/example"
    });

    // 검색하기
    const handleSearch = useSearch({ params });

    // 메시지 / 확인 모달 열기
    const handleMessage = useMessage();

    useQuery(["example detail", { selectedIndex, currentPage }], () => getData(`/web/detail/example/${selectedIndex}`, { page: currentPage }), {
        enabled: selectedIndex && currentPage ? true : false,
        onSuccess: (data) => {
            console.log("detail data", data);
            dispatch(setDetail({ open: true, data: { index: selectedIndex, menu, title: "Example 상세 조회", data: sampleDetailData } }));
        },
        onError: (error) => {
            // handleMessage({ type: "message", ...error });

            // -----SAMPLE-----
            dispatch(setDetail({ open: true, data: { index: selectedIndex, menu, title: "Example 상세 조회", data: sampleDetailData } }));
            // -----SAMPLE-----
        }
    });

    // 상세 데이터 불러오고 modal 띄우기
    const handleDetailData = (index, currentPage) => {
        setSelectedIndex(index);
        setCurrentPage(currentPage || 1);
    };

    // 수정할 데이터 불러오고 modal 띄우기
    const handleOneData = (index, data) => {
        dispatch(
            setEdit({
                open: true,
                data: {
                    index,
                    modalStatus: "modify",
                    contents: "hello",
                    ...data,
                    category: { value: data.category, label: data.category }
                }
            })
        );
    };

    // 수정 API
    const { mutate: updateMutation, reset: updateReset } = useMutation(({ url, fileYn, data }) => putData(url, fileYn, data), {
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
    const handleChange = (e, rowIndex) => {
        console.log("changing input value...", e.target.name, e.target.value, rowIndex);
    };

    // 삭제 API
    const { deleteMutation } = useMutation(({ url, data }) => deleteData(url, data), {
        onSuccess: (data) => refetchList(),
        onError: (error) => handleMessage({ type: "message", ...error })
    });

    // 선택한 데이터 삭제하기
    const handleDelete = () => deleteMutation({ url: "/web/delete/example", data: { index: selectedIndex } });

    // 추가 모달 열기
    const onAddClick = () => dispatch(setEdit({ open: true, data: null }));

    // 삭제 확인 모달 띄우기
    const onConfirm = (_, data) => {
        setSelectedIndex(data?.idx);
        handleMessage({ type: "confirm", message: "해당 디저트를 삭제하시겠습니까?" });
    };

    return (
        <>
            <ExampleSearch
                heading="Example 검색"
                menu={menu}
                total={sampleRowData.length} // total={total}
                handleSearch={handleSearch}
            />
            <ExampleTable
                menu={menu}
                loading={isLoading}
                data={sampleRowData || dataList} // data={dataList}
                total={sampleRowData.length} // total={total}
                handleOneData={handleOneData}
                handleDetailData={handleDetailData}
                handleSelect={handleSelect}
                handleChange={handleChange}
                handleSearch={handleSearch}
                onAddClick={onAddClick}
                onConfirm={onConfirm}
            />
            <UploadModal />
            <DetailModal handleDetailData={handleDetailData} />
            <MessageModal handleConfirm={handleDelete} />
        </>
    );
}
