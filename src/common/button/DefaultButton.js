import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/button";
import { ThemeProvider } from "@material-ui/core/styles";
import useStyles from "styles/customize/components/ButtonStyles";
import Button from "@material-ui/core/Button";
import CheckOutlined from "@material-ui/icons/CheckOutlined";
import CreateIcon from "@material-ui/icons/Create";
import Close from "@material-ui/icons/Close";

function DefaultButton({ icon = "check", disabled = false, text, onClick }) {
    const classes = useStyles();

    const Icon = () => {
        return (
            <>
                {icon === "check" ? (
                    <CheckOutlined style={{ color: "#039BE5" }} />
                ) : icon === "cancel" ? (
                    <Close style={{ color: "#DE5D5D" }} />
                ) : icon === "modify" ? (
                    <CreateIcon style={{ color: "#039BE5" }} />
                ) : (
                    <></>
                )}
            </>
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <Button
                className={icon === "check" || icon === "modify" ? classes.check : icon === "cancel" ? classes.cancel : ""}
                variant="outlined"
                disabled={disabled}
                startIcon={<Icon />}
                onClick={onClick}>
                {text}
            </Button>
        </ThemeProvider>
    );
}

DefaultButton.propTypes = {
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default DefaultButton;
