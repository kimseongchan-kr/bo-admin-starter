import React from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";

function PageButton({ color = "primary", disabled = false, pageType = "search", text, onClick }) {
    return (
        <Button size="large" color={color} variant="outlined" disabled={disabled} onClick={() => onClick(pageType)}>
            {text}
        </Button>
    );
}

PageButton.propTypes = {
    color: PropTypes.string,
    disabled: PropTypes.bool,
    pageType: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default PageButton;
