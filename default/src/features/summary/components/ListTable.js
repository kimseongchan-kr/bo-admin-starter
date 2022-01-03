import React from "react";
import PropTypes from "prop-types";

import useStyles from "styles/customize/table/SearchTableStyles";
import TableCell from "@mui/material/TableCell";
import Grid from "@mui/material/Grid";

import TableButton from "common/table/Button";
import TableSelect from "common/table/Select";
import TableTextField from "common/table/TextField";

import { tableSelectOptions } from "components/Data";

function Table({ row, index, disabled, handleChange, handleSelect, onPageClick, onDeleteClick }) {
    const classes = useStyles();

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
                <TableSelect rowIndex={index} name="useYn" options={tableSelectOptions.useYn} value={row.useYn} label={row.useYnText} handleSelect={handleSelect} />
            </TableCell>
            <TableCell align="center">
                <TableSelect rowIndex={index} name="viewYn" options={tableSelectOptions.viewYn} value={row.viewYn} label={row.viewYnText} handleSelect={handleSelect} />
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
}

Table.propTypes = {
    row: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSelect: PropTypes.func.isRequired,
    onPageClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
};

export default Table;
