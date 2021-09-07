import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import ExcelExport from "common/excel";
import AddButton from "common/button/DefaultButton";
import DeleteButton from "common/button/DefaultButton";

import { buttons } from "components/Data";

const useStyles = makeStyles(() => ({
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 16
    }
}));
function TablePaginationActions(props) {
    const classes = useStyles();
    const { count, page, rowsPerPage, onChangePage, menu, loading, excelData, disabled, onAddClick, onDeleteClick, onExcelClick } = props;

    const handleChange = (event, value) => {
        onChangePage(value);
    };

    const totalCount = Math.ceil(count / rowsPerPage);

    return (
        <>
            <Pagination
                color="primary"
                count={totalCount}
                variant="outlined"
                shape="rounded"
                showFirstButton
                showLastButton
                page={page + 1} // 1부터 시작
                onChange={handleChange}
            />
            <div className={classes.buttonContainer}>
                {buttons[menu].add && <AddButton icon="check" disabled={disabled} text="등록 모달" onClick={onAddClick} />}
                {buttons[menu].delete && <DeleteButton icon="cancel" disabled={disabled} text="삭제" onClick={onDeleteClick} />}
                {buttons[menu].excel && <ExcelExport menu={menu} loading={loading} excelData={excelData} onClick={onExcelClick} />}
            </div>
        </>
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
