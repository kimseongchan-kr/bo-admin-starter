// 참고: https://material-ui.com/customization/theming/#createmuitheme-options-args-theme
// 참고: https://material-ui.com/customization/globals/#css
import { createMuiTheme } from "@material-ui/core";
import { typography } from "styles/theme/typography";
import { palette } from "styles/theme/palette";

const theme = createMuiTheme({
    palette,
    typography,
    overrides: {
        MuiGrid: {
            item: {
                margin: "0 10px 0 0"
            }
        },
        MuiFormGroup: {
            root: {
                flexDirection: "row"
            }
        },
        MuiTextField: {
            root: {
                width: 120,
                height: 40
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
        MuiInputBase: {
            root: {
                fontSize: 12,
                fontFamily: "Noto Sans KR",
                lineHeight: "18px"
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
                padding: "13px 8px"
            },
            adornedEnd: {
                paddingRight: 8
            },
            notchedOutline: {
                borderColor: palette.border["main"]
            }
        },
        MuiRadio: {
            root: {
                color: palette.neutral["dark"]
            }
        },
        MuiIconButton: {
            root: {
                padding: 0
            },
            colorPrimary: {
                color: palette.primary["main"]
            }
        },
        MuiButton: {
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
            }
        },
        MuiFormHelperText: {
            root: {
                width: "100%",
                fontSize: 10
            },
            contained: {
                marginLeft: 3,
                marginRight: 0
            }
        },
        MuiSelect: {
            select: {
                minWidth: 84,
                padding: 10,
                backgroundColor: palette.neutral["white"],
                border: `1px solid ${palette.border["main"]}`,
                borderRadius: 4,
                "&:focus": {
                    borderRadius: 4,
                    backgroundColor: palette.neutral["white"]
                }
            },
            icon: {
                top: "calc(50% - 8px)",
                right: 4,
                width: 20,
                height: 20,
                color: "#cccccc"
            }
        },
        MuiMenuItem: {
            root: {
                paddingTop: 10,
                paddingBottom: 10
            }
        },
        MuiList: {
            padding: {
                paddingTop: 0,
                paddingBottom: 0
            }
        },
        MuiListItem: {
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
});

export default theme;
