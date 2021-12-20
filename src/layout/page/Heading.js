import React from "react";
import useStyles from "styles/customize/table/DetailTableStyles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Heading({ text, buttonText, type, disabled, onClick }) {
    const classes = useStyles();

    const ButtonHeading = () => (
        <Typography className={classes.heading} variant="h3" component="h4">
            {text}
            <Button disabled={disabled} sx={{ marginLeft: "20px" }} size="medium" color="primary" variant="outlined" className={classes.button} onClick={onClick}>
                {buttonText}
            </Button>
        </Typography>
    );

    const Heading = () => (
        <Typography className={classes.heading} variant="h3" component="h4">
            {text}
        </Typography>
    );

    return <>{type === "button" ? <ButtonHeading /> : <Heading />}</>;
}
