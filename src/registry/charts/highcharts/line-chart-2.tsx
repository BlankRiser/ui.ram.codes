"use client";

import React from "react";
import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";

const options: Highcharts.Options = {
  title: {
    text: "",
  },
  credits: {
    enabled: false,
  },
  subtitle: {
    text: "Chart with plot bands and lines",
    floating: true,
    align: "left",
    style: {
      fontSize: "14px",
      fontWeight: "semibold",
      color: "var(--foreground)",
    },
  },
  xAxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    plotBands: [
      {
        color: "var(--color-red-100)",
        from: 3, // Start of the plot band
        to: 4, // End of the plot band
      },
    ],
    plotLines: [
      {
        color: "var(--color-red-800)",
        dashStyle: "DashDot",
        value: 2, // Value of where the line will appear
        width: 1, // Width of the line
      },
    ],
  },
  yAxis: {
    title: {
      text: "Values",
    },
  },
  tooltip: {
    shared: true,
    valueSuffix: " units",
  },
  legend: {
    layout: "horizontal",
    align: "right",
    verticalAlign: "top",
    borderWidth: 0,
  },
  series: [
    {
      type: "spline",
      name: "Series 1",
      color: "var(--chart-1)",
      data: [1, 3, 2, 4, 5, 6, 7],
      dataLabels: {
        enabled: true,
      },
    },
    {
      type: "spline",
      name: "Series 2",
      color: "var(--chart-2)",
      data: [2, 2, 3, 5, 3, 2, 4],
      dataLabels: {
        enabled: true,
      },
    },
  ],
};

export const HighchartsLineChart2 = () => (
  <div className="w-full h-full">
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);
