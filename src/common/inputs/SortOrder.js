import React from "react";
import { TextField, ThemeProvider } from "@material-ui/core";
import theme from "styles/theme/textfield";

export default function SortOrder({ handleChange, sortOrder }) {
    return (
        <ThemeProvider theme={theme}>
            <TextField id="outlined-sort-order" label="" size="small" variant="outlined" type="number" name="sortOrder" onChange={handleChange} value={sortOrder} />
        </ThemeProvider>
    );
}
