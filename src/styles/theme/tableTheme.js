import { createMuiTheme } from "@material-ui/core";
import { typography } from "styles/theme/typography";

const tableTheme = createMuiTheme({
    typography,
    overrides: {
        MuiTextField: {
            root: {
                width: 120,
                height: 32
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
                padding: "9px 10px"
            },
            notchedOutline: {
                borderColor: "#3D393534"
            }
        },
        MuiInputBase: {
            root: {
                color: "#333333"
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
                    color: "#039BE5"
                }
            }
        },
        MuiRadio: {
            root: {
                width: "auto",
                height: "auto",
                border: "none"
            },
            colorPrimary: {
                "&$checked": {
                    color: "#039BE5"
                }
            }
        },
        MuiIconButton: {
            root: {
                width: 100,
                height: 40,
                lineHeight: "40px",
                border: "1px solid #00000033",
                borderRadius: 4,
                fontSize: 13,
                color: "#333333",
                letterSpacing: "-0.52px",

                "&:hover": {
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
        MuiSvgIcon: {
            root: {
                width: 14,
                height: 15
            }
        }
    }
});

export default tableTheme;
