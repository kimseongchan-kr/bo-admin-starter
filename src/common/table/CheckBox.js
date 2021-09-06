import React from "react";
import PropTypes from "prop-types";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function CheckBox({ options, handleChange }) {
    return (
        <>
            {options.map((checkbox, index) => (
                <FormControlLabel key={`checkbox-${index}`} name={checkbox.name} label={checkbox.label} checked={checkbox.value} control={<Checkbox onChange={handleChange} color="primary" />} />
            ))}
        </>
    );
}

CheckBox.propTypes = {
    options: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default CheckBox;
