import { HighchartsLineChart1 } from "@/registry/charts/highcharts/line-chart-1";
import { HighchartsLineChart2 } from "@/registry/charts/highcharts/line-chart-2";
import { JSX } from "react";

export interface ComponentCategory {
  slug: string;
  name: string;
  description: string;
  components: Array<{
    slug: string;
    name: string;
    description: string;
    group: string;
    components: Array<{
      slug: string;
      name: string;
      description: string;
      importPath: string;
      component: () => JSX.Element;
      tags: Array<string>;
    }>;
  }>;
  isNew?: boolean;
}

export const allComponents: Array<ComponentCategory> = [
  {
    slug: "charts",
    name: "Highcharts",
    description: "A line chart using Highcharts Tailwind.",
    components: [
      {
        group: "highcharts",
        slug: "highcharts",
        name: "Line Chart",
        description: "Line chart using Highcharts",
        components: [
          {
            slug: "highcharts-line-chart-1",
            name: "Line Chart 1",
            description: "Line chart using Highcharts",
            importPath: "@/registry/charts/highcharts/line-chart-1",
            component: HighchartsLineChart1,
            tags: ["chart", "highcharts", "react"],
          },
          {
            slug: "highcharts-line-chart-2",
            name: "Line Chart 2",
            description: "Line chart using Highcharts",
            importPath: "@/registry/charts/highcharts/line-chart-2",
            component: HighchartsLineChart2,
            tags: ["chart", "highcharts", "react"],
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
