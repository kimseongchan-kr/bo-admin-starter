import React from "react";
import PropTypes from "prop-types";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

function RadioButton({ name, value, options, handleChange }) {
    return (
        <RadioGroup aria-label="radio" name={name} onChange={handleChange} value={value}>
            {options.map((radio, index) => (
                <FormControlLabel key={`radio-${index}`} value={radio.value} control={<Radio color="primary" />} label={radio.label} />
            ))}
        </RadioGroup>
    );
}

RadioButton.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default RadioButton;
