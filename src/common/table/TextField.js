import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/textfield";
import { ThemeProvider } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
function TextInput({ index, value, handleChange }) {
    return (
        <ThemeProvider theme={theme}>
            <TextField id={`outlined-text-${index}`} label="" size="small" variant="outlined" type="text" name="textExample" onChange={handleChange} value={value} />
        </ThemeProvider>
    );
}

TextInput.propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default TextInput;
