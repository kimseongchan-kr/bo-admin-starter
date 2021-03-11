import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import ModalAddButton from "common/button/AddButton";
import buttonTheme from "styles/theme/buttonTheme";

const useStyles = makeStyles(() => ({
    root: {
        minWidth: "58%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexShrink: 0
    },
    root2: {
        minWidth: "65%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexShrink: 0
    },
    buttonRoot: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flex: 1,
        marginRight: 16
    }
}));

export default function TablePaginationActions(props) {
    const classes = useStyles();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleChange = (event, value) => {
        // console.log(page, value, rowsPerPage, count);
        onChangePage(value);
    };

    const totalCount = Math.ceil(count / rowsPerPage);

    return (
        <div className={totalCount >= 4 ? classes.root2 : classes.root}>
            <Pagination
                color="primary"
                count={totalCount}
                defaultPage={1}
                siblingCount={0}
                boundaryCount={1}
                variant="outlined"
                shape="rounded"
                showFirstButton
                showLastButton
                page={page + 1} // 1부터 시작
                onChange={handleChange}
            />
            <div className={classes.buttonRoot}>
                <ThemeProvider theme={buttonTheme}>
                    <ModalAddButton />
                </ThemeProvider>
            </div>
        </div>
    );
}
