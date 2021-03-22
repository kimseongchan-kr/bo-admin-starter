import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import ExcelExport from "common/excel";
import DeleteButton from "common/button/DeleteButton";
import AddButton from "common/button/AddButton";

import { PerMenuButton as buttons } from "common/table/Data";

const useStyles = makeStyles(() => ({
    root: {
        minWidth: "58%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexShrink: 0
    },
    root2: {
        minWidth: "65%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexShrink: 0
    },
    buttonRoot: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flex: 1,
        marginRight: 16
    }
}));

function TablePaginationActions(props) {
    const classes = useStyles();
    const { count, page, rowsPerPage, onChangePage, menu, onOpen, onConfirm } = props;

    const handleChange = (event, value) => {
        onChangePage(value);
    };

    const totalCount = Math.ceil(count / rowsPerPage);

    return (
        <div className={totalCount >= 4 ? classes.root2 : classes.root}>
            <Pagination
                color="primary"
                count={totalCount}
                defaultPage={1}
                siblingCount={0}
                boundaryCount={1}
                variant="outlined"
                shape="rounded"
                showFirstButton
                showLastButton
                page={page + 1} // 1부터 시작
                onChange={handleChange}
            />
            <div className={classes.buttonRoot}>
                {buttons[menu].add && <AddButton onOpen={onOpen} />}
                {buttons[menu].delete && <DeleteButton onConfirm={onConfirm} />}
                {buttons[menu].excel && <ExcelExport />}
            </div>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    menu: PropTypes.string.isRequired,
    onOpen: PropTypes.func,
    onConfirm: PropTypes.func
};

export default TablePaginationActions;
