import React from "react";
import PropTypes from "prop-types";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function CheckBox({ options, handleChange }) {
    return options.map((checkbox) => (
        <FormControlLabel key={`checkbox-${checkbox.value}`} name={checkbox.name} label={checkbox.label} checked={checkbox.value} control={<Checkbox onChange={handleChange} color="primary" />} />
    ));
}

CheckBox.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    handleChange: PropTypes.func.isRequired
};

export default CheckBox;
