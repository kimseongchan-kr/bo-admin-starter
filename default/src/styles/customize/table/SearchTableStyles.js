// 참고: https://material-ui.com/styles/basics/#hook-api
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(({ palette, breakpoints }) => ({
    paper: {
        width: "100%",
        borderRadius: 4
    },
    table: {
        minWidth: 750,
        "& tr": {
            borderTop: `1px solid ${palette.border["opacity0.1"]}`,
            borderBottom: `1px solid ${palette.border["opacity0.1"]}`
        }
    },
    tableHead: {
        fontWeight: 500
    },
    underlinedContent: {
        cursor: "pointer",
        textDecoration: "underline",
        color: palette.primary["main"]
    },
    toolbar: {
        [breakpoints.up("sm")]: {
            paddingLeft: 0
        }
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
