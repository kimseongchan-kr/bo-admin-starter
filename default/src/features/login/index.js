import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsLogin } from "slices/loginSlice";
import useMessage from "hooks/useMessage";

import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import MessageModal from "common/modal/MessageModal";

const useStyles = makeStyles(({ palette }) => ({
    loginContainer: {
        width: "100%",
        height: "100%"
    },
    halfContainer: {
        width: 480,
        height: 560,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        backgroundColor: palette.neutral.white
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
        borderBottom: `1px solid ${palette.border["opacity0.2"]}`,
        outline: "none"
    },
    checkbox: {
        marginTop: 20,
        fontSize: 13,
        lineHeight: "20px",
        color: palette.text.label,
        letterSpacing: "-0.48px"
    },
    loginButton: {
        width: "100%",
        height: 48,
        marginTop: 42,
        backgroundColor: palette.primary.main,
        cursor: "pointer",
        fontSize: 13,
        letterSpacing: "-0.26px",
        fontWeight: 600,
        color: palette.neutral.white,
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
    const theme = useTheme();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(true);
    const [isFocused, setFocused] = useState(null);

    const handleMessage = useMessage();

    // 로그인
    const handleSubmit = () => {
        handleMessage({ type: "message", message: "로그인" });
        dispatch(setIsLogin());
    };

    return (
        <Grid container justifyContent="center" alignItems="center" direction="row" className={classes.loginContainer}>
            <Grid item className={classes.halfContainer}>
                Img
            </Grid>
            <Grid item className={classes.halfContainer}>
                <div className={classes.contents}>
                    <div className={classes.text}>
                        BLOCKODYSSEY
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
                        style={isFocused === "email" ? { borderBottom: `2px solid ${theme.palette.primary.main}` } : null}
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
                        style={isFocused === "password" ? { borderBottom: `2px solid ${theme.palette.primary.main}` } : null}
                    />
                    <FormControlLabel className={classes.checkbox} control={<Checkbox checked={checked} name="checked" onChange={(e) => setChecked(e.target.checked)} />} label="자동 로그인" />
                    <div>
                        <button type="button" className={classes.loginButton} onClick={handleSubmit}>
                            로그인
                        </button>
                    </div>
                    <MessageModal />
                </div>
            </Grid>
        </Grid>
    );
}
