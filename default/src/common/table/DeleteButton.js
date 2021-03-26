import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
function DeleteButton({ modalId, onConfirm }) {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" onClick={() => onConfirm(modalId)}>
                삭제
            </Button>
        </ThemeProvider>
    );
}

DeleteButton.propTypes = {
    modalId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onConfirm: PropTypes.func.isRequired
};

export default DeleteButton;
