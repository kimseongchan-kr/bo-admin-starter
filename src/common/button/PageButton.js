import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    pageButton: {
        width: "auto",
        padding: 10,
        fontWeight: 600,
        color: theme.palette.primary["main"],
        borderColor: theme.palette.primary["main"]
    }
}));
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
