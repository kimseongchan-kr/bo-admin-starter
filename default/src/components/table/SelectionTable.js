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
import Checkbox from "@mui/material/Checkbox";
import TablePagination from "@mui/material/TablePagination";
import CircularProgress from "@mui/material/CircularProgress";

import TablePaginationActions from "components/table/Pagination";
import DashboardData from "features/summary/components/ListTable";

import { headCell } from "components/Data";

function SelectionTable(props) {
    const { menu, loading, data, total, disabled, selected, setSelected, handleSearch, onDeleteClick, ...rest } = props;
    const classes = useStyles();
    const dispatch = useDispatch();
    const { pageNumber, pageShow } = useSelector(searchSelector);

    // all rows selection
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = data.map((n) => n.idx);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    // one row selection
    const handleClick = (event, index) => {
        const selectedIndex = selected.indexOf(index);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, index);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }

        setSelected(newSelected);
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

    const isSelected = (index) => (selected ? selected.indexOf(index) !== -1 : false);
    const numSelected = selected ? selected.length : 0;
    const rowCount = data.length;

    return (
        <Paper sx={{ borderRadius: "4px" }} className={classes.paper} elevation={0}>
            <TableContainer>
                <Table className={classes.table} aria-labelledby={`${menu.toLowerCase()}Table`} size="medium" aria-label={`${menu.toLowerCase()} table`}>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    indeterminate={numSelected > 0 && numSelected < rowCount}
                                    checked={rowCount > 0 && numSelected === rowCount}
                                    onChange={handleSelectAllClick}
                                    inputProps={{ "aria-label": "select all data" }}
                                />
                            </TableCell>
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
                                <TableCell align="center" colSpan={9}>
                                    <CircularProgress size={12} color="primary" /> 데이터를 불러오는 중입니다.
                                </TableCell>
                            </TableRow>
                        ) : data.length === 0 ? (
                            <TableRow>
                                <TableCell align="center" colSpan={9}>
                                    데이터가 존재하지 않습니다.
                                </TableCell>
                            </TableRow>
                        ) : (
                            data.map((row, index) => {
                                const labelId = `${menu.toLowerCase()}-table-checkbox-${index}`;
                                const isItemSelected = isSelected(row.idx);

                                return (
                                    <React.Fragment key={index}>
                                        {menu === "Dashboard" && (
                                            <TableRow hover role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={index} selected={isItemSelected}>
                                                <TableCell padding="checkbox">
                                                    <Checkbox onClick={(event) => handleClick(event, row.idx)} checked={isItemSelected} inputProps={{ "aria-labelledby": labelId }} />
                                                </TableCell>
                                                {/* rest :  handleChange, handleSelect, onPageClick  */}
                                                <DashboardData row={row} index={index} disabled={disabled} onDeleteClick={onDeleteClick} {...rest} />
                                            </TableRow>
                                        )}
                                    </React.Fragment>
                                );
                            })
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {!loading && data.length > 0 && (
                <TablePagination
                    component="div"
                    ActionsComponent={(props) => (
                        // rest: excelLoading={excelLoading} disabled={disabled} excelData={excelData}  onExcelClick={onExcel}
                        <TablePaginationActions {...props} {...rest} menu={menu} disabled={disabled} onDeleteClick={onDeleteClick} />
                    )}
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

SelectionTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    total: PropTypes.number,
    disabled: PropTypes.bool,
    onDeleteClick: PropTypes.func,
    menu: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    selected: PropTypes.array.isRequired,
    setSelected: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired
};

SelectionTable.defaultProps = {
    data: [],
    total: 0,
    disabled: false,
    onDeleteClick: () => {}
};

export default SelectionTable;
