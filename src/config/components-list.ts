import HighchartsLineChart from "@/registry/charts/highcharts/line-chart";
import { JSX } from "react";

export interface ComponentCategory {
  slug: string;
  name: string;
  description: string;
  components: Array<{
    name: string;
    slug: string;
    description: string;
    importPath: string;
    tags: Array<string>;
    group: string;
    component: () => JSX.Element;
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
        slug: "line-chart",
        group: "highcharts",
        name: "Line Chart (Highcharts)",
        description: "Line chart using Highcharts",
        importPath: "@/registry/charts/highcharts/line-chart",
        component: HighchartsLineChart,
        tags: ["chart", "highcharts", "react"],
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
