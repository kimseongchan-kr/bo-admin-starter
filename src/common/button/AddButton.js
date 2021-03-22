import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider, IconButton } from "@material-ui/core";
import { CheckOutlined } from "@material-ui/icons";

function AddButton({ onOpen }) {
    return (
        <ThemeProvider theme={theme}>
            <IconButton onClick={onOpen}>
                <CheckOutlined style={{ color: "#039BE5" }} />
                추가
            </IconButton>
        </ThemeProvider>
    );
}

AddButton.propTypes = {
    onOpen: PropTypes.func.isRequired
};

export default AddButton;
