// 참고: https://material-ui.com/styles/basics/#hook-api
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    message: {
        marginBottom: 30,
        textAlign: "center",
        fontSize: 13,
        letterSpacing: "-0.26px",
        fontWeight: 600
    }
}));

export default useStyles;
