import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider } from "@material-ui/core/styles";
import useStyles from "styles/customize/components/ButtonStyles";

import Button from "@material-ui/core/Button";
import CheckOutlined from "@material-ui/icons/CheckOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";

function SubmitButton({ type = "button", loading = false, disabled = false, text, onClick }) {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            {type === "submit" ? (
                <Button
                    className={loading ? classes.disabled : classes.check}
                    type={type}
                    variant="outlined"
                    startIcon={loading ? <CircularProgress size={12} className={classes.progressIcon} /> : <CheckOutlined style={{ color: "#039BE5" }} />}
                    disabled={(loading || disabled) && true}>
                    {text}
                </Button>
            ) : (
                <Button
                    className={loading ? classes.disabled : classes.check}
                    type={type}
                    variant="outlined"
                    startIcon={loading ? <CircularProgress size={12} className={classes.progressIcon} /> : <CheckOutlined style={{ color: "#039BE5" }} />}
                    disabled={(loading || disabled) && true}
                    onClick={onClick}>
                    {text}
                </Button>
            )}
        </ThemeProvider>
    );
}

SubmitButton.propTypes = {
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default SubmitButton;
