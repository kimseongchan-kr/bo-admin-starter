import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/textfield";
import { ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function TextInput({ index = 0, inputType = "text", name, value, handleChange }) {
    return (
        <ThemeProvider theme={theme}>
            <TextField id={`outlined-${name}-${index}`} label="" size="small" variant="outlined" type={inputType} name={name} value={value} onChange={handleChange} />
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
