import React from "react";
import { Button, ThemeProvider } from "@material-ui/core";
import buttonTheme from "styles/theme/buttonTheme";

export default function DeleteButton({ modalId, handleDelete }) {
    return (
        <ThemeProvider theme={buttonTheme}>
            <Button variant="contained" onClick={() => handleDelete(modalId)}>
                삭제
            </Button>
        </ThemeProvider>
    );
}
