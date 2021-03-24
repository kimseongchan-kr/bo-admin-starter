import React from "react";
import MenuRedux from "common/menu/MenuRedux";

import theme from "styles/theme/form";
import { makeStyles, ThemeProvider, Grid, Typography } from "@material-ui/core";

import CheckBox from "common/form/CheckBox";
import RadioButton from "common/form/RadioButton";
import FormSelect from "common/form/Select";
import Input from "common/form/Input";

import { useForm } from "react-hook-form";

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
        marginBottom: 0
    },
    spacer: {
        marginRight: 20
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

    const handleDemo = (data) => {
        alert("Form Demo");
    };

    return (
        <>
            <MenuRedux menu="components" title="Form" num={6} />
            <div className={classes.container}>
                <ThemeProvider theme={theme}>
                    <form onSubmit={handleSubmit(handleDemo)} noValidate autoComplete="off">
                        <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                            Checkbox
                        </Typography>
                        <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start" direction="row">
                            <Grid item>
                                <CheckBox
                                    options={[
                                        { name: "checkbox1", defaultValue: true, label: "1" },
                                        { name: "checkbox2", defaultValue: false, label: "2" },
                                        { name: "checkbox3", defaultValue: false, label: "3" }
                                    ]}
                                    control={control}
                                />
                            </Grid>
                        </Grid>
                        <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                            Radio Button
                        </Typography>
                        <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                            <Grid item>
                                <RadioButton
                                    name="radio"
                                    defaultValue="1"
                                    control={control}
                                    options={[
                                        { value: "1", label: "1" },
                                        { value: "2", label: "2" },
                                        { value: "3", label: "3" }
                                    ]}
                                />
                            </Grid>
                        </Grid>
                        <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                            Select
                        </Typography>
                        <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                            <Grid item>
                                <FormSelect name="dessert" defaultValue={options[0]} control={control} options={options} />
                            </Grid>
                        </Grid>
                        <Typography className={classes.title} variant="h6" component="h3" color="inherit">
                            Input
                        </Typography>
                        <Grid className={classes.componentContainer} container alignItems="center" justify="flex-start">
                            <Grid item>
                                <Input inputType="text" name="fat" defaultValue="10.5" control={control} classes={classes} />
                            </Grid>
                            <div className={classes.spacer} />
                            <Grid item>
                                <Input inputType="number" name="calories" defaultValue={12} control={control} classes={classes} />
                            </Grid>
                        </Grid>
                    </form>
                </ThemeProvider>
            </div>
        </>
    );
}
