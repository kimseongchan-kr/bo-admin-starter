import React from "react";
import PropTypes from "prop-types";

import { Button, ThemeProvider } from "@material-ui/core";
import theme from "styles/theme/button";

function DeleteButton({ modalId, handleDelete }) {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" onClick={() => handleDelete(modalId)}>
                삭제
            </Button>
        </ThemeProvider>
    );
}

DeleteButton.propTypes = {
    modalId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default DeleteButton;
