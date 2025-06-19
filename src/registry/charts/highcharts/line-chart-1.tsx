"use client";

import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";

const options: Highcharts.Options = {
  credits: {
    enabled: true,
  },
  chart: {
    backgroundColor: "var(--background)",
  },
  title: {
    text: "Sample Line Chart",
    style: {
      color: "var(--foreground)",
    },
  },
  subtitle: {
    text: "An example of a line chart with Highcharts and React",
    style: {
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
    align: "center",
    verticalAlign: "bottom",
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
        enabled: false,
        style: {
          color: "var(--foreground)",
        },
      },
      marker: {
        enabled: false,
        symbol: "circle",
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
      marker: {
        enabled: false,
        symbol: "circle",
      },
    },
  ],
};

export const HighchartsLineChart1 = () => (
  <HighchartsReact highcharts={Highcharts} options={options} />
);
