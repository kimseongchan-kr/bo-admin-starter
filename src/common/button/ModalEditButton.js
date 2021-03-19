import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "styles/theme/button";
import { IconButton } from "@material-ui/core";
import { CheckOutlined } from "@material-ui/icons";

export default function ModalEditButton({ text }) {
    return (
        <ThemeProvider theme={theme}>
            <IconButton type="submit">
                <CheckOutlined style={{ color: "#039BE5" }} />
                {text}
            </IconButton>
        </ThemeProvider>
    );
}
