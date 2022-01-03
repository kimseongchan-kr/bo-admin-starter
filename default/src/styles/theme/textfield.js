import { createTheme } from "@mui/material/styles";
import typography from "styles/theme/typography";
import palette from "styles/theme/palette";

const theme = createTheme({
    palette,
    typography,
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    height: 32,
                    backgroundColor: palette.neutral.white
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    lineHeight: "18px"
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    height: "100%",
                    "&&.Mui-focused fieldset": {
                        borderColor: palette.border.main,
                        borderWidth: 1
                    },
                    "&&:hover fieldset": {
                        borderColor: palette.border.main,
                        borderWidth: 1
                    }
                },
                input: {
                    textAlign: "left",
                    padding: "10px 8px"
                },
                notchedOutline: {
                    borderColor: palette.border.main
                }
            }
        }
    }
});

export default theme;
