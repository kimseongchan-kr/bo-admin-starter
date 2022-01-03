import React from "react";
import PropTypes from "prop-types";

import { styled } from "@mui/styles";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const StyledButton = styled(Button)(({ theme }) => ({
    "&.Mui-disabled": {
        border: `1px solid ${theme.palette.disabled.primary}`,
        backgroundColor: theme.palette.disabled.primary
    }
}));
function SubmitButton({ type, color, loading, disabled, text, onClick }) {
    return (
        <StyledButton
            type={type}
            size="large"
            color={color}
            variant="outlined"
            startIcon={loading ? <CircularProgress color="primary" aria-label="loading submit" size={12} /> : <></>}
            disabled={loading || disabled ? true : false}
            onClick={onClick}>
            {text}
        </StyledButton>
    );
}

SubmitButton.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
};

SubmitButton.defaultProps = {
    type: "button",
    color: "secondary",
    loading: false,
    disabled: false,
    onClick: () => {}
};
export default SubmitButton;
