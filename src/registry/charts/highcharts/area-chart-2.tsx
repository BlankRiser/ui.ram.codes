"use client";

import * as Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import { useEffect, useState } from "react";

const loadHighchartsModules = async (callback: () => void) => {
  Promise.all([
    import("highcharts/es-modules/masters/highcharts-more.src.js"),
  ]).then(callback);
};
const highchartOptions: Highcharts.Options = {
  credits: {
    enabled: true,
  },
  chart: {
    backgroundColor: "var(--background)",
    type: "arearange",
    zooming: {
      type: "x",
    },
    panKey: "shift",
  },
  title: {
    text: "",
  },
  subtitle: {
    text: "Area Range Chart",
    floating: true,
    align: "left",
    style: {
      fontSize: "14px",
      fontWeight: "semibold",
      color: "var(--foreground)",
    },
  },
  xAxis: {
    type: "datetime",
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

      const formattedDate = Highcharts.dateFormat("%b %e %Y, %H:%M", this.x);

      return `<div class="bg-neutral-100/30 backdrop-blur-lg dark:bg-gray-900/30 p-2 text-black dark:text-white rounded shadow-lg">
                <strong>${formattedDate}</strong><br>
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
      type: "arearange",
      name: "Series 1",
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, "var(--chart-2)"],
          [1, "var(--chart-4)"],
        ],
      },
      data: [
        [Date.UTC(2025, 0, 1, 12, 30), 29.9, 71.5],
        [Date.UTC(2025, 0, 2, 2, 40), 71.5, 106.4],
        [Date.UTC(2025, 0, 3, 5, 25), 106.4, 129.2],
        [Date.UTC(2025, 0, 4, 8, 15), 129.2, 144.0],
        [Date.UTC(2025, 0, 5, 14, 45), 144.0, 176.0],
        [Date.UTC(2025, 0, 6, 19, 10), 176.0, 135.6],
        [Date.UTC(2025, 0, 7, 20, 5), 135.6, 148.5],
        [Date.UTC(2025, 0, 8, 12, 30), 148.5, 176.0],
        [Date.UTC(2025, 0, 9, 7, 20), 176.0, 199.0],
        [Date.UTC(2025, 0, 10, 6, 30), 199.0, 210.0],
      ],
      marker: {
        enabled: false,
        symbol: "circle",
      },
    },
  ],
};

export const HighchartsAreaChart2 = () => {
  const [chartOptions, setChartOptions] = useState({
    isLoading: true,
    options: highchartOptions,
  });

  useEffect(() => {
    loadHighchartsModules(() => {
      setChartOptions((prev) => ({ ...prev, isLoading: false }));
    });
  }, []);

  if (chartOptions.isLoading) {
    return <div>Loading...</div>;
  }

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};
