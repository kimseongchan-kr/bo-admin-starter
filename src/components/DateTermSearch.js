import React from "react";
import { useSelector } from "react-redux";
import { searchSelector } from "slices/searchSlice";

import useStyles from "styles/customize/components/SearchStyles";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "styles/theme/search";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Button from "@material-ui/core/Button";

import DateSearchPicker from "common/search/DatePicker";

import { searchOption as option } from "components/Data";

export default function DateTermSearch({ handleSearchFilter, handleSearch }) {
    const classes = useStyles();
    const { term, startDate, endDate } = useSelector(searchSelector);

    const dailyFormat = "yyyy/MM/dd";
    const monthlyFormat = "yyyy/MM";

    // 검색 조건 (select) 변경
    const handleChange = (e) => {
        handleSearchFilter({ type: e.target.name, value: e.target.value });
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
        <ThemeProvider theme={theme}>
            <Grid container direction="row" justify="flex-start" alignItems="center" className={classes.termSearchRoot}>
                <Grid item>
                    <Typography variant="caption" display="block">
                        기간
                    </Typography>
                    <Select IconComponent={KeyboardArrowDownIcon} displayEmpty name="term" value={term} onChange={handleChange}>
                        {option["term"] &&
                            option["term"].map((list, index) => (
                                <MenuItem key={index} value={list.value}>
                                    {list.label}
                                </MenuItem>
                            ))}
                    </Select>
                </Grid>
                <DateSearchPicker
                    caption={true}
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
        </ThemeProvider>
    );
}
