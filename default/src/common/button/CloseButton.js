import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Close from "@material-ui/icons/Close";
function CloseButton({ text, onClose }) {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="outlined" startIcon={<Close style={{ color: "#DE5D5D" }} />} onClick={onClose}>
                {text}
            </Button>
        </ThemeProvider>
    );
}

CloseButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default CloseButton;
