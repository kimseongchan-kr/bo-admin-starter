import React from "react";
import PropTypes from "prop-types";

import useStyles from "styles/customize/table/DetailTableStyles";
import Grid from "@mui/material/Grid";

import Heading from "layout/page/Heading";
import DefaultButton from "common/button/DefaultButton";
import Select from "common/table/Select";

import { tableSelectOptions } from "components/Data";

function DetailTable({ isSuccess, disabled, data, handleDownload, handleSelect, onOpen }) {
    const classes = useStyles();

    return (
        <div className={classes.tableContainer}>
            <Heading type="button" text="디저트 정보" buttonText="이미지 다운로드" disabled={disabled} onClick={handleDownload} />
            <table className={classes.table}>
                <colgroup>
                    <col width="12%" />
                    <col width="88%" />
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
                    <col width="12%" />
                    <col width="88%" />
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
                    <col width="12%" />
                    <col width="88%" />
                </colgroup>
                <tbody>
                    <tr>
                        <th>노출 여부</th>
                        <td>
                            {isSuccess && (
                                <Grid className={classes.selectContainer} container justifyContent="flex-start" alignItems="center" direction="row">
                                    <Select name="viewYn" rowIndex={data?.idx} value={data?.viewYn} label={data?.viewYnText} options={tableSelectOptions.viewYn} handleSelect={handleSelect} />
                                </Grid>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>판매 여부</th>
                        <td className={classes.selectContent}>
                            {isSuccess && (
                                <Grid className={classes.selectContainer} container justifyContent="flex-start" alignItems="center" direction="row">
                                    <Select name="useYn" rowIndex={data?.idx} value={data?.useYn} label={data?.useYnText} options={tableSelectOptions.useYn} handleSelect={handleSelect} />
                                    <p className={classes.statusText}>{data?.useYn === "Y" ? "판매중인 디저트입니다." : "판매 종료된 디저트입니다."}</p>
                                </Grid>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

DetailTable.propTypes = {
    data: PropTypes.object.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    handleDownload: PropTypes.func.isRequired,
    handleSelect: PropTypes.func.isRequired,
    onOpen: PropTypes.func.isRequired
};

export default DetailTable;
