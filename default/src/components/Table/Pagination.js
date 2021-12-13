import React from "react";
import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";

import ExcelDownloadButton from "common/excel";
import AddButton from "common/button/DefaultButton";
import DeleteButton from "common/button/DefaultButton";

import { buttons } from "components/Data";

function TablePaginationActions(props) {
    const { count, page, rowsPerPage, onPageChange, menu, excelLoading, excelData, text, disabled, onAddClick, onDeleteClick, onExcelClick } = props;
    const { addButton, excelButton, deleteButton } = buttons;

    // 페이지 번호 변경하기
    const handleChange = (_, value) => onPageChange(value);

    const totalCount = Math.ceil(count / rowsPerPage);

    return (
        <>
            <Grid container>
                <Pagination
                    color="primary"
                    shape="rounded"
                    variant="outlined"
                    showFirstButton
                    showLastButton
                    count={totalCount}
                    page={page + 1} // 1부터 시작
                    onChange={handleChange}
                />
            </Grid>
            <Grid container direction="row" spacing={2} alignItems="center" justifyContent="flex-end">
                {excelButton[menu] && (
                    <Grid item>
                        <ExcelDownloadButton menu={menu} loading={excelLoading} disabled={disabled} excelData={excelData} onExcelClick={onExcelClick} />
                    </Grid>
                )}
                {addButton[menu] && (
                    <Grid item>
                        <AddButton color="primary" disabled={disabled} text={text} onClick={onAddClick} />
                    </Grid>
                )}
                {deleteButton[menu] && (
                    <Grid item>
                        <DeleteButton color="error" disabled={disabled} text="디저트 삭제" onClick={onDeleteClick} />
                    </Grid>
                )}
            </Grid>
        </>
    );
}

TablePaginationActions.propTypes = {
    menu: PropTypes.string.isRequired,
    onAddButtonClick: PropTypes.func,
    onDeleteButtonClick: PropTypes.func,
    count: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default TablePaginationActions;
