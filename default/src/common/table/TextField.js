import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/textfield";
import { ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

function TextInput({ index = 0, inputType = "text", name, value, handleChange }) {
    return (
        <ThemeProvider theme={theme}>
            <TextField
                id={`outlined-${name}-${index}`}
                InputLabelProps={{ shrink: false }}
                inputProps={{ "aria-label": `type ${name}` }}
                label=""
                size="small"
                variant="outlined"
                type={inputType}
                name={name}
                defaultValue={value}
                onChange={(e) => handleChange(e, index)}
            />
        </ThemeProvider>
    );
}

TextInput.propTypes = {
    index: PropTypes.number,
    inputType: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    handleChange: PropTypes.func.isRequired
};

export default TextInput;
