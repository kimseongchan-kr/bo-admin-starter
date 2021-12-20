import React from "react";
import PropTypes from "prop-types";

import useStyles from "styles/customize/components/SearchStyles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import SearchSelect from "common/search/SearchSelect";

function SearchField({ menu, searchType, dataList, handleChange, searchKeyword, handleKeyword }) {
    const classes = useStyles();

    return (
        <>
            <Grid item>
                <SearchSelect menu={menu} name="searchType" value={searchType} dataList={dataList} handleChange={handleChange} />
            </Grid>
            <Grid item>
                <TextField
                    className={classes.searchTextField}
                    InputLabelProps={{ shrink: false }}
                    inputProps={{ "aria-label": "type search keyword" }}
                    id="outlined-search-keyword"
                    label=""
                    size="small"
                    variant="outlined"
                    type="search"
                    value={searchKeyword}
                    onChange={handleKeyword}
                    onKeyDown={handleKeyword}
                />
            </Grid>
        </>
    );
}

SearchField.propTypes = {
    dataList: PropTypes.array,
    menu: PropTypes.string.isRequired,
    searchType: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    searchKeyword: PropTypes.string.isRequired,
    handleKeyword: PropTypes.func.isRequired
};

export default SearchField;
