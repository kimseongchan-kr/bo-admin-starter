import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector, setPage, setSort } from "slices/searchSlice";

import { makeStyles } from "@material-ui/core/styles";
import { TableContainer, Paper, Table, TableHead, TableSortLabel, TableBody, TableRow, TableCell, TablePagination } from "@material-ui/core";

import Filters from "features/example/components/Filter";
import UseSelect from "common/inputs/UseSelect";
import ViewSelect from "common/inputs/ViewSelect";
import TablePaginationActions from "common/table/Pagination";

import { ExampleHeadCell as headCells, SampleRowData as rowData } from "features/example/ExampleData";
import EditButton from "common/inputs/EditButton";
import DeleteButton from "common/inputs/DeleteButton";
import TextInput from "common/inputs/TextField";

const useStyles = makeStyles((theme) => ({
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
    visuallyHidden: {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        top: 20,
        width: 1
    }
}));

export default function ExampleTable({ handleOneData, handleDetailData, handleDelete, handleChange, handleSelect, handleSearch }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { pageNumber, pageShow, sortNm, sortOrder } = useSelector(searchSelector);

    // 정렬하기
    const createSortHandler = (property) => async (event) => {
        const isAsc = sortNm === property && sortOrder === "asc";
        await dispatch(setSort({ sortNm: property, sortOrder: isAsc ? "desc" : "asc" }));
        handleSearch();
    };

    // 페이지 이동하기
    const handleChangePage = async (newPage) => {
        await dispatch(setPage({ pageNumber: newPage, pageShow }));
        handleSearch();
    };

    // rows per page 변경하기
    const handleChangeRowsPerPage = async (event) => {
        await dispatch(setPage({ pageNumber: 0, pageShow: parseInt(event.target.value, 10) }));
        handleSearch();
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table className={classes.table} aria-labelledby="exampleTable" size="medium" aria-label="example table">
                        <TableHead>
                            <TableRow>
                                {headCells.map((headCell) => (
                                    <TableCell
                                        key={headCell.id}
                                        align="center"
                                        padding={headCell.disablePadding ? "none" : "default"}
                                        sortDirection={headCell.sort && sortNm === headCell.id ? sortOrder : false}
                                    >
                                        {headCell.label}
                                        {headCell.sort && (
                                            <TableSortLabel active={sortNm === headCell.id} direction={sortNm === headCell.id ? sortOrder : "asc"} onClick={createSortHandler(headCell.id)}>
                                                {sortNm === headCell.id ? <span className={classes.visuallyHidden}>{sortOrder === "desc" ? "sorted descending" : "sorted ascending"}</span> : null}
                                            </TableSortLabel>
                                        )}
                                        {headCell.filter && <Filters filterType={headCell.id} handleSearch={handleSearch} />}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rowData.map((row, index) => {
                                return (
                                    <TableRow hover tabIndex={-1} key={index}>
                                        <TableCell className={classes.cursor} align="center" padding="none" onClick={() => handleOneData(row.key)}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell className={classes.cursor} align="center" padding="none" onClick={() => handleDetailData(row.key)}>
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
                                        <TableCell className={classes.selectRow} padding="none">
                                            <UseSelect useYn={row.useYn} handleSelect={handleSelect} />
                                        </TableCell>
                                        <TableCell className={classes.selectRow} padding="none">
                                            <ViewSelect useYn={row.viewYn} handleSelect={handleSelect} />
                                        </TableCell>
                                        <TableCell align="center" padding="none">
                                            <TextInput handleChange={handleChange} value={row.textExample} />
                                        </TableCell>
                                        <TableCell align="center" padding="none">
                                            <EditButton modalId={row.key} handleOneData={handleOneData} />
                                            <DeleteButton modalId={row.key} handleDelete={handleDelete} />
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
                </TableContainer>
                <TablePagination
                    component="div"
                    ActionsComponent={TablePaginationActions}
                    classes={{
                        caption: classes.caption
                    }}
                    SelectProps={{
                        inputProps: { "aria-label": "rows per page" }
                    }}
                    labelDisplayedRows={({ from, to, count }) => `${from > count ? count : from}-${to} of ${count !== -1 ? count : `more than ${to}`} items`}
                    rowsPerPageOptions={[10, 20, 30, 50, 100]}
                    rowsPerPage={pageShow ? pageShow : 10}
                    count={rowData.length}
                    page={pageNumber > 0 ? pageNumber - 1 : 0} // page가 0부터 시작
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}
