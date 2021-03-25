import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

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
