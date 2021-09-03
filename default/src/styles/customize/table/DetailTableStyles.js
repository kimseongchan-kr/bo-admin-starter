// 참고: https://material-ui.com/styles/basics/#hook-api
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        paddingBottom: 30
    },
    paper: {
        width: "100%",
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.background["main"]
    },
    detailPaper: {
        width: "100%",
        marginBottom: theme.spacing(2)
    },
    heading: {
        marginBottom: 20,
        paddingBottom: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        borderBottom: `2px solid ${theme.palette.neutral["dark"]}`,
        "& svg": {
            marginRight: 20,
            cursor: "pointer"
        }
    },
    mb20: {
        marginBottom: 20,
        fontWeight: 600
    },
    contentContainer: {
        display: "flex",
        alignItems: "flex-start",
        backgroundColor: theme.palette.neutral["white"],
        paddingTop: 30,
        marginBottom: 30
    },
    contentImage: {
        width: 560,
        paddingBottom: 30,
        "& > * ": {
            width: 500,
            margin: "0 auto"
        },
        "& h4:first-child": {
            marginBottom: 33
        },
        "& h4:not(:first-child)": {
            marginBottom: 20
        },
        "& input[type='file']": {
            display: "none"
        }
    },
    uploadContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: 15
    },
    uploadPreviewContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: 70,
        "& img": {
            border: `1px solid ${theme.palette.neutral.dark}`,
            borderRadius: 5
        },
        "& > button": {
            position: "absolute",
            bottom: "-10px",
            right: "-10px",
            backgroundColor: "black",
            color: "white",
            padding: 5,
            "& svg": {
                width: 12,
                height: 12
            },
            "&:hover": {
                background: "black"
            },
            "&:active": {
                transform: "scale(0.98)"
            }
        }
    },
    uploadButton: {
        width: 70,
        height: 70,
        border: `1px solid ${theme.palette.neutral.dark}`,
        borderRadius: 5,
        "& svg": {
            width: 32,
            height: 32,
            color: theme.palette.neutral.dark
        },
        "&:hover": {
            backgroundColor: "white"
        },
        "&:active": {
            transition: "none",
            transform: "scale(0.98)"
        }
    },
    tableContainer: {
        flex: 1,
        paddingRight: 30,
        "& hr": {
            marginBottom: 20
        }
    },
    table: {
        width: "100%",
        marginTop: 15,
        marginBottom: 20,
        borderCollapse: "collapse",
        backgroundColor: theme.palette.neutral["white"],
        borderTop: `2px solid ${theme.palette.border["dark"]}`,
        borderBottom: `1px solid ${theme.palette.border["opacity0.1"]}`,
        "& th": {
            paddingLeft: 20
        },
        "& td": {
            paddingLeft: 20,
            paddingRight: 20
        }
    },
    noBorderTable: {
        width: "100%",
        marginTop: 15,
        marginBottom: 20,
        borderCollapse: "collapse",
        backgroundColor: theme.palette.neutral["white"],
        "& th": {
            paddingLeft: 20
        },
        "& td": {
            paddingLeft: 20,
            paddingRight: 20
        }
    },
    noMarginTable: {
        width: "100%",
        borderCollapse: "collapse",
        backgroundColor: theme.palette.neutral["white"],
        "& th": {
            paddingLeft: 20
        },
        "& td": {
            paddingLeft: 20,
            paddingRight: 20
        }
    },
    row: {
        border: `1px solid ${theme.palette.border["opacity0.1"]}`
    },
    tableHead: {
        minWidth: 160,
        height: 48,
        paddingRight: 20,
        fontWeight: 600,
        lineHeight: "48px",
        color: theme.palette.text["primary"],
        background: theme.palette.background["light"]
    },
    label: {
        width: 160,
        height: 48,
        fontWeight: 600,
        textAlign: "left",
        color: theme.palette.text["primary"],
        background: theme.palette.background["light"]
    },
    content: {
        height: 48,
        padding: "7px"
    },
    textContentContainer: {
        height: 48,
        padding: "7px",
        "& > div": {
            width: "100%"
        }
    },
    selectContainer: {
        "& > div": {
            margin: 0
        }
    },
    selectContent: {
        height: 48,
        padding: "7px",
        "& > div": {
            width: "100%",
            textAlign: "center",
            "& > div > div > div": {
                width: "100%"
            }
        }
    },
    statusText: {
        marginLeft: 10,
        fontSize: 10,
        fontWeight: 500
    },
    imageContainer: {
        position: "relative",
        width: 500,
        margin: "0 auto",
        "& img": {
            margin: "0 auto"
        }
    },
    imagePreviewContainer: {
        width: 500,
        margin: "10px auto 30px",
        "& img": {
            margin: "0 5px 0 0",
            cursor: "pointer"
        },
        "& img:last-child": {
            margin: 0
        }
    },
    noImage: {
        width: 500,
        height: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 500
    },
    imageButtonContainer: {
        position: "absolute",
        width: 500,
        height: 500
    },
    imageButton: {
        width: 40,
        height: 40,
        minWidth: 0,
        margin: 0,
        padding: 0,
        boxShadow: "unset",
        border: "none",
        fontWeight: 600,
        fontSize: 12,
        color: theme.palette.neutral["dark"],
        background: "none",
        "& > span > span": {
            marginLeft: 0,
            marginRight: 0
        },
        "& svg": {
            width: 40,
            height: 40,
            background: "#fbfbfb80"
        },
        "&:hover": {
            boxShadow: "unset",
            color: theme.palette.neutral["dark"],
            background: "none",
            border: "none"
        },
        "&:active": {
            boxShadow: "unset",
            transition: "none",
            background: "none"
        }
    },
    buttonContent: {
        display: "flex",
        alignItem: "center",
        justifyContent: "flex-start"
    },
    buttonContentText: {
        flex: 1,
        height: 30,
        lineHeight: "30px",
        marginTop: 5,
        marginBottom: 5
    },
    buttonsContainer: {
        display: "flex",
        alignItems: "center",
        "&:first-child": {
            marginRight: "auto"
        },
        "&:nth-child(2)": {
            marginLeft: "auto"
        }
    },
    marginAuto: {
        marginLeft: "auto",
        marginRight: "auto"
    }
}));

export default useStyles;
