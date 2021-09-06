// 참고: https://material-ui.com/styles/basics/#hook-api
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    progressIcon: {
        color: theme.palette.primary.main
    },
    disabled: {
        minWidth: 100,
        width: "auto",
        padding: 10,
        backgroundColor: "rgba(0,0,0,0.12)"
    },
    check: {
        minWidth: 100,
        width: "auto",
        padding: 10,
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        "&:hover": {
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`
        },
        "&:active": {
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`
        }
    },
    cancel: {
        minWidth: 100,
        width: "auto",
        padding: 10,
        color: theme.palette.primary.red,
        border: `1px solid ${theme.palette.primary.red}`,
        "&:hover": {
            color: theme.palette.primary.red,
            border: `1px solid ${theme.palette.primary.red}`
        },
        "&:active": {
            color: theme.palette.primary.red,
            border: `1px solid ${theme.palette.primary.red}`
        }
    },
    pageButton: {
        width: "auto",
        padding: 10,
        fontWeight: 600,
        color: theme.palette.primary["main"],
        borderColor: theme.palette.primary["main"]
    }
}));

export default useStyles;
