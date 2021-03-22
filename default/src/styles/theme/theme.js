import { createMuiTheme, colors } from "@material-ui/core";
import { typography } from "styles/theme/typography";

const theme = createMuiTheme({
    palette: {
        background: {
            dark: "#F4F6F8",
            default: colors.common.white,
            paper: colors.common.white
        },
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
