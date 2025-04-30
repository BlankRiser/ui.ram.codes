"use client";

import React from "react";
import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";

const options: Highcharts.Options = {
  title: {
    text: "Sample Line Chart",
  },
  credits: {
    enabled: false,
  },
  subtitle: {
    text: "An example of a line chart with Highcharts and React",
  },
  xAxis: {
    title: {
      text: "Months",
    },
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
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
    align: "center",
    verticalAlign: "bottom",
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

export const HighchartsLineChart1 = () => (
  <HighchartsReact highcharts={Highcharts} options={options} />
);
