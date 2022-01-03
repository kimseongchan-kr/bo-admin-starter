import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/styles";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)(({ theme }) => ({
    minWidth: 48,
    height: 32,
    marginRight: 4,
    padding: 6,
    boxShadow: "unset",
    borderRadius: 4,
    border: `1px solid ${theme.palette.border.main}`,
    fontSize: 12,
    letterSpacing: " -0.24px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.neutral.white,
    "&:hover": {
        backgroundColor: theme.palette.background.light,
        border: `1px solid ${theme.palette.border.main}`,
        boxShadow: "unset"
    }
}));

function TableButton({ disabled, pageType, text, rowIndex, onClick }) {
    return (
        <StyledButton variant="contained" disabled={disabled} onClick={() => onClick(pageType, rowIndex)}>
            {text}
        </StyledButton>
    );
}

TableButton.propTypes = {
    disabled: PropTypes.bool,
    pageType: PropTypes.string,
    text: PropTypes.string.isRequired,
    rowIndex: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

TableButton.defaultProps = {
    disabled: false,
    pageType: ""
};
export default TableButton;
