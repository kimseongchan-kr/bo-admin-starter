import React from "react";
import PropTypes from "prop-types";

import customStyles from "styles/customize/SearchSelectStyles";

import Select from "react-select";
import { Grid, Typography, TextField } from "@material-ui/core";

function SearchField({ classes, searchType, searchKeyword, options, handleChange, handleKeyword }) {
    return (
        <>
            <Grid item>
                <Typography variant="caption" display="block">
                    조회조건
                </Typography>
                <Select
                    styles={customStyles}
                    isClearable={false}
                    isSearchable={false}
                    defaultValue={{ value: searchType, label: searchType }}
                    options={options}
                    onChange={(e) => handleChange(e, "searchType")}
                />
            </Grid>
            <Grid item>
                <div className={classes.spacer}></div>
                <TextField
                    className={classes.searchTextField}
                    id="outlined-search-keyword"
                    label=""
                    size="small"
                    variant="outlined"
                    type="search"
                    value={searchKeyword}
                    onChange={(e) => handleKeyword(e.target.value)}
                />
            </Grid>
        </>
    );
}

SearchField.propTypes = {
    classes: PropTypes.object.isRequired,
    searchType: PropTypes.string.isRequired,
    searchKeyword: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleKeyword: PropTypes.func.isRequired
};

export default SearchField;
