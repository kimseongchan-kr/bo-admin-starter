import React from "react";
import PropTypes from "prop-types";

import Select from "react-select";
import styles from "styles/customize/SearchSelectStyles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
function SearchSelect({ index, type, caption, defaultValue, options, handleChange }) {
    return (
        <Grid key={`grid-${index}`} item>
            <Typography key={`caption-${index}`} variant="caption" display="block">
                {caption}
            </Typography>
            <Select key={index} styles={styles} isClearable={false} isSearchable={false} defaultValue={defaultValue} options={options} onChange={(e) => handleChange(e, type)} />
        </Grid>
    );
}

SearchSelect.propTypes = {
    index: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    defaultValue: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default SearchSelect;
