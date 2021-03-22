import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider, IconButton } from "@material-ui/core";
import { CheckOutlined } from "@material-ui/icons";

function ConfirmButton({ handleSubmit }) {
    return (
        <ThemeProvider theme={theme}>
            <IconButton onClick={handleSubmit}>
                <CheckOutlined style={{ color: "#039BE5" }} />
                확인
            </IconButton>
        </ThemeProvider>
    );
}

ConfirmButton.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default ConfirmButton;
