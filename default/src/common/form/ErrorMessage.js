import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
function ErrorMessage({ text }) {
    return (
        <Typography component="span" color="error" variant="body2">
            {text}
        </Typography>
    );
}

ErrorMessage.propTypes = {
    text: PropTypes.string.isRequired
};

export default ErrorMessage;
