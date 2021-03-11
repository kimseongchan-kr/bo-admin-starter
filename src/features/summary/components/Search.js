import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { searchSelector, setSearchKeyword, setSearchType, setDate } from "slices/searchSlice";
import { format } from "utils/CommonFunction";

import useStyles from "styles/customize/SearchStyles";
import customStyles from "styles/customize/SearchSelectStyles";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { IconButton, InputAdornment } from "@material-ui/core";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Select from "react-select";
import { SummarySelectBoxType, SummarySelectBoxState, SummarySelectBoxObjPerType } from "features/summary/SummaryData";

export default function SummarySearch({ handleSearch }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { gender, searchType, searchKeyword, startDate, endDate } = useSelector(searchSelector);
    const dailyFormat = "yyyy/MM/dd";

    // 검색 조건 변경
    const handleChange = async (value, name) => {
        await dispatch(setSearchType({ type: name, searchType: value.value }));
    };

    return (
        <Grid container direction="row" justify="flex-start" alignItems="center" className={classes.root}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item>
                    <Typography variant="caption" display="block">
                        기간
                    </Typography>
                    <DatePicker
                        autoOk
                        variant="inline"
                        inputVariant="outlined"
                        format={dailyFormat}
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
                        format={dailyFormat}
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
            <Divider orientation="vertical" flexItem classes={{ flexItem: classes.divider }} />
            {SummarySelectBoxType.map((type, index) => {
                const selectLabel = type === "gender" ? gender : searchType;
                const selectValue = type === "gender" ? gender : searchType;

                return (
                    <Grid key={`grid-${index}`} item>
                        <Typography key={`caption-${index}`} variant="caption" display="block">
                            {SummarySelectBoxState[type]}
                        </Typography>
                        <Select
                            key={index}
                            styles={customStyles}
                            isSearchable={false}
                            defaultValue={{ value: selectValue, label: selectLabel }}
                            options={SummarySelectBoxObjPerType[type]}
                            onChange={(e) => handleChange(e, type)}
                        />
                    </Grid>
                );
            })}
            <Divider orientation="vertical" flexItem classes={{ flexItem: classes.divider }} />
            <Grid item>
                <Typography variant="caption" display="block">
                    조회조건
                </Typography>
                <Select
                    styles={customStyles}
                    isSearchable={false}
                    defaultValue={{ value: searchType, label: searchType }}
                    options={SummarySelectBoxObjPerType["searchType"]}
                    onChange={(e) => handleChange(e, "searchType")}
                />
            </Grid>
            <Grid item>
                <div className={classes.spacer}></div>
                <TextField
                    className={classes.searchTextField}
                    id="outlined-name"
                    label=""
                    size="small"
                    variant="outlined"
                    type="search"
                    onChange={(e) => dispatch(setSearchKeyword(e.target.value))}
                    value={searchKeyword}
                />
            </Grid>
            <Grid item>
                <div className={classes.spacer}></div>
                <Button variant="contained" onClick={handleSearch}>
                    조회
                </Button>
            </Grid>
        </Grid>
    );
}
