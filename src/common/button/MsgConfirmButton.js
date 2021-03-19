import React from "react";

import { ThemeProvider, IconButton } from "@material-ui/core";
import theme from "styles/theme/button";
import { CheckOutlined } from "@material-ui/icons";

export default function ConfirmButton({ handleSubmit }) {
    return (
        <ThemeProvider theme={theme}>
            <IconButton onClick={handleSubmit}>
                <CheckOutlined />
                확인
            </IconButton>
        </ThemeProvider>
    );
}
