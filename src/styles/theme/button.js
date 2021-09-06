// 참고: https://material-ui.com/customization/theming/#createmuitheme-options-args-theme
// 참고: https://material-ui.com/customization/globals/#css
import { createMuiTheme } from "@material-ui/core";
import { typography } from "styles/theme/typography";
import { palette } from "styles/theme/palette";

const buttonTheme = createMuiTheme({
    palette,
    typography,
    overrides: {
        MuiButtonBase: {
            root: {
                width: "auto",
                height: 40,
                marginLeft: 5,
                boxShadow: "unset",
                borderRadius: 4,
                border: `1px solid ${palette.border["light"]}`,
                fontSize: 13,
                fontWeight: 400,
                lineHeight: "17px",
                letterSpacing: "0.52px",
                color: palette.text["primary"],
                backgroundColor: palette.neutral["white"]
            }
        },
        MuiSvgIcon: {
            root: {
                width: 14,
                height: 15
            }
        },
        MuiButton: {
            root: {
                "&:hover": {
                    backgroundColor: palette.neutral["white"]
                }
            },
            outlined: {
                width: 100,
                height: 40,
                marginLeft: 5,
                padding: 0,
                boxShadow: "unset",
                borderRadius: 4,
                border: `1px solid ${palette.border["light"]}`,
                fontSize: 13,
                fontWeight: 400,
                lineHeight: "17px",
                letterSpacing: "0.52px",
                color: palette.text["primary"],
                backgroundColor: palette.neutral["white"]
            },
            contained: {
                minWidth: 48,
                height: 32,
                marginRight: 4,
                padding: 6,
                boxShadow: "unset",
                borderRadius: 4,
                border: `1px solid ${palette.border["main"]}`,
                fontSize: 12,
                letterSpacing: " -0.24px",
                color: palette.text["primary"],
                backgroundColor: palette.background["light"],
                "&:hover": {
                    backgroundColor: palette.background["light"],
                    border: `1px solid ${palette.border["main"]}`,
                    boxShadow: "unset"
                },
                "&:last-child": {
                    marginRight: 0
                }
            }
        }
    }
});

export default buttonTheme;
