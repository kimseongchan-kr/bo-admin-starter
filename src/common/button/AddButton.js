import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import CheckOutlined from "@material-ui/icons/CheckOutlined";
function AddButton({ onOpen }) {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="outlined" startIcon={<CheckOutlined style={{ color: "#039BE5" }} />} onClick={onOpen}>
                추가
            </Button>
        </ThemeProvider>
    );
}

AddButton.propTypes = {
    onOpen: PropTypes.func.isRequired
};

export default AddButton;
