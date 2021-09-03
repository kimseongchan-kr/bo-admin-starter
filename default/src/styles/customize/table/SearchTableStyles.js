// 참고: https://material-ui.com/styles/basics/#hook-api
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        marginTop: 10,
        paddingBottom: 30
    },
    paper: {
        width: "100%",
        marginBottom: theme.spacing(2)
    },
    table: {
        minWidth: 750
    },
    tableHead: {
        fontWeight: 500
    },
    underlinedContent: {
        cursor: "pointer",
        textDecoration: "underline",
        color: theme.palette.primary["main"]
    },
    visuallyHidden: {
        position: "absolute",
        top: 20,
        width: 1,
        height: 1,
        margin: -1,
        border: 0,
        padding: 0,
        clip: "rect(0 0 0 0)",
        overflow: "hidden"
    }
}));

export default useStyles;
