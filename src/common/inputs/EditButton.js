import React from "react";
import { Button, ThemeProvider } from "@material-ui/core";
import theme from "styles/theme/button";

export default function EditButton({ modalId, handleOneData }) {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" onClick={() => handleOneData(modalId)}>
                수정
            </Button>
        </ThemeProvider>
    );
}
