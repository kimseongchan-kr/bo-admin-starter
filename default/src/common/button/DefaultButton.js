import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
function DefaultButton({ size, color, variant, disabled, text, onClick }) {
    return (
        <Button size={size} color={color} variant={variant} disabled={disabled} onClick={onClick}>
            {text}
        </Button>
    );
}

DefaultButton.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

DefaultButton.defaultProps = {
    size: "large",
    color: "primary",
    variant: "outlined",
    disabled: false
};

export default DefaultButton;
