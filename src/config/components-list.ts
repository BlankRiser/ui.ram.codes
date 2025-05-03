import { HighchartsAreaChart1 } from "@/registry/charts/highcharts/area-chart-1";
import { HighchartsAreaChart2 } from "@/registry/charts/highcharts/area-chart-2";
import { HighchartsLineChart1 } from "@/registry/charts/highcharts/line-chart-1";
import { HighchartsLineChart2 } from "@/registry/charts/highcharts/line-chart-2";
import { HighchartsLineChart3 } from "@/registry/charts/highcharts/line-chart-3";
import { RechartsLineChart1 } from "@/registry/charts/recharts/line-chart-1";
import { JSX } from "react";

export interface ComponentCategory {
  slug: string;
  name: string;
  description: string;
  components: Array<{
    slug: string;
    name: string;
    description: string;
    tags: Array<string>;
    components: Array<{
      slug: string;
      name: string;
      description: string;
      importPath: string;
      component: () => JSX.Element;
    }>;
  }>;
  isNew?: boolean;
}

export const allComponents: Array<ComponentCategory> = [
  {
    slug: "highcharts",
    name: "Highcharts",
    description: "A line chart using Highcharts Tailwind.",
    components: [
      {
        slug: "line-chart",
        name: "Line Chart",
        description: "Line chart using Highcharts",
        tags: ["chart", "highcharts", "react"],
        components: [
          {
            slug: "highcharts-line-chart-1",
            name: "Basic Line Chart",
            description: "Line chart using Highcharts",
            importPath: "@/registry/charts/highcharts/line-chart-1",
            component: HighchartsLineChart1,
          },
          {
            slug: "highcharts-line-chart-2",
            name: "Line Chart with plot bands and plot lines",
            description: "Line Chart with plot bands and plot lines",
            importPath: "@/registry/charts/highcharts/line-chart-2",
            component: HighchartsLineChart2,
          },
          {
            slug: "highcharts-line-chart-3",
            name: "Line Chart with series customization",
            description: "Line Chart with series customization",
            importPath: "@/registry/charts/highcharts/line-chart-2",
            component: HighchartsLineChart3,
          },
        ],
      },
      {
        slug: "area-chart",
        name: "Area Chart",
        description: "Area chart using Highcharts",
        tags: ["chart", "highcharts", "react"],
        components: [
          {
            slug: "highcharts-area-chart-1",
            name: "Basic Area Chart",
            description: "Area chart using Highcharts",
            importPath: "@/registry/charts/highcharts/area-chart-1",
            component: HighchartsAreaChart1,
          },
          {
            slug: "highcharts-area-chart-2",
            name: "Area Range Chart",
            description: "Area Range Chart",
            importPath: "@/registry/charts/highcharts/area-chart-2",
            component: HighchartsAreaChart2,
          },
        ],
      },
    ],
  },
  {
    slug: "recharts",
    name: "Recharts",
    description: "A line chart using Recharts Tailwind.",
    components: [
      {
        slug: "line-chart",
        name: "Line Chart",
        description: "Line chart using Recharts",
        tags: ["chart", "recharts", "react"],
        components: [
          {
            slug: "recharts-line-chart-1",
            name: "Line Chart 1",
            description: "Line chart using Recharts",
            importPath: "@/registry/charts/recharts/line-chart-1",
            component: RechartsLineChart1,
          },
        ],
      },
    ],
  },
];

export const getComponentGroup = (group: string) => {
  return allComponents.find((item) => item.slug === group);
};
export const getComponent = (group: string, component: string) => {
  const componentGroup = getComponentGroup(group);
  if (!componentGroup) {
    return null;
  }
  return componentGroup.components.find((item) => item.slug === component);
};
