import React from "react";
import { TextField, ThemeProvider } from "@material-ui/core";
import theme from "styles/theme/textfield";

export default function TextInput({ idx, handleChange, value }) {
    return (
        <ThemeProvider theme={theme}>
            <TextField id={`outlined-text-${idx}`} label="" size="small" variant="outlined" type="text" name="textExample" onChange={handleChange} value={value} />
        </ThemeProvider>
    );
}
