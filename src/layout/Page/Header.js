import React from "react";
import useStyles from "styles/customize/table/DetailTableStyles";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function Header({ text, onPageClick }) {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <ChevronLeftIcon onClick={() => onPageClick("list")} />
            <Typography variant="h2" component="h3" display="inline">
                {text}
            </Typography>
        </div>
    );
}
