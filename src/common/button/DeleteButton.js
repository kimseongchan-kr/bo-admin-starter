import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

function DeleteButton({ onConfirm }) {
    return (
        <ThemeProvider theme={theme}>
            <IconButton onClick={onConfirm}>
                <Close style={{ color: "#DE5D5D" }} />
                삭제
            </IconButton>
        </ThemeProvider>
    );
}

DeleteButton.propTypes = {
    onConfirm: PropTypes.func.isRequired
};

export default DeleteButton;
