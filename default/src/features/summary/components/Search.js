import React from "react";
import { useSelector } from "react-redux";
import { searchSelector } from "slices/searchSlice";

import useStyles from "styles/customize/SearchStyles";
import { Grid, Divider, Button } from "@material-ui/core";

import DateSearchPicker from "common/search/DatePicker";
import SearchSelect from "common/search/SearchSelect";
import SearchField from "common/search/SearchField";

import { summarySearchComponent as component, summarySearchType as searchCondition, summarySearchOption as option, summarySearchCaption as caption } from "features/summary/Data";

export default function SummarySearch({ menu, keyword, setKeyword, handleSearchFilter, handleSearch }) {
    const classes = useStyles();
    const { gender, searchType, startDate, endDate } = useSelector(searchSelector);
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
        setKeyword(value);
    };

    // 검색하기
    const handleSubmit = () => {
        handleSearchFilter({ type: "searchKeyword", value: keyword });
        handleSearch();
    };

    return (
        <Grid container direction="row" justify="flex-start" alignItems="center" className={classes.root}>
            {/* 날짜 검색 있을 경우 */}
            {component[menu].date && (
                <>
                    {/*
                        dateFormat: 일간이면 yyyy/MM/dd
                                    월간이면 yyyy/MM
                        term:       일간 / 월간
                                    default 값은 항상 일간
                        startDate:  시작일
                        endDate:    종료일
                        handleDate: function
                    */}
                    <DateSearchPicker classes={classes} dateFormat={dailyFormat} term="일간" startDate={startDate} endDate={endDate} handleDate={handleDate} />
                    <Divider orientation="vertical" flexItem classes={{ flexItem: classes.divider }} />
                </>
            )}

            {/*  다양한 검색 조건 select (성별...) */}
            {component[menu].selects && (
                <>
                    {searchCondition[menu].map((type, index) => {
                        const selectLabel = type === "gender" ? gender : searchType;
                        const selectValue = type === "gender" ? gender : searchType;

                        return (
                            <SearchSelect
                                key={index}
                                index={index}
                                type={type}
                                caption={caption[type]}
                                defaultValue={{
                                    value: selectValue,
                                    label: selectLabel
                                }}
                                options={option[type]}
                                handleChange={handleChange}
                            />
                        );
                    })}
                    <Divider orientation="vertical" flexItem classes={{ flexItem: classes.divider }} />
                </>
            )}

            {/* 조회조건 + 검색어 */}
            {component[menu].searchKeyword && (
                <SearchField classes={classes} searchType={searchType} searchKeyword={keyword} options={option["searchType"]} handleChange={handleChange} handleKeyword={handleKeyword} />
            )}

            {/* 검색 조회 버튼 */}
            <Grid item>
                <div className={classes.spacer}></div>
                <Button variant="contained" onClick={handleSubmit}>
                    조회
                </Button>
            </Grid>
        </Grid>
    );
}
