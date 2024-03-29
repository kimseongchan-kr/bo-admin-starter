import React from "react";
import { useLocation, useParams } from "react-router-dom";

import Grid from "@mui/material/Grid";
import ListButton from "common/button/PageButton";
import SubmitButton from "common/button/SubmitButton";

export default function Buttons({ type, loading, onPageClick, onConfirm }) {
    const { idx } = useParams();
    const location = useLocation();

    const DetailEditButtons = () => (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>
                <ListButton text="목록" pageType="list" onClick={onPageClick} />
            </Grid>
            <Grid item>
                <ListButton text="수정하기" pageType="edit" onClick={onPageClick} />
            </Grid>
        </Grid>
    );

    const UploadButtons = () => (
        <Grid sx={{ px: 3 }} container justifyContent="space-between" alignItems="center">
            <Grid item>
                <ListButton disabled={loading} text="취소" pageType="search" onClick={() => onConfirm(idx ? "editCancel" : "uploadCancel")} />
            </Grid>
            <Grid sx={{ width: "auto" }} item container justifyContent="flex-end" alignItems="center">
                <Grid item sx={{ mr: "10px" }}>
                    <SubmitButton text="입력 초기화" loading={loading} type="button" onClick={() => onConfirm("reset")} />
                </Grid>
                <Grid item>
                    {idx && location?.pathname?.includes("/edit") ? <SubmitButton text="수정하기" loading={loading} type="submit" /> : <SubmitButton text="등록하기" loading={loading} type="submit" />}
                </Grid>
            </Grid>
        </Grid>
    );

    return <>{type === "detail" ? <DetailEditButtons /> : <UploadButtons />}</>;
}
