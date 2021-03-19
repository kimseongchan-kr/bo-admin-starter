import React from "react";
import { useSelector } from "react-redux";
import { searchSelector } from "slices/searchSlice";
import { format } from "utils/CommonFunction";

import useStyles from "styles/customize/SearchStyles";
import customStyles from "styles/customize/SearchSelectStyles";

import DateFnsUtils from "@date-io/date-fns";
import { Grid, Typography, Button, IconButton, InputAdornment } from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";

import Select from "react-select";
import { ExampleSelectBoxObjPerType } from "features/example/Data";

export default function DateTermSearch({ handleSearchFilter, handleSearch }) {
    const classes = useStyles();
    const { term, startDate, endDate } = useSelector(searchSelector);

    const dailyFormat = "yyyy/MM/dd";
    const monthlyFormat = "yyyy/MM";

    // 검색 조건 (select) 변경
    const handleChange = (value, name) => {
        handleSearchFilter({ type: name, value: value.value });
    };

    // 검색 기간 변경
    const handleDate = (type, date) => {
        handleSearchFilter({ type: type, value: date });
    };

    // 검색하기
    const handleSubmit = () => {
        handleSearch();
    };

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
                    onChange={(e) => handleChange(e, "term")}
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
                        id="date-picker-inline-start"
                        value={startDate}
                        maxDate={endDate}
                        maxDateMessage="시작일을 다시 선택해주세요"
                        invalidDateMessage="시작일을 선택해주세요"
                        onChange={(e) => handleDate("startDate", format(e))}
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
                        id="date-picker-inline-end"
                        value={endDate}
                        minDate={startDate}
                        minDateMessage="종료일을 다시 선택해주세요"
                        invalidDateMessage="종료일을 선택해주세요"
                        onChange={(e) => handleDate("endDate", format(e))}
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
                <Button variant="contained" onClick={handleSubmit}>
                    조회
                </Button>
            </Grid>
        </Grid>
    );
}
