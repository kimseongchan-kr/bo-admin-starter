import React from "react";
import PropTypes from "prop-types";

import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

function RadioButton({ name, value, options, handleChange }) {
    return (
        <RadioGroup aria-label="radio" row name={name} onChange={handleChange} value={value}>
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
