import React from "react";
import MenuRedux from "common/menu/MenuRedux";

import searchStyles from "styles/customize/SearchStyles";
import theme from "styles/theme/search";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, Grid, Typography, Button } from "@material-ui/core";

import DateSearchPicker from "common/search/DatePicker";
import SearchSelect from "common/search/SearchSelect";
import SearchField from "common/search/SearchField";

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
        marginBottom: 10
    }
}));

export default function Search() {
    const classes = useStyles();
    const search = searchStyles();

    const handleDemo = () => {
        alert("Search Demo :D");
    };

    return (
        <>
            <MenuRedux menu="components" title="Search" num={4} />
            <div className={classes.container}>
                <ThemeProvider theme={theme}>
                    <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                        Date Picker
                    </Typography>
                    <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start" direction="row">
                        <DateSearchPicker classes={search} dateFormat="yyyy/MM/dd" term="일간" startDate="2021/03/23" endDate="2021/03/23" handleDate={handleDemo} />
                    </Grid>
                    <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                        Search Select
                    </Typography>
                    <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                        <SearchSelect
                            index={0}
                            type="gender"
                            caption="성별"
                            defaultValue={{ value: "전체", label: "전체" }}
                            options={[
                                { value: "전체", label: "전체" },
                                { value: "M", label: "M" },
                                { value: "F", label: "F" }
                            ]}
                            handleChange={handleDemo}
                        />
                    </Grid>
                    <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                        Search Condition + Search Keyword
                    </Typography>
                    <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                        <SearchField
                            classes={search}
                            searchType="전체"
                            searchKeyword="EXAMPLE..."
                            options={[
                                { value: "전체", label: "전체" },
                                { value: "아이디", label: "아이디" },
                                { value: "이름", label: "이름" },
                                { value: "연락처", label: "연락처" }
                            ]}
                            handleChange={handleDemo}
                            handleKeyword={handleDemo}
                        />
                    </Grid>
                    <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                        Search Button
                    </Typography>
                    <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                        <Grid item>
                            <div className={classes.spacer}></div>
                            <Button variant="contained" onClick={handleDemo}>
                                조회
                            </Button>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        </>
    );
}
