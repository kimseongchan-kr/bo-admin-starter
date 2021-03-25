import React, { useState } from "react";
import MenuRedux from "common/menu/MenuRedux";

import { makeStyles, Grid, Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import TextField from "common/table/TextField";
import SortOrder from "common/table/SortOrder";

import UseSelect from "common/table/UseSelect";
import ViewSelect from "common/table/ViewSelect";

import EditButton from "common/table/EditButton";
import DeleteButton from "common/table/DeleteButton";

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
        marginBottom: 40,
        "&:last-child": {
            marginBottom: 0
        }
    },
    title: {
        marginBottom: 10
    },
    spacer: {
        marginRight: 20
    }
}));

export default function Table() {
    const classes = useStyles();

    const handleDemo = () => {
        alert("Table Demo...");
    };

    const [pageNumber, setPageNumber] = useState(1);

    const handleChange = (event, value) => {
        setPageNumber(value);
    };

    return (
        <>
            <MenuRedux menu="components" title="Table" num={5} />
            <div className={classes.container}>
                <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                    입력 Input / 노출 순서
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start" direction="row">
                    <Grid item>
                        <TextField index={0} value="Example..." handleChange={handleDemo} />
                    </Grid>
                    <Grid item>
                        <SortOrder sortOrder={1} handleChange={handleDemo} />
                    </Grid>
                </Grid>
                <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                    사용여부 / 메인노출
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                    <Grid item>
                        <UseSelect useYn="Y" handleSelect={handleDemo} />
                    </Grid>
                    <div className={classes.spacer} />
                    <Grid item>
                        <ViewSelect viewYn="Y" handleSelect={handleDemo} />
                    </Grid>
                </Grid>
                <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                    수정 버튼 / 삭제 버튼
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                    <Grid item>
                        <EditButton modalId={1} handleOneData={handleDemo} />
                        <DeleteButton modalId={1} onConfirm={handleDemo} />
                    </Grid>
                </Grid>
                <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                    Pagination
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                    <Grid item>
                        <Pagination
                            color="primary"
                            count={10}
                            defaultPage={1}
                            siblingCount={0}
                            boundaryCount={1}
                            variant="outlined"
                            shape="rounded"
                            showFirstButton
                            showLastButton
                            page={pageNumber}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
