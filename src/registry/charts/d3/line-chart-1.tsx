"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface DataPoint {
  month: string;
  series1: number;
  series2: number;
}

const data: DataPoint[] = [
  { month: "Jan", series1: 1, series2: 2 },
  { month: "Feb", series1: 3, series2: 2 },
  { month: "Mar", series1: 2, series2: 3 },
  { month: "Apr", series1: 4, series2: 5 },
  { month: "May", series1: 5, series2: 3 },
  { month: "Jun", series1: 6, series2: 2 },
  { month: "Jul", series1: 7, series2: 4 },
];

export const D3LineChart1 = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear existing content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set dimensions
    const margin = { top: 60, right: 30, bottom: 60, left: 60 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scales
    const x = d3
      .scalePoint()
      .domain(data.map((d) => d.month))
      .range([0, width])
      .padding(0.5);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => Math.max(d.series1, d.series2)) || 0])
      .range([height, 0])
      .nice();

    // Line generators
    const line = d3
      .line<DataPoint>()
      .x((d) => x(d.month)!)
      .y((d) => y(d.series1))
      .curve(d3.curveCardinal);

    const line2 = d3
      .line<DataPoint>()
      .x((d) => x(d.month)!)
      .y((d) => y(d.series2))
      .curve(d3.curveCardinal);

    // Add grid lines
    svg
      .append("g")
      .attr("class", "grid")
      .call(
        d3
          .axisLeft(y)
          .tickSize(-width)
          .tickFormat(() => ""),
      )
      .style("stroke", "var(--muted)")
      .style("stroke-opacity", "0.1");

    // Add axes
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .style("color", "var(--foreground)");

    svg.append("g").call(d3.axisLeft(y)).style("color", "var(--foreground)");

    // Add lines
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "var(--chart-1)")
      .attr("stroke-width", 2)
      .attr("d", line);

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "var(--chart-2)")
      .attr("stroke-width", 2)
      .attr("d", line2);

    // Add title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", -margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "1.2em")
      .style("fill", "var(--foreground)")
      .text("Sample Line Chart");

    // Add subtitle
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", -margin.top / 4)
      .attr("text-anchor", "middle")
      .style("font-size", "0.9em")
      .style("fill", "var(--foreground)")
      .text("An example of a line chart with D3 and React");

    // Add legend
    const legend = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height + 40})`);

    // Series 1 legend
    legend
      .append("line")
      .attr("x1", -100)
      .attr("x2", -80)
      .attr("stroke", "var(--chart-1)")
      .attr("stroke-width", 2);

    legend
      .append("text")
      .attr("x", -70)
      .attr("y", 4)
      .text("Series 1")
      .style("fill", "var(--foreground)");

    // Series 2 legend
    legend
      .append("line")
      .attr("x1", 20)
      .attr("x2", 40)
      .attr("stroke", "var(--chart-2)")
      .attr("stroke-width", 2);

    legend
      .append("text")
      .attr("x", 50)
      .attr("y", 4)
      .text("Series 2")
      .style("fill", "var(--foreground)");

    // Add tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background-color", "var(--background)")
      .style("padding", "10px")
      .style("border-radius", "4px")
      .style("box-shadow", "0 0 10px rgba(0,0,0,0.1)")
      .style("pointer-events", "none");

    // Add hover effects
    const focus = svg.append("g").style("display", "none");

    // Add vertical line
    focus
      .append("line")
      .attr("class", "vertical-line")
      .attr("y1", 0)
      .attr("y2", height)
      .style("stroke", "var(--muted)")
      .style("stroke-width", "1px")
      .style("stroke-dasharray", "3,3");

    // Add overlay for mouse events
    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .style("fill", "none")
      .style("pointer-events", "all")
      .on("mouseover", () => {
        focus.style("display", null);
        tooltip.style("visibility", "visible");
      })
      .on("mouseout", () => {
        focus.style("display", "none");
        tooltip.style("visibility", "hidden");
      })
      .on("mousemove", (event) => {
        const mouseX = d3.pointer(event)[0];
        const xInvert = x.domain().map((d) => ({
          month: d,
          x: x(d) || 0,
        }));
        const bisect = d3.bisector((d: { x: number }) => d.x).left;
        const index = bisect(xInvert, mouseX);
        const d = data[index];

        if (d) {
          focus
            .select(".vertical-line")
            .attr("transform", `translate(${x(d.month)},0)`);

          tooltip
            .html(
              `<div class="bg-neutral-100/30 backdrop-blur-lg dark:bg-gray-900/30 p-2 text-black dark:text-white rounded shadow-lg">
                <strong>${d.month}</strong><br/>
                <span style="color:var(--chart-1)">Series 1: ${d.series1}</span><br/>
                <span style="color:var(--chart-2)">Series 2: ${d.series2}</span>
              </div>`,
            )
            .style("left", `${event.pageX + 10}px`)
            .style("top", `${event.pageY - 10}px`);
        }
      });

    // Cleanup function
    return () => {
      tooltip.remove();
    };
  }, []);

  return <svg ref={svgRef}></svg>;
};
