import React from "react";
import PropTypes from "prop-types";

import theme from "styles/theme/textfield";
import { ThemeProvider } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
function SortOrder({ sortOrder, handleChange }) {
    return (
        <ThemeProvider theme={theme}>
            <TextField id="outlined-sort-order" label="" size="small" variant="outlined" type="number" name="sortOrder" onChange={handleChange} value={sortOrder} />
        </ThemeProvider>
    );
}

SortOrder.propTypes = {
    sortOrder: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default SortOrder;
