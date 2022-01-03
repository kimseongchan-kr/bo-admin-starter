import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@mui/material/Skeleton";

import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

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
        y: {
            beginAtZero: true
        }
    }
};

const getRandom = (max, min) => Math.floor(Math.random() * (max - min) + min);

const data = {
    datasets: [
        {
            label: "2020년",
            data: Array.from({ length: 50 }, () => ({
                x: getRandom(100, -100),
                y: getRandom(100, -100),
                r: getRandom(20, 5)
            })),
            backgroundColor: "rgba(255, 99, 132, 0.5)"
        },
        {
            label: "2021년",
            data: Array.from({ length: 50 }, () => ({
                x: getRandom(100, -100),
                y: getRandom(100, -100),
                r: getRandom(20, 5)
            })),
            backgroundColor: "rgba(53, 162, 235, 0.5)"
        }
    ]
};

function BubbleChart({ bubbleLoading, bubbleChartData }) {
    return bubbleLoading ? (
        <Skeleton variant="rectangular" width="100%" height={500} />
    ) : (
        <div style={{ position: "relative", width: "100%", height: "500px" }}>
            <Bubble data={bubbleChartData || data} options={options} />
        </div>
    );
}

BubbleChart.propTypes = {
    bubbleLoading: PropTypes.bool.isRequired,
    bubbleChartData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BubbleChart;
