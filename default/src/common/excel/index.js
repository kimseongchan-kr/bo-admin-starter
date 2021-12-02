import React from "react";
import Workbook from "react-excel-workbook";
import { format } from "utils/common";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export default function ExcelExport({ menu, loading, disabled, excelData, onExcelClick }) {
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
        <>
            <Button
                size="large"
                color="primary"
                variant="outlined"
                disabled={loading || disabled}
                startIcon={loading ? <CircularProgress color="primary" aria-label="loading excel download" size={12} /> : <></>}
                onClick={onExcelClick}>
                엑셀 다운로드
            </Button>
            {menu === "Dashboard" && <DashboardExcel />}
            {menu === "Example" && <ExampleExcel />}
        </>
    );
}
