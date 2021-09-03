import React from "react";
import PropTypes from "prop-types";

import { Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
function Input({ name, defaultValue, control, classes, inputType }) {
    return (
        <Controller
            name={name}
            defaultValue={defaultValue}
            control={control}
            render={({ onChange, value }) => (
                <TextField
                    className={classes.textInput}
                    id={`outline-${name}`}
                    label=""
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
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
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    control: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    inputType: PropTypes.string.isRequired
};

export default Input;
