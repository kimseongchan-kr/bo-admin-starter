import React from "react";
import { useSelector } from "react-redux";
import { searchSelector } from "slices/searchSlice";

import useStyles from "styles/customize/SearchStyles";
import { Grid, Divider, Button } from "@material-ui/core";

import DateSearchPickers from "common/inputs/DatePicker";
import SearchSelects from "common/inputs/SearchSelects";
import SearchField from "common/inputs/SearchField";

import { SummarySearchComponents as componentExists, SummarySearchType as searchCondition, SummarySearchOptions as options, SummarySearchCaption as caption } from "features/summary/Data";

export default function SummarySearch({ menu, handleSearchFilter, handleSearch }) {
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
            {/* 날짜 검색 있을 경우 */}
            {componentExists[menu].date && (
                <>
                    <DateSearchPickers dateFormat={dailyFormat} term="일간" startDate={startDate} endDate={endDate} handleDate={handleDate} />
                    <Divider orientation="vertical" flexItem classes={{ flexItem: classes.divider }} />
                </>
            )}

            {/*  다양한 검색 조건 select (성별...) */}
            {componentExists[menu].selects && (
                <>
                    {searchCondition[menu].map((type, index) => {
                        const selectLabel = type === "gender" ? gender : searchType;
                        const selectValue = type === "gender" ? gender : searchType;

                        return (
                            <SearchSelects
                                key={index}
                                index={index}
                                type={type}
                                caption={caption[type]}
                                defaultValue={{
                                    value: selectValue,
                                    label: selectLabel
                                }}
                                handleChange={handleChange}
                            />
                        );
                    })}
                    <Divider orientation="vertical" flexItem classes={{ flexItem: classes.divider }} />
                </>
            )}

            {/* 조회조건 + 검색어 */}
            {componentExists[menu].searchKeyword && (
                <SearchField searchType={searchType} searchKeyword={searchKeyword} options={options["searchType"]} handleChange={handleChange} handleKeyword={handleKeyword} />
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
