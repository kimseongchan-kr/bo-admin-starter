// 참고: https://material-ui.com/styles/basics/#hook-api
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100%",
        display: "flex"
    },
    main: {
        flexGrow: 1,
        width: "calc(100% - 240px)",
        height: "calc(100vh - 80px)",
        marginTop: 80
    },
    container: {
        minWidth: 1145,
        width: "calc(100% - 40px)",
        margin: 20,
        padding: "0 0 20px",
        borderRadius: 4
    }
}));

export default useStyles;
