import React from "react";
import PropTypes from "prop-types";
import Picker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";

function DatePicker({ term, name, value, handleDate }) {
    return (
        <Picker
            mask={term === "daily" ? "____-__-__" : "____-__"}
            inputFormat={term === "daily" ? "yyyy-MM-dd" : "yyyy-MM"}
            views={term === "daily" ? ["day"] : ["month"]}
            value={value}
            onChange={(e) => handleDate(name, e)}
            inputProps={{ "aria-label": { name }, placeholder: "" }}
            renderInput={(props) => <TextField {...props} size="small" />}
        />
    );
}

DatePicker.propTypes = {
    term: PropTypes.string.isRequired,
    value: PropTypes.instanceOf(Date),
    name: PropTypes.string.isRequired,
    handleDate: PropTypes.func.isRequired
};

DatePicker.defaultProps = {
    value: null
};

export default DatePicker;
