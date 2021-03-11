import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector, setDate, setTerm } from "slices/searchSlice";
import { format } from "utils/CommonFunction";

import useStyles from "styles/customize/SearchStyles";
import customStyles from "styles/customize/SearchSelectStyles";
import { Grid, Typography, Button, IconButton, InputAdornment } from "@material-ui/core";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";

import Select from "react-select";
import { ExampleSelectBoxObjPerType } from "features/example/ExampleData";

export default function DateTermSearch({ handleSearch }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { term, startDate, endDate } = useSelector(searchSelector);

    const dailyFormat = "yyyy/MM/dd";
    const monthlyFormat = "yyyy/MM";

    return (
        <Grid container direction="row" justify="flex-start" alignItems="center" className={classes.root}>
            <Grid item>
                <Typography variant="caption" display="block">
                    기간단위
                </Typography>
                <Select
                    isSearchable={false}
                    isClearable={false}
                    styles={customStyles}
                    defaultValue={{ value: term, label: term }}
                    options={ExampleSelectBoxObjPerType["term"]}
                    onChange={async (e) => await dispatch(setTerm(e.value))}
                />
            </Grid>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item>
                    <Typography variant="caption" display="block">
                        기간
                    </Typography>
                    <DatePicker
                        autoOk
                        variant="inline"
                        inputVariant="outlined"
                        format={term === "일간" ? dailyFormat : monthlyFormat}
                        views={term === "월간" ? ["year", "month"] : ["date"]}
                        id="date-picker-inline start"
                        value={startDate}
                        onChange={async (e) => await dispatch(setDate({ type: "startDate", date: format(e) }))}
                        allowKeyboardControl={false}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <InsertInvitationIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            <Grid item>
                <span className={classes.dash}>~</span>
            </Grid>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item>
                    <div className={classes.spacer}></div>
                    <DatePicker
                        autoOk
                        variant="inline"
                        inputVariant="outlined"
                        format={term === "일간" ? dailyFormat : monthlyFormat}
                        views={term === "월간" ? ["year", "month"] : ["date"]}
                        id="date-picker-inline end"
                        value={endDate}
                        onChange={async (e) => await dispatch(setDate({ type: "endDate", date: format(e) }))}
                        allowKeyboardControl={false}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <InsertInvitationIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            <Grid item>
                <div className={classes.spacer}></div>
                <Button variant="contained" onClick={handleSearch}>
                    조회
                </Button>
            </Grid>
        </Grid>
    );
}
