import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector, setSearchFilters } from "slices/searchSlice";
import useMenu from "hooks/useMenu";
import useGetList from "hooks/useGetList";

import { format, queryToString } from "utils/common";
import { sampleChartData } from "components/Data";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Search from "features/chart/components/Search";
import LineChart from "common/chart/LineChart";
import Table from "components/Table/ChartTable";
import MessageModal from "common/modal/MessageModal";

export default function ChartTable() {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const searchState = useSelector(searchSelector);
    const menu = useMenu({ page: "ChartTable", menu: "chart", menuTitle: "요약보기", menuNum: 9 }); // 페이지/메뉴 설정하기

    const [dessert, setDessert] = useState({
        term: "daily",
        startDate: null,
        endDate: null
    });
    const [food, setFood] = useState({
        term: "monthly",
        startDate: null,
        endDate: null
    });

    useEffect(() => {
        setDessert((prev) => ({
            ...prev,
            term: searchState["dessertTerm"] || "daily",
            startDate: searchState["dessertStartDate"] || null,
            endDate: searchState["dessertEndDate"] || null
        }));

        setFood((prev) => ({
            ...prev,
            term: searchState["foodTerm"] || "monthly",
            startDate: searchState["foodStartDate"] || null,
            endDate: searchState["foodEndDate"] || null
        }));
    }, [searchState]);

    // 검색 조건 (select) 변경
    const handleChange = (name, value) => {
        if (name === "dessert") {
            setDessert((prev) => ({ ...prev, term: value }));
        } else if (name === "food") {
            setFood((prev) => ({ ...prev, term: value }));
        }
    };

    // 검색 기간 변경
    const handleDate = (type, date) => {
        let selectedDate = {};
        if (type?.includes("dessert")) {
            if (type?.includes("StartDate")) {
                Object.assign(selectedDate, { startDate: date });
            } else {
                Object.assign(selectedDate, { endDate: date });
            }
            setDessert((prev) => ({ ...prev, ...selectedDate }));
        } else if (type?.includes("food")) {
            if (type?.includes("StartDate")) {
                Object.assign(selectedDate, { startDate: date });
            } else {
                Object.assign(selectedDate, { endDate: date });
            }
            setFood((prev) => ({ ...prev, ...selectedDate }));
        }
    };

    // 조회 버튼 클릭
    const handleSubmit = (type) => {
        if (type === "food") {
            handleSearchFilter({
                foodTerm: food.term,
                foodStartDate: format(food.term, food.startDate),
                foodEndDate: format(food.term, food.endDate)
            });
        } else if (type === "dessert") {
            handleSearchFilter({
                dessertTerm: dessert.term,
                dessertStartDate: format(dessert.term, dessert.startDate),
                dessertEndDate: format(dessert.term, dessert.endDate)
            });
        }
    };

    // 검색하기
    const handleSearchFilter = (obj) => {
        dispatch(setSearchFilters(obj));
        handleSearch({
            foodTerm: food.startDate || food.endDate ? food.term : null,
            foodStartDate: food.startDate,
            foodEndDate: food.endDate,
            dessertTerm: dessert.startDate || dessert.endDate ? dessert.term : null,
            dessertStartDate: dessert.startDate,
            dessertEndDate: dessert.endDate
        });
    };

    // Dataset 1
    const { isLoading: dataset1Loading, data: dataset1 } = useGetList({
        menu,
        url: "/web/food-chart",
        type: "food"
    });

    // Dataset 2
    const { isLoading: dataset2Loading, data: dataset2 } = useGetList({
        menu,
        url: "/web/dessert-chart",
        type: "dessert"
    });

    // 검색하기
    const handleSearch = (obj) => history.push({ pathname: location.pathname, search: queryToString(obj) });

    return (
        <>
            <Paper elevation={0} sx={{ padding: 2.5 }}>
                <Search title="디저트별 칼로리 하루 섭취량" name="dessert" term={dessert} dates={dessert} handleChange={handleChange} handleDate={handleDate} handleSubmit={handleSubmit} />
                <Grid container rowSpacing={2.5}>
                    <Grid sx={{ width: "100%" }} item>
                        <LineChart />
                    </Grid>
                    <Grid sx={{ width: "100%" }} item>
                        <Table
                            menu={menu}
                            loading={dataset1Loading}
                            data={sampleChartData || dataset1} // data={dataList}
                        />
                    </Grid>
                </Grid>
            </Paper>
            <Paper elevation={0} sx={{ marginTop: 2.5, padding: 2.5 }}>
                <Search title="음식별 칼로리 하루 섭취량" name="food" term={food} dates={food} handleChange={handleChange} handleDate={handleDate} handleSubmit={handleSubmit} />
                <Grid container rowSpacing={2.5}>
                    <Grid sx={{ width: "100%" }} item>
                        <LineChart />
                    </Grid>
                    <Grid sx={{ width: "100%" }} item>
                        <Table
                            menu={menu}
                            loading={dataset2Loading}
                            data={sampleChartData || dataset2} // data={dataList}
                        />
                    </Grid>
                </Grid>
            </Paper>
            <MessageModal />
        </>
    );
}
