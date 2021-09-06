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
import TablePagination from "@material-ui/core/TablePagination";

import TableSelect from "common/table/Select";
import TablePaginationActions from "common/table/Pagination";

import { headCell, sampleData, tableSelectOptions } from "components/Data";

export default function SearchTable(props) {
    const classes = useStyles();
    const { page, pageShow } = useSelector(searchSelector);
    const { menu, loading, data, total, handleSelect, handlePage, handleOneData, handleDetailData, onAdd } = props;

    const ExampleData = ({ row }) => {
        return (
            <>
                <TableCell align="center" onClick={() => handleDetailData(row.idx)}>
                    <p className={classes.underlinedContent}>{row.idx ? row.idx : "-"}</p>
                </TableCell>
                <TableCell align="center" onClick={() => handleOneData(row.idx, sampleData)}>
                    <p className={classes.underlinedContent}>{row.name ? row.name : "-"}</p>
                </TableCell>
                <TableCell align="center">{row.calories ? row.calories : "-"}</TableCell>
                <TableCell align="center">{row.fat ? row.fat : "-"}</TableCell>
                <TableCell align="center">{row.carbs ? row.carbs : "-"}</TableCell>
                <TableCell align="center">{row.protein ? row.protein : "-"}</TableCell>
                <TableCell align="center">
                    <TableSelect name="useYn" rowIndex={row.idx} value={row.useYn} label={row.useYnText} options={tableSelectOptions["useYn"]} handleSelect={handleSelect} />
                </TableCell>
                <TableCell align="center">{row.regdate ? row.regdate : "-"}</TableCell>
            </>
        );
    };

    // 페이지 이동하기
    const handleChangePage = (newPage) => {
        handlePage({ page: newPage, pageShow });
    };

    // rows per page(페이지 당 행) 변경하기
    const handleChangeRowsPerPage = (event) => {
        handlePage({ page: 1, pageShow: parseInt(event.target.value, 10) });
    };

    return (
        <div className={classes.root}>
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
                                        데이터를 불러오는 중입니다.
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
                        ActionsComponent={(props) => <TablePaginationActions menu={menu} onAddClick={onAdd} {...props} />}
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
