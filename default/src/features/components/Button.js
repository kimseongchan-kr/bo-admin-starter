import React from "react";
import useMenu from "hooks/useMenu";

import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import DefaultButton from "common/button/DefaultButton";
import ExcelButton from "common/excel";
import SubmitButton from "common/button/SubmitButton";
import TableButton from "common/table/Button";
import PageButton from "common/button/PageButton";

import { sampleRowData } from "components/Data";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        margin: "0 auto",
        padding: 20,
        background: theme.palette.neutral["white"],
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
        marginRight: 20,
        marginBottom: 20
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
        color: theme.palette.neutral["dark"],
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
            width: "50%"
        }
    }
}));

export default function ButtonComponent() {
    const classes = useStyles();

    useMenu({ page: "Button Component Demo", menu: "components", menuTitle: "Button", menuNum: 7 });

    const handleDemo = () => alert("Button Demo");

    return (
        <div className={classes.container}>
            <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                Default 버튼
            </Typography>
            <Grid className={classes.componentContainer} container alignItems="flex-start" justifyContent="center" direction="column">
                <Grid item container spacing={2} alignItems="center" flexWrap>
                    <Grid item>
                        <DefaultButton size="large" disabled={false} text="Large Button" onClick={handleDemo} />
                    </Grid>
                    <Grid item>
                        <DefaultButton size="large" disabled={true} text="Disabled Large Button" onClick={handleDemo} />
                    </Grid>
                    <Grid item>
                        <DefaultButton size="medium" disabled={false} text="Medium Button" onClick={handleDemo} />
                    </Grid>
                    <Grid item>
                        <DefaultButton size="medium" disabled={true} text="Disabled Medium Button" onClick={handleDemo} />
                    </Grid>
                    <Grid item>
                        <DefaultButton size="small" disabled={false} text="Small Button" onClick={handleDemo} />
                    </Grid>
                    <Grid item>
                        <DefaultButton size="small" disabled={true} text="Disabled Small Button" onClick={handleDemo} />
                    </Grid>
                </Grid>
                <div className={classes.spacer} />
                <Grid item container spacing={2} flexWrap>
                    <Grid item>
                        <DefaultButton size="large" color="primary" variant="outlined" disabled={false} text="Primary Color Outlined Button" onClick={handleDemo} />
                    </Grid>
                    <Grid item>
                        <DefaultButton size="large" color="primary" variant="contained" disabled={false} text="Primary Color Contained Button" onClick={handleDemo} />
                    </Grid>
                </Grid>
                <div className={classes.spacer} />
                <Grid item container spacing={2}>
                    <Grid item>
                        <DefaultButton size="large" color="secondary" variant="outlined" disabled={false} text="Secondary Color Outlined Button" onClick={handleDemo} />
                    </Grid>
                    <Grid item>
                        <DefaultButton size="large" color="secondary" variant="contained" disabled={false} text="Secondary Color Contained Button" onClick={handleDemo} />
                    </Grid>
                </Grid>
                <div className={classes.spacer} />
                <Grid item container spacing={2}>
                    <Grid item>
                        <DefaultButton size="large" color="error" variant="outlined" disabled={false} text="Error Color Outlined Button" onClick={handleDemo} />
                    </Grid>
                    <Grid item>
                        <DefaultButton size="large" color="error" variant="contained" disabled={false} text="Error Color Contained Button" onClick={handleDemo} />
                    </Grid>
                </Grid>
            </Grid>
            <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                Submit 버튼
            </Typography>
            <Grid className={classes.componentContainer} container alignItems="flex-start" justifyContent="center" direction="column">
                <Grid item container spacing={2}>
                    <Grid item>
                        <SubmitButton type="submit" color="primary" text="Type Submit Button" loading={false} disabled={false} />
                    </Grid>
                    <Grid item>
                        <SubmitButton type="submit" color="secondary" text="Type Submit Button" loading={false} disabled={false} />
                    </Grid>
                    <Grid item>
                        <SubmitButton type="submit" color="error" text="Type Submit Button" loading={false} disabled={false} />
                    </Grid>
                </Grid>
                <div className={classes.spacer} />
                <Grid item container spacing={2}>
                    <Grid item>
                        <SubmitButton type="button" color="primary" text="Type Button Button" loading={false} disabled={false} onClick={handleDemo} />
                    </Grid>
                    <Grid item>
                        <SubmitButton type="button" color="secondary" text="Type Button Button" loading={false} disabled={false} onClick={handleDemo} />
                    </Grid>
                    <Grid item>
                        <SubmitButton type="button" color="error" text="Type Button Button" loading={false} disabled={false} onClick={handleDemo} />
                    </Grid>
                </Grid>
                <div className={classes.spacer} />
                <Grid item container spacing={2}>
                    <Grid item>
                        <SubmitButton type="submit" text="Disabled Submit Button" loading={false} disabled={true} onClick={handleDemo} />
                    </Grid>
                    <Grid item>
                        <SubmitButton type="submit" text="Loading Submit Button" loading={true} disabled={false} onClick={handleDemo} />
                    </Grid>
                </Grid>
            </Grid>
            <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                Page 버튼
            </Typography>
            <Grid className={classes.componentContainer} container alignItems="center" justifyContent="flex-start">
                <Grid item container spacing={2}>
                    <Grid item>
                        <PageButton disabled={false} text="목록" pageType="search" onClick={handleDemo} />
                    </Grid>
                    <Grid item>
                        <PageButton disabled={true} text="목록" pageType="search" onClick={handleDemo} />
                    </Grid>
                </Grid>
                <div className={classes.spacer} />
                <Grid item container spacing={2}>
                    <Grid item>
                        <PageButton color="primary" disabled={false} text="수정하기" pageType="edit" onClick={handleDemo} />
                    </Grid>
                    <Grid item>
                        <PageButton color="primary" disabled={true} text="수정하기" pageType="edit" onClick={handleDemo} />
                    </Grid>
                </Grid>
            </Grid>
            <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                Excel 버튼
            </Typography>
            <Grid className={classes.componentContainer} container alignItems="center" justifyContent="flex-start">
                <Grid item container spacing={2}>
                    <Grid item>
                        <ExcelButton menu="Dashboard" loading={false} disabled={false} excelData={sampleRowData} onExcelClick={handleDemo} />
                    </Grid>
                    <Grid item>
                        <ExcelButton menu="Dashboard" loading={true} disabled={false} excelData={sampleRowData} onExcelClick={handleDemo} />
                    </Grid>
                </Grid>
            </Grid>
            <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                Table 버튼
            </Typography>
            <Grid className={classes.componentContainer} container alignItems="center" justifyContent="flex-start">
                <Grid item>
                    <TableButton disabled={false} pageType="edit" text="수정" rowIndex={0} onClick={handleDemo} />
                    <TableButton disabled={true} pageType="edit" text="수정" rowIndex={0} onClick={handleDemo} />
                </Grid>
                <div className={classes.spacer} />
                <Grid item>
                    <TableButton disabled={false} text="삭제" rowIndex={0} onClick={handleDemo} />
                    <TableButton disabled={true} text="삭제" rowIndex={0} onClick={handleDemo} />
                </Grid>
            </Grid>
            <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                Button Props Guide
            </Typography>
            <code className={classes.background}>
                import Button from "common/button/DefaultButton"; <br />
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
                            <th>size</th>
                            <td>string</td>
                            <td>No</td>
                            <td>"large"</td>
                            <td>"large" || "medium" || "small"</td>
                        </tr>
                        <tr>
                            <th>color</th>
                            <td>string</td>
                            <td>No</td>
                            <td>"primary"</td>
                            <td>"primary" || "secondary" || "error"</td>
                        </tr>
                        <tr>
                            <th>variant</th>
                            <td>string</td>
                            <td>No</td>
                            <td>"outlined"</td>
                            <td>"outlined" || "contained"</td>
                        </tr>
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
                            <td>-</td>
                            <td>"추가" / "닫기" / "수정" ...</td>
                        </tr>
                        <tr>
                            <th>onClick</th>
                            <td>function</td>
                            <td>Yes</td>
                            <td>-</td>
                            <td>{`() => console.log(button click)`}</td>
                        </tr>
                    </tbody>
                </table>
                import SubmitButton from "common/button/SubmitButton";
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
                            <th>type</th>
                            <td>string</td>
                            <td>No</td>
                            <td>"button"</td>
                            <td>"button" || "submit"</td>
                        </tr>
                        <tr>
                            <th>type</th>
                            <td>string</td>
                            <td>No</td>
                            <td>"secondary"</td>
                            <td>"primary" || "secondary" || "error"</td>
                        </tr>
                        <tr>
                            <th>loading</th>
                            <td>boolean</td>
                            <td>No</td>
                            <td>false</td>
                            <td>false || true</td>
                        </tr>
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
                            <td>-</td>
                            <td>"추가" / "수정" ...</td>
                        </tr>
                        <tr>
                            <th>onClick</th>
                            <td>string</td>
                            <td>No</td>
                            <td>-</td>
                            <td>{`() => console.log("type="button" click")`}</td>
                        </tr>
                    </tbody>
                </table>
                import PageButton from "common/button/PageButton";
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
                            <th>color</th>
                            <td>string</td>
                            <td>No</td>
                            <td>"primary"</td>
                            <td>"primary" || "secondary" || "error"</td>
                        </tr>
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
                            <td>"목록" / "수정" ...</td>
                        </tr>
                        <tr>
                            <th>pageType</th>
                            <td>string</td>
                            <td>No</td>
                            <td>"search"</td>
                            <td>"search" / "edit" ...</td>
                        </tr>
                        <tr>
                            <th>onClick</th>
                            <td>function</td>
                            <td>Yes</td>
                            <td></td>
                            <td>{`() => history.push("/")`})</td>
                        </tr>
                    </tbody>
                </table>
                import ExcelButton from "common/excel";
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
                            <th>menu</th>
                            <td>string</td>
                            <td>"Dashboard" / "Example" ...</td>
                        </tr>
                        <tr>
                            <th>loading</th>
                            <td>boolean</td>
                            <td>false || true</td>
                        </tr>
                        <tr>
                            <th>disabled</th>
                            <td>boolean</td>
                            <td>false || true</td>
                        </tr>
                        <tr>
                            <th>excelData</th>
                            <td>array</td>
                            <td>{`[{"no": 1 , "name": "test"}]`}</td>
                        </tr>
                        <tr>
                            <th>onExcelClick</th>
                            <td>function</td>
                            <td>{`() => console.log("downloading excel file")`})</td>
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
                            <th>pageType</th>
                            <td>string</td>
                            <td>No</td>
                            <td>""</td>
                            <td>"edit" / "delete" / "add" ...</td>
                        </tr>
                        <tr>
                            <th>text</th>
                            <td>string</td>
                            <td>Yes</td>
                            <td>-</td>
                            <td>"수정" / "삭제" ...</td>
                        </tr>
                        <tr>
                            <th>rowIndex</th>
                            <td>number</td>
                            <td>Yes</td>
                            <td>-</td>
                            <td>row index</td>
                        </tr>
                        <tr>
                            <th>onClick</th>
                            <td>function</td>
                            <td>Yes</td>
                            <td>-</td>
                            <td>{`() => console.log("clicked button inside table")`}</td>
                        </tr>
                    </tbody>
                </table>
            </code>
        </div>
    );
}
