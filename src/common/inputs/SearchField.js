import React from "react";
import customStyles from "styles/customize/SearchSelectStyles";
import Select from "react-select";
import { Grid, Typography, TextField } from "@material-ui/core";
import useStyles from "styles/customize/SearchStyles";

export default function SearchField({ options, searchType, searchKeyword, handleChange, handleKeyword }) {
    const classes = useStyles();

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
                    id="outlined-name"
                    label=""
                    size="small"
                    variant="outlined"
                    type="search"
                    onChange={(e) => handleKeyword(e.target.value)}
                    value={searchKeyword}
                />
            </Grid>
        </>
    );
}
