import React from "react";
import { useSelector } from "react-redux";
import { searchSelector } from "slices/searchSlice";

import useStyles from "styles/customize/SearchStyles";
import { Grid, Button } from "@material-ui/core";

import DateSearchPicker from "common/search/DatePicker";
import SearchSelect from "common/search/SearchSelect";

import { dateTermSearchOption as option } from "common/search/Data";

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
            <SearchSelect
                index={0}
                type="term"
                caption="기간단위"
                defaultValue={{
                    value: term,
                    label: term
                }}
                options={option["term"]}
                handleChange={handleChange}
            />
            <DateSearchPicker
                classes={classes}
                dateFormat={term === "일간" ? dailyFormat : monthlyFormat}
                term={term}
                views={term === "월간" ? ["year", "month"] : ["date"]}
                startDate={startDate}
                endDate={endDate}
                handleDate={handleDate}
            />
            <Grid item>
                <div className={classes.spacer}></div>
                <Button variant="contained" onClick={handleSubmit}>
                    조회
                </Button>
            </Grid>
        </Grid>
    );
}
