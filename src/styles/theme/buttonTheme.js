import { createMuiTheme } from "@material-ui/core";

const buttonTheme = createMuiTheme({
    overrides: {
        MuiIconButton: {
            root: {
                width: 100,
                height: 40,
                color: "#333333",
                backgroundColor: "#ffffff",
                boxShadow: "unset",
                border: "1px solid #00000033",
                borderRadius: 4,
                fontSize: 13,
                lineHeight: "17px",
                fontWeight: 400,
                letterSpacing: "0.52px",

                "&:hover": {
                    backgroundColor: "transparent"
                }
            }
        },
        MuiSvgIcon: {
            root: {
                width: 14,
                height: 15
            }
        }
    }
});

export default buttonTheme;
