import React from "react";
import PropTypes from "prop-types";

import { Controller } from "react-hook-form";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";

function RadioButton({ name, defaultValue, control, options }) {
    return (
        <Controller
            name={name}
            defaultValue={defaultValue}
            control={control}
            render={({ onChange, value }) => (
                <RadioGroup aria-label="radio" onChange={(e) => onChange(e.target.value)} value={value}>
                    {options.map((radio, index) => (
                        <FormControlLabel key={`radio-${index}`} value={radio.value} control={<Radio color="primary" />} label={radio.label} />
                    ))}
                </RadioGroup>
            )}
        />
    );
}

RadioButton.propTypes = {
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.string.isRequired,
    control: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired
};

export default RadioButton;
