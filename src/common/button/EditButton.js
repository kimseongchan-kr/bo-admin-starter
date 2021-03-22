import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider, IconButton } from "@material-ui/core";
import { CheckOutlined } from "@material-ui/icons";

function EditButton({ text }) {
    return (
        <ThemeProvider theme={theme}>
            <IconButton type="submit">
                <CheckOutlined style={{ color: "#039BE5" }} />
                {text}
            </IconButton>
        </ThemeProvider>
    );
}

EditButton.propTypes = {
    text: PropTypes.string.isRequired
};

export default EditButton;
