import React from "react";
import PropTypes from "prop-types";

import useStyles from "styles/customize/table/SearchTableStyles";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import CircularProgress from "@mui/material/CircularProgress";

import { headCell } from "components/Data";

function ChartTable(props) {
    const { menu, loading, data } = props;
    const classes = useStyles();

    return (
        <Paper className={classes.paper} elevation={0}>
            <TableContainer sx={{ overflowX: "auto" }}>
                <Table className={classes.table} aria-labelledby={`${menu.toLowerCase()}Table`} size="medium" aria-label={`${menu.toLowerCase()} table`}>
                    <TableHead>
                        <TableRow>
                            <TableCell width={50} className={classes.sticky}>
                                Total
                            </TableCell>
                            {headCell[menu].map(({ id, label }) => (
                                <TableCell key={id} align="center">
                                    {label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell align="center" colSpan={50}>
                                    <CircularProgress size={12} color="primary" /> 데이터를 불러오는 중입니다.
                                </TableCell>
                            </TableRow>
                        ) : data.length === 0 ? (
                            <TableRow>
                                <TableCell align="center" colSpan={50}>
                                    데이터가 존재하지 않습니다.
                                </TableCell>
                            </TableRow>
                        ) : (
                            data.map((row, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell className={classes.sticky} component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        {Array.from(Array(50)).map((_, index) => (
                                            <TableCell key={index} align="center">
                                                {parseInt(index) + 1}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                );
                            })
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

ChartTable.propTypes = {
    menu: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.object)
};

ChartTable.defaultProps = {
    data: []
};

export default ChartTable;
