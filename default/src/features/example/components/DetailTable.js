import React from "react";
import PropTypes from "prop-types";

import TableCell from "@mui/material/TableCell";

function DetailTable({ row }) {
    return (
        <>
            <TableCell align="center">{row.name}</TableCell>
            <TableCell align="center">{row.calories}</TableCell>
            <TableCell align="center">{row.fat}</TableCell>
            <TableCell align="center">{row.carbs}</TableCell>
            <TableCell align="center">{row.protein}</TableCell>
            <TableCell align="center">{row.useYn}</TableCell>
            <TableCell align="center">{row.viewYn}</TableCell>
        </>
    );
}

DetailTable.propTypes = {
    row: PropTypes.object.isRequired
};

export default DetailTable;
