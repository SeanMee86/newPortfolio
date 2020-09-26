import * as d3 from 'd3'

export default (gitArray) => {
    const margin = {top: 10, right: 30, bottom: 40, left: 100},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
    const svg = d3.select("#data-section")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 960 500")
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data


// Add X axis
    const x = d3.scaleLinear()
        .domain([0, Math.ceil(gitArray.sort((a,b) => a.percentage - b.percentage)[gitArray.length-1].percentage)])
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end")
        .style("font-size", "18px");

// Y axis
    var y = d3.scaleBand()
        .range([0, height])
        .domain(gitArray.map(function (d) {
            return d.name;
        }))
        .padding(1);
    svg.append("g")
        .call(d3.axisLeft(y))
        .selectAll("text")
        .style("font-size", "18px")


// Lines
    svg.selectAll("myline")
        .data(gitArray)
        .enter()
        .append("line")
        .attr("x1", function (d) {
            return x(d.percentage);
        })
        .attr("x2", x(0))
        .attr("y1", function (d) {
            return y(d.name);
        })
        .attr("y2", function (d) {
            return y(d.name);
        })
        .attr("stroke", "grey")

// Circles
    svg.selectAll("mycircle")
        .data(gitArray)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
            return x(d.percentage);
        })
        .attr("cy", function (d) {
            return y(d.name);
        })
        .attr("r", "4")
        .style("fill", "#69b3a2")
        .attr("stroke", "black")
}

