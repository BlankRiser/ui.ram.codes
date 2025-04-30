"use client";

import React from "react";
import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";

const options: Highcharts.Options = {
  credits: {
    enabled: false, // Do this only if you have a license
  },
  chart: {
    backgroundColor: "var(--background)",
    panning: {
      enabled: true,
    },
    zooming: {
      type: "x",
    },
    panKey: "shift",
  },
  title: {
    text: "",
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
    title: {
      text: "Months",
      style: {
        color: "var(--foreground)",
      },
    },
    labels: {
      style: {
        color: "var(--foreground)",
      },
    },
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    plotBands: [
      {
        color: "var(--accent)",
        from: 3, // Start of the plot band
        to: 4, // End of the plot band
      },
    ],
    plotLines: [
      {
        color: "var(--color-blue-800)",
        dashStyle: "DashDot",
        value: 1, // Value of where the line will appear
        width: 1, // Width of the line
      },
      {
        color: "var(--color-green-800)",
        dashStyle: "LongDash",
        value: 5, // Value of where the line will appear
        width: 1, // Width of the line
      },
    ],
  },
  yAxis: {
    title: {
      text: "Values",
      style: {
        color: "var(--foreground)",
      },
    },
    labels: {
      style: {
        color: "var(--foreground)",
      },
    },
    gridLineColor: "var(--muted)",
    gridLineWidth: 1,
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
    itemStyle: {
      color: "var(--foreground)",
    },
  },
  series: [
    {
      type: "spline",
      name: "Series 1",
      color: "var(--chart-1)",
      data: [1, 3, 2, 4, 5, 6, 7],
      dataLabels: {
        enabled: true,
        style: {
          color: "var(--foreground)",
        },
      },
    },
    {
      type: "spline",
      name: "Series 2",
      color: "var(--chart-2)",
      data: [2, 2, 3, 5, 3, 2, 4],
      dataLabels: {
        enabled: true,
        style: {
          color: "var(--foreground)",
        },
      },
    },
  ],
};

export const HighchartsLineChart2 = () => (
  <div className="w-full h-full">
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);
