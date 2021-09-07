import React from "react";
import PropTypes from "prop-types";

import { Controller } from "react-hook-form";
import Select from "react-select";
import styles from "styles/customize/select/FormSelectStyles";

function FormSelect({ name, defaultValue, control, options }) {
    return (
        <Controller
            name={name}
            defaultValue={defaultValue}
            options={options}
            control={control}
            as={<Select aria-label={`select ${name}`} isClearable={false} isSearchable={false} styles={styles} />}
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
