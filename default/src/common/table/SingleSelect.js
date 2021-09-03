import React from "react";
import PropTypes from "prop-types";

import Select from "react-select";
import styles from "styles/customize/select/TableSelectStyles";

function SingleSelect({ name, value, options, handleSelect }) {
    return <Select isClearable={false} isSearchable={false} styles={styles} options={options} name={name} defaultValue={value} onChange={handleSelect} />;
}

SingleSelect.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    handleSelect: PropTypes.func.isRequired
};

export default SingleSelect;
