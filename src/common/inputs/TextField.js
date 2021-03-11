import React from "react";
import { TextField, ThemeProvider } from "@material-ui/core";
import textFieldTheme from "styles/theme/textFieldTheme";

export default function TextInput({ handleChange, value }) {
    return (
        <ThemeProvider theme={textFieldTheme}>
            <TextField id="outlined-text" label="" size="small" variant="outlined" type="text" name="textExample" onChange={handleChange} value={value} />
        </ThemeProvider>
    );
}
