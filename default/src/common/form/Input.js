import React from "react";
import PropTypes from "prop-types";

import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

function Input({ fullWidth = true, multiline = false, rows = 0, inputType = "text", name, defaultValue, control }) {
    return (
        <Controller
            name={name}
            defaultValue={defaultValue}
            control={control}
            render={({ onChange, value }) => (
                <TextField
                    id={`outlined-${name}`}
                    label=""
                    variant="outlined"
                    multiline={multiline}
                    rows={rows}
                    fullWidth={fullWidth}
                    InputLabelProps={{ shrink: false }}
                    inputProps={{ "aria-label": `type ${name}` }}
                    type={inputType}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            )}
        />
    );
}

Input.propTypes = {
    fullWidth: PropTypes.bool,
    multiline: PropTypes.bool,
    rows: PropTypes.number,
    inputType: PropTypes.string,
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    control: PropTypes.object.isRequired
};

export default Input;
