import React from "react";
import { TextField, ThemeProvider } from "@material-ui/core";
import textFieldTheme from "styles/theme/textFieldTheme";

export default function SortOrder({ handleChange, sortOrder }) {
    return (
        <ThemeProvider theme={textFieldTheme}>
            <TextField id="outlined-sort-order" label="" size="small" variant="outlined" type="number" onChange={handleChange} value={sortOrder} />
        </ThemeProvider>
    );
}
