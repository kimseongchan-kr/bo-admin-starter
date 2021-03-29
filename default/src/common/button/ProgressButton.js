import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import CheckOutlined from "@material-ui/icons/CheckOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        position: "relative"
    },
    button: {
        backgroundColor: "rgba(0,0,0,0.12)"
    },
    buttonProgress: {
        color: theme.palette.primary.main
    }
}));

function ProgressButton({ text, loading }) {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <ThemeProvider theme={theme}>
                <Button
                    className={loading ? classes.button : ""}
                    type="submit"
                    variant="outlined"
                    startIcon={loading ? <CircularProgress size={12} className={classes.buttonProgress} /> : <CheckOutlined style={{ color: "#039BE5" }} />}
                    disabled={loading && true}
                >
                    {text}
                </Button>
                {/* {loading && <CircularProgress size={24} className={classes.buttonProgress} />} */}
            </ThemeProvider>
        </div>
    );
}

ProgressButton.propTypes = {
    text: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired
};

export default ProgressButton;
