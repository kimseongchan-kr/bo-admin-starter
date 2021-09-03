// 참고: https://material-ui.com/customization/theming/#createmuitheme-options-args-theme
// 참고: https://material-ui.com/customization/globals/#css
import { createMuiTheme } from "@material-ui/core";
import { typography } from "styles/theme/typography";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#039BE5"
        },
        secondary: {
            main: "#039BE5"
        },
        text: {
            primary: "#333333",
            secondary: "#333333"
        }
    },
    typography,
    overrides: {
        MuiCssBaseline: {
            "@global": {
                "*": {
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0
                },
                html: {
                    "-webkit-font-smoothing": "antialiased",
                    "-moz-osx-font-smoothing": "grayscale",
                    height: "100%",
                    width: "100%"
                },
                body: {
                    backgroundColor: "#f3f3f3",
                    height: "100%",
                    width: "100%"
                },
                a: {
                    textDecoration: "none",
                    color: "#333333"
                },
                "#root": {
                    height: "100%",
                    width: "100%"
                }
            }
        },
        MuiList: {
            padding: {
                paddingTop: 0,
                paddingBottom: 0
            }
        },
        MuiIconButton: {
            root: {
                "&:hover": {
                    backgroundColor: "#ffffff"
                }
            }
        },
        MuiOutlinedInput: {
            root: {
                "&&$focused fieldset": {
                    borderColor: "#3D393534",
                    borderWidth: "1px"
                },
                "&&:hover fieldset": {
                    borderColor: "#3D393534",
                    borderWidth: "1px"
                }
            },
            notchedOutline: {
                borderColor: "#3D393534"
            }
        },
        MuiTableContainer: {
            root: {
                overflowX: "unset"
            }
        },
        MuiTableRow: {
            root: {
                height: 40
            },
            hover: {
                "&&:hover": {
                    backgroundColor: "#039be508"
                }
            }
        },
        MuiTableHead: {
            root: {
                height: 48,
                fontSize: 12,
                background: "#FBFBFB",
                borderBottom: "2px solid #3D3935"
            }
        },
        MuiTableCell: {
            root: {
                padding: 0
            },
            head: {
                opacity: 0.7,
                lineHeight: "40px"
            }
        },
        MuiTablePagination: {
            root: {
                height: 80,
                fontSize: 12,
                overflow: "unset",
                "& p.MuiTablePagination-caption:nth-child(4)": {
                    position: "absolute",
                    left: 20
                }
            },
            toolbar: {
                height: 80,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            input: {
                lineHeight: "18px"
            }
        },
        MuiPaginationItem: {
            outlinedPrimary: {
                "&$selected": {
                    backgroundColor: "white"
                }
            }
        },
        MuiSvgIcon: {
            root: {
                width: 20,
                height: 20
            }
        },
        MuiSelect: {
            icon: {
                top: "unset"
            }
        }
    }
});

export default theme;
