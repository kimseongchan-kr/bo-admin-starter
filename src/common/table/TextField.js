import React from "react";
import PropTypes from "prop-types";

import { TextField, ThemeProvider } from "@material-ui/core";
import theme from "styles/theme/textfield";

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
