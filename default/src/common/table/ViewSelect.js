import React from "react";
import PropTypes from "prop-types";

import Select from "react-select";
import styles from "styles/customize/TableSelectStyles";

const options = [
    { value: "Y", label: "활성화" },
    { value: "N", label: "비활성화" }
];

function ViewSelect({ viewYn, handleSelect }) {
    const label = viewYn === "Y" ? "활성화" : "비활성화";

    return <Select isClearable={false} isSearchable={false} styles={styles} defaultValue={{ value: viewYn, label: label }} options={options} onChange={(e) => handleSelect("view", e.value)} />;
}

ViewSelect.propTypes = {
    viewYn: PropTypes.string.isRequired,
    handleSelect: PropTypes.func.isRequired
};

export default ViewSelect;
