import React from "react";
import PropTypes from "prop-types";
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

import TablePaginationActions from "components/table/Pagination";
import ExampleData from "features/example/components/ListTable";

import { headCell } from "components/Data";

function SearchTable(props) {
    const { menu, loading, data, total, handleSearch, onAddClick, ...rest } = props;
    const classes = useStyles();
    const dispatch = useDispatch();
    const { pageNumber, pageShow } = useSelector(searchSelector);

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
                            {headCell[menu].map(({ id, label }) => {
                                return (
                                    <TableCell key={id} align="center">
                                        {label}
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
                            data.map((row) => {
                                return (
                                    <TableRow hover tabIndex={-1} key={row.idx}>
                                        {menu === "Example" && <ExampleData row={row} {...rest} />}
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

SearchTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    total: PropTypes.number,
    onAddClick: PropTypes.func,
    menu: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired
};

SearchTable.defaultProps = {
    data: [],
    total: 0,
    onAddClick: () => {}
};

export default SearchTable;
