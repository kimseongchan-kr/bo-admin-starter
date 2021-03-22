import React from "react";
import { useSelector } from "react-redux";
import { searchSelector } from "slices/searchSlice";

import { makeStyles } from "@material-ui/core/styles";
import { TableContainer, Paper, Table, TableHead, TableSortLabel, TableBody, TableRow, TableCell, TablePagination } from "@material-ui/core";

import Filters from "features/example/components/Filter";
import UseSelect from "common/table/UseSelect";
import ViewSelect from "common/table/ViewSelect";
import EditButton from "common/table/EditButton";
import DeleteButton from "common/table/DeleteButton";
import TextInput from "common/table/TextField";
import TablePaginationActions from "common/table/Pagination";

import { ExampleHeadCell as headCells, SampleRowData as rowData } from "features/example/Data";

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
        cursor: "pointer",
        textDecoration: "underline"
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

export default function ExampleTable(props) {
    const classes = useStyles();
    const { pageNumber, pageShow, sortNm, sortOrder } = useSelector(searchSelector);
    const { menu, handleOneData, handleDetailData, handleChange, handleDelete, handleSelect, handleFilter, handleSearch, handleSort, handlePage, onOpen, onConfirm } = props;

    const ExampleData = ({ row, index }) => {
        return (
            <>
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
                <TableCell align="center" padding="none">
                    <UseSelect useYn={row.useYn} handleSelect={handleSelect} />
                </TableCell>
                <TableCell align="center" padding="none">
                    <ViewSelect viewYn={row.viewYn} handleSelect={handleSelect} />
                </TableCell>
                <TableCell align="center" padding="none">
                    <TextInput index={index} handleChange={handleChange} value={row.textExample} />
                </TableCell>
                <TableCell align="center" padding="none">
                    <EditButton modalId={row.key} handleOneData={handleOneData} />
                    <DeleteButton modalId={row.key} handleDelete={handleDelete} />
                </TableCell>
            </>
        );
    };

    // 정렬하기
    const createSortHandler = (property) => (event) => {
        const isAsc = sortNm === property && sortOrder === "asc";
        handleSort({ sortNm: property, sortOrder: isAsc ? "desc" : "asc" });
    };

    // 페이지 이동하기
    const handleChangePage = (newPage) => {
        handlePage({ pageNumber: newPage, pageShow });
    };

    // rows per page 변경하기
    const handleChangeRowsPerPage = (event) => {
        handlePage({ pageNumber: 0, pageShow: parseInt(event.target.value, 10) });
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table className={classes.table} aria-labelledby="exampleTable" size="medium" aria-label="example table">
                        <TableHead>
                            <TableRow>
                                {headCells[menu].map((headCell) => (
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
                                        {headCell.filter && <Filters filterType={headCell.id} handleFilter={handleFilter} handleSearch={handleSearch} />}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rowData.map((row, index) => {
                                return (
                                    <TableRow hover tabIndex={-1} key={index}>
                                        {menu === "Example" && <ExampleData index={index} row={row} />}
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
                    ActionsComponent={(props) => <TablePaginationActions menu={menu} onOpen={onOpen} onConfirm={onConfirm} {...props} />}
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
