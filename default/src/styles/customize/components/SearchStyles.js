import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(({ palette }) => ({
    root: {
        width: "100%",
        marginBottom: 20,
        backgroundColor: palette.neutral.white,
        boxShadow: `0px 2px 5px ${palette.shadow.primary}`,
        borderRadius: 4
    },
    termSearchRoot: {
        width: "100%",
        margin: "0 auto 20px",
        paddingBottom: 20,
        borderRadius: 4,
        backgroundColor: palette.neutral.white,
        boxShadow: `0px 2px 5px ${palette.shadow.primary}`
    },
    table: {
        borderRadius: 4,
        "& tr": {
            borderTop: `1px solid ${palette.border["opacity0.1"]}`,
            borderBottom: `1px solid ${palette.border["opacity0.1"]}`
        },
        "& th": {
            width: 160,
            fontWeight: 500,
            lineHeight: "48px",
            textAlign: "left",
            color: palette.text.primary
        },
        "& td": {
            padding: 7
        }
    },
    searchSelect: {
        minWidth: 120,
        maxWidth: 150,
        backgroundColor: palette.neutral.white
    },
    searchTextField: {
        minWidth: 160,
        width: 300
    },
    spacer: {
        height: 19
    },
    dash: {
        height: 40,
        display: "block",
        fontSize: 12,
        fontWeight: 400,
        letterSpacing: 0,
        lineHeight: "40px",
        textAlign: "center"
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
