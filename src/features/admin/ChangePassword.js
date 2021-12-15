import React, { useState } from "react";
import useMenu from "hooks/useMenu";
import useMessage from "hooks/useMessage";

import theme from "styles/theme/form";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import MessageModal from "common/modal/MessageModal";

const useStyles = makeStyles(({ palette }) => ({
    container: {
        width: "100%",
        height: 560,
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    grid: {
        width: 322
    },
    title: {
        marginBottom: 40,
        fontWeight: 300,
        fontSize: 30,
        lineHeight: "38px",
        letterSpacing: "-1.8px"
    },
    curPassword: {
        width: "100%",
        height: 48,
        marginBottom: 20
    },
    newPassword: {
        width: "100%",
        height: 48,
        marginBottom: 4
    },
    pwCheck: {
        width: "100%",
        height: 48,
        marginBottom: 32
    },
    input: {
        width: "100%",
        height: "100%",
        "& > *": {
            height: "100%"
        }
    },
    submitContainer: {
        width: "100%",
        height: 48
    },
    submitButton: {
        width: "100%",
        height: "100%",
        backgroundColor: palette.primary["main"],
        cursor: "pointer",
        boxShadow: "unset",
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: "-0.26px",
        color: "#ffffff",
        border: "none",
        borderRadius: 4,
        outline: "none",
        "&:hover": {
            boxShadow: "unset",
            backgroundColor: palette.primary["main"]
        }
    }
}));

export default function ChangePassword() {
    const classes = useStyles();
    useMenu({ page: "ChangePassword", menu: null, menuTitle: "비밀번호 변경", menuNum: null });

    const handleMessage = useMessage();

    const [pw, setPw] = useState("");
    const [newPw, setNewPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");

    const handleSubmit = () => {
        console.log(pw, pwCheck, newPw);
        handleMessage({ type: "message", message: "비밀번호가 변경되었습니다." });
        // handleMessage({type: "message", message: "비밀번호 변경에 실패하였습니다."});
        // handleMessage({type: "message", message: "비밀번호를 다시 확인해주시기 바랍니다."});
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.container}>
                <Grid container justifyContent="center" alignItems="center" direction="column" className={classes.grid}>
                    <Grid item>
                        <Typography variant="h3" component="h3" className={classes.title}>
                            주기적인 <span style={{ fontWeight: 500 }}>비밀번호 변경</span>으로 <br />
                            안전하게 <span style={{ fontWeight: 500 }}>정보</span>를 <span style={{ fontWeight: 500 }}>보호</span>하세요
                        </Typography>
                    </Grid>
                    <Grid item className={classes.curPassword}>
                        <TextField
                            className={classes.input}
                            id="outlined-pw"
                            label=""
                            size="small"
                            type="password"
                            placeholder="현재 비밀번호"
                            variant="outlined"
                            onChange={(e) => setPw(e.target.value)}
                            value={pw}
                        />
                    </Grid>
                    <Grid item className={classes.newPassword}>
                        <TextField
                            className={classes.input}
                            id="outlined-new-pw"
                            label=""
                            size="small"
                            type="password"
                            variant="outlined"
                            placeholder="새 비밀번호"
                            value={newPw}
                            onChange={(e) => setNewPw(e.target.value)}
                        />
                    </Grid>
                    <Grid item className={classes.pwCheck}>
                        <TextField
                            className={classes.input}
                            id="outlined-pw-check"
                            label=""
                            size="small"
                            type="password"
                            variant="outlined"
                            placeholder="새 비밀번호 확인"
                            value={pwCheck}
                            onChange={(e) => setPwCheck(e.target.value)}
                        />
                    </Grid>
                    <Grid item className={classes.submitContainer}>
                        <Button variant="contained" className={classes.submitButton} onClick={handleSubmit}>
                            변경
                        </Button>
                    </Grid>
                </Grid>
                <MessageModal />
            </div>
        </ThemeProvider>
    );
}
