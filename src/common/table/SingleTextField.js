import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/textfield";
import { ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function SingleTextField({ inputType = "text", name, value, handleChange }) {
    return (
        <ThemeProvider theme={theme}>
            <TextField
                id={`outlined-${name}`}
                inputProps={{ "aria-label": `type ${name}` }}
                label=""
                size="small"
                variant="outlined"
                type={inputType}
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
