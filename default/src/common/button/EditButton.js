import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider, Button } from "@material-ui/core";
import { CheckOutlined } from "@material-ui/icons";
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
