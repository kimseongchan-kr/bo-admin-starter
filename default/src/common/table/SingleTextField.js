import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/textfield";
import { ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

function SingleTextField({ inputType = "text", name, value, fullWidth = true, handleChange }) {
    return (
        <ThemeProvider theme={theme}>
            <TextField
                id={`outlined-${name}`}
                InputLabelProps={{ shrink: false }}
                inputProps={{ "aria-label": `type ${name}` }}
                label=""
                size="small"
                variant="outlined"
                type={inputType}
                fullWidth={fullWidth}
                name={name}
                value={value}
                onChange={handleChange}
            />
        </ThemeProvider>
    );
}

SingleTextField.propTypes = {
    inputType: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    handleChange: PropTypes.func.isRequired
};

export default SingleTextField;
