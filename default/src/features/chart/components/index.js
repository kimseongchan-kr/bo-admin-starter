import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import LineChart from "features/chart/components/LineChart";
import PieChart from "features/chart/components/PieChart";
import DoughnutChart from "features/chart/components/DoughnutChart";
import BubbleChart from "features/chart/components/BubbleChart";
import StackedBarChart from "features/chart/components/StackedBarChart";
import BarChart from "features/chart/components/BarChart";

export default function Charts(props) {
    return (
        <Grid container rowSpacing={2.5} columnSpacing={2.5} justifyContent="flex-start" alignItems="center" direction="row">
            <Grid item xs={6}>
                <Paper elevation={0} sx={{ padding: 2.5 }}>
                    <LineChart xs={6} {...props} />
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper elevation={0} sx={{ padding: 2.5 }}>
                    <PieChart {...props} />
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper elevation={0} sx={{ width: "100%", padding: 2.5, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <BubbleChart {...props} />
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper elevation={0} sx={{ width: "100%", padding: 2.5, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <DoughnutChart {...props} />
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper elevation={0} sx={{ padding: 2.5 }}>
                    <StackedBarChart {...props} />
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper elevation={0} sx={{ padding: 2.5, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <BarChart {...props} />
                </Paper>
            </Grid>
        </Grid>
    );
}
