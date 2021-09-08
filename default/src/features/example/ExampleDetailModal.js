import React, { useState } from "react";
import { useSelector } from "react-redux";
import { modalSelector } from "slices/modalSlice";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";

import { headCell } from "components/Data";
import { disableScroll, enableScroll } from "utils/common";

import Modal from "react-modal";
import Close from "@material-ui/icons/Close";

Modal.defaultStyles.overlay.zIndex = 9999;
Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, .45)";

const useStyles = makeStyles((theme) => ({
    title: {
        width: " 100%",
        minWidth: 750,
        position: "relative",
        fontWeight: 500,
        letterSpacing: "-1.44px",
        marginBottom: 20,
        [theme.breakpoints.up("md")]: {
            "& > svg": {
                right: 0
            }
        }
    },
    closeIcon: {
        position: "absolute",
        right: 30,
        cursor: "pointer"
    },
    table: {
        minWidth: 750
    },
    cursor: {
        cursor: "pointer"
    },
    pagination: {
        width: "100%",
        minWidth: 750,
        marginTop: 27,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& > nav": {
            marginRight: "auto",
            marginLeft: "auto"
        }
    }
}));

export default function ExampleDetailModal({ menu, title, handleDetailData, onClose }) {
    const classes = useStyles();
    const { detailOpen, detailData } = useSelector(modalSelector);

    const [pageNumber, setPageNumber] = useState(1);
    const totalCount = detailOpen ? Math.ceil(detailData.length / 15) : 0; // total data

    const handleChange = (event, value) => {
        setPageNumber(value);
        handleDetailData(detailData.index, value);
    };

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

    return (
        <Modal isOpen={detailOpen} onRequestClose={onClose} style={modalStyles} contentLabel="Detail Modal" onAfterOpen={disableScroll} onAfterClose={enableScroll}>
            {detailOpen && (
                <>
                    <Typography variant="h2" component="h2" color="inherit" className={classes.title}>
                        {title}
                        <Close className={classes.closeIcon} onClick={onClose} />
                    </Typography>
                    <Table className={classes.table} aria-labelledby="detailTable" size="medium" aria-label="detail table">
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
                            {detailData.length === 0 ? (
                                <TableRow>
                                    <TableCell align="center" colSpan={6}>
                                        No Data
                                    </TableCell>
                                </TableRow>
                            ) : (
                                detailData.map((row, index) => {
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
