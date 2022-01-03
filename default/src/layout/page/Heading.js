import React from "react";
import PropTypes from "prop-types";

import useStyles from "styles/customize/table/DetailTableStyles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Heading({ text, buttonText, type, disabled, onClick }) {
    const classes = useStyles();

    return type === "button" ? (
        <Typography className={classes.heading} variant="h3" component="h4">
            {text}
            <Button disabled={disabled} sx={{ marginLeft: "20px" }} size="medium" color="primary" variant="outlined" className={classes.button} onClick={onClick}>
                {buttonText}
            </Button>
        </Typography>
    ) : (
        <Typography className={classes.heading} variant="h3" component="h4">
            {text}
        </Typography>
    );
}

Heading.propTypes = {
    buttonText: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

Heading.defaultProps = {
    buttonText: "",
    disabled: false,
    onClick: () => {}
};

export default Heading;
