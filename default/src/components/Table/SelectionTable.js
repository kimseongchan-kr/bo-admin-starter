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
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import TablePagination from "@mui/material/TablePagination";
import CircularProgress from "@mui/material/CircularProgress";

import TableButton from "common/table/Button";
import TableSelect from "common/table/Select";
import TableTextField from "common/table/TextField";
import TablePaginationActions from "components/table/Pagination";

import { headCell, tableSelectOptions } from "components/Data";

export default function SelectionTable(props) {
    const { menu, loading, data, total, disabled, selected, setSelected, handleChange, handleSelect, handleSearch, onPageClick, onDeleteClick, ...rest } = props;

    const classes = useStyles();
    const dispatch = useDispatch();
    const { pageNumber, pageShow } = useSelector(searchSelector);

    const DashboardData = ({ row, index }) => {
        return (
            <>
                <TableCell align="center" onClick={() => onPageClick("detail", row.idx)}>
                    <p className={classes.underlinedContent}>{row.name || "-"}</p>
                </TableCell>
                <TableCell align="center">{row.calories || "-"}</TableCell>
                <TableCell align="center">{row.fat || "-"}</TableCell>
                <TableCell align="center">{row.carbs || "-"}</TableCell>
                <TableCell align="center">{row.protein || "-"}</TableCell>
                <TableCell align="center">
                    <TableSelect rowIndex={index} name="useYn" options={tableSelectOptions["useYn"]} value={row.useYn} label={row.useYnText} handleSelect={handleSelect} />
                </TableCell>
                <TableCell align="center">
                    <TableSelect rowIndex={index} name="viewYn" options={tableSelectOptions["viewYn"]} value={row.viewYn} label={row.viewYnText} handleSelect={handleSelect} />
                </TableCell>
                <TableCell align="center" width={300}>
                    <TableTextField index={index} name="sortOrder" value={row.sortOrder} handleChange={handleChange} />
                </TableCell>
                <TableCell align="center">
                    <Grid container justifyContent="center" alignItems="center" spacing={2}>
                        <Grid item>
                            <TableButton disabled={disabled} pageType="edit" text="수정" rowIndex={index} onClick={onPageClick} />
                        </Grid>
                        <Grid item>
                            <TableButton disabled={disabled} pageType="delete" text="삭제" rowIndex={index} onClick={onDeleteClick} />
                        </Grid>
                    </Grid>
                </TableCell>
            </>
        );
    };

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
                            {headCell[menu].map((cell) => {
                                return (
                                    <TableCell key={cell.id} align="center">
                                        {cell.label}
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
                                                <DashboardData row={row} index={index} />
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
