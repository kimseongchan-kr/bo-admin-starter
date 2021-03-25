import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider, Button } from "@material-ui/core";
import { CheckOutlined } from "@material-ui/icons";
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
