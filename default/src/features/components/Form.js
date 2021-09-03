import React from "react";
import useMenu from "hooks/useMenu";

import { useForm } from "react-hook-form";

import theme from "styles/theme/form";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import CheckBox from "common/form/CheckBox";
import RadioButton from "common/form/RadioButton";
import FormSelect from "common/form/Select";
import Input from "common/form/Input";

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
    },
    margin: {
        margin: "20px 0"
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
            width: "20%"
        },
        "& td:first-child": {
            width: "20%"
        },
        "& td:last-child": {
            width: "60%"
        }
    }
}));

const options = [
    { value: "Cupcake", label: "Cupcake" },
    { value: "Cookie", label: "Cookie" },
    { value: "Snack", label: "Snack" }
];

export default function Form() {
    const classes = useStyles();
    const { control, handleSubmit } = useForm();

    useMenu({ page: "Form Component Demo", menu: "components", title: "Form", num: 6 });

    const handleDemo = () => {
        alert("Form Demo");
    };

    return (
        <div className={classes.container}>
            <ThemeProvider theme={theme}>
                <form onSubmit={handleSubmit(handleDemo)} noValidate autoComplete="off">
                    <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                        Checkbox
                    </Typography>
                    <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start" direction="row">
                        <CheckBox
                            options={[
                                { name: "checkbox1", defaultValue: true, label: "1" },
                                { name: "checkbox2", defaultValue: false, label: "2" },
                                { name: "checkbox3", defaultValue: false, label: "3" }
                            ]}
                            control={control}
                        />
                    </Grid>
                    <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                        Radio Button
                    </Typography>
                    <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                        <RadioButton
                            name="radio"
                            defaultValue={1}
                            control={control}
                            options={[
                                { value: 1, label: "1" },
                                { value: 2, label: "2" },
                                { value: 3, label: "3" }
                            ]}
                        />
                    </Grid>
                    <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                        Select
                    </Typography>
                    <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                        <FormSelect name="dessert" defaultValue={options[0]} control={control} options={options} />
                    </Grid>
                    <Typography className={classes.title} variant="h3" component="h3" color="inherit">
                        Input
                    </Typography>
                    <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                        <Input inputType="text" name="fat" defaultValue="10.5" control={control} classes={classes} />
                        <div className={classes.spacer} />
                        <Input inputType="number" name="calories" defaultValue={12} control={control} classes={classes} />
                    </Grid>
                </form>
            </ThemeProvider>
            <Typography className={classes.margin} variant="h3" component="h3" color="inherit">
                Form Props Guide
            </Typography>
            <code className={classes.background}>
                import CheckBox from "common/form/CheckBox";
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
                                {`
                                    [{ name: "checkbox1", defaultValue: true, label: "1" }]
                                `}
                            </td>
                        </tr>
                        <tr>
                            <th>control</th>
                            <td>object</td>
                            <td>react-hook-form control</td>
                        </tr>
                    </tbody>
                </table>
                import RadioButton from "common/form/RadioButton";
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
                            <th>defaultValue</th>
                            <td>string || number</td>
                            <td>1 / "Y" ...</td>
                        </tr>
                        <tr>
                            <th>control</th>
                            <td>object</td>
                            <td>react-hook-form control</td>
                        </tr>
                        <tr>
                            <th>options</th>
                            <td>array</td>
                            <td>
                                {`
                                    [
                                        { value: 1, label: "1" },
                                        { value: 2, label: "2" },
                                        { value: 3, label: "3" }
                                    ]
                                `}
                            </td>
                        </tr>
                    </tbody>
                </table>
                import FormSelect from "common/form/Select";
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
                            <th>defaultValue</th>
                            <td>object</td>
                            <td>{`{ value: 1, label: "1" }`}</td>
                        </tr>
                        <tr>
                            <th>control</th>
                            <td>object</td>
                            <td>react-hook-form control</td>
                        </tr>
                        <tr>
                            <th>options</th>
                            <td>array</td>
                            <td>
                                {`
                                    [
                                        { value: 1, label: "1" },
                                        { value: 2, label: "2" },
                                        { value: 3, label: "3" }
                                    ]
                                `}
                            </td>
                        </tr>
                    </tbody>
                </table>
                import Input from "common/form/Input"; <br />
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
                            <th>inputType</th>
                            <td>string</td>
                            <td>"text" / "number" ...</td>
                        </tr>
                        <tr>
                            <th>name</th>
                            <td>string</td>
                            <td>"name" / "quantity" ...</td>
                        </tr>
                        <tr>
                            <th>defaultValue</th>
                            <td>string || number</td>
                            <td>"Strawberry Chocolate Cupcake" / 80 ...</td>
                        </tr>
                        <tr>
                            <th>control</th>
                            <td>object</td>
                            <td>react-hook-form control</td>
                        </tr>
                        <tr>
                            <th>classes</th>
                            <td>object</td>
                            <td>styling object</td>
                        </tr>
                    </tbody>
                </table>
            </code>
        </div>
    );
}
