import React from "react";
import PropTypes from "prop-types";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

function SearchRadio({ name, value, options, handleChange }) {
    return (
        <RadioGroup aria-label="radio" name={name} value={value} onChange={handleChange}>
            {options.map((radio, index) => (
                <FormControlLabel key={`radio-${index}`} value={radio.value} label={radio.label} control={<Radio color="primary" />} />
            ))}
        </RadioGroup>
    );
}

SearchRadio.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    options: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default SearchRadio;
