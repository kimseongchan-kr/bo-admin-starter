import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function CheckBox({ options, control }) {
    return options.map((checkbox) => (
        <Controller
            key={`controller-${checkbox.label}`}
            name={checkbox.name}
            defaultValue={checkbox.defaultValue}
            control={control}
            render={({ onChange, value }) => (
                <FormControlLabel
                    key={`checkbox-${checkbox.label}`}
                    label={checkbox.label}
                    control={<Checkbox color="primary" name={checkbox.name} checked={value} onChange={(e) => onChange(e.target.checked)} />}
                />
            )}
        />
    ));
}

CheckBox.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            defaultValue: PropTypes.bool.isRequired
        })
    ).isRequired,
    control: PropTypes.object.isRequired
};

export default CheckBox;
