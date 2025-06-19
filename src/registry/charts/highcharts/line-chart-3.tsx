"use client";

import React from "react";
import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";

const options: Highcharts.Options = {
  credits: {
    enabled: true,
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
    plotLines: [
      {
        color: "var(--color-green-800)",
        dashStyle: "LongDash",
        value: 3, // Category index
        width: 1,
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
    useHTML: true,
    backgroundColor: "transparent",
    shadow: false,
    formatter: function () {
      const seriesPoints = this.points?.map((point) => {
        return `<span style="color:${point.color}">${point.series.name}</span> : ${point.y}`;
      });
      return `<div class="bg-neutral-100/30 backdrop-blur-lg dark:bg-gray-900/30 p-2 text-black dark:text-white rounded shadow-lg">
                <strong>${this.key}</strong><br>
                ${seriesPoints?.join("<br>")}
              </div>`;
    },
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
      name: "Series 2",
      data: [2, 2, 3, 5, 3, 2, 4],
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, "var(--chart-2)"],
          [1, "var(--chart-4)"],
        ],
      },
      dataLabels: {
        enabled: true,
        style: {
          color: "var(--foreground)",
        },
      },
      marker: {
        symbol: "diamond",
        lineWidth: 1,
        lineColor: "var(--chart-4)",
        fillColor: "var(--secondary)",
      },
      zones: [
        {
          value: 3, // All values equal to ot below will be dotted
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, "var(--chart-1)"],
              [1, "var(--chart-5)"],
            ],
          },
          dashStyle: "DashDot",
        },
        {
          // If no value is specified, the zone will apply this confiig other values
          dashStyle: "LongDashDot",
        },
      ],
    },
  ],
};

export const HighchartsLineChart3 = () => (
  <div className="w-full h-full">
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);
