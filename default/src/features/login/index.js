import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setMenu } from "slices/menuSlice";
import { setClose, setMessage } from "slices/modalSlice";
import { setIsLogin } from "slices/loginSlice";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Modal from "react-modal";
import MessageModal from "common/modal/MessageModal";

Modal.setAppElement("body");

const useStyles = makeStyles((theme) => ({
    loginContainer: {
        width: 960,
        height: 560,
        margin: "auto",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#ffffff"
    },
    grid: {
        height: "100%"
    },
    halfContainer: {
        width: "50%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    contents: {
        display: "block",
        width: 305
    },
    text: {
        marginBottom: 36,
        textAlign: "left",
        fontWeight: 300,
        fontSize: 20,
        lineHeight: "26px",
        letterSpacing: "-0.8px"
    },
    input: {
        width: 300,
        height: 56,
        fontWeight: 500,
        fontSize: 13,
        lineHeight: "56px",
        border: "none",
        borderBottom: "1px solid #3c383433",
        outline: "none"
    },
    checkbox: {
        marginTop: 20,
        fontSize: 13,
        lineHeight: "20px",
        color: "#333333b3",
        letterSpacing: "-0.48px"
    },
    loginButton: {
        width: "100%",
        height: 48,
        marginTop: 42,
        backgroundColor: theme.palette.primary.main,
        cursor: "pointer",
        fontSize: 13,
        letterSpacing: "-0.26px",
        fontWeight: 500,
        color: "#ffffff",
        border: "none",
        borderRadius: 24,
        outline: "none"
    },
    message: {
        marginBottom: 30,
        textAlign: "center",
        fontSize: 13,
        fontWeight: 400,
        letterSpacing: "-0.26px"
    }
}));

export default function Login() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(true);
    const [isFocused, setFocused] = useState(null);

    // 로그인
    const handleSubmit = () => {
        dispatch(setMessage({ open: true, message: "로그인" }));
        dispatch(setMenu({ menu: "summary", title: "Dashboard", num: 1 }));
    };

    // 모달 닫기
    const onClose = () => {
        dispatch(setClose());
        dispatch(setIsLogin());
    };

    return (
        <div className={classes.loginContainer}>
            <Grid container justify="center" alignItems="center" direction="row" className={classes.grid}>
                <Grid item className={classes.halfContainer}>
                    Img
                </Grid>
                <Grid item className={classes.halfContainer}>
                    <div className={classes.contents}>
                        <div className={classes.text}>
                            LOGO
                            <div>bo-admin-starter</div>
                        </div>
                        <input
                            className={classes.input}
                            type="text"
                            size="30"
                            placeholder="이메일 입력"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setFocused("email")}
                            onBlur={() => setFocused(null)}
                            style={isFocused === "email" ? { borderBottom: "2px solid #039BE5" } : null}
                        />
                        <input
                            className={classes.input}
                            type="password"
                            size="30"
                            placeholder="비밀번호 입력"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setFocused("password")}
                            onBlur={() => setFocused(null)}
                            style={isFocused === "password" ? { borderBottom: "2px solid #039BE5" } : null}
                        />
                        <FormControlLabel className={classes.checkbox} control={<Checkbox checked={checked} name="checked" onChange={(e) => setChecked(e.target.checked)} />} label="자동 로그인" />
                        <div>
                            <button type="button" className={classes.loginButton} onClick={handleSubmit}>
                                로그인
                            </button>
                        </div>
                        <MessageModal onClose={onClose} />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
