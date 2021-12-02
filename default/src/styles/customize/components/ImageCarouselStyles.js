// 참고: https://material-ui.com/styles/basics/#hook-api
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(({ palette }) => ({
    imageContainer: {
        position: "relative",
        width: 500,
        margin: "0 auto",
        "& img": {
            margin: "0 auto",
            borderRadius: 4
        }
    },
    imagePreviewContainer: {
        width: 500,
        margin: "20px auto",
        "& img:last-child": {
            margin: 0
        }
    },
    proImg: {
        cursor: "pointer",
        marginRight: 5,
        width: "70px",
        height: "70px",
        borderRadius: 4
    },
    noImage: {
        width: 500,
        height: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 500,
        borderRadius: 4,
        color: palette.text["label"],
        textTransform: "uppercase",
        fontSize: "18px",
        backgroundColor: palette.background["main"]
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
        borderRadius: 4,
        fontWeight: 600,
        fontSize: 12,
        color: palette.neutral["dark"],
        background: "none",
        "& > span": {
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
            border: "none",
            background: "none",
            color: palette.neutral["dark"]
        },
        "&:active": {
            boxShadow: "unset",
            transition: "none",
            background: "none"
        }
    }
}));

export default useStyles;
