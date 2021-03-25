import React from "react";
import MenuRedux from "common/menu/MenuRedux";

import theme from "styles/theme/button";
import { makeStyles, ThemeProvider, Grid, Typography } from "@material-ui/core";

import ModalEditButton from "common/button/EditButton";
import ModalCloseButton from "common/button/CloseButton";

import AddButton from "common/button/AddButton";
import DeleteButton from "common/button/DeleteButton";
import ExcelExport from "common/excel";

import TableEditButton from "common/table/EditButton";
import TableDeleteButton from "common/table/DeleteButton";

const useStyles = makeStyles(() => ({
    container: {
        width: "100%",
        margin: "0 auto",
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
    spacer: {
        marginRight: 20
    }
}));

export default function Form() {
    const classes = useStyles();

    const handleDemo = () => {
        alert("Button Demo");
    };

    return (
        <>
            <MenuRedux menu="components" title="Button" num={9} />
            <div className={classes.container}>
                <ThemeProvider theme={theme}>
                    <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                        모달에서 사용하는 버튼
                    </Typography>
                    <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                        <Grid item>
                            <ModalEditButton text="추가" />
                        </Grid>
                        <div className={classes.spacer} />
                        <Grid item>
                            <ModalEditButton text="수정" />
                        </Grid>
                        <div className={classes.spacer} />
                        <Grid item>
                            <ModalCloseButton onClose={handleDemo} text="닫기" />
                        </Grid>
                    </Grid>
                    <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                        테이블 하단 버튼
                    </Typography>
                    <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                        <Grid item>
                            <AddButton onOpen={handleDemo} />
                        </Grid>
                        <div className={classes.spacer} />
                        <Grid item>
                            <DeleteButton onConfirm={handleDemo} />
                        </Grid>
                        <div className={classes.spacer} />
                        <Grid item>
                            <ExcelExport />
                        </Grid>
                    </Grid>
                    <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                        테이블 버튼
                    </Typography>
                    <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                        <Grid item>
                            <TableEditButton modalId={1} handleOneData={handleDemo} />
                        </Grid>
                        <div className={classes.spacer} />
                        <Grid item>
                            <TableDeleteButton modalId={1} onConfirm={handleDemo} />
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        </>
    );
}
