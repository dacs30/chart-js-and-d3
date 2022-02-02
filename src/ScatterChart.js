import React from 'react';
import * as d3 from 'd3';
import { useD3 } from './hooks/useD3';

function ScatterChart({ data }) {

    const ref = useD3(
        (svg) => {


            var margin = { top: 20, right: 30, bottom: 30, left: 60 },
                width = 600,
                height = 600;

            svg.attr("viewBox", [0, 50, width, height]).property("value", []);


            svg.append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");

            var x = d3.scaleLinear()
                .domain([1500, 5000])
                .range([0, width]);

            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            const color = d3.scaleOrdinal(
                data.map((d) => d.Manufacturer),
                d3.schemeCategory10
            )

            // Add Y axis
            var y = d3.scaleLinear()
                .domain([5, 45])
                .range([height, 0]);


            svg.append("g")
                .call(d3.axisLeft(y));

            svg.append("text")
                .attr("class", "x label")
                .attr("text-anchor", "end")
                .attr("x", width)
                .attr("y", height - 6)
                .text("Weight");

            svg.append("text")
                .attr("class", "y label")
                .attr("text-anchor", "end")
                .attr("dx", "-2em")
                .attr("dy", "-.5em")
                .attr("transform", "rotate(-90)")
                .text("MPG");

            // Add dots
            svg.append('g')
                .selectAll("dot")
                .data(data)
                .enter()
                .append("circle")
                .attr("cx", function (d) { return x(d.Weight); })
                .attr("cy", function (d) { return y(d.MPG); })
                .attr("r", function (d) { return d.Weight * 0.002; })
                .attr("fill", (d) => color(d.Manufacturer));


        },
        //[data.length]
    );

    return (
        <div>
            <svg
                ref={ref}
                style={{
                    height: 600,
                    width: "100%",
                    marginRight: "0px",
                    marginLeft: "0px",
                }}
            >
                {/* <g className="plot-area" />
                <g className="x-axis" />
                <g className="y-axis" /> */}
            </svg>
        </div>
    );
}

export default ScatterChart;
