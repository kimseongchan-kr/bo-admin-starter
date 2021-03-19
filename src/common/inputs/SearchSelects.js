import React from "react";

import Select from "react-select";
import { Grid, Typography } from "@material-ui/core";
import customStyles from "styles/customize/SearchSelectStyles";

export default function SearchSelects({ index, type, caption, defaultValue, options, handleChange }) {
    return (
        <>
            <Grid key={`grid-${index}`} item>
                <Typography key={`caption-${index}`} variant="caption" display="block">
                    {caption}
                </Typography>
                <Select key={index} styles={customStyles} isClearable={false} isSearchable={false} defaultValue={defaultValue} options={options} onChange={(e) => handleChange(e, type)} />
            </Grid>
        </>
    );
}
