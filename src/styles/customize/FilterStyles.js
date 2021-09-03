// 참고: https://material-ui.com/styles/basics/#hook-api
import { makeStyles } from "@material-ui/core/styles";

const filterStyles = makeStyles(() => ({
    iconButton: {
        padding: "0 4px",
        height: 48,
        lineHeight: "48px"
    },
    listItem: {
        height: 32
    },
    okButton: {
        display: "block",
        textAlign: "center",
        height: 32,
        borderTop: "1px solid #3d39351a"
    }
}));

export default filterStyles;
