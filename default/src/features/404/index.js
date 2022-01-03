import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

const useStyles = makeStyles(() => ({
    root: {
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
        borderRadius: 4,
        fontSize: 13,
        fontWeight: 600,
        lineHeight: "17px",
        letterSpacing: "-0.52px"
    }
}));

export default function Page404() {
    const classes = useStyles();
    const history = useHistory();

    const handlePageChange = () => history.replace("/");

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div className={classes.img}>404</div>
                <h3 className={classes.text}>페이지를 찾을 수 없습니다.</h3>
                <Button color="secondary" variant="contained" className={classes.button} disableRipple type="button" onClick={handlePageChange}>
                    메인 페이지로 돌아가기
                </Button>
            </div>
        </div>
    );
}
