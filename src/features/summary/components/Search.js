import React from "react";
import { useSelector } from "react-redux";
import { searchSelector } from "slices/searchSlice";
import { format } from "utils/CommonFunction";

import useStyles from "styles/customize/SearchStyles";
import customStyles from "styles/customize/SearchSelectStyles";

import DateFnsUtils from "@date-io/date-fns";
import { Grid, Divider, Typography, IconButton, InputAdornment, TextField, Button } from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";

import Select from "react-select";
import { SummarySelectBoxType, SummarySelectBoxState, SummarySelectBoxObjPerType } from "features/summary/Data";

export default function SummarySearch({ handleSearchFilter, handleSearch }) {
    const classes = useStyles();
    const { gender, searchType, searchKeyword, startDate, endDate } = useSelector(searchSelector);
    const dailyFormat = "yyyy/MM/dd";

    // 검색 조건 (select) 변경
    const handleChange = (value, name) => {
        handleSearchFilter({ type: name, value: value.value });
    };

    // 검색 기간 변경
    const handleDate = (type, date) => {
        handleSearchFilter({ type: type, value: date });
    };

    // 검색 키워드 변경
    const handleKeyword = (value) => {
        handleSearchFilter({ type: "searchKeyword", value: value });
    };

    // 검색하기
    const handleSubmit = () => {
        handleSearch();
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
                        format={dailyFormat}
                        id="date-picker-inline end"
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
                    onChange={(e) => handleKeyword(e.target.value)}
                    value={searchKeyword}
                />
            </Grid>
            <Grid item>
                <div className={classes.spacer}></div>
                <Button variant="contained" onClick={handleSubmit}>
                    조회
                </Button>
            </Grid>
        </Grid>
    );
}
