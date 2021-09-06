// 참고: https://material-ui.com/customization/theming/#createmuitheme-options-args-theme
// 참고: https://material-ui.com/customization/globals/#css
import { createMuiTheme } from "@material-ui/core";
import { typography } from "styles/theme/typography";
import { palette } from "styles/theme/palette";

const theme = createMuiTheme({
    palette,
    typography,
    overrides: {
        MuiTextField: {
            root: {
                width: "calc(100% - 20px)",
                height: 32,
                backgroundColor: palette.neutral.white
            }
        },
        MuiInputBase: {
            root: {
                color: palette.text["primary"],
                fontSize: 12,
                fontFamily: "Noto Sans KR",
                lineHeight: "18px"
            }
        },
        MuiOutlinedInput: {
            root: {
                height: "100%",
                "&&$focused fieldset": {
                    borderColor: palette.border["main"],
                    borderWidth: 1
                },
                "&&:hover fieldset": {
                    borderColor: palette.border["main"],
                    borderWidth: 1
                }
            },
            input: {
                padding: "10px 8px",
                textAlign: "left"
            },
            notchedOutline: {
                borderColor: palette.border["main"]
            }
        }
    }
});

export default theme;
