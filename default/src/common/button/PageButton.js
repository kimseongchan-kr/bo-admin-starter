import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider } from "@material-ui/core/styles";
import useStyles from "styles/customize/components/ButtonStyles";
import Button from "@material-ui/core/Button";

function PageButton({ disabled = false, text, pageType = "search", onClick }) {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Button variant="outlined" disabled={disabled} className={classes.pageButton} onClick={() => onClick(pageType)}>
                {text}
            </Button>
        </ThemeProvider>
    );
}

PageButton.propTypes = {
    disabled: PropTypes.bool,
    text: PropTypes.string.isRequired,
    pageType: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default PageButton;
