import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider, Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
function DeleteButton({ onConfirm }) {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="outlined" startIcon={<Close style={{ color: "#DE5D5D" }} />} onClick={onConfirm}>
                삭제
            </Button>
        </ThemeProvider>
    );
}

DeleteButton.propTypes = {
    onConfirm: PropTypes.func.isRequired
};

export default DeleteButton;
