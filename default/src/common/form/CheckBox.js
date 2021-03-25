import React from "react";
import PropTypes from "prop-types";

import { Controller } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function CheckBox({ options, control }) {
    return (
        <>
            {options.map((checkbox, index) => (
                <Controller
                    key={`controller-${index}`}
                    name={checkbox.name}
                    defaultValue={checkbox.defaultValue}
                    control={control}
                    render={({ onChange, value }) => (
                        <FormControlLabel
                            key={`checkbox-${index}`}
                            label={checkbox.label}
                            control={<Checkbox onChange={(e) => onChange(e.target.checked)} checked={value} name={checkbox.name} color="primary" />}
                        />
                    )}
                />
            ))}
        </>
    );
}

CheckBox.propTypes = {
    options: PropTypes.array.isRequired,
    control: PropTypes.object.isRequired
};

export default CheckBox;
