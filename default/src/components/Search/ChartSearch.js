import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector, setSearchFilters } from "slices/searchSlice";

import theme from "styles/theme/search";
import { ThemeProvider } from "@mui/material/styles";
import useStyles from "styles/customize/components/SearchStyles";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";

import DateSearchPicker from "common/search/DatePicker";

import { searchOption as option } from "components/Data";

export default function DateTermSearch(props) {
    const { handleSearch } = props;

    const classes = useStyles();
    const dispatch = useDispatch();
    const searchState = useSelector(searchSelector);

    const [term, setTerm] = useState("daily");
    const [dates, setDates] = useState({ starDate: null, endDate: null });

    useEffect(() => {
        setTerm(searchState["term"] || "daily");
        setDates((prev) => ({ ...prev, startDate: searchState["startDate"] || null, endDate: searchState["endDate"] || null }));
    }, [searchState]);

    // 검색 조건 (select) 변경
    const handleChange = (e) => setTerm(e.target.value);

    // 검색 기간 변경
    const handleDate = (type, date) => setDates((prev) => ({ ...prev, [type]: date }));

    // 조회 버튼 클릭
    const handleSubmit = () => handleSearchFilter({ ...dates, term });

    // 검색하기
    const handleSearchFilter = (obj) => {
        // 새로 검색할 경우 페이지 번호 초기화하기
        if (parseInt(searchState["pageNumber"]) > 1) {
            Object.assign(obj, { pageNumber: 1 });
        }

        dispatch(setSearchFilters(obj));
        handleSearch(obj);
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid className={classes.termSearchRoot} container direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                <Grid item>
                    <Typography variant="caption" display="block">
                        기간
                    </Typography>
                    <Select className={classes.searchSelect} IconComponent={KeyboardArrowDownIcon} displayEmpty size="small" name="term" value={term} onChange={handleChange}>
                        {option["term"] &&
                            option["term"].map((list, index) => (
                                <MenuItem key={index} value={list.value}>
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
        </ThemeProvider>
    );
}
