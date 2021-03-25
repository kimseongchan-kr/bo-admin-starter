import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import CheckOutlined from "@material-ui/icons/CheckOutlined";
function ConfirmButton({ handleSubmit }) {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="outlined" startIcon={<CheckOutlined style={{ color: "#039BE5" }} />} onClick={handleSubmit}>
                확인
            </Button>
        </ThemeProvider>
    );
}

ConfirmButton.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default ConfirmButton;
