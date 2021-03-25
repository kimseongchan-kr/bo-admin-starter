import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider, Button } from "@material-ui/core";
import { CheckOutlined } from "@material-ui/icons";
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
