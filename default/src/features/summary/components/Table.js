import React from "react";
import { useSelector } from "react-redux";
import { searchSelector } from "slices/searchSlice";

import { makeStyles, TableContainer, Paper, Table, TableHead, TableSortLabel, TableBody, TableRow, TableCell, TablePagination } from "@material-ui/core";

import Filters from "features/summary/components/Filter";
import UseSelect from "common/table/UseSelect";
import TablePaginationActions from "common/table/Pagination";

import { summaryHeadCell as headCells, sampleRowData as rowData, summaryDefaultSort as defaultSort } from "features/summary/Data";

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
        textDecoration: "underline",
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

// 기본 테이블
export default function SummaryTable(props) {
    const classes = useStyles();
    const { pageNumber, pageShow, sortNm, sortOrder } = useSelector(searchSelector);
    const { menu, loading, data, handleSelect, handleFilter, handleSearch, handleSort, handlePage, onOpen, onConfirm } = props;

    // Summary의 Summary 메뉴 table 데이터
    const SummaryData = ({ row }) => {
        return (
            <>
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
                <TableCell padding="none">
                    <UseSelect useYn={row.useYn} handleSelect={handleSelect} />
                </TableCell>
                <TableCell align="center" padding="none">
                    {row.regdate}
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
                    <Table className={classes.table} aria-labelledby="summaryTable" size="medium" aria-label="summary table">
                        <TableHead>
                            <TableRow>
                                {headCells[menu].map((headCell) => {
                                    let sort = sortNm ? sortNm : defaultSort[menu];
                                    return (
                                        <TableCell
                                            key={headCell.id}
                                            align="center"
                                            padding={headCell.disablePadding ? "none" : "default"}
                                            sortDirection={headCell.sort && sort === headCell.id ? sortOrder : false}
                                        >
                                            {headCell.label}
                                            {headCell.sort && (
                                                <TableSortLabel active={sort === headCell.id} direction={sort === headCell.id ? sortOrder : "asc"} onClick={createSortHandler(headCell.id)}>
                                                    {sort === headCell.id ? <span className={classes.visuallyHidden}>{sortOrder === "desc" ? "sorted descending" : "sorted ascending"}</span> : null}
                                                </TableSortLabel>
                                            )}
                                            {headCell.filter && <Filters filterType={headCell.id} handleFilter={handleFilter} handleSearch={handleSearch} />}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell align="center" colSpan={7}>
                                        Loading...
                                    </TableCell>
                                </TableRow>
                            ) : data.length === 0 ? (
                                <TableRow>
                                    <TableCell align="center" colSpan={7}>
                                        No Data
                                    </TableCell>
                                </TableRow>
                            ) : (
                                data.map((row, index) => (
                                    <TableRow hover tabIndex={-1} key={index}>
                                        {menu === "Summary" && <SummaryData row={row} />}
                                    </TableRow>
                                ))
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
