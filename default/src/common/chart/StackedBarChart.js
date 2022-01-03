import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@mui/material/Skeleton";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
    },
    scales: {
        x: {
            stacked: true
        },
        y: {
            stacked: true
        }
    }
};

const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getRandom = (max, min) => Math.floor(Math.random() * (max - min) + min);

const data = {
    labels,
    datasets: [
        {
            label: "Channel",
            data: labels.map(() => getRandom(1000, 0)),
            backgroundColor: "rgba(255, 99, 132, 0.5)"
        },
        {
            label: "Gucci",
            data: labels.map(() => getRandom(1000, 0)),
            backgroundColor: "rgba(54, 162, 235, 0.2)"
        },
        {
            label: "Prada",
            data: labels.map(() => getRandom(1000, 0)),
            backgroundColor: "rgba(75, 192, 192, 0.2)"
        }
    ]
};

function StackedBarChart({ stackedBarLoading, stackedBarChartData }) {
    return stackedBarLoading ? (
        <Skeleton variant="rectangular" width="100%" height={500} />
    ) : (
        <div style={{ position: "relative", width: "100%", height: "500px" }}>
            <Bar options={options} data={stackedBarChartData || data} />
        </div>
    );
}

StackedBarChart.propTypes = {
    stackedBarLoading: PropTypes.bool.isRequired,
    stackedBarChartData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default StackedBarChart;
