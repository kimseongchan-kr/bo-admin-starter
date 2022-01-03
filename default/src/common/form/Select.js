import React from "react";
import PropTypes from "prop-types";

import styles from "styles/customize/select/FormSelectStyles";
import { Controller } from "react-hook-form";
import Select from "react-select";

function FormSelect({ isClearable, isSearchable, name, defaultValue, options, control }) {
    return (
        <Controller
            name={name}
            defaultValue={defaultValue}
            options={options}
            control={control}
            as={<Select aria-label={`select ${name}`} isClearable={isClearable} isSearchable={isSearchable} styles={styles} />}
        />
    );
}

FormSelect.propTypes = {
    isClearable: PropTypes.bool,
    isSearchable: PropTypes.bool,
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    control: PropTypes.object.isRequired
};

FormSelect.defaultProps = {
    isClearable: false,
    isSearchable: false
};

export default FormSelect;
