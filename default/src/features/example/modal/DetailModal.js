import React, { useState } from "react";
import { useSelector } from "react-redux";
import { modalSelector } from "slices/modalSlice";

import { makeStyles } from "@material-ui/core/styles";
import { Table, TableHead, TableBody, TableRow, TableCell, Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import { ExampleHeadCell } from "features/example/Data";
import { disableScroll, enableScroll } from "utils/CommonFunction";

import Modal from "react-modal";
Modal.defaultStyles.overlay.zIndex = 9999;
Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, .45)";

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

export default function DetailModal({ handleDetailData, onClose }) {
    const classes = useStyles();
    const { modalId, detailOpen, modalData } = useSelector(modalSelector);

    const [pageNumber, setPageNumber] = useState(1);
    const totalCount = detailOpen ? Math.ceil(modalData.length / 15) : 0; // total data

    const handleChange = (event, value) => {
        setPageNumber(value);
        handleDetailData(modalId, value);
    };

    return (
        <Modal isOpen={detailOpen} onRequestClose={onClose} style={modalStyles} contentLabel="Detail Modal" onAfterOpen={disableScroll} onAfterClose={enableScroll}>
            {detailOpen && (
                <>
                    <Typography variant="h2" component="h2" color="inherit" className={classes.title}>
                        Summary 상세
                    </Typography>
                    <Table className={classes.table} aria-labelledby="detailTable" size="medium" aria-label="detail table">
                        <TableHead>
                            <TableRow>
                                {ExampleHeadCell["ExampleDetail"].map((headCell) => (
                                    <TableCell key={headCell.id} align="center" padding={headCell.disablePadding ? "none" : "default"}>
                                        {headCell.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {modalData.map((row, index) => {
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
                            {modalData === 0 && (
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
                </>
            )}
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
