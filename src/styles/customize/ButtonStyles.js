import { makeStyles } from "@material-ui/core/styles";

const buttonsStyles = makeStyles((theme) => ({
    button: {
        width: 100,
        height: 40,
        color: "#333333",
        backgroundColor: "#ffffff",
        boxShadow: "unset",
        border: "1px solid #00000033",
        borderRadius: 4,
        fontSize: 13,
        lineHeight: "17px",
        fontWeight: 400,
        letterSpacing: "0.52px",

        "&:hover": {
            backgroundColor: "#ffffff"
        },

        "& svg": {
            width: 14,
            height: 15
        }
    },
    excel: {
        width: 120,
        height: 40,
        color: "#333333",
        backgroundColor: "#ffffff",
        boxShadow: "unset",
        border: "1px solid #00000033",
        borderRadius: 4,
        fontSize: 13,
        lineHeight: "17px",
        fontWeight: 400,
        letterSpacing: "0.52px",

        "&:hover": {
            backgroundColor: "#ffffff"
        },

        "& svg": {
            width: 14,
            height: 15
        }
    }
}));

export default buttonsStyles;
