"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

const data = [
  { month: "Jan", series1: 1, series2: 2 },
  { month: "Feb", series1: 3, series2: 2 },
  { month: "Mar", series1: 2, series2: 3 },
  { month: "Apr", series1: 4, series2: 5 },
  { month: "May", series1: 5, series2: 3 },
  { month: "Jun", series1: 6, series2: 2 },
  { month: "Jul", series1: 7, series2: 4 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const RechartsLineChart1 = () => {
  return (
    <div className="h-[400px]">
      <ChartContainer config={chartConfig} className="size-full">
        <LineChart accessibilityLayer data={data} className="h-[400px]">
          <CartesianGrid vertical={true} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="series1"
            type="natural"
            stroke="var(--color-chart-1)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="series2"
            type="natural"
            stroke="var(--color-chart-2)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};
