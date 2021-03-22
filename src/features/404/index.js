import React from "react";
import { Link } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    page404: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    },
    content: {
        width: 600,
        textAlign: "center"
    },
    img: {
        background: "url() no-repeat",
        width: 592,
        height: 378,
        // 임시 404
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 170
        // 임시 404
    },
    text: {
        marginBottom: 12,
        fontSize: 30,
        lineHeight: "45px",
        letterSpacing: "-1.5px",
        textAlign: "center"
    },
    description: {
        marginBottom: 90,
        textAlign: "center",
        fontSize: 15,
        lineHeight: "22px",
        letterSpacing: "-0.75px",
        color: "#333333",
        opacity: 0.7
    },
    button: {
        width: 196,
        height: 40,
        marginBottom: 16,
        background: "#333333",
        borderRadius: 4,
        opacity: 1,

        "&:hover": {
            background: "#333333"
        },

        "& a": {
            fontSize: 13,
            lineHeight: "17px",
            letterSpacing: "-0.52px",
            textAlign: "center",
            color: "#FFFFFF"
        }
    }
}));

export default function Page404() {
    const classes = useStyles();

    return (
        <div className={classes.page404}>
            <div className={classes.content}>
                <div className={classes.img}>404</div>
                <h3 className={classes.text}>페이지를 찾을 수 없습니다.</h3>
                <p className={classes.description}>
                    기술적인 문제로 일시적으로 접속되지 않습니다. <br /> 잠시 후 다시 이용 부탁 드리며 이용에 불편을 드려 사과드립니다.
                </p>
                <Button className={classes.button}>
                    <Link to="/">메인 페이지로 돌아가기</Link>
                </Button>
            </div>
        </div>
    );
}
