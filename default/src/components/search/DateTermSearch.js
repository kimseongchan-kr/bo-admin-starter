import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector, setSearchFilters } from "slices/searchSlice";

import theme from "styles/theme/search";
import { ThemeProvider } from "@mui/material/styles";
import useStyles from "styles/customize/components/SearchStyles";

import { format } from "utils/common";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";

import DateSearchPicker from "common/search/DatePicker";
import SearchSelect from "common/search/SearchSelect";

import { searchOption as option } from "components/Data";

function DateTermSearch(props) {
    const { menu, total, handleSearch } = props;

    const classes = useStyles();
    const dispatch = useDispatch();
    const searchState = useSelector(searchSelector);

    const [term, setTerm] = useState("daily");
    const [dates, setDates] = useState({ starDate: null, endDate: null });

    useEffect(() => {
        setTerm(searchState.term || "daily");
        setDates((prev) => ({
            ...prev,
            startDate: searchState.startDate ? format(searchState.term || "daily", searchState.startDate) : null,
            endDate: searchState.endDate ? format(searchState.term || "daily", searchState.endDate) : null
        }));
    }, [searchState]);

    // 검색하기
    const handleSearchFilter = (obj) => {
        // 새로 검색할 경우 페이지 번호 초기화하기
        if (parseInt(searchState.pageNumber, 10) > 1) {
            Object.assign(obj, { pageNumber: 1 });
        }

        dispatch(setSearchFilters(obj));
        handleSearch(obj);
    };

    // 검색 조건 (select) 변경
    const handleChange = (e) => {
        setTerm(e.target.value);
        setDates((prev) => ({
            ...prev,
            startDate: searchState.startDate ? format(e.target.value || "daily", searchState.startDate) : null,
            endDate: searchState.endDate ? format(e.target.value || "daily", searchState.endDate) : null
        }));
    };

    // 검색 기간 변경
    const handleDate = (type, date) => setDates((prev) => ({ ...prev, [type]: date }));

    // 조회 버튼 클릭
    const handleSubmit = () => handleSearchFilter({ ...dates, term });

    // 테이블 데이터 정렬하기
    const handleSort = (e) => handleSearchFilter({ [e.target.name]: e.target.value });

    return (
        <ThemeProvider theme={theme}>
            <Grid className={classes.termSearchRoot} container direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                <Grid item>
                    <Typography variant="caption" display="block">
                        기간
                    </Typography>
                    <Select className={classes.searchSelect} IconComponent={KeyboardArrowDownIcon} displayEmpty size="small" name="term" value={term} onChange={handleChange}>
                        {option.term?.map((list) => (
                            <MenuItem key={`menu-item-${list.value}`} value={list.value}>
                                {list.label}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
                <DateSearchPicker caption={true} term={term} dates={dates} handleDate={handleDate} />
                <Grid item>
                    <div className={classes.spacer}></div>
                    <Button variant="contained" onClick={handleSubmit}>
                        조회
                    </Button>
                </Grid>
            </Grid>
            <Grid sx={{ mb: 2.5 }} container justifyContent="space-between" alignItems="center">
                <Typography variant="h4" component="h4">
                    검색된 데이터 : <span>{total}</span>건
                </Typography>
                <SearchSelect menu={menu} name="sort" value={searchState.sort} options={option.sort} handleChange={handleSort} />
            </Grid>
        </ThemeProvider>
    );
}

DateTermSearch.propTypes = {
    total: PropTypes.number,
    menu: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired
};

DateTermSearch.defaultProps = {
    total: 0
};

export default DateTermSearch;
