import React from "react";
import { useDispatch } from "react-redux";

import useMenu from "hooks/useMenu";
import useSearch from "hooks/useSearch";
import useGetList from "hooks/useGetList";

import { setDetail, setEdit } from "slices/modalSlice";

import ExampleSearch from "components/search/DateTermSearch";
import ExampleTable from "components/table/Table";
import UploadModal from "features/example/ExampleUpload";
import DetailModal from "features/example/ExampleDetail";
import MessageModal from "common/modal/MessageModal";

import { sampleRowData } from "components/Data";

export default function Example() {
    const dispatch = useDispatch();

    const menu = useMenu({ page: "Example", menu: "example", menuTitle: "Example", menuNum: 1 }); // 페이지/메뉴 설정하기

    // 리스트 데이터 가져오기
    const {
        params,
        isLoading,
        data: dataList
    } = useGetList({
        menu,
        url: "/web/example"
    });

    // 검색하기
    const handleSearch = useSearch({ params });

    // 추가 모달 띄우기
    const onAddClick = () => dispatch(setEdit({ open: true, data: null }));

    // 상세 모달 띄우기
    const onDetailClick = (index) => dispatch(setDetail({ open: true, data: { selectedIndex: index, menu: "Example", title: "상세 조회" } }));

    // 수정 모달 띄우기
    const onEditClick = (index, data) => {
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

    return (
        <>
            <ExampleSearch
                menu={menu}
                total={sampleRowData.length} // total={total}
                handleSearch={handleSearch}
            />
            <ExampleTable
                menu={menu}
                loading={isLoading}
                data={sampleRowData || dataList} // data={dataList}
                total={sampleRowData.length} // total={total}
                handleSearch={handleSearch}
                onAddClick={onAddClick}
                onEditClick={onEditClick}
                onDetailClick={onDetailClick}
            />
            <UploadModal />
            <DetailModal />
            <MessageModal />
        </>
    );
}
