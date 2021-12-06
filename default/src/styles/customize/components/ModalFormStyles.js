// 참고: https://material-ui.com/styles/basics/#hook-api
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(({ palette }) => ({
    container: {
        minWidth: 1145,
        maxWidth: "100%"
    },
    title: {
        fontWeight: 500,
        letterSpacing: "-1.44px"
    },
    table: {
        borderTop: `1px solid ${palette.border["opacity0.1"]}`,
        borderBottom: `1px solid ${palette.border["opacity0.1"]}`,
        "& tr": {
            border: `1px solid ${palette.border["opacity0.1"]}`
        },
        "& th": {
            minWidth: 100,
            fontWeight: 600,
            textAlign: "left",
            color: palette.text["label"],
            background: palette.background["light"],
            borderRight: `1px solid ${palette.border["opacity0.1"]}`
        }
    },
    selectContent: {
        "& > div": {
            width: "100%",
            margin: 0,
            textAlign: "center",
            "& > div > div > div": {
                width: "100%"
            }
        }
    },
    editorRow: {
        height: 400,
        "&& td": {
            height: 400,
            padding: 0
        }
    }
}));

export default useStyles;
