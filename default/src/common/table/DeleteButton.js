import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider, Button } from "@material-ui/core";
import theme from "styles/theme/button";

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
