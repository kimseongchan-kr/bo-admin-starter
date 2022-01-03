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
import Table from "components/table/ChartTable";
import MessageModal from "common/modal/MessageModal";

export default function ChartTable() {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const searchState = useSelector(searchSelector);
    const menu = useMenu({ page: "ChartTable", menu: "chart", menuTitle: "요약보기", menuNum: 9 }); // 페이지/메뉴 설정하기

    const [dessert, setDessert] = useState({ term: "daily", startDate: null, endDate: null }); // dataset 1
    const [food, setFood] = useState({ term: "monthly", startDate: null, endDate: null }); // dataset 2

    useEffect(() => {
        setDessert((prev) => ({
            ...prev,
            term: searchState.dessertTerm || "daily",
            startDate: searchState.dessertStartDate ? new Date(searchState.dessertStartDate) : null,
            endDate: searchState.dessertEndDate ? new Date(searchState.dessertEndDate) : null
        }));

        setFood((prev) => ({
            ...prev,
            term: searchState.footTerm || "monthly",
            startDate: searchState.foodStartDate ? new Date(searchState.foodStartDate) : null,
            endDate: searchState.foodEndDate ? new Date(searchState.foodEndDate) : null
        }));
    }, [searchState]);

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

    const handleFood = (name, value) => setFood((prev) => ({ ...prev, [name]: value }));

    const handleDessert = (name, value) => setDessert((prev) => ({ ...prev, [name]: value }));

    // 검색하기
    const handleSearch = (obj) => history.push({ pathname: location.pathname, search: queryToString(obj) });

    // 검색하기
    const handleSearchFilter = (obj) => {
        dispatch(setSearchFilters(obj));
        handleSearch({
            foodTerm: food.startDate || food.endDate ? food.term : null,
            foodStartDate: food.startDate ? format(food.term, food.startDate) : null,
            foodEndDate: food.endDate ? format(food.term, food.endDate) : null,
            dessertTerm: dessert.startDate || dessert.endDate ? dessert.term : null,
            dessertStartDate: dessert.startDate ? format(dessert.term, dessert.startDate) : null,
            dessertEndDate: dessert.endDate ? format(dessert.term, dessert.endDate) : null
        });
    };

    // 조회 버튼 클릭
    const handleSubmit = (type) => {
        if (type === "food") {
            handleSearchFilter({
                foodTerm: food.term,
                foodStartDate: food.startDate ? format(food.term, food.startDate) : null,
                foodEndDate: food.endDate ? format(food.term, food.endDate) : null
            });
        } else if (type === "dessert") {
            handleSearchFilter({
                dessertTerm: dessert.term,
                dessertStartDate: dessert.startDate ? format(dessert.term, dessert.startDate) : null,
                dessertEndDate: dessert.endDate ? format(dessert.term, dessert.endDate) : null
            });
        }
    };

    return (
        <>
            <Paper elevation={0} sx={{ padding: 2.5 }}>
                <Search title="디저트별 칼로리 하루 섭취량" type="dessert" term={dessert} dates={dessert} handleChange={handleDessert} handleDate={handleDessert} handleSubmit={handleSubmit} />
                <Grid container rowSpacing={2.5}>
                    <Grid sx={{ width: "100%" }} item>
                        <LineChart />
                    </Grid>
                    <Grid sx={{ width: "100%" }} item>
                        <Table menu={menu} loading={dataset1Loading} data={sampleChartData || dataset1} />
                    </Grid>
                </Grid>
            </Paper>
            <Paper elevation={0} sx={{ marginTop: 2.5, padding: 2.5 }}>
                <Search title="음식별 칼로리 하루 섭취량" type="food" term={food} dates={food} handleChange={handleFood} handleDate={handleFood} handleSubmit={handleSubmit} />
                <Grid container rowSpacing={2.5}>
                    <Grid sx={{ width: "100%" }} item>
                        <LineChart />
                    </Grid>
                    <Grid sx={{ width: "100%" }} item>
                        <Table menu={menu} loading={dataset2Loading} data={sampleChartData || dataset2} />
                    </Grid>
                </Grid>
            </Paper>
            <MessageModal />
        </>
    );
}
