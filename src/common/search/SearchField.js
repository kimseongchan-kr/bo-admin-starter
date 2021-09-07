import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SearchSelect from "./SearchSelect";

function SearchField({ classes, searchType, options, handleChange, searchKeyword, handleKeyword }) {
    return (
        <>
            <Grid item>
                <SearchSelect name="searchType" value={searchType} options={options} handleChange={handleChange} />
            </Grid>
            <Grid item>
                <TextField
                    className={classes.searchTextField}
                    inputProps={{ "aria-label": "type search keyword" }}
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
    options: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    searchKeyword: PropTypes.string.isRequired,
    handleKeyword: PropTypes.func.isRequired
};

export default SearchField;
