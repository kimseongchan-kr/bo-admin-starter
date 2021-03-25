import React from "react";
import PropTypes from "prop-types";

import { Controller } from "react-hook-form";
import Select from "react-select";
import customStyles from "styles/customize/FormSelectStyles";

function FormSelect({ name, defaultValue, control, options }) {
    return (
        <Controller
            name={name}
            defaultValue={defaultValue}
            control={control}
            render={({ onChange }) => <Select isClearable={false} isSearchable={false} styles={customStyles} name={name} defaultValue={defaultValue} options={options} onChange={onChange} />}
        />
    );
}

FormSelect.propTypes = {
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.object.isRequired,
    control: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired
};

export default FormSelect;
