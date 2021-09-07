import React from "react";
import Workbook from "react-excel-workbook";
import { format } from "utils/common";

import theme from "styles/theme/button";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
    excel: {
        width: 120,
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        "&:hover": {
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`
        },
        "&:active": {
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`
        }
    },
    buttonProgress: {
        color: theme.palette.primary.main
    }
}));

export default function ExcelExport({ menu, loading, excelData, onExcelClick }) {
    const classes = useStyles();
    const today = new Date();

    const DashboardExcel = () => (
        <Workbook filename={`${format("excel", today)}.xlsx`} element={<i className="file-download"></i>}>
            <Workbook.Sheet data={excelData} name="Sheet1">
                <Workbook.Column label="No" value={(row) => row["idx"]} />
                <Workbook.Column label="Carbs" value={(row) => row["carbs"]} />
                <Workbook.Column label="Protein" value={(row) => row["protein"]} />
            </Workbook.Sheet>
        </Workbook>
    );

    const ExampleExcel = () => (
        <Workbook filename={`${format("excel", today)}.xlsx`} element={<i className="file-download"></i>}>
            <Workbook.Sheet data={excelData} name="Sheet1">
                <Workbook.Column label="No" value={(row) => row["idx"]} />
                <Workbook.Column label="Carbs" value={(row) => row["carbs"]} />
                <Workbook.Column label="Protein" value={(row) => row["protein"]} />
            </Workbook.Sheet>
        </Workbook>
    );

    return (
        <ThemeProvider theme={theme}>
            <Button
                disabled={loading}
                variant="outlined"
                startIcon={loading ? <CircularProgress aria-label="loading excel download" size={12} className={classes.buttonProgress} /> : <></>}
                className={classes.excel}
                onClick={onExcelClick}>
                엑셀 다운로드
            </Button>
            {menu === "Dashboard" && <DashboardExcel />}
            {menu === "Example" && <ExampleExcel />}
        </ThemeProvider>
    );
}
