import MNGridCard from "../../../Components/MNGridCard";
import { Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);
const TopStatesCard = () => {
  const chartRef = useRef(null);

  const labels = ["NY", "MA", "NH", "OR"];
  const values = [120000, 80000, 70000, 50000];

  const data: ChartData<"bar", any, unknown> = {
    labels,
    datasets: [
      {
        data: values.map((value) => ({
          x: value,
          y: labels[values.indexOf(value)],
          _custom: {
            start: 0,
            end: value,
            barStart: 0,
            barEnd: value,
            min: 0,
            max: value,
          },
        })),
        backgroundColor: (ctx) => {
          const chart = ctx.chart;
          const { ctx: canvasCtx, chartArea } = chart;
          if (!chartArea) return;

          const gradient = canvasCtx.createLinearGradient(
            0,
            0,
            chartArea.width,
            0
          );
          gradient.addColorStop(0, "#FFC266"); // orange
          gradient.addColorStop(1, "rgba(255,255,255,0)");
          return gradient;
        },
        borderRadius: 8,
        barThickness: 20,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
        formatter: (value) => {
          const num = typeof value === "object" ? value?.x : value;
          return `${Math.round(num / 1000)}K`;
        },
        color: "#000",
        font: {
          weight: "bold" as const,
        },
        padding: {
          right: 10,
        },
      },
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        display: false,
        beginAtZero: true,
      },
      y: {
        ticks: {
          color: "#000",
          font: {
            weight: "bold" as const,
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <MNGridCard size={{ md: 4 }} sx={{ height: 300 }}>
      <Stack p={2} spacing={2}>
        <Typography variant="cardTitle">Top states</Typography>
      </Stack>
      <Stack width={1}>
        <Bar ref={chartRef} data={data} options={options} />
      </Stack>
    </MNGridCard>
  );
};

export default TopStatesCard;
