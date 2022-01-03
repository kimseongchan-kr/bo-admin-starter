import React from "react";
import PropTypes from "prop-types";

import useStyles from "styles/customize/table/SearchTableStyles";
import TableCell from "@mui/material/TableCell";

import { sampleData } from "components/Data";

function Table({ row, onEditClick, onDetailClick }) {
    const classes = useStyles();

    return (
        <>
            <TableCell align="center" onClick={() => onDetailClick(row.idx)}>
                <p className={classes.underlinedContent}>{row.idx || "-"}</p>
            </TableCell>
            <TableCell align="center" onClick={() => onEditClick(row.idx, sampleData)}>
                <p className={classes.underlinedContent}>{row.name || "-"}</p>
            </TableCell>
            <TableCell align="center">{row.calories || "-"}</TableCell>
            <TableCell align="center">{row.fat || "-"}</TableCell>
            <TableCell align="center">{row.carbs || "-"}</TableCell>
            <TableCell align="center">{row.protein || "-"}</TableCell>
            <TableCell align="center">{row.regdate || "-"}</TableCell>
        </>
    );
}

Table.propTypes = {
    row: PropTypes.object.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onDetailClick: PropTypes.func.isRequired
};

export default Table;
