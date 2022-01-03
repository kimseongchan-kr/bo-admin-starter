import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@mui/material/Skeleton";

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            min: 0,
            ticks: {
                stepSize: 1
            }
        }
    },
    animation: {
        duration: 500
    },
    elements: {
        line: {
            tension: 0.3
        }
    },
    plugins: {
        legend: {
            position: "bottom",
            labels: {
                padding: 25
            }
        }
    }
};

const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getRandom = (max, min) => Math.floor(Math.random() * (max - min) + min);

const data = {
    labels,
    datasets: [
        {
            label: "2020년",
            data: Array.from(Array(12)).map(() => getRandom(500, 50)),
            borderColor: "rgba(255, 99, 132, 0.5)",
            backgroundColor: "rgba(255, 99, 132)"
        },
        {
            label: "2021년",
            data: Array.from(Array(12)).map(() => getRandom(400, 150)),
            borderColor: "rgb(53, 162, 235, 0.5)",
            backgroundColor: "rgba(53, 162, 235)"
        }
    ]
};

function LineChart({ lineLoading, lineChartData }) {
    return lineLoading ? (
        <Skeleton variant="rectangular" width="100%" height={500} />
    ) : (
        <div style={{ position: "relative", width: "100%", height: "500px" }}>
            <Line data={lineChartData || data} options={options} />
        </div>
    );
}

LineChart.propTypes = {
    lineLoading: PropTypes.bool.isRequired,
    lineChartData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default LineChart;
