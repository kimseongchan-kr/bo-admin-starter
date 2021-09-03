// 참고: https://material-ui.com/styles/basics/#hook-api
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    title: {
        fontWeight: 500,
        letterSpacing: "-1.44px",
        marginBottom: 20
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        borderTop: " 1px solid #3d35951a",
        borderBottom: " 1px solid #3d35951a",
        "& td": {
            paddingLeft: 20
        }
    },
    row: {
        borderBottom: " 1px solid #3d35951a"
    },
    selectContent: {
        height: 48,
        padding: "7px 0 7px 20px",
        "& > div": {
            width: "calc(100% - 20px)",
            textAlign: "center",
            margin: 0,
            "& > div > div > div": {
                width: "100%"
            }
        }
    },
    editorRow: {
        height: 400,
        "&& td": {
            height: 400,
            paddingLeft: 0
        }
    },
    label: {
        width: 160,
        height: 48,
        background: "#fbfbfb",
        textAlign: "left",
        lineHeight: "48px",
        color: "#333333b3"
    },
    textInput: {
        width: 320,
        height: 32
    }
}));

export default useStyles;
