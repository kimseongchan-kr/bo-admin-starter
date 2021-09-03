// 참고: https://material-ui.com/customization/typography/#font-family
export const typography = {
    fontFamily: ["Noto Sans KR", "sans-serif", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue"].join(","),
    color: "#333333",
    fontSize: 12,
    h1: {
        fontWeight: 500,
        fontSize: 35,
        letterSpacing: "-0.24px"
    },
    h2: {
        fontWeight: 600,
        fontSize: 18,
        lineHeight: "27px",
        letterSpacing: "-1.26px"
    },
    h3: {
        fontWeight: 600,
        fontSize: 15,
        lineHeight: "27px",
        letterSpacing: "-1.26px"
    },
    h4: {
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "27px",
        letterSpacing: 0
    },
    h5: {
        fontWeight: 500,
        fontSize: 16,
        letterSpacing: "-0.05px"
    },
    h6: {
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: "-0.05px"
    },
    overline: {
        fontWeight: 500
    },
    button: {
        fontWeight: 400,
        fontSize: 13,
        lineHeight: "19px",
        letterSpacing: 0,
        color: "#1B253A"
    },
    body1: {
        fontSize: 12,
        lineHeight: "20px",
        letterSpacing: "-0.24px",
        fontWeight: 400
    },
    body2: {
        fontSize: 12,
        lineHeight: "18px",
        letterSpacing: "-0.6px"
    }
};
