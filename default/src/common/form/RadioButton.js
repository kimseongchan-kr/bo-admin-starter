import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

function RadioButton({ name, defaultValue, options, control }) {
    return (
        <Controller
            name={name}
            defaultValue={defaultValue}
            control={control}
            render={({ onChange, value }) => (
                <RadioGroup aria-label="radio" row value={value} onChange={(e) => onChange(e.target.value)}>
                    {options.map((radio, index) => (
                        <FormControlLabel key={`radio-${index}`} label={radio.label} value={radio.value} control={<Radio color="primary" />} />
                    ))}
                </RadioGroup>
            )}
        />
    );
}

RadioButton.propTypes = {
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    options: PropTypes.array.isRequired,
    control: PropTypes.object.isRequired
};

export default RadioButton;
