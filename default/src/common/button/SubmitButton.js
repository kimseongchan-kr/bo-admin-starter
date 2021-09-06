import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CheckOutlined from "@material-ui/icons/CheckOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
    progressIcon: {
        color: theme.palette.primary.main
    },
    disabled: {
        minWidth: 100,
        width: "auto",
        padding: 10,
        backgroundColor: "rgba(0,0,0,0.12)"
    },
    check: {
        minWidth: 100,
        width: "auto",
        padding: 10,
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        "&:hover": {
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`
        },
        "&:active": {
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`
        }
    }
}));

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
