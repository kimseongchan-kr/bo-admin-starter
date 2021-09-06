// 참고: https://material-ui.com/customization/theming/#createmuitheme-options-args-theme
// 참고: https://material-ui.com/customization/globals/#css
import { createMuiTheme } from "@material-ui/core";
import { typography } from "styles/theme/typography";
import { palette } from "styles/theme/palette";

const theme = createMuiTheme({
    palette,
    typography,
    overrides: {
        MuiTextField: {
            root: {
                width: 120,
                height: 32
            }
        },
        MuiInput: {
            underline: {
                "&&&:before": {
                    borderBottom: "none"
                },
                "&&&:after": {
                    borderBottom: "none"
                }
            }
        },
        MuiOutlinedInput: {
            root: {
                height: "100%",
                "&&$focused fieldset": {
                    borderColor: palette.border["main"],
                    borderWidth: 1
                },
                "&&:hover fieldset": {
                    borderColor: palette.border["main"],
                    borderWidth: 1
                }
            },
            input: {
                padding: "9px 10px"
            },
            notchedOutline: {
                borderColor: palette.border["main"]
            }
        },
        MuiInputBase: {
            root: {
                color: palette.text["primary"]
            }
        },
        MuiFormGroup: {
            root: {
                flexDirection: "row"
            }
        },
        MuiCheckbox: {
            root: {
                width: "auto",
                height: "auto",
                border: "none"
            },
            colorPrimary: {
                "&$checked": {
                    color: palette.primary["main"]
                }
            }
        },
        MuiIconButton: {
            colorPrimary: {
                color: palette.primary["main"]
            }
        },
        MuiRadio: {
            root: {
                width: "auto",
                height: "auto",
                border: "none",
                color: palette.neutral["dark"]
            },
            colorPrimary: {
                "&$checked": {
                    color: palette.primary["main"]
                }
            }
        },
        MuiSelect: {
            select: {
                padding: 8,
                border: `1px solid ${palette.border["main"]}`,
                borderRadius: 4,
                "&:focus": {
                    borderRadius: 4,
                    backgroundColor: "transparent"
                }
            }
        },
        MuiGrid: {
            item: {
                paddingTop: 20,
                marginRight: 4,
                "&:last-child": {
                    marginRight: 0
                }
            }
        },
        MuiButton: {
            contained: {
                width: 48,
                minWidth: 48,
                height: 32,
                margin: "0 10px 0 3px",
                padding: 6,
                border: `1px solid ${palette.border["main"]}`,
                boxShadow: "unset",
                borderRadius: 4,
                backgroundColor: palette.neutral["dark"],
                fontSize: 12,
                fontWeight: 600,
                color: palette.neutral["white"],
                letterSpacing: " -0.24px",
                "&:hover": {
                    backgroundColor: palette.neutral["dark"],
                    border: `1px solid ${palette.border["main"]}`,
                    boxShadow: "unset"
                },
                "&:last-child": {
                    marginRight: 0
                }
            }
        }
    }
});

export default theme;
