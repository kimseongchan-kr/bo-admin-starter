import React from "react";
import { Button, ThemeProvider } from "@material-ui/core";
import theme from "styles/theme/button";

export default function DeleteButton({ modalId, handleDelete }) {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" onClick={() => handleDelete(modalId)}>
                삭제
            </Button>
        </ThemeProvider>
    );
}
