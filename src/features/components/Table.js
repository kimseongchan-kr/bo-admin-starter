import React, { useState } from "react";
import useMenu from "hooks/useMenu";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import Button from "common/table/Button";

import SingleTextField from "common/table/SingleTextField";
import TextField from "common/table/TextField";
import Select from "common/table/Select";
import SingleSelect from "common/table/SingleSelect";
import CheckBox from "common/table/CheckBox";
import RadioButton from "common/table/RadioButton";

import { tableSelectOptions } from "components/Data";

const useStyles = makeStyles((theme) => ({
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
    },
    background: {
        width: "100%",
        marginBottom: 50,
        borderRadius: 5,
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

export default function Table() {
    const classes = useStyles();

    useMenu({ page: "Table Component Demo", menu: "components", title: "Table", num: 5 });

    const handleDemo = () => {
        alert("Table Demo...");
    };

    const [pageNumber, setPageNumber] = useState(1);

    const handleChange = (event, value) => {
        setPageNumber(value);
    };

    return (
        <div className={classes.container}>
            <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                Table Text Input (검색 결과 테이블)
            </Typography>
            <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start" direction="row">
                <Grid item>
                    <TextField index={0} inputType="number" name="sortOrder" value={1} handleChange={handleDemo} />
                </Grid>
            </Grid>
            <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                Table Text Input (페이지 / 모달)
            </Typography>
            <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start" direction="row">
                <Grid item>
                    <SingleTextField inputType="text" name="textfield" value="Example..." handleChange={handleDemo} />
                </Grid>
                <Grid item>
                    <SingleTextField inputType="number" name="sortOrder" value={1} handleChange={handleDemo} />
                </Grid>
            </Grid>
            <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                Table Select (검색 리스트 결과 테이블)
            </Typography>
            <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                <Grid item>
                    <Select name="useYn" rowIndex={0} value="Y" label="사용" options={tableSelectOptions["useYn"]} handleSelect={handleDemo} />
                </Grid>
                <div className={classes.spacer} />
                <Grid item>
                    <Select name="viewYn" rowIndex={0} value="Y" label="노출" options={tableSelectOptions["viewYn"]} handleSelect={handleDemo} />
                </Grid>
            </Grid>
            <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                Table Select (페이지 / 모달)
            </Typography>
            <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                <Grid item>
                    <SingleSelect name="useYn" value={{ value: "Y", label: "사용" }} options={tableSelectOptions["useYn"]} handleSelect={handleDemo} />
                </Grid>
                <div className={classes.spacer} />
                <Grid item>
                    <SingleSelect name="viewYn" value={{ value: "Y", label: "노출" }} options={tableSelectOptions["viewYn"]} handleSelect={handleDemo} />
                </Grid>
            </Grid>
            <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                Table Checkbox
            </Typography>
            <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start" direction="row">
                <CheckBox
                    options={[
                        { name: "ingredients1", value: true, label: "Chocolate" },
                        { name: "ingredients2", value: false, label: "Strawberry" }
                    ]}
                    handleChange={handleDemo}
                />
            </Grid>
            <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                Table Radio Button
            </Typography>
            <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start" direction="row">
                <RadioButton name="useYn" value="Y" options={tableSelectOptions["useYn"]} handleChange={handleDemo} />
            </Grid>
            <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                Table Button
            </Typography>
            <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                <Grid item>
                    <Button text="수정" rowIndex={0} data={{ modalId: 1 }} onClick={handleDemo} />
                    <Button text="삭제" rowIndex={0} data={{ modalId: 1 }} onClick={handleDemo} />
                </Grid>
            </Grid>
            <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                Pagination
            </Typography>
            <Grid className={classes.componentContainer} container alignItems="flex-start" justify="center" direction="column">
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
                <br />
                <Grid item>
                    <Pagination color="primary" count={10} variant="outlined" shape="rounded" showFirstButton showLastButton page={pageNumber} onChange={handleChange} />
                </Grid>
            </Grid>
            <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                Table Props Guide
            </Typography>
            <code className={classes.background}>
                import TextField from "common/table/TextField";
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
                            <th>index</th>
                            <td>number</td>
                            <td>No</td>
                            <td>0</td>
                            <td>index number</td>
                        </tr>
                        <tr>
                            <th>inputType</th>
                            <td>string</td>
                            <td>No</td>
                            <td>"text"</td>
                            <td>"text" / "number" / "tel" ...</td>
                        </tr>
                        <tr>
                            <th>name</th>
                            <td>string</td>
                            <td>Yes</td>
                            <td></td>
                            <td>"name" / "quantity" / "calories" ...</td>
                        </tr>
                        <tr>
                            <th>value</th>
                            <td>string || number</td>
                            <td>Yes</td>
                            <td></td>
                            <td>"Strawberry Chocolate Cupcake" / 8.9 ...."</td>
                        </tr>
                        <tr>
                            <th>handleChange</th>
                            <td>function</td>
                            <td>Yes</td>
                            <td></td>
                            <td>{`() => console.log("change value")`}</td>
                        </tr>
                    </tbody>
                </table>
                import TextField from "common/table/SingleTextField";
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
                            <th>inputType</th>
                            <td>string</td>
                            <td>No</td>
                            <td>"text"</td>
                            <td>"text" / "number" / "tel" ...</td>
                        </tr>
                        <tr>
                            <th>name</th>
                            <td>string</td>
                            <td>Yes</td>
                            <td></td>
                            <td>"name" / "quantity" / "calories" ...</td>
                        </tr>
                        <tr>
                            <th>value</th>
                            <td>string || number</td>
                            <td>Yes</td>
                            <td></td>
                            <td>"Strawberry Chocolate Cupcake" / 8.9 ...."</td>
                        </tr>
                        <tr>
                            <th>handleChange</th>
                            <td>function</td>
                            <td>Yes</td>
                            <td></td>
                            <td>{`() => console.log("change value")`}</td>
                        </tr>
                    </tbody>
                </table>
                import Select from "common/table/Select";
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
                            <td>"useYn" / "viewYn" / "category" ...</td>
                        </tr>
                        <tr>
                            <th>rowIndex</th>
                            <td>number</td>
                            <td>row index</td>
                        </tr>
                        <tr>
                            <th>value</th>
                            <td>string || number</td>
                            <td>"cupcake" ...</td>
                        </tr>
                        <tr>
                            <th>label</th>
                            <td>string || number</td>
                            <td>"컵케이크" ...</td>
                        </tr>
                        <tr>
                            <th>options</th>
                            <td>array</td>
                            <td>{`[{"value": "", "label": "카테고리를 선택해주세요"}, {"value": "cupcake", "label": "컵케이크"}]`}</td>
                        </tr>
                        <tr>
                            <th>handleSelect</th>
                            <td>function</td>
                            <td>{`() => console.log("select option")`}</td>
                        </tr>
                    </tbody>
                </table>
                import Select from "common/table/SingleSelect";
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
                            <td>"useYn" / "viewYn" / "category" ...</td>
                        </tr>
                        <tr>
                            <th>value</th>
                            <td>object</td>
                            <td>{`{"value": "cupcake", "label": "컵케이크"} ...`}</td>
                        </tr>
                        <tr>
                            <th>options</th>
                            <td>array</td>
                            <td>{`[{"value": "", "label": "카테고리를 선택해주세요"}, {"value": "cupcake", "label": "컵케이크"}]`}</td>
                        </tr>
                        <tr>
                            <th>handleSelect</th>
                            <td>function</td>
                            <td>{`() => console.log("select option")`}</td>
                        </tr>
                    </tbody>
                </table>
                import CheckBox from "common/table/CheckBox";
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
                            <th>options</th>
                            <td>array</td>
                            <td>
                                {`[
                                    { "name": "ingredients1", "value": true, "label": "Chocolate" },
                                    { "name": "ingredients2", "value": false, "label": "Strawberry" }
                                ]`}
                            </td>
                        </tr>
                        <tr>
                            <th>handleChange</th>
                            <td>function</td>
                            <td>{`() => console.log("change value")`}</td>
                        </tr>
                    </tbody>
                </table>
                import RadioButton from "common/table/RadioButton";
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
                            <td>"useYn" / "viewYn" ...</td>
                        </tr>
                        <tr>
                            <th>value</th>
                            <td>string</td>
                            <td>"Y" / "N" ...</td>
                        </tr>
                        <tr>
                            <th>options</th>
                            <td>array</td>
                            <td>{`[{"value": "Y", "label": "사용"}]`}</td>
                        </tr>
                        <tr>
                            <th>handleChange</th>
                            <td>function</td>
                            <td>{`() => console.log("change value")`}</td>
                        </tr>
                    </tbody>
                </table>
                import TableButton from "common/table/Button";
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
                            <th>disabled</th>
                            <td>boolean</td>
                            <td>No</td>
                            <td>false</td>
                            <td>false || true</td>
                        </tr>
                        <tr>
                            <th>text</th>
                            <td>string</td>
                            <td>Yes</td>
                            <td></td>
                            <td>"수정" / "삭제" ...</td>
                        </tr>
                        <tr>
                            <th>rowIndex</th>
                            <td>number</td>
                            <td>Yes</td>
                            <td></td>
                            <td>row index</td>
                        </tr>
                        <tr>
                            <th>data</th>
                            <td>object</td>
                            <td>Yes</td>
                            <td></td>
                            <td>{`{ pro_idx: 1, name: "test", email: "testexample@example.com" } ...`}</td>
                        </tr>
                        <tr>
                            <th>onClick</th>
                            <td>function</td>
                            <td>Yes</td>
                            <td></td>
                            <td>{`() => console.log("handle edit/delete")`}</td>
                        </tr>
                    </tbody>
                </table>
            </code>
        </div>
    );
}
