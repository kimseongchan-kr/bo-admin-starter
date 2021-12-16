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
import Grid from "@mui/material/Grid";

import Header from "layout/Page/Header";
import Heading from "layout/Page/Heading";
import Buttons from "layout/Page/Buttons";
import ImageCarousel from "components/Image/ImageCarousel";

import DefaultButton from "common/button/DefaultButton";
import Select from "common/table/Select";
import MessageModal from "common/modal/MessageModal";
import DetailModal from "common/modal/DetailModal";

import { sampleData, tableSelectOptions } from "components/Data";

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
    const { isSuccess, data: detailData } = useGetById({ menu, url: "/web/detail/1" });
    // -----SAMPLE-----
    const { data = sampleData, images = [] } = detailData || {};
    // -----SAMPLE-----

    const handleSelect = (name, idx, value) => {
        if (isEmpty(idx) || isEmpty(value)) {
            return handleMessage("message", getMessageText("fail"));
        }

        handleUpdateData.mutate({ url: "/web/update/example", fileYn: false, data: { idx, [name]: value } });
    };

    // 수정 API
    const handleUpdateData = useMutation(({ url, fileYn, data }) => putData(url, fileYn, data), {
        onSuccess: (data) => {
            // API에서 수정된 값(=data)을 setQueryData를 사용해서 수정된 데이터로 변경하기
            queryClient.setQueryData([`${menu} detail`, idx], (old) => {
                return { ...old, ...data };
            });
        },
        onError: (error) => handleMessage({ type: "message", ...error })
    });

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
                <div className={classes.tableContainer}>
                    <Heading type="button" text="디저트 정보" buttonText="이미지 다운로드" disabled={downloading} onClick={handleDownload} />
                    <table className={classes.table}>
                        <colgroup>
                            <col width="12%"></col>
                            <col width="88%"></col>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>디저트명</th>
                                <td>{data?.name || "-"}</td>
                            </tr>
                            <tr>
                                <th>등록일</th>
                                <td>{data?.regDate || "-"}</td>
                            </tr>
                            <tr>
                                <th>카테고리</th>
                                <td>{data?.category || "-"}</td>
                            </tr>
                            <tr>
                                <th>색상</th>
                                <td>{data?.color || "-"}</td>
                            </tr>
                            <tr>
                                <th>원재료명</th>
                                <td>{data?.ingredients || "-"}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Heading type="default" text="영양정보" />
                    <table className={classes.table}>
                        <colgroup>
                            <col width="12%"></col>
                            <col width="88%"></col>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>칼로리</th>
                                <td>{data?.calories || "-"}</td>
                            </tr>
                            <tr>
                                <th>지방</th>
                                <td>{data?.fat || "-"}</td>
                            </tr>
                            <tr>
                                <th>탄수화물</th>
                                <td>{data?.carbs || "-"}</td>
                            </tr>
                            <tr>
                                <th>프로틴</th>
                                <td>{data?.protein || "-"}</td>
                            </tr>
                            <tr>
                                <th>판매량</th>
                                <td>
                                    <Grid container justifyContent="space-between" alignItems="center">
                                        <p>{data?.quantity || "-"}</p>
                                        <DefaultButton text="판매량 확인하기" size="medium" color="primary" variant="outlined" onClick={() => onOpen("quantity")} />
                                    </Grid>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Heading type="default" text="노출 여부" />
                    <table className={classes.table}>
                        <colgroup>
                            <col width="12%"></col>
                            <col width="88%"></col>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>노출 여부</th>
                                <td>
                                    {isSuccess && (
                                        <Grid className={classes.selectContainer} container justifyContent="flex-start" alignItems="center" direction="row">
                                            <Select
                                                name="viewYn"
                                                rowIndex={data?.idx}
                                                value={data?.viewYn}
                                                label={data?.viewYnText}
                                                options={tableSelectOptions["viewYn"]}
                                                handleSelect={handleSelect}
                                            />
                                        </Grid>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <th>판매 여부</th>
                                <td className={classes.selectContent}>
                                    {isSuccess && (
                                        <Grid className={classes.selectContainer} container justifyContent="flex-start" alignItems="center" direction="row">
                                            <Select name="useYn" rowIndex={data?.idx} value={data?.useYn} label={data?.useYnText} options={tableSelectOptions["useYn"]} handleSelect={handleSelect} />
                                            <p className={classes.statusText}>{data?.useYn === "Y" ? "판매중인 디저트입니다." : "판매 종료된 디저트입니다."}</p>
                                        </Grid>
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Buttons type="detail" onPageClick={handlePageClick} />
            <DetailModal />
            <MessageModal />
        </>
    );
}
