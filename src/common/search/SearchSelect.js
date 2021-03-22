import React from "react";
import PropTypes from "prop-types";

import customStyles from "styles/customize/SearchSelectStyles";

import Select from "react-select";
import { Grid, Typography } from "@material-ui/core";

function SearchSelects({ index, type, caption, defaultValue, options, handleChange }) {
    return (
        <Grid key={`grid-${index}`} item>
            <Typography key={`caption-${index}`} variant="caption" display="block">
                {caption}
            </Typography>
            <Select key={index} styles={customStyles} isClearable={false} isSearchable={false} defaultValue={defaultValue} options={options} onChange={(e) => handleChange(e, type)} />
        </Grid>
    );
}

SearchSelects.propTypes = {
    index: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    defaultValue: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default SearchSelects;
