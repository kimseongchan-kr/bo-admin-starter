import React from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import { searchSelector } from "slices/searchSlice";

import useStyles from "styles/customize/components/SearchStyles";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { searchOption as option } from "components/Data";

function SearchSelect({ name, value, dataList, handleChange }) {
    const classes = useStyles();
    const searchState = useSelector(searchSelector);

    const selectOptions = dataList?.[name]?.length > 0 ? [...option[name], ...dataList[name]] : option[name] ? option[name] : [];

    return (
        <Grid item>
            <Select
                className={classes.searchSelect}
                IconComponent={KeyboardArrowDownIcon}
                displayEmpty
                size="small"
                name={name}
                value={name === "searchType" ? value : searchState[name]}
                onChange={handleChange}>
                {selectOptions &&
                    selectOptions.map((list) => (
                        <MenuItem key={`key-${list.label}`} value={list.value}>
                            {list.label}
                        </MenuItem>
                    ))}
            </Select>
        </Grid>
    );
}

SearchSelect.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dataList: PropTypes.array,
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default SearchSelect;
