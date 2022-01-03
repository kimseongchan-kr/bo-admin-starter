import React from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import { searchSelector } from "slices/searchSlice";

import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

import { searchOption as option } from "components/Data";

function SearchRadio({ name, dataList, handleChange }) {
    const searchState = useSelector(searchSelector);

    const radioOptions = dataList?.length > 0 ? [...option[name], ...dataList] : option?.[name];

    return (
        <RadioGroup row aria-label="radio" name={name} value={searchState[name]} onChange={handleChange}>
            {radioOptions?.map((radio) => (
                <FormControlLabel key={`radio-${radio.label}`} value={radio.value} label={radio.label} control={<Radio color="primary" />} />
            ))}
        </RadioGroup>
    );
}

SearchRadio.propTypes = {
    dataList: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ),
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

SearchRadio.defaultProps = {
    dataList: []
};

export default SearchRadio;
