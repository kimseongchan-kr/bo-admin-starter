// 참고: https://material-ui.com/customization/theming/#createmuitheme-options-args-theme
// 참고: https://material-ui.com/customization/globals/#css
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
                    width: "100%",
                    height: 40
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
                        borderColor: palette.border["main"],
                        borderWidth: 1
                    },
                    "&&:hover fieldset": {
                        borderColor: palette.border["main"],
                        borderWidth: 1
                    }
                },
                notchedOutline: {
                    borderColor: palette.border["main"]
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    transition: "unset"
                },
                contained: {
                    width: 64,
                    height: 40,
                    backgroundColor: palette.neutral["dark"],
                    boxShadow: "unset",
                    color: palette.neutral["white"],
                    fontWeight: 500,
                    "&:hover": {
                        backgroundColor: palette.neutral["dark"],
                        boxShadow: "unset"
                    },
                    "&:active": {
                        boxShadow: "unset"
                    }
                },
                sizeLarge: {
                    minWidth: 100,
                    width: "auto",
                    padding: 10
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    minWidth: 84,
                    padding: "11px 10px",
                    borderRadius: 4,
                    backgroundColor: palette.neutral["white"],
                    "&:focus": {
                        borderRadius: 4,
                        backgroundColor: palette.neutral["white"]
                    }
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    paddingTop: 10,
                    paddingBottom: 10
                }
            }
        },
        MuiList: {
            styleOverrides: {
                padding: {
                    paddingTop: 0,
                    paddingBottom: 0
                }
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    "&$selected": {
                        backgroundColor: palette.primary["opacity0.2"]
                    },
                    "&$selected:hover": {
                        backgroundColor: palette.primary["opacity0.2"]
                    }
                },
                button: {
                    "&:hover": {
                        backgroundColor: palette.primary["light"]
                    }
                }
            }
        }
    }
});

export default theme;
