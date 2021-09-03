import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import CheckOutlined from "@material-ui/icons/CheckOutlined";
function EditButton({ text }) {
    return (
        <ThemeProvider theme={theme}>
            <Button type="submit" variant="outlined" startIcon={<CheckOutlined style={{ color: "#039BE5" }} />}>
                {text}
            </Button>
        </ThemeProvider>
    );
}

EditButton.propTypes = {
    text: PropTypes.string.isRequired
};

export default EditButton;
