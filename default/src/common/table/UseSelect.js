import React from "react";
import PropTypes from "prop-types";

import Select from "react-select";
import styles from "styles/customize/TableSelectStyles";

const options = [
    { value: "Y", label: "사용" },
    { value: "N", label: "미사용" }
];

function UseSelect({ useYn, handleSelect }) {
    const label = useYn === "Y" ? "사용" : "미사용";

    return (
        <Select
            isClearable={false}
            isSearchable={false}
            styles={styles}
            options={options}
            defaultValue={{
                value: useYn,
                label: label
            }}
            onChange={(e) => handleSelect("use", e.value)}
        />
    );
}

UseSelect.propTypes = {
    useYn: PropTypes.string.isRequired,
    handleSelect: PropTypes.func.isRequired
};

export default UseSelect;
