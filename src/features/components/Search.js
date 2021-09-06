import React from "react";
import useMenu from "hooks/useMenu";

import theme from "styles/theme/search";
import searchStyles from "styles/customize/components/SearchStyles";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import DateSearchPicker from "common/search/DatePicker";
import DateTermButton from "common/search/DateTermButton";
import SearchSelect from "common/search/SearchSelect";
import SearchRadio from "common/search/SearchRadio";
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
    },
    background: {
        width: "100%",
        marginBottom: 50,
        fontSize: 16,
        fontWeight: 600,
        lineHeight: "24px",
        color: "black"
    },
    table: {
        width: "100%",
        marginBottom: 80,
        color: "black",
        borderCollapse: "collapse",
        "& thead": {
            color: theme.palette.primary.main,
            "& th": {
                height: 40
            }
        },
        "& th": {
            fontWeight: 600,
            padding: "5px 20px",
            borderBottom: `1px solid ${theme.palette.border["opacity0.2"]}`
        },
        "& td": {
            height: 45,
            padding: "5px 20px",
            borderBottom: `1px solid ${theme.palette.border["opacity0.2"]}`,
            textAlign: "center"
        },
        "& tbody th": {
            width: "10%"
        },
        "& td:nth-child(2n+1)": {
            width: "10%"
        },
        "& td:nth-child(2n)": {
            width: "10%"
        },
        "& td:last-child": {
            width: "60%"
        }
    }
}));

export default function Search() {
    const classes = useStyles();
    const search = searchStyles();

    useMenu({ page: "Search Component Demo", menu: "components", title: "Search", num: 4 });

    const handleDemo = () => {
        alert("Search Demo :D");
    };

    return (
        <div className={classes.container}>
            <ThemeProvider theme={theme}>
                <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                    Date Picker
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start" direction="row">
                    <DateSearchPicker classes={search} caption={false} dateFormat="yyyy/MM/dd" term="일간" views={["date"]} startDate="2021/03/23" endDate="2021/03/23" handleDate={handleDemo} />
                </Grid>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start" direction="row">
                    <DateSearchPicker classes={search} caption={true} dateFormat="yyyy/MM" term="월간" views={["year", "month"]} startDate="2021/03/23" endDate="2021/03/23" handleDate={handleDemo} />
                </Grid>
                <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                    Date Term Button
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start" direction="row">
                    <DateTermButton
                        classes={search}
                        dateSelect={false}
                        dateFormat="yyyy/MM/dd"
                        term="일간"
                        views={["date"]}
                        dateType="일간"
                        startDate="2021/03/23"
                        endDate="2021/03/23"
                        handleDate={handleDemo}
                        handleChange={handleDemo}
                        handleClick={handleDemo}
                    />
                </Grid>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start" direction="row">
                    <DateTermButton
                        classes={search}
                        dateSelect={true}
                        dateFormat="yyyy/MM/dd"
                        term="일간"
                        views={["date"]}
                        dateType="reg_dt"
                        startDate="2021/03/23"
                        endDate="2021/03/23"
                        handleDate={handleDemo}
                        handleChange={handleDemo}
                        handleClick={handleDemo}
                    />
                </Grid>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start" direction="row">
                    <DateTermButton
                        classes={search}
                        dateSelect={true}
                        dateFormat="yyyy/MM"
                        term="월간"
                        views={["year", "month"]}
                        dateType="mod_dt"
                        startDate="2021/03/23"
                        endDate="2021/03/23"
                        handleDate={handleDemo}
                        handleChange={handleDemo}
                        handleClick={handleDemo}
                    />
                </Grid>
                <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                    Search Select
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                    <SearchSelect
                        name="gender"
                        value=""
                        options={[
                            { value: "", label: "전체" },
                            { value: "M", label: "M" },
                            { value: "F", label: "F" }
                        ]}
                        handleChange={handleDemo}
                    />
                </Grid>
                <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                    Search Radio
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                    <SearchRadio
                        name="gender"
                        value=""
                        options={[
                            { value: "", label: "전체" },
                            { value: "M", label: "M" },
                            { value: "F", label: "F" }
                        ]}
                        handleChange={handleDemo}
                    />
                </Grid>
                <Typography className={classes.title} variant="h3" component="h3" color="inherit">
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
                <Typography className={classes.title} variant="h3" component="h3" color="inherit">
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
            <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                Search Props Guide
            </Typography>
            <code className={classes.background}>
                import DateSearchPicker from "common/search/DatePicker";
                <br />
                <table className={classes.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>isRequired</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>classes</th>
                            <td>object</td>
                            <td>Yes</td>
                            <td></td>
                            <td>styling object</td>
                        </tr>
                        <tr>
                            <th>caption</th>
                            <td>boolean</td>
                            <td>No</td>
                            <td>false</td>
                            <td>true || false</td>
                        </tr>
                        <tr>
                            <th>dateFormat</th>
                            <td>string</td>
                            <td>Yes</td>
                            <td></td>
                            <td>"yyyy/MM/dd" || "yyyy/MM"</td>
                        </tr>
                        <tr>
                            <th>term</th>
                            <td>string</td>
                            <td>Yes</td>
                            <td></td>
                            <td>"일간" || "월간"</td>
                        </tr>
                        <tr>
                            <th>views</th>
                            <td>array</td>
                            <td>No</td>
                            <td>["date"]</td>
                            <td>["date"] || ["year", "month"]</td>
                        </tr>
                        <tr>
                            <th>startDate</th>
                            <td>string</td>
                            <td>No</td>
                            <td>""</td>
                            <td>new Date()</td>
                        </tr>
                        <tr>
                            <th>endDate</th>
                            <td>string</td>
                            <td>No</td>
                            <td>""</td>
                            <td>new Date()</td>
                        </tr>
                        <tr>
                            <th>handleDate</th>
                            <td>function</td>
                            <td>Yes</td>
                            <td></td>
                            <td>{`() => console.log("change date")`}</td>
                        </tr>
                    </tbody>
                </table>
                import DateTermButton from "common/search/DateTermButton";
                <br />
                <table className={classes.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>isRequired</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>classes</th>
                            <td>object</td>
                            <td>Yes</td>
                            <td></td>
                            <td>styling object</td>
                        </tr>
                        <tr>
                            <th>dateSelect</th>
                            <td>boolean</td>
                            <td>No</td>
                            <td>false</td>
                            <td>true || false</td>
                        </tr>
                        <tr>
                            <th>dateType</th>
                            <td>string</td>
                            <td>No</td>
                            <td></td>
                            <td>"reg_dt" || "mod_dt"</td>
                        </tr>
                        <tr>
                            <th>handleChange</th>
                            <td>function</td>
                            <td>No</td>
                            <td></td>
                            <td>{`() => console.log("change date select (reg_dt / mod_dt)")`}</td>
                        </tr>
                        <tr>
                            <th>dateFormat</th>
                            <td>string</td>
                            <td>Yes</td>
                            <td></td>
                            <td>"yyyy/MM/dd" || "yyyy/MM"</td>
                        </tr>
                        <tr>
                            <th>term</th>
                            <td>string</td>
                            <td>Yes</td>
                            <td></td>
                            <td>"일간" || "월간"</td>
                        </tr>
                        <tr>
                            <th>startDate</th>
                            <td>string</td>
                            <td>No</td>
                            <td>""</td>
                            <td>new Date()</td>
                        </tr>
                        <tr>
                            <th>endDate</th>
                            <td>string</td>
                            <td>No</td>
                            <td>""</td>
                            <td>new Date()</td>
                        </tr>
                        <tr>
                            <th>handleDate</th>
                            <td>function</td>
                            <td>Yes</td>
                            <td></td>
                            <td>{`() => console.log("change date")`}</td>
                        </tr>
                        <tr>
                            <th>handleClick</th>
                            <td>function</td>
                            <td>Yes</td>
                            <td></td>
                            <td>{`() => console.log("click button")`}</td>
                        </tr>
                    </tbody>
                </table>
                import SearchSelect from "common/search/SearchSelect";
                <br />
                <table className={classes.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>name</th>
                            <td>string</td>
                            <td>"useYn" / "viewYn" / "category" / "brand" ...</td>
                        </tr>
                        <tr>
                            <th>value</th>
                            <td>string</td>
                            <td>"Y" ...</td>
                        </tr>
                        <tr>
                            <th>options</th>
                            <td>array</td>
                            <td>{`[{"value": "", "label": "전체"}, {"value": "Y", "label": "사용"}]`}</td>
                        </tr>
                        <tr>
                            <th>handleChange</th>
                            <td>function</td>
                            <td>{`() => console.log("change value")`}</td>
                        </tr>
                    </tbody>
                </table>
                import SearchRadio from "common/search/SearchRadio";
                <br />
                <table className={classes.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>name</th>
                            <td>string</td>
                            <td>"useYn" / "viewYn" / "category" / "brand" ...</td>
                        </tr>
                        <tr>
                            <th>value</th>
                            <td>string</td>
                            <td>"Y" ...</td>
                        </tr>
                        <tr>
                            <th>options</th>
                            <td>array</td>
                            <td>{`[{"value": "", "label": "전체"}, {"value": "Y", "label": "사용"}]`}</td>
                        </tr>
                        <tr>
                            <th>handleChange</th>
                            <td>function</td>
                            <td>{`() => console.log("change value")`}</td>
                        </tr>
                    </tbody>
                </table>
                import SearchField from "common/search/SearchField";
                <br />
                <table className={classes.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>classes</th>
                            <td>object</td>
                            <td>styling object</td>
                        </tr>
                        <tr>
                            <th>searchType</th>
                            <td>string</td>
                            <td>"" / "Y" / "N" ...</td>
                        </tr>
                        <tr>
                            <th>options</th>
                            <td>array</td>
                            <td>{`[{"value": "", "label": "전체"}, {"value": "name", "label": "디저트명"}]`}</td>
                        </tr>
                        <tr>
                            <th>handleChange</th>
                            <td>function</td>
                            <td>{`() => console.log("change search condition")`}</td>
                        </tr>
                        <tr>
                            <th>searchKeyword</th>
                            <td>string</td>
                            <td>"test" ...</td>
                        </tr>
                        <tr>
                            <th>handleKeyword</th>
                            <td>function</td>
                            <td>{`() => console.log("search keyword")`}</td>
                        </tr>
                    </tbody>
                </table>
            </code>
        </div>
    );
}
