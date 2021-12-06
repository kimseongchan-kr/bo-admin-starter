import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalSelector, setClose } from "slices/modalSlice";

import { makeStyles } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Pagination from "@mui/material/Pagination";
import Close from "@mui/icons-material/Close";

import { headCell } from "components/Data";

const useStyles = makeStyles((theme) => ({
    container: {
        minWidth: 1145,
        maxWidth: "100%"
    },
    title: {
        width: " 100%",
        minWidth: 1145,
        fontWeight: 500,
        letterSpacing: "-1.44px"
    },
    closeIcon: {
        margin: "16px 30px 16px 0",
        fontSize: 14,
        lineHeight: 1.6,
        cursor: "pointer"
    },
    table: {
        minWidth: 1145
    },
    cursor: {
        cursor: "pointer"
    },
    pagination: {
        width: "100%",
        minWidth: 750,
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& > nav": {
            marginRight: "auto",
            marginLeft: "auto"
        }
    }
}));

export default function ExampleDetailModal({ handleDetailData }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { detailOpen, detailData } = useSelector(modalSelector);
    const { menu, title, index, data } = detailData || {};

    const [pageNumber, setPageNumber] = useState(1);
    const totalCount = detailOpen ? Math.ceil(data.length / 15) : 0; // total data

    const ExampleData = ({ row }) => {
        return (
            <>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                <TableCell align="center">{row.useYn}</TableCell>
                <TableCell align="center">{row.viewYn}</TableCell>
            </>
        );
    };

    const handleChange = (_, value) => {
        setPageNumber(value);
        handleDetailData(index, value);
    };

    const onClose = () => dispatch(setClose());

    return (
        <>
            {detailOpen && (
                <Dialog open={detailOpen} onClose={onClose} sx={{ p: 10 }} classes={{ paper: classes.container }}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item xs={11}>
                            <DialogTitle className={classes.title}>{title}</DialogTitle>
                        </Grid>
                        <Grid item xs={1} container justifyContent="flex-end">
                            <Close onClick={onClose} className={classes.closeIcon} />
                        </Grid>
                    </Grid>
                    <DialogContent>
                        <Paper sx={{ borderRadius: "4px", pb: 2.5, border: "1px solid #eeeeee" }} elevation={0}>
                            <Table className={classes.detailTable} aria-labelledby="detailTable" size="medium" aria-label="detail table">
                                <TableHead>
                                    <TableRow>
                                        {headCell["ExampleDetail"].map((cell) => (
                                            <TableCell key={cell.id} align="center">
                                                {cell.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.length === 0 ? (
                                        <TableRow>
                                            <TableCell align="center" colSpan={6}>
                                                No Data
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        data.map((row, index) => {
                                            return (
                                                <TableRow hover tabIndex={-1} key={index}>
                                                    {menu === "Example" && <ExampleData row={row} />}
                                                </TableRow>
                                            );
                                        })
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
                        </Paper>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
}
