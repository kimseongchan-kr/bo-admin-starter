import React from "react";
import Typography from "@mui/material/Typography";

export default function ErrorMessage({ text }) {
    return (
        <Typography component="span" color="error" variant="body2">
            {text}
        </Typography>
    );
}
