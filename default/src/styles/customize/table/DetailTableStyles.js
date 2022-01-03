import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(({ palette }) => ({
    header: {
        height: 70,
        padding: 20,
        borderBottom: `2px solid ${palette.background.main}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        "& svg": {
            marginRight: 20,
            cursor: "pointer"
        }
    },
    heading: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    contentContainer: {
        display: "flex",
        alignItems: "flex-start",
        backgroundColor: palette.neutral.white,
        padding: 30
    },
    contentImage: {
        flex: "50%",
        paddingBottom: 30,
        "& h4": {
            marginBottom: 15
        },
        "& h4 + div": {
            width: 500,
            margin: "0 auto"
        },
        "& input[type='file']": {
            display: "none"
        }
    },
    uploadContainer: {
        width: 500,
        margin: "20px auto 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        "& > label": {
            marginBottom: 15
        }
    },
    uploadPreviewContainer: {
        position: "relative",
        width: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 15px 15px 0",
        "& img": {
            border: `1px solid ${palette.neutral.dark}`,
            borderRadius: 4
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
        borderRadius: 4,
        border: `1px solid ${palette.neutral.dark}`,
        "& svg": {
            width: 32,
            height: 32,
            color: palette.neutral.dark
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
        flex: "50%"
    },
    table: {
        marginTop: 15,
        marginBottom: 20,
        "& tr": {
            border: `1px solid ${palette.border["opacity0.1"]}`
        },
        "& th": {
            minWidth: 100,
            fontWeight: 600,
            textAlign: "left",
            color: palette.text.label,
            background: palette.background.light,
            borderRight: `1px solid ${palette.border["opacity0.1"]}`
        }
    },
    detailTable: {
        borderTop: `2px solid ${palette.border.dark}`,
        "& tr": {
            border: `1px solid ${palette.border["opacity0.1"]}`
        },
        "& th": {
            minWidth: 100,
            fontWeight: 600,
            textAlign: "left",
            color: palette.text.label,
            background: palette.background.light,
            borderRight: `1px solid ${palette.border["opacity0.1"]}`
        }
    },
    selectContainer: {
        "& > div": {
            margin: 0
        }
    },
    statusText: {
        marginLeft: 10,
        fontSize: 10,
        fontWeight: 500
    },
    form: {
        padding: "20px 20px 0",
        "& table": {
            marginTop: 0
        }
    }
}));

export default useStyles;
