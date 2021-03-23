import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMenu } from "slices/menuSlice";

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
    const dispatch = useDispatch();

    return (
        <div className={classes.page404}>
            <div className={classes.content}>
                <div className={classes.img}>404</div>
                <h3 className={classes.text}>페이지를 찾을 수 없습니다.</h3>

                <Button type="button" className={classes.button}>
                    <Link to="/" onClick={() => dispatch(setMenu({ menu: "summary", menuTitle: "dashboard", num: 1 }))}>
                        메인 페이지로 돌아가기
                    </Link>
                </Button>
            </div>
        </div>
    );
}
