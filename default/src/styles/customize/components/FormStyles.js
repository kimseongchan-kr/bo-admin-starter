// 참고: https://material-ui.com/styles/basics/#hook-api
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    textInput: {
        width: 320,
        height: 32
    },
    textarea: {
        width: "100%",
        padding: "9px 10px",
        fontSize: 12,
        fontFamily: "Noto Sans KR",
        lineHeight: "18px",
        color: theme.palette.text["primary"],
        outline: "none",
        resize: "vertical",
        border: `1px solid ${theme.palette.border["main"]}`
    },
    errorMessage: {
        marginLeft: 10,
        lineHeight: "32px",
        color: theme.palette.error["main"]
    },
    imageContainer: {
        marginTop: 10
    }
}));

export default useStyles;
