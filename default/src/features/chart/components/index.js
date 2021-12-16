import React from "react";
import Grid from "@mui/material/Grid";

import LineChart from "features/chart/components/LineChart";
import PieChart from "features/chart/components/PieChart";
import DoughnutChart from "features/chart/components/DoughnutChart";
import BubbleChart from "features/chart/components/BubbleChart";
import StackedBarChart from "features/chart/components/StackedBarChart";
import BarChart from "features/chart/components/BarChart";

export default function Charts(props) {
    return (
        <Grid container rowSpacing={2.5} columnSpacing={2.5} justifyContent="flex-start" alignItems="center" direction="row">
            <LineChart {...props} />
            <PieChart {...props} />
            <BubbleChart {...props} />
            <DoughnutChart {...props} />
            <StackedBarChart {...props} />
            <BarChart {...props} />
        </Grid>
    );
}
