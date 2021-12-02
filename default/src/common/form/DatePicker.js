import React from "react";
import PropTypes from "prop-types";

import Picker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";

function DatePicker({ name, value, handleDate }) {
    return (
        <Picker
            mask="____-__-__"
            inputFormat="yyyy-MM-dd"
            views={["day"]}
            value={value}
            onChange={(e) => handleDate(name, e)}
            inputProps={{ "aria-label": { name }, placeholder: "" }}
            renderInput={(props) => <TextField {...props} size="small" />}
        />
    );
}

DatePicker.propTypes = {
    value: PropTypes.instanceOf(Date),
    name: PropTypes.string.isRequired,
    handleDate: PropTypes.func.isRequired
};

export default DatePicker;
