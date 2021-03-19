import React from "react";

import { ThemeProvider, IconButton } from "@material-ui/core";
import theme from "styles/theme/button";
import { Close } from "@material-ui/icons";

export default function CloseButton({ text, onClose }) {
    return (
        <ThemeProvider theme={theme}>
            <IconButton onClick={onClose}>
                <Close style={{ color: "#DE5D5D" }} />
                {text}
            </IconButton>
        </ThemeProvider>
    );
}
