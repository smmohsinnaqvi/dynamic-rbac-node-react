import React, { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { primary } from "../../../Theme/colors";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend
);

const GrowthChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
      gradient.addColorStop(0, primary[500]); // #25CD25 @ 40%
      gradient.addColorStop(1, "#ffffff"); // #25CD25 @ 0%
      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, []);

  const data = {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        data: [5000, 15000, 45000, 75000, 10000, 25000, 60000, 100000],
        fill: true,
        borderColor: primary[500],
        borderWidth: 1,
        tension: 0,

        pointRadius: 0,
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => `${value / 1000}k`,
          color: "#888",
          stepSize: 20000,
          padding: 20,
          align: "start",
        },
        position: "left",
        grid: {
          drawTicks: true,
          display: true,
        },
      },
      x: {
        ticks: {
          color: "#888",
          padding: 20,
        },
        grid: {
          drawTicks: true,
          display: true,
        },
      },
    },
  };

  return <Line ref={chartRef} data={data} options={options} />;
};

export default GrowthChart;
