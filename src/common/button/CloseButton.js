import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

function CloseButton({ text, onClose }) {
    return (
        <ThemeProvider theme={theme}>
            <IconButton onClick={onClose}>
                <Close style={{ color: "#DE5D5D" }} />
                {text}
            </IconButton>
        </ThemeProvider>
    );
}

CloseButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default CloseButton;
