import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@mui/material/Skeleton";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: "bottom",
            labels: {
                padding: 25
            }
        }
    }
};

const getRandom = (max, min) => Math.floor(Math.random() * (max - min) + min);

const data = {
    labels: ["February", "April", "June", "August", "October", "December"],
    datasets: [
        {
            label: "월별 현황",
            data: Array.from(Array(6)).map(() => getRandom(20, 5)),
            backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
            borderWidth: 1
        }
    ]
};

function DoughnutChart({ doughnutLoading, doughnutChartData }) {
    return doughnutLoading ? (
        <Skeleton variant="rectangular" width="100%" height={500} />
    ) : (
        <div style={{ position: "relative", height: "500px", width: "500px" }}>
            <Doughnut data={doughnutChartData || data} options={options} />
        </div>
    );
}

DoughnutChart.propTypes = {
    doughnutLoading: PropTypes.bool.isRequired,
    doughnutChartData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DoughnutChart;
