import React from "react";
import PropTypes from "prop-types";

import { Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";

function Input({ inputType, name, defaultValue, control, classes }) {
    return (
        <Controller
            name={name}
            defaultValue={defaultValue}
            control={control}
            render={({ onChange, value }) => (
                <TextField
                    className={classes.textInput}
                    id={`outlined-${name}`}
                    label=""
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
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
    inputType: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    control: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

export default Input;
