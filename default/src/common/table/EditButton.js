import React from "react";
import PropTypes from "prop-types";

import { Button, ThemeProvider } from "@material-ui/core";
import theme from "styles/theme/button";

function EditButton({ modalId, handleOneData }) {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" onClick={() => handleOneData(modalId)}>
                수정
            </Button>
        </ThemeProvider>
    );
}

EditButton.propTypes = {
    modalId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    handleOneData: PropTypes.func.isRequired
};

export default EditButton;
