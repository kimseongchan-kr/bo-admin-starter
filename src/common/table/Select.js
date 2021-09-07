import React from "react";
import PropTypes from "prop-types";

import Select from "react-select";
import styles from "styles/customize/select/TableSelectStyles";

function TableSelect({ name, rowIndex, value, label, options, handleSelect }) {
    return (
        <Select
            aria-label={`select ${name}`}
            isClearable={false}
            isSearchable={false}
            styles={styles}
            options={options}
            name={name}
            defaultValue={{ value, label }}
            onChange={(e) => handleSelect(name, e.value, rowIndex)}
        />
    );
}

TableSelect.propTypes = {
    name: PropTypes.string.isRequired,
    rowIndex: PropTypes.number.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    options: PropTypes.array.isRequired,
    handleSelect: PropTypes.func.isRequired
};

export default TableSelect;
