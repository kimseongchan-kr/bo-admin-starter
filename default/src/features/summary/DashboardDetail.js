import React, { useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { setDetail } from "slices/modalSlice";
import { useMutation, useQueryClient } from "react-query";
import { putData } from "api";

import useMenu from "hooks/useMenu";
import useMessage from "hooks/useMessage";
import usePageMove from "hooks/usePageMove";
import useGetById from "hooks/useGetById";

import { getMessageText, handleZipDownload, isEmpty } from "utils/common";

import useStyles from "styles/customize/table/DetailTableStyles";
import Header from "layout/page/Header";
import Buttons from "layout/page/Buttons";
import ImageCarousel from "components/image/ImageCarousel";
import DetailTable from "features/summary/components/DetailTable";

import MessageModal from "common/modal/MessageModal";
import DetailModal from "common/modal/DetailModal";

import { sampleData } from "components/Data";

export default function DashboardDetail() {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const classes = useStyles();
    const { idx } = useParams();

    // 메뉴 설정하기
    // menu = Dashboard
    const menu = useMenu({ page: "Dashboard", menu: "summary", menuTitle: "Dashboard", menuNum: 0 });

    const handleMessage = useMessage(); // 메시지 / 확인 모달 열기
    const handlePageClick = usePageMove({ baseUrl: "/" }); // 페이지 이동하기

    const [downloading, setDownloading] = useState(false);

    // 상세 데이터 API 호출
    const { isSuccess, data: detailData } = useGetById({ menu, url: `/web/detail/${idx}` });
    // -----SAMPLE-----
    const { data = sampleData, images = [] } = detailData || {};
    // -----SAMPLE-----

    // 수정 API
    const handleUpdateData = useMutation(({ url, data }) => putData(url, data), {
        onSuccess: (data) => {
            // API에서 수정된 값(=data)을 setQueryData를 사용해서 수정된 데이터로 변경하기
            queryClient.setQueryData([`${menu} detail`, idx], (old) => {
                return { ...old, ...data };
            });
        },
        onError: (error) => handleMessage({ type: "message", ...error })
    });

    const handleSelect = (name, idx, value) => {
        if (isEmpty(idx) || isEmpty(value)) {
            handleMessage("message", getMessageText("fail"));
        } else {
            handleUpdateData.mutate({ url: "/web/update/example", data: { idx, [name]: value } });
        }
    };

    // 이미지 ZIP 파일 다운로드
    const handleDownload = async () => {
        let message = "";
        try {
            setDownloading(true);
            message = await handleZipDownload(images);
        } catch (error) {
            handleMessage({ type: "message", message: getMessageText("image download") });
        } finally {
            setDownloading(false);
            if (message.length > 0) {
                handleMessage({ type: "message", message });
            }
        }
    };

    // 이력 / 정보 조회 모달창 띄우기
    const onOpen = (type) => dispatch(setDetail({ open: true, data: { type, title: "판매량 조회", quantity: 140000 } }));

    return (
        <>
            <Header text="디저트 상세" onPageClick={handlePageClick} />
            <div className={classes.contentContainer}>
                <ImageCarousel text="디저트 이미지" images={images || []} alt="상품 이미지" />
                <DetailTable isSuccess={isSuccess} disabled={downloading || images?.length === 0} data={data} handleDownload={handleDownload} handleSelect={handleSelect} onOpen={onOpen} />
            </div>
            <Buttons type="detail" onPageClick={handlePageClick} />
            <DetailModal />
            <MessageModal />
        </>
    );
}
