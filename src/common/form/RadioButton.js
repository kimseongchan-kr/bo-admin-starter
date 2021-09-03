import React from "react";
import PropTypes from "prop-types";

import { Controller } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
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
