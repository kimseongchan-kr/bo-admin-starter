// 참고: https://material-ui.com/customization/theming/#createmuitheme-options-args-theme
// 참고: https://material-ui.com/customization/globals/#css
import { createMuiTheme } from "@material-ui/core";
import { typography } from "styles/theme/typography";
import { palette } from "styles/theme/palette";
import { koKR } from "@material-ui/core/locale";

const theme = createMuiTheme(
    {
        palette,
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
                        backgroundColor: palette.background["main"],
                        height: "100%",
                        width: "100%"
                    },
                    a: {
                        textDecoration: "none",
                        color: "inherit"
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
                        backgroundColor: palette.neutral["white"]
                    }
                }
            },
            MuiOutlinedInput: {
                root: {
                    "&&$focused fieldset": {
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
            },
            MuiTableContainer: {
                root: {
                    overflowX: "unset"
                }
            },
            MuiTableRow: {
                root: {
                    height: 46
                },
                hover: {
                    "&&:hover": {
                        backgroundColor: palette.primary["light"]
                    }
                }
            },
            MuiTableHead: {
                root: {
                    height: 52,
                    fontSize: 12,
                    background: palette.background["light"],
                    borderBottom: `2px solid ${palette.border["dark"]}`
                }
            },
            MuiTableCell: {
                root: {
                    padding: 10,
                    cursor: "context-menu"
                },
                head: {
                    height: 52,
                    opacity: 0.7
                }
            },
            MuiTablePagination: {
                root: {
                    height: 80,
                    fontSize: 12,
                    overflow: "unset"
                },
                toolbar: {
                    height: 80,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                spacer: {
                    flex: 0
                },
                input: {
                    lineHeight: "18px"
                },
                caption: {
                    "&:first-of-type": {
                        marginLeft: "auto"
                    }
                }
            },
            MuiPagination: {
                root: {
                    marginRight: "auto"
                }
            },
            MuiPaginationItem: {
                outlinedPrimary: {
                    "&$selected": {
                        backgroundColor: palette.neutral["white"]
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
    },
    koKR
);

export default theme;
