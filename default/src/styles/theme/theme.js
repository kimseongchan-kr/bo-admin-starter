import { createTheme } from "@mui/material/styles";
import typography from "styles/theme/typography";
import palette from "styles/theme/palette";
import { koKR } from "@mui/material/locale";

const theme = createTheme(
    {
        palette,
        typography,
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    "*": {
                        boxSizing: "border-box",
                        margin: 0,
                        padding: 0
                    },
                    html: {
                        height: "100%",
                        width: "100%"
                    },
                    body: {
                        backgroundColor: palette.background.main,
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
                    },
                    table: {
                        width: "100%",
                        borderCollapse: "collapse",
                        backgroundColor: palette.neutral.white,
                        "& th": {
                            height: 48,
                            padding: "0 20px"
                        },
                        "& td": {
                            height: 48,
                            padding: "0 20px"
                        }
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
                        minWidth: 100,
                        width: "auto",
                        padding: 10
                    }
                }
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        "&:hover": {
                            backgroundColor: palette.neutral.white
                        }
                    }
                }
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        "&&$focused fieldset": {
                            borderColor: palette.border.main,
                            borderWidth: 1
                        },
                        "&&:hover fieldset": {
                            borderColor: palette.border.main,
                            borderWidth: 1
                        }
                    },
                    notchedOutline: {
                        borderColor: palette.border.main
                    }
                }
            },
            MuiTableContainer: {
                styleOverrides: {
                    root: {
                        overflowX: "unset"
                    }
                }
            },
            MuiTableRow: {
                styleOverrides: {
                    root: {
                        height: 46
                    },
                    hover: {
                        "&&:hover": {
                            backgroundColor: palette.primary.light
                        }
                    }
                }
            },
            MuiTableHead: {
                styleOverrides: {
                    root: {
                        height: 70,
                        fontSize: 12,
                        fontWeight: 500,
                        borderBottom: `1px solid ${palette.border.light}`
                    }
                }
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        padding: 10,
                        cursor: "context-menu",
                        backgroundColor: palette.neutral.white
                    },
                    head: {
                        height: 70
                    }
                }
            },
            MuiTablePagination: {
                styleOverrides: {
                    root: {
                        margin: "0 20px",
                        borderRadius: 4,
                        "&:last-child": {
                            padding: "20px 0"
                        }
                    },
                    spacer: {
                        flex: "1 1 100%"
                    }
                }
            },
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        width: 20,
                        height: 20
                    }
                }
            },
            MuiSelect: {
                styleOverrides: {
                    icon: {
                        top: "unset"
                    }
                }
            }
        }
    },
    koKR
);

export default theme;
