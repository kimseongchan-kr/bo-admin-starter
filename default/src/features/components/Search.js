import React from "react";
import useMenu from "hooks/useMenu";

import theme from "styles/theme/search";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

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

    useMenu({ page: "Search Component Demo", menu: "components", menuTitle: "Search", menuNum: 2 });

    const handleDemo = () => alert("Search Demo :D");

    return (
        <div className={classes.container}>
            <ThemeProvider theme={theme}>
                <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                    Date Picker
                </Typography>
                <Grid className={classes.componentContainer} container spacing={2} alignItems="center" justifyContent="flex-start" direction="row">
                    <DateSearchPicker dateFormat="yyyy-MM-dd" term="daily" dates={{ startDate: "2021-03-23", endDate: "2021-12-03" }} handleDate={handleDemo} />
                </Grid>
                <Grid className={classes.componentContainer} container spacing={2} alignItems="center" justifyContent="flex-start" direction="row">
                    <DateSearchPicker dateFormat="yyyy-MM" term="monthly" dates={{ startDate: "2021-03", endDate: "2021-12" }} handleDate={handleDemo} />
                </Grid>
                <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                    Date Term Button
                </Typography>
                <Grid className={classes.componentContainer} container spacing={2} alignItems="center" justifyContent="flex-start" direction="row">
                    <DateTermButton menu="Dashboard" dates={{ startDate: "2021-03-23", endDate: "2021-12-03" }} handleDate={handleDemo} handleChange={handleDemo} handleClick={handleDemo} />
                </Grid>
                <Grid className={classes.componentContainer} container spacing={2} alignItems="center" justifyContent="flex-start" direction="row">
                    <DateTermButton menu="SearchComponent" dates={{ startDate: "2021-03-23", endDate: "2021-12-03" }} handleDate={handleDemo} handleChange={handleDemo} handleClick={handleDemo} />
                </Grid>
                <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                    Search Select
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justifyContent="flex-start">
                    <SearchSelect menu="SearchComponent" name="gender" handleChange={handleDemo} />
                </Grid>
                <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                    Search Radio
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justifyContent="flex-start">
                    <SearchRadio name="gender" handleChange={handleDemo} />
                </Grid>
                <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                    Search Condition + Search Keyword
                </Typography>
                <Grid className={classes.componentContainer} container spacing={2} alignItems="center" justifyContent="flex-start">
                    <SearchField menu="SearchComponent" searchType="" searchKeyword="EXAMPLE..." handleChange={handleDemo} handleKeyword={handleDemo} />
                </Grid>
                <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                    Search Button
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justifyContent="flex-start">
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
                            <th>caption</th>
                            <td>boolean</td>
                            <td>No</td>
                            <td>false</td>
                            <td>true || false</td>
                        </tr>
                        <tr>
                            <th>term</th>
                            <td>string</td>
                            <td>Yes</td>
                            <td>-</td>
                            <td>"daily" || "monthly"</td>
                        </tr>
                        <tr>
                            <th>dates</th>
                            <td>object</td>
                            <td>Yes</td>
                            <td>-</td>
                            <td>{`{startDate: new Date(), endDate: new Date()}`}</td>
                        </tr>
                        <tr>
                            <th>handleDate</th>
                            <td>function</td>
                            <td>Yes</td>
                            <td>-</td>
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
                            <th>menu</th>
                            <td>string</td>
                            <td>No</td>
                            <td>-</td>
                            <td>"Dashboard" / "Example" ...</td>
                        </tr>
                        <tr>
                            <th>handleChange</th>
                            <td>function</td>
                            <td>No</td>
                            <td>-</td>
                            <td>{`() => console.log("change date select (regDate / modDate)")`}</td>
                        </tr>
                        <tr>
                            <th>dates</th>
                            <td>object</td>
                            <td>Yes</td>
                            <td>-</td>
                            <td>{`{startDate: new Date(), endDate: new Date()}`}</td>
                        </tr>
                        <tr>
                            <th>handleDate</th>
                            <td>function</td>
                            <td>Yes</td>
                            <td>-</td>
                            <td>{`() => console.log("change date")`}</td>
                        </tr>
                        <tr>
                            <th>handleClick</th>
                            <td>function</td>
                            <td>Yes</td>
                            <td>-</td>
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
                            <th>isRequired</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>menu</th>
                            <td>string</td>
                            <td>No</td>
                            <td>-</td>
                            <td>"Dashboard" / "Example" ...</td>
                        </tr>
                        <tr>
                            <th>dataList</th>
                            <td>array</td>
                            <td>No</td>
                            <td>-</td>
                            <td>{`[{"value": "", "label": "전체"}, {"value": "Y", "label": "사용"}]`}</td>
                        </tr>
                        <tr>
                            <th>value</th>
                            <td>string</td>
                            <td>No</td>
                            <td>""</td>
                            <td>"Y" ...</td>
                        </tr>
                        <tr>
                            <th>name</th>
                            <td>string</td>
                            <td>Yes</td>
                            <td>-</td>
                            <td>"useYn" / "viewYn" / "category" / "brand" ...</td>
                        </tr>
                        <tr>
                            <th>handleChange</th>
                            <td>function</td>
                            <td>Yes</td>
                            <td>-</td>
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
                            <th>isRequired</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>dataList</th>
                            <td>array</td>
                            <td>No</td>
                            <td>-</td>
                            <td>{`[{"value": "", "label": "전체"}, {"value": "Y", "label": "사용"}]`}</td>
                        </tr>
                        <tr>
                            <th>name</th>
                            <td>string</td>
                            <td>Yes</td>
                            <td>-</td>
                            <td>"useYn" / "viewYn" / "category" / "brand" ...</td>
                        </tr>
                        <tr>
                            <th>handleChange</th>
                            <td>function</td>
                            <td>Yes</td>
                            <td>-</td>
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
                            <th>isRequired</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>dataList</th>
                            <td>array</td>
                            <td>No</td>
                            <td>-</td>
                            <td>{`[{"value": "", "label": "전체"}, {"value": "Y", "label": "사용"}]`}</td>
                        </tr>
                        <tr>
                            <th>menu</th>
                            <td>string</td>
                            <td>Yes</td>
                            <td>-</td>
                            <td>"Dashboard" / "Example" </td>
                        </tr>
                        <tr>
                            <th>searchType</th>
                            <td>string</td>
                            <td>Yes</td>
                            <td>-</td>
                            <td>"all" / "id" / "name" ...</td>
                        </tr>
                        <tr>
                            <th>handleChange</th>
                            <td>function</td>
                            <td>Yes</td>
                            <td>-</td>
                            <td>{`() => console.log("change search condition")`}</td>
                        </tr>
                        <tr>
                            <th>searchKeyword</th>
                            <td>string</td>
                            <td>Yes</td>
                            <td>-</td>
                            <td>"test" ...</td>
                        </tr>
                        <tr>
                            <th>handleKeyword</th>
                            <td>function</td>
                            <td>Yes</td>
                            <td>-</td>
                            <td>{`() => console.log("search keyword")`}</td>
                        </tr>
                    </tbody>
                </table>
            </code>
        </div>
    );
}
