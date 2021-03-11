import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { summarySelector, setDetail } from "slices/summarySlice";

import { makeStyles } from "@material-ui/core/styles";
import { Table, TableHead, TableBody, TableRow, TableCell, Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import { SummaryHeadCell } from "features/summary/SummaryData";
import { disableScroll, ableScroll } from "utils/CommonFunction";

import Modal from "react-modal";
Modal.defaultStyles.overlay.zIndex = 9999;

const rowData = [
    { key: 1, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" },
    { key: 2, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" },
    { key: 3, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" },
    { key: 4, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" },
    { key: 5, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" },
    { key: 6, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" },
    { key: 7, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3, useYn: "사용", viewYn: "활성화" }
];

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: 500,
        letterSpacing: "-1.44px",
        marginBottom: 20
    },
    root: {
        width: "100%",
        marginBottom: 30
    },
    paper: {
        width: "100%",
        marginBottom: theme.spacing(2)
    },

    table: {
        minWidth: 750
    },
    cursor: {
        cursor: "pointer"
    },
    pagination: {
        minWidth: "100%",
        marginTop: 27,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));

export default function AddModifyModal() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { detailOpen } = useSelector(summarySelector);

    const [pageNumber, setPageNumber] = useState(1);
    const totalCount = Math.ceil(rowData.length / 15);

    const handleChange = (event, value) => {
        setPageNumber(value);
    };

    return (
        <Modal isOpen={detailOpen} onRequestClose={() => dispatch(setDetail(false))} style={modalStyles} contentLabel="Detail Modal" onAfterOpen={disableScroll} onAfterClose={ableScroll}>
            <Typography variant="h2" component="h2" color="inherit" className={classes.title}>
                Summary 상세
            </Typography>
            <Table className={classes.table} aria-labelledby="detailTable" size="medium" aria-label="detail table">
                <TableHead>
                    <TableRow>
                        {SummaryHeadCell.map((headCell) => (
                            <TableCell key={headCell.id} align="center" padding={headCell.disablePadding ? "none" : "default"}>
                                {headCell.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowData.map((row, index) => {
                        return (
                            <TableRow hover tabIndex={-1} key={index}>
                                <TableCell align="center" padding="none">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center" padding="none">
                                    {row.calories}
                                </TableCell>
                                <TableCell align="center" padding="none">
                                    {row.fat}
                                </TableCell>
                                <TableCell align="center" padding="none">
                                    {row.carbs}
                                </TableCell>
                                <TableCell align="center" padding="none">
                                    {row.protein}
                                </TableCell>
                                <TableCell align="center" padding="none">
                                    {row.useYn}
                                </TableCell>
                                <TableCell align="center" padding="none">
                                    {row.viewYn}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                    {rowData === 0 && (
                        <TableRow>
                            <TableCell align="center" colSpan={6}>
                                No Data
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className={classes.pagination}>
                <Pagination
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                    count={totalCount}
                    defaultPage={1}
                    siblingCount={0}
                    boundaryCount={1}
                    showFirstButton
                    showLastButton
                    page={pageNumber}
                    onChange={handleChange}
                />
            </div>
        </Modal>
    );
}

const modalStyles = {
    content: {
        width: "80%",
        minWidth: 500,
        padding: "30px",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        maxHeight: "80%"
    }
};
