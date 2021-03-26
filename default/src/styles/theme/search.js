// 참고: https://material-ui.com/customization/theming/#createmuitheme-options-args-theme
// 참고: https://material-ui.com/customization/globals/#css
import { createMuiTheme } from "@material-ui/core";
import { typography } from "styles/theme/typography";

const searchTheme = createMuiTheme({
    typography,
    overrides: {
        MuiGrid: {
            item: {
                margin: "0 10px 0 0"
            }
        },
        MuiTextField: {
            root: {
                width: 120,
                height: 40
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
                    borderColor: "#3D393534",
                    borderWidth: "1px"
                },
                "&&:hover fieldset": {
                    borderColor: "#3D393534",
                    borderWidth: "1px"
                }
            },
            input: {
                padding: "13px 8px"
            },
            adornedEnd: {
                paddingRight: 8
            },
            notchedOutline: {
                borderColor: "#3D393534"
            }
        },
        MuiIconButton: {
            root: {
                padding: 0
            }
        },
        MuiButton: {
            root: {
                transition: "unset"
            },
            contained: {
                width: 64,
                height: 40,
                backgroundColor: "#3d3935",
                boxShadow: "unset",
                color: "white",
                "&:hover": {
                    backgroundColor: "#3d3935",
                    boxShadow: "unset"
                },
                "&:active": {
                    boxShadow: "unset"
                }
            }
        },
        MuiFormHelperText: {
            root: {
                fontSize: 10,
                width: "100%"
            },
            contained: {
                marginLeft: 3,
                marginRight: 0
            }
        }
    }
});

export default searchTheme;
