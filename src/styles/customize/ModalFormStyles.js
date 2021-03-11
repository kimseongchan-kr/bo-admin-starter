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
