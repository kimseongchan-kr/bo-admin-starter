import React from "react";

import useMenu from "hooks/useMenu";
import useSearch from "hooks/useSearch";
import useGetList from "hooks/useGetList";

import ChartSearch from "components/search/ChartSearch";
import Charts from "features/chart/components/Charts";
import MessageModal from "common/modal/MessageModal";

export default function Chart() {
    const menu = useMenu({ page: "Chart", menu: "chart", menuTitle: "요약보기", menuNum: 8 }); // 페이지/메뉴 설정하기

    // line chart 데이터 가져오기
    const {
        params,
        isLoading: lineLoading,
        data: lineChartData
    } = useGetList({
        menu,
        url: "/web/line-chart"
    });

    // pie chart 데이터 가져오기
    const { isLoading: pieLoading, data: pieChartData } = useGetList({
        menu,
        url: "/web/pie-chart"
    });

    const handleSearch = useSearch({ params }); // 검색하기

    return (
        <>
            <ChartSearch heading="기간 검색" menu={menu} handleSearch={handleSearch} />
            <Charts lineLoading={lineLoading} lineChartData={lineChartData} pieLoading={pieLoading} pieChartData={pieChartData} />
            <MessageModal />
        </>
    );
}
