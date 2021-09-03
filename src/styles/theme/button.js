// 참고: https://material-ui.com/customization/theming/#createmuitheme-options-args-theme
// 참고: https://material-ui.com/customization/globals/#css
import { createMuiTheme } from "@material-ui/core";
import { typography } from "styles/theme/typography";

const buttonTheme = createMuiTheme({
    typography,
    overrides: {
        MuiButtonBase: {
            root: {
                width: 100,
                height: 40,
                marginLeft: 5,
                color: "#333333",
                backgroundColor: "#ffffff",
                boxShadow: "unset",
                border: "1px solid #00000033",
                borderRadius: 4,
                fontSize: 13,
                lineHeight: "17px",
                fontWeight: 400,
                letterSpacing: "0.52px"
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
                    backgroundColor: "#ffffff"
                }
            },
            outlined: {
                width: 100,
                height: 40,
                marginLeft: 5,
                padding: 0,
                color: "#333333",
                backgroundColor: "#ffffff",
                boxShadow: "unset",
                border: "1px solid #00000033",
                borderRadius: 4,
                fontSize: 13,
                lineHeight: "17px",
                fontWeight: 400,
                letterSpacing: "0.52px"
            },
            contained: {
                width: 48,
                minWidth: 48,
                height: 32,
                marginRight: 4,
                padding: 6,
                border: "1px solid #3D393534",
                boxShadow: "unset",
                borderRadius: 4,
                backgroundColor: "#FBFBFB",
                color: "#333333",
                fontSize: 12,
                letterSpacing: " -0.24px",
                "&:hover": {
                    backgroundColor: "#FBFBFB",
                    border: "1px solid #3D393534",
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
