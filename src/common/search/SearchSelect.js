import React from "react";
import PropTypes from "prop-types";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function SearchSelect({ name, value, options, handleChange }) {
    return (
        <Select IconComponent={KeyboardArrowDownIcon} displayEmpty name={name} value={value} onChange={handleChange}>
            {options &&
                options.map((list) => (
                    <MenuItem key={`key-${list.label}`} value={list.value}>
                        {list.label}
                    </MenuItem>
                ))}
        </Select>
    );
}

SearchSelect.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    options: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default SearchSelect;
