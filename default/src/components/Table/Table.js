import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector, setSearchFilters } from "slices/searchSlice";

import useStyles from "styles/customize/table/SearchTableStyles";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import CircularProgress from "@mui/material/CircularProgress";

import TableSelect from "common/table/Select";
import TablePaginationActions from "components/Table/Pagination";

import { headCell, sampleData, tableSelectOptions } from "components/Data";

export default function SearchTable(props) {
    const { menu, loading, data, total, handleSelect, handleSearch, handleOneData, handleDetailData, onAddClick } = props;

    const classes = useStyles();
    const dispatch = useDispatch();
    const { pageNumber, pageShow } = useSelector(searchSelector);

    const ExampleData = ({ row }) => {
        return (
            <>
                <TableCell align="center" onClick={() => handleDetailData(row.idx)}>
                    <p className={classes.underlinedContent}>{row.idx || "-"}</p>
                </TableCell>
                <TableCell align="center" onClick={() => handleOneData(row.idx, sampleData)}>
                    <p className={classes.underlinedContent}>{row.name || "-"}</p>
                </TableCell>
                <TableCell align="center">{row.calories || "-"}</TableCell>
                <TableCell align="center">{row.fat || "-"}</TableCell>
                <TableCell align="center">{row.carbs || "-"}</TableCell>
                <TableCell align="center">{row.protein || "-"}</TableCell>
                <TableCell width={100} align="center">
                    <TableSelect name="useYn" rowIndex={row.idx} value={row.useYn} label={row.useYnText} options={tableSelectOptions["useYn"]} handleSelect={handleSelect} />
                </TableCell>
                <TableCell align="center">{row.regdate || "-"}</TableCell>
            </>
        );
    };

    // 테이블 페이지 번호 변경하기
    const handlePage = (paging) => {
        dispatch(setSearchFilters(paging));
        handleSearch(paging);
    };

    // 페이지 이동하기
    const handleChangePage = (newPage) => handlePage({ pageNumber: newPage, pageShow });

    // rows per page(페이지 당 행) 변경하기
    const handleChangeRowsPerPage = (event) => handlePage({ pageNumber: 1, pageShow: parseInt(event.target.value, 10) });

    return (
        <Paper className={classes.paper} elevation={0}>
            <TableContainer>
                <Table className={classes.table} aria-labelledby={`${menu.toLowerCase()}Table`} size="medium" aria-label={`${menu.toLowerCase()} table`}>
                    <TableHead>
                        <TableRow>
                            {headCell[menu].map((headCell) => {
                                return (
                                    <TableCell key={headCell.id} align="center">
                                        {headCell.label}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell align="center" colSpan={8}>
                                    <CircularProgress size={12} color="primary" /> 데이터를 불러오는 중입니다.
                                </TableCell>
                            </TableRow>
                        ) : data.length === 0 ? (
                            <TableRow>
                                <TableCell align="center" colSpan={8}>
                                    데이터가 존재하지 않습니다.
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
            </TableContainer>
            {!loading && data.length > 0 && (
                <TablePagination
                    component="div"
                    ActionsComponent={(props) => <TablePaginationActions {...props} menu={menu} text="디저트 추가" onAddClick={onAddClick} />}
                    classes={{ toolbar: classes.toolbar }}
                    SelectProps={{ inputProps: { "aria-label": "rows per page" } }}
                    labelDisplayedRows={() => ``}
                    rowsPerPage={pageShow || 10}
                    rowsPerPageOptions={[10, 20, 50, 100]}
                    count={total}
                    page={pageNumber > 0 ? pageNumber - 1 : 0}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            )}
        </Paper>
    );
}
