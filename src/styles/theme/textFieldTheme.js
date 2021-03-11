import { createMuiTheme } from "@material-ui/core";

const textFieldTheme = createMuiTheme({
    overrides: {
        MuiTextField: {
            root: {
                width: "calc(100% - 20px)",
                height: 32
            }
        },
        MuiInputBase: {
            root: {
                fontSize: 12,
                fontFamily: "Noto Sans KR",
                lineHeight: "18px"
            }
        },
        MuiOutlinedInput: {
            root: {
                height: "100%"
            },
            input: {
                padding: "10px 8px",
                textAlign: "center"
            }
        }
    }
});

export default textFieldTheme;
