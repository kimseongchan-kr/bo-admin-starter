import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    page404: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        width: 600,
        textAlign: "center"
    },
    img: {
        width: 592,
        height: 378,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 170
    },
    text: {
        marginBottom: 12,
        fontSize: 30,
        lineHeight: "45px",
        letterSpacing: "-1.5px",
        textAlign: "center"
    },
    button: {
        width: 196,
        height: 40,
        marginBottom: 16,
        background: theme.palette.neutral["dark"],
        borderRadius: 4,
        opacity: 1,
        "&:hover": {
            background: theme.palette.neutral["dark"]
        },
        "& span": {
            fontSize: 13,
            fontWeight: 600,
            lineHeight: "17px",
            letterSpacing: "-0.52px",
            textAlign: "center",
            color: "#FFFFFF"
        }
    }
}));

export default function Page404(props) {
    const classes = useStyles();

    const handlePageChange = () => {
        return props.history.replace("/");
    };

    return (
        <div className={classes.page404}>
            <div className={classes.content}>
                <div className={classes.img}>404</div>
                <h3 className={classes.text}>페이지를 찾을 수 없습니다.</h3>
                <Button type="button" className={classes.button} onClick={handlePageChange}>
                    메인 페이지로 돌아가기
                </Button>
            </div>
        </div>
    );
}
