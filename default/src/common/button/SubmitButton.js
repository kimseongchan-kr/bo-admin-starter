import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const useStyles = makeStyles(({ palette }) => ({
    disabled: {
        border: `1px solid ${palette.border["dark"]}`,
        backgroundColor: palette.neutral["white"]
    }
}));

function SubmitButton({ color = "secondary", type = "button", loading = false, disabled = false, text, onClick }) {
    const classes = useStyles();

    return (
        <>
            {type === "submit" ? (
                <Button
                    type={type}
                    size="large"
                    color={color}
                    variant="outlined"
                    className={loading ? classes.disabled : ""}
                    startIcon={loading ? <CircularProgress color="primary" aria-label="loading submit" size={12} /> : <></>}
                    disabled={loading || disabled ? true : false}>
                    {text}
                </Button>
            ) : (
                <Button
                    type={type}
                    size="large"
                    color={color}
                    variant="outlined"
                    className={loading ? classes.disabled : ""}
                    startIcon={loading ? <CircularProgress color="primary" aria-label="loading submit" size={12} /> : <></>}
                    disabled={loading || disabled ? true : false}
                    onClick={onClick}>
                    {text}
                </Button>
            )}
        </>
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
