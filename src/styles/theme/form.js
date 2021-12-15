import { createTheme } from "@mui/material/styles";
import { typography } from "styles/theme/typography";
import { palette } from "styles/theme/palette";

const theme = createTheme({
    palette,
    typography,
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    minWidth: 320,
                    minHeight: 32,
                    margin: "5px 0"
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    height: "100%",
                    "&&.Mui-focused fieldset": {
                        borderColor: palette.border["main"],
                        borderWidth: 1
                    },
                    "&&:hover fieldset": {
                        borderColor: palette.border["main"],
                        borderWidth: 1
                    },
                    padding: 0
                },
                input: {
                    padding: "9px 10px"
                },
                notchedOutline: {
                    borderColor: palette.border["main"]
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    color: palette.text["primary"]
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                sizeSmall: {
                    padding: 5
                },
                sizeMedium: {
                    height: 30,
                    padding: 10,
                    fontSize: 12
                },
                sizeLarge: {
                    width: "auto",
                    padding: 10
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    marginRight: 0
                }
            }
        }
    }
});

export default theme;
