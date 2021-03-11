import React from "react";
import { Button, ThemeProvider } from "@material-ui/core";
import buttonTheme from "styles/theme/buttonTheme";

export default function EditButton({ modalId, handleOneData }) {
    return (
        <ThemeProvider theme={buttonTheme}>
            <Button variant="contained" onClick={() => handleOneData(modalId)}>
                수정
            </Button>
        </ThemeProvider>
    );
}
