// 참고: https://material-ui.com/styles/basics/#hook-api
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        marginTop: 15,
        marginBottom: 20,
        padding: "0 200px 20px 20px",
        backgroundColor: theme.palette.neutral["white"],
        boxShadow: "0px 2px 5px #E8E8E888",
        "& hr": {
            margin: "39px 10px 0 0"
        }
    },
    termSearchRoot: {
        width: "100%",
        marginTop: 15,
        marginBottom: 20,
        padding: "20px 200px 20px 20px",
        backgroundColor: theme.palette.neutral["white"],
        boxShadow: "0px 2px 5px #E8E8E888",
        "& hr": {
            margin: "39px 10px 0 0"
        }
    },
    table: {
        width: "100%",
        marginTop: 15,
        marginBottom: 20,
        backgroundColor: theme.palette.neutral["white"],
        borderCollapse: "collapse",
        borderTop: `2px solid ${theme.palette.border["dark"]}`,
        borderBottom: `1px solid ${theme.palette.border["opacity0.1"]}`,
        "& th": {
            paddingLeft: 20
        },
        "& td": {
            paddingLeft: 20
        }
    },
    row: {
        borderBottom: `1px solid ${theme.palette.border["opacity0.1"]}`
    },
    label: {
        width: 160,
        height: 48,
        lineHeight: "48px",
        textAlign: "left",
        color: theme.palette.text["primary"],
        background: theme.palette.background["light"],
        "& p": {
            fontWeight: 500
        }
    },
    content: {
        padding: "7px"
    },
    divider: {
        height: 40,
        alignSelf: "center"
    },
    searchTextField: {
        width: 160
    },
    spacer: {
        height: 19
    },
    dash: {
        display: "block",
        height: 40,
        textAlign: "center",
        fontSize: 12,
        lineHeight: "40px",
        fontWeight: 400,
        letterSpacing: 0
    },
    btnContainer: {
        "& button": {
            marginRight: 5
        },
        "& button:last-of-type": {
            width: "auto",
            marginRight: 0
        }
    }
}));

export default useStyles;
