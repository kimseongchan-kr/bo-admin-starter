import React from "react";
import useMenu from "hooks/useMenu";

import theme from "styles/theme/button";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Button from "common/button/DefaultButton";
import ExcelButton from "common/excel";
import SubmitButton from "common/button/SubmitButton";
import TableButton from "common/table/Button";
import PageButton from "common/button/PageButton";

import { sampleRowData } from "components/Data";

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
            width: "50%"
        }
    }
}));

export default function ButtonComponent() {
    const classes = useStyles();

    useMenu({ page: "Button Component Demo", menu: "components", title: "Button", num: 9 });

    const handleDemo = () => alert("Button Demo");

    return (
        <div className={classes.container}>
            <ThemeProvider theme={theme}>
                <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                    모달 버튼
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="flex-start" justify="center" direction="column">
                    <Grid item>
                        <Button icon="check" disabled={false} text="등록 모달 Open" onClick={handleDemo} />
                        <Button icon="check" disabled={true} text="추가 모달 Open" onClick={handleDemo} />
                        <div className={classes.spacer} />
                        <Button icon="modify" disabled={false} text="수정 모달 Open" onClick={handleDemo} />
                        <Button icon="modify" disabled={true} text="수정 모달 Open" onClick={handleDemo} />
                    </Grid>
                    <div className={classes.spacer} />
                    <Grid item>
                        <Button icon="cancel" disabled={false} onClick={handleDemo} text="취소" />
                        <Button icon="cancel" disabled={true} onClick={handleDemo} text="닫기" />
                    </Grid>
                    <div className={classes.spacer} />
                    <Grid item>
                        <SubmitButton type="submit" text="추가 Submit" loading={false} disabled={false} />
                        <SubmitButton type="button" text="추가 Button" loading={false} disabled={false} onClick={handleDemo} />
                        <SubmitButton type="submit" text="Disabled" loading={false} disabled={true} onClick={handleDemo} />
                        <SubmitButton type="submit" text="Loading" loading={true} disabled={false} onClick={handleDemo} />
                    </Grid>
                </Grid>
                <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                    테이블 버튼
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                    <Grid item>
                        <TableButton disabled={false} text="수정" data={{ modalId: 1 }} rowIndex={0} onClick={handleDemo} />
                        <TableButton disabled={true} text="수정" data={{ modalId: 1 }} rowIndex={0} onClick={handleDemo} />
                    </Grid>
                    <div className={classes.spacer} />
                    <Grid item>
                        <TableButton disabled={false} text="삭제" data={{ modalId: 1 }} rowIndex={0} onClick={handleDemo} />
                        <TableButton disabled={true} text="삭제" data={{ modalId: 1 }} rowIndex={0} onClick={handleDemo} />
                    </Grid>
                </Grid>
                <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                    테이블 하단 버튼
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                    <Grid item>
                        <Button icon="check" disabled={false} text="디저트 등록" onClick={handleDemo} />
                        <Button icon="check" disabled={true} text="디저트 등록" onClick={handleDemo} />
                    </Grid>
                    <div className={classes.spacer} />
                    <Grid item>
                        <Button icon="cancel" disabled={false} text="디저트 삭제" onClick={handleDemo} />
                        <Button icon="cancel" disabled={true} text="디저트 삭제" onClick={handleDemo} />
                    </Grid>
                    <div className={classes.spacer} />
                    <Grid item>
                        <ExcelButton menu="Dashboard" loading={false} excelData={sampleRowData} onExcelClick={handleDemo} />
                        <ExcelButton menu="Dashboard" loading={true} excelData={sampleRowData} onExcelClick={handleDemo} />
                    </Grid>
                </Grid>
                <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                    페이지 버튼
                </Typography>
                <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                    <Grid item>
                        <PageButton disabled={false} text="목록" pageType="search" onClick={handleDemo} />
                        <PageButton disabled={true} text="목록" pageType="search" onClick={handleDemo} />
                    </Grid>
                    <div className={classes.spacer} />
                    <Grid item>
                        <PageButton disabled={false} text="수정하기" pageType="edit" onClick={handleDemo} />
                        <PageButton disabled={true} text="수정하기" pageType="edit" onClick={handleDemo} />
                    </Grid>
                </Grid>
            </ThemeProvider>
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
                            <th>icon</th>
                            <td>string</td>
                            <td>No</td>
                            <td>"check"</td>
                            <td>"check" || "cancel" || "modify"</td>
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
                            <td>"추가" / "닫기" / "수정" ...</td>
                        </tr>
                        <tr>
                            <th>onClick</th>
                            <td>function</td>
                            <td>Yes</td>
                            <td></td>
                            <td>{`() => console.log(handling click)`}</td>
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
                            <th>type</th>
                            <td>string</td>
                            <td>No</td>
                            <td>"button"</td>
                            <td>"button" || "submit"</td>
                        </tr>
                        <tr>
                            <th>text</th>
                            <td>string</td>
                            <td>Yes</td>
                            <td></td>
                            <td>"추가" / "수정" ...</td>
                        </tr>
                        <tr>
                            <th>onClick</th>
                            <td>string</td>
                            <td>No</td>
                            <td>Only type="button"</td>
                            <td>{`() => console.log("handle click")`}</td>
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
                            <th>excelData</th>
                            <td>array</td>
                            <td>{`[{"no": 1 , "name": "test"}]`}</td>
                        </tr>
                        <tr>
                            <th>onExcelClick</th>
                            <td>function</td>
                            <td>{`() => console.log("downloading excel")`})</td>
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
                            <td>{`{ pro_idx: 1, name: "test", email: "testexample@example.com" }`}</td>
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
            </code>
        </div>
    );
}
