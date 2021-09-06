import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router";
import useMenu from "hooks/useMenu";
import useErrorMsg from "hooks/useErrorMsg";

import { summarySelector, getSummaryInfo, updateSummaryInfo, clearError, resetStates } from "slices/summarySlice";
import { setMessage, setDetail, setClose } from "slices/modalSlice";

import { isEmpty } from "utils/common";

import useStyles from "styles/customize/table/DetailTableStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import Select from "common/table/Select";
import ListButton from "common/button/PageButton";
import MessageModal from "common/modal/MessageModal";
import DetailModal from "common/modal/DetailModal";

import { sampleData, tableSelectOptions } from "components/Data";

export default function DashboardDetail() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const { idx } = useParams();

    const { data, images, status, statusCode, errorMsg } = useSelector(summarySelector);
    const [imageIndex, setImageIndex] = useState(0);

    // 메뉴 설정하기
    useMenu({ page: "Dashboard Detail", menu: "summary", title: "Dashboard", num: 1 });

    // 데이터 불러오기
    const handleData = useCallback(async () => {
        // await dispatch(getSummaryInfo(`/web?idx=${idx}`));
    }, [dispatch, idx]);

    useEffect(() => {
        handleData();
    }, [handleData]);

    // 에러 메시지 노출하기
    useErrorMsg(status, statusCode, errorMsg);

    const handleSelect = async (type, idx, value) => {
        if (isEmpty(idx) || isEmpty(value)) {
            return dispatch(setMessage({ open: true, message: "Error" }));
        }

        // 예제
        const resultAction = await dispatch(updateSummaryInfo({ url: "/web/change-status", data: { idx, [type]: value } }));
        if (updateSummaryInfo.fulfilled.match(resultAction)) {
            // 성공
        } else {
            if (resultAction.payload) {
                dispatch(setMessage({ open: true, message: resultAction.payload.message }));
            } else {
                dispatch(setMessage({ open: true, message: "Error" }));
            }
        }
    };

    // 페이지 이동하기
    const onClick = (pageType) => {
        dispatch(resetStates()); // redux reset

        if (pageType === "edit") {
            return history.push({
                pathname: `/dashboard/edit/${idx}`,
                search: location.search
            });
        } else {
            return history.push({
                pathname: "/",
                search: location.search
            });
        }
    };

    // 이미지 이전 버튼
    const onPreviousImage = () => {
        if (imageIndex <= 0) {
            setImageIndex(images.length - 1);
        } else {
            setImageIndex((prevState) => prevState - 1);
        }
    };

    // 이미지 다음 버튼
    const onNextImage = () => {
        if (imageIndex >= images.length - 1) {
            setImageIndex(0);
        } else {
            setImageIndex((prevState) => prevState + 1);
        }
    };

    // 작은 이미지 클릭
    const onImageClick = (index) => {
        setImageIndex(index);
    };

    // 이력 / 정보 조회 모달창 띄우기
    const onOpen = async (type) => {
        dispatch(setDetail({ open: true, data: { type, title: "판매량 조회", quantity: 140000 } }));
    };

    // 모달 닫기
    const onClose = () => {
        dispatch(setClose());
        dispatch(clearError());
    };

    return (
        <div className={classes.root}>
            <div className={classes.heading}>
                <ChevronLeftIcon onClick={onClick} />
                <Typography variant="h2" component="h3" display="inline">
                    디저트 상세
                </Typography>
            </div>
            <Paper className={classes.paper} elevation={0}>
                <div className={classes.contentContainer}>
                    <div className={classes.contentImage}>
                        <Typography variant="h3" component="h4" display="block">
                            디저트 사진
                        </Typography>
                        {images && images.length > 0 ? (
                            <div>
                                <Grid className={classes.imageContainer} container justify="flex-start" alignItems="center">
                                    <img width={500} height={500} src={images[imageIndex].src} alt="" />
                                    <Grid className={classes.imageButtonContainer} item container justify="space-between" alignItems="center">
                                        <Button startIcon={<ChevronLeftIcon />} className={classes.imageButton} variant="contained" onClick={onPreviousImage}></Button>
                                        <Button endIcon={<ChevronRightIcon />} className={classes.imageButton} variant="contained" onClick={onNextImage}></Button>
                                    </Grid>
                                </Grid>
                                <Grid container justify="flex-start" alignItems="center" className={classes.imagePreviewContainer}>
                                    {images.map((img, index) => (
                                        <img onClick={() => onImageClick(index)} key={img.index} width={45} height={45} src={img.src} alt="" />
                                    ))}
                                </Grid>
                            </div>
                        ) : (
                            <div className={classes.noImage}>No Image</div>
                        )}
                    </div>
                    <div className={classes.tableContainer}>
                        <Typography className={classes.heading} variant="h3" component="h4" display="block">
                            디저트 정보
                        </Typography>
                        <table className={classes.noBorderTable}>
                            <colgroup>
                                <col width="20%"></col>
                                <col width="80%"></col>
                            </colgroup>
                            <tbody>
                                <tr className={classes.row}>
                                    <th className={classes.label}>디저트명</th>
                                    <td className={classes.content}>{sampleData && sampleData.name ? sampleData.name : "-"}</td>
                                </tr>
                                <tr className={classes.row}>
                                    <th className={classes.label}>등록일</th>
                                    <td className={classes.content}>{sampleData && sampleData.regDate ? sampleData.regDate : "-"}</td>
                                </tr>
                                <tr className={classes.row}>
                                    <th className={classes.label}>카테고리</th>
                                    <td className={classes.content}>{sampleData && sampleData.category ? sampleData.category : "-"}</td>
                                </tr>
                                <tr className={classes.row}>
                                    <th className={classes.label}>색상</th>
                                    <td className={classes.content}>{sampleData && sampleData.color ? sampleData.color : "-"}</td>
                                </tr>
                                <tr className={classes.row}>
                                    <th className={classes.label}>원재료명</th>
                                    <td className={classes.content}>{sampleData && sampleData.ingredients ? sampleData.ingredients : "-"}</td>
                                </tr>
                            </tbody>
                        </table>
                        <hr />
                        <Typography className={classes.mb20} variant="h3" component="h4" display="block">
                            영양정보
                        </Typography>
                        <table className={classes.noBorderTable}>
                            <colgroup>
                                <col width="20%"></col>
                                <col width="80%"></col>
                            </colgroup>
                            <tbody>
                                <tr className={classes.row}>
                                    <th className={classes.label}>칼로리</th>
                                    <td className={classes.content}>{sampleData && sampleData.calories ? sampleData.calories : "-"}</td>
                                </tr>
                                <tr className={classes.row}>
                                    <th className={classes.label}>지방</th>
                                    <td className={classes.content}>{sampleData && sampleData.fat ? sampleData.fat : "-"}</td>
                                </tr>
                                <tr className={classes.row}>
                                    <th className={classes.label}>탄수화물</th>
                                    <td className={classes.content}>{sampleData && sampleData.carbs ? sampleData.carbs : "-"}</td>
                                </tr>
                                <tr className={classes.row}>
                                    <th className={classes.label}>프로틴</th>
                                    <td className={classes.content}>{sampleData && sampleData.protein ? sampleData.protein : "-"}</td>
                                </tr>
                                <tr className={classes.row}>
                                    <th className={classes.label}>판매량</th>
                                    <td className={classes.content}>
                                        <div className={classes.buttonContent}>
                                            <p className={classes.buttonContentText}>{sampleData && sampleData.quantity ? sampleData.quantity : "-"} </p>
                                            <Button className={classes.button} variant="outlined" onClick={() => onOpen("quantity")}>
                                                판매량 확인하기
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <hr />
                        <Typography className={classes.mb20} variant="h3" component="h4" display="block">
                            노출 여부
                        </Typography>
                        <table className={classes.noBorderTable}>
                            <colgroup>
                                <col width="20%"></col>
                                <col width="80%"></col>
                            </colgroup>
                            <tbody>
                                <tr className={classes.row}>
                                    <th className={classes.label}>노출 여부</th>
                                    <td align="left" className={classes.content}>
                                        <Grid className={classes.selectContainer} container justify="flex-start" alignItems="center" direction="row">
                                            <Select
                                                name="viewYn"
                                                rowIndex={sampleData.idx}
                                                value={sampleData.viewYn}
                                                label={sampleData.viewYnText}
                                                options={tableSelectOptions["viewYn"]}
                                                handleSelect={handleSelect}
                                            />
                                        </Grid>
                                    </td>
                                </tr>
                                <tr className={classes.row}>
                                    <th className={classes.label}>판매 여부</th>
                                    <td className={classes.content}>
                                        <Grid className={classes.selectContainer} container justify="flex-start" alignItems="center" direction="row">
                                            <Select
                                                name="useYn"
                                                rowIndex={sampleData.idx}
                                                value={sampleData.useYn}
                                                label={sampleData.useYnText}
                                                options={tableSelectOptions["useYn"]}
                                                handleSelect={handleSelect}
                                            />
                                            <Typography className={classes.statusText} variant="body2">
                                                판매중인 디저트입니다.
                                            </Typography>
                                        </Grid>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Paper>
            <div className={classes.buttonsContainer}>
                <div className={classes.marginAuto}>
                    <ListButton text="목록" pageType="search" onClick={onClick} />
                    <ListButton text="수정하기" pageType="edit" onClick={onClick} />
                </div>
            </div>
            <MessageModal onClose={onClose} />
            <DetailModal onClose={onClose} />
        </div>
    );
}
