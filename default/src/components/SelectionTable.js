import React from "react";
import { useSelector } from "react-redux";
import { searchSelector } from "slices/searchSlice";

import useStyles from "styles/customize/table/SearchTableStyles";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import TablePagination from "@material-ui/core/TablePagination";

import TableButton from "common/table/Button";
import TableSelect from "common/table/Select";
import TableTextField from "common/table/TextField";
import TablePaginationActions from "common/table/Pagination";

import { headCell, tableSelectOptions } from "components/Data";

export default function SelectionTable(props) {
    const classes = useStyles();

    const { page, pageShow } = useSelector(searchSelector);
    const { menu, loading, buttonLoading, submitLoading, data, total, excelData, selected, setSelected, handleChange, handleSelect, handlePage, handleOneData, handleEditData, onDelete, onExcel } =
        props;

    const DashboardData = ({ row, index }) => {
        return (
            <>
                <TableCell width={150} align="center" onClick={() => handleOneData(row.idx)}>
                    <p className={classes.underlinedContent}>{row.name}</p>
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                <TableCell width={100} align="center">
                    <TableSelect rowIndex={index} name="useYn" options={tableSelectOptions["useYn"]} value={row.useYn} label={row.useYnText} handleSelect={handleSelect} />
                </TableCell>
                <TableCell width={100} align="center">
                    <TableSelect rowIndex={index} name="viewYn" options={tableSelectOptions["viewYn"]} value={row.viewYn} label={row.viewYnText} handleSelect={handleSelect} />
                </TableCell>
                <TableCell width={100} align="center">
                    <TableTextField index={index} name="sortOrder" value={row.sortOrder} handleChange={handleChange} />
                </TableCell>
                <TableCell width={150} align="center">
                    <TableButton text="수정" rowIndex={index} data={row} onClick={() => handleEditData(row.idx)} />
                    <TableButton text="삭제" rowIndex={index} data={row} onClick={onDelete} />
                </TableCell>
            </>
        );
    };

    // all rows selection
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = data.map((n) => n.key);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    // one row selection
    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }

        setSelected(newSelected);
    };

    // 페이지 이동하기
    const handleChangePage = (newPage) => {
        handlePage({ page: newPage, pageShow });
    };

    // rows per page(페이지 당 행) 변경하기
    const handleChangeRowsPerPage = (event) => {
        handlePage({ page: 1, pageShow: parseInt(event.target.value, 10) });
    };

    const isSelected = (name) => (selected ? selected.indexOf(name) !== -1 : false);
    const numSelected = selected ? selected.length : 0;
    const rowCount = data.length;

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={0}>
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
                                        데이터를 불러오는 중입니다.
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
                                    const isItemSelected = isSelected(row.key);

                                    return (
                                        <React.Fragment key={index}>
                                            {menu === "Dashboard" && (
                                                <TableRow hover role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={index} selected={isItemSelected}>
                                                    <TableCell padding="checkbox">
                                                        <Checkbox onClick={(event) => handleClick(event, row.key)} checked={isItemSelected} inputProps={{ "aria-labelledby": labelId }} />
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
                            <TablePaginationActions menu={menu} loading={buttonLoading} disabled={submitLoading} excelData={excelData} onDeleteClick={onDelete} onExcelClick={onExcel} {...props} />
                        )}
                        classes={{ caption: classes.caption }}
                        SelectProps={{ inputProps: { "aria-label": "rows per page" } }}
                        labelDisplayedRows={() => ``}
                        rowsPerPage={pageShow ? pageShow : 10}
                        rowsPerPageOptions={[10, 20, 50, 100]}
                        count={total}
                        page={page > 0 ? page - 1 : 0}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                )}
            </Paper>
        </div>
    );
}
