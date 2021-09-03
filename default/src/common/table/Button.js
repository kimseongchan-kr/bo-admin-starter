import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function TableButton({ disabled = false, text, rowIndex, data, onClick }) {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" disabled={disabled} onClick={() => onClick(rowIndex, data)}>
                {text}
            </Button>
        </ThemeProvider>
    );
}

TableButton.propTypes = {
    disabled: PropTypes.bool,
    text: PropTypes.string.isRequired,
    rowIndex: PropTypes.number.isRequired,
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default TableButton;
