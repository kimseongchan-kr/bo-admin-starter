// 참고: https://material-ui.com/customization/theming/#createmuitheme-options-args-theme
// 참고: https://material-ui.com/customization/globals/#css
import { createMuiTheme } from "@material-ui/core";
import { typography } from "styles/theme/typography";

const textFieldTheme = createMuiTheme({
    typography,
    overrides: {
        MuiTextField: {
            root: {
                width: "calc(100% - 20px)",
                height: 32
            }
        },
        MuiInputBase: {
            root: {
                color: "#333333",
                fontSize: 12,
                fontFamily: "Noto Sans KR",
                lineHeight: "18px"
            }
        },
        MuiOutlinedInput: {
            root: {
                height: "100%",
                "&&$focused fieldset": {
                    borderColor: "#3D393534",
                    borderWidth: "1px"
                },
                "&&:hover fieldset": {
                    borderColor: "#3D393534",
                    borderWidth: "1px"
                }
            },
            input: {
                padding: "10px 8px",
                textAlign: "center"
            },
            notchedOutline: {
                borderColor: "#3D393534"
            }
        }
    }
});

export default textFieldTheme;
