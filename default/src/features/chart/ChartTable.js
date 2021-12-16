import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector, setSearchFilters } from "slices/searchSlice";
import useMenu from "hooks/useMenu";
import useSearch from "hooks/useSearch";
import useGetList from "hooks/useGetList";

import { sampleChartData, searchOption } from "components/Data";

import useStyles from "styles/customize/components/SearchStyles";
import theme from "styles/theme/search";
import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import LineChart from "features/chart/components/LineChart";
import DatePicker from "common/form/DatePicker";
import Table from "components/Table/ChartTable";
import MessageModal from "common/modal/MessageModal";

export default function ChartTable() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const searchState = useSelector(searchSelector);
    const menu = useMenu({ page: "ChartTable", menu: "chart", menuTitle: "요약보기", menuNum: 9 }); // 페이지/메뉴 설정하기

    const [term, setTerm] = useState({ dessert: "daily", food: "monthly" });
    const [dates, setDates] = useState({ dessertStartDate: null, dessertEndDate: null });

    useEffect(() => {
        setTerm((prev) => ({
            ...prev,
            dessert: searchState["dessertTerm"] || "daily",
            food: searchState["foodTerm"] || "monthly"
        }));
        setDates((prev) => ({
            ...prev,
            dessertStartDate: searchState["dessertStartDate"] || null,
            dessertEndDate: searchState["dessertEndDate"] || null,
            foodStartDate: searchState["foodStartDate"] || null,
            foodEndDate: searchState["foodEndDate"] || null
        }));
    }, [searchState]);

    // 검색 조건 (select) 변경
    const handleChange = (name, value) => setTerm((prev) => ({ ...prev, [name]: value }));

    // 검색 기간 변경
    const handleDate = (type, date) => setDates((prev) => ({ ...prev, [type]: date }));

    // 조회 버튼 클릭
    const handleSubmit = () => handleSearchFilter({ ...dates, term });

    // 검색하기
    const handleSearchFilter = (obj) => {
        dispatch(setSearchFilters(obj));
        handleSearch(obj);
    };

    // 리스트 데이터 가져오기
    const {
        params,
        isLoading,
        data: dataList,
        refetch
    } = useGetList({
        menu,
        url: "/web/chart"
    });

    // 검색하기
    const handleSearch = useSearch({ params });

    return (
        <ThemeProvider theme={theme}>
            <Paper elevation={0} sx={{ padding: 2.5 }}>
                <Typography variant="h3" component="h3" gutterBottom>
                    디저트별 칼로리 하루 섭취량
                </Typography>
                <Grid columnSpacing={2} container justifyContent="flex-start" alignItems="center" sx={{ marginBottom: 2.5 }}>
                    <Grid item>
                        <Select
                            className={classes.searchSelect}
                            IconComponent={KeyboardArrowDownIcon}
                            displayEmpty
                            size="small"
                            name="dessert"
                            value={term["dessert"]}
                            onChange={(e) => handleChange("dessert", e.target.value)}>
                            {searchOption["term"].map((list) => (
                                <MenuItem key={`key-${list.label}`} value={list.value}>
                                    {list.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item>
                        <DatePicker term={term["dessert"]} name="dessertStartDate" value={dates["dessertStartDate"]} handleDate={handleDate} />
                    </Grid>
                    <Grid item>~</Grid>
                    <Grid item>
                        <DatePicker term={term["dessert"]} name="dessertEndDate" value={dates["dessertEndDate"]} handleDate={handleDate} />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={2.5}>
                    <Grid sx={{ width: "100%" }} item>
                        <LineChart />
                    </Grid>
                    <Grid sx={{ width: "100%" }} item>
                        <Table
                            menu={menu}
                            loading={isLoading}
                            data={sampleChartData || dataList} // data={dataList}
                        />
                    </Grid>
                </Grid>
            </Paper>
            <Paper elevation={0} sx={{ marginTop: 2.5, padding: 2.5 }}>
                <Typography variant="h3" component="h3" gutterBottom>
                    음식별 칼로리 하루 섭취량
                </Typography>
                <Grid columnSpacing={2} container justifyContent="flex-start" alignItems="center" sx={{ marginBottom: 2.5 }}>
                    <Grid item>
                        <Select
                            className={classes.searchSelect}
                            IconComponent={KeyboardArrowDownIcon}
                            displayEmpty
                            size="small"
                            name="food"
                            value={term["food"]}
                            onChange={(e) => handleChange("food", e.target.value)}>
                            {searchOption["term"].map((list) => (
                                <MenuItem key={`key-${list.label}`} value={list.value}>
                                    {list.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item>
                        <DatePicker term={term["food"]} name="foodStartDate" value={dates["foodStartDate"]} handleDate={handleDate} />
                    </Grid>
                    <Grid item>~</Grid>
                    <Grid item>
                        <DatePicker term={term["food"]} name="foodEndDate" value={dates["foodEndDate"]} handleDate={handleDate} />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={2.5}>
                    <Grid sx={{ width: "100%" }} item>
                        <LineChart />
                    </Grid>
                    <Grid sx={{ width: "100%" }} item>
                        <Table
                            menu={menu}
                            loading={isLoading}
                            data={sampleChartData || dataList} // data={dataList}
                        />
                    </Grid>
                </Grid>
            </Paper>
            <MessageModal />
        </ThemeProvider>
    );
}
