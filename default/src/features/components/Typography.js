import React from "react";
import MenuRedux from "common/menu/MenuRedux";
import { makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    container: {
        width: "100%",
        margin: "0 auto 30px",
        padding: 20,
        background: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column"
    },
    componentContainer: {
        marginBottom: 30,
        "&:last-child": {
            marginBottom: 0
        }
    },
    title: {
        marginBottom: 20
    },
    usage: {
        color: "#039BE5",
        fontWeight: 600,
        fontSize: 14
    },
    spacer: {
        marginBottom: 5
    }
}));

export default function TypographyComponent() {
    const classes = useStyles();

    return (
        <>
            <MenuRedux menu="components" title="Typography" num={8} />
            <div className={classes.container}>
                <Typography className={classes.title} variant="h5" component="h3" color="inherit">
                    Typography variant h1
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                    <Grid item>
                        <Typography variant="h1" component="h1">
                            LOGO
                        </Typography>
                    </Grid>
                </Grid>
                <Typography className={classes.title} variant="h5" component="h3" color="inherit">
                    Typography variant h2 <br />
                    <Typography variant="body1" className={classes.usage}>
                        Header
                    </Typography>
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                    <Grid item>
                        <Typography variant="h2" component="h2">
                            Dashboard
                        </Typography>
                        <div className={classes.spacer} />
                        <Typography variant="h2" component="h2">
                            Summary
                        </Typography>
                    </Grid>
                </Grid>
                <Typography className={classes.title} variant="h5" component="h3" color="inherit">
                    Typography variant body1 <br />
                    <Typography variant="body1" className={classes.usage}>
                        MessageModal, MsgConfirmModal
                    </Typography>
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                    <Grid item>
                        <Typography variant="body1" display="block">
                            해당 디저트를 삭제하시겠습니까?
                        </Typography>
                        <div className={classes.spacer} />
                        <Typography variant="body1" display="block">
                            로그인에 실패하였습니다.
                        </Typography>
                    </Grid>
                </Grid>
                <Typography className={classes.title} variant="h5" component="h3" color="inherit">
                    Typography variant body2 <br />
                    <Typography variant="body1" className={classes.usage}>
                        ChangeInfo, EditModal
                    </Typography>
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                    <Grid item>
                        <Typography variant="body2" display="block">
                            이름
                        </Typography>
                        <div className={classes.spacer} />
                        <Typography variant="body2" display="block">
                            비밀번호
                        </Typography>
                        <div className={classes.spacer} />
                        <Typography variant="body2" display="block">
                            이메일
                        </Typography>
                        <div className={classes.spacer} />
                        <Typography variant="body2" display="block">
                            첨부파일
                        </Typography>
                    </Grid>
                </Grid>
                <Typography className={classes.title} variant="h5" component="h3" color="inherit">
                    Typography variant button <br />
                    <Typography variant="body1" className={classes.usage}>
                        로그인한 유저명, Filter의 확인 버튼
                    </Typography>
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                    <Grid item>
                        <Typography variant="button">블록오디세이님</Typography>
                        <div className={classes.spacer} />
                        <Typography variant="button">확인</Typography>
                    </Grid>
                </Grid>
                <Typography className={classes.title} variant="h5" component="h3" color="inherit">
                    Typography variant caption <br />
                    <Typography variant="body1" className={classes.usage}>
                        검색
                    </Typography>
                </Typography>
                <Grid className={classes.componentContainer} container direction="row" alignItems="center" justify="flex-start">
                    <Grid item>
                        <Typography variant="caption">기간</Typography>
                        <div className={classes.spacer} />
                        <Typography variant="caption">성별</Typography>
                        <div className={classes.spacer} />
                        <Typography variant="caption">조회조건</Typography>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
