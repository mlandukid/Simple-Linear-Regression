// https://observablehq.com/@hydrosquall/simple-linear-regression-scatterplot-with-d3@218
function _1(md){return(
md`# Average Visits Growth (Y/Y) per Listed Mall Owner v.s Mall Size`
)}

function _2(d3,DOM,width,height,renderChart,data)
{
  const svg = d3.select(DOM.svg(width, height))
                .classed('chart', true);
  
  renderChart(svg, data);
  return svg.node();
}


function _3(md){return(
md``
)}

function _4(md){return(
md``
)}

function _yearsExperience(){return(
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
)}

function _salaries(){return(
[39343, 46205, 37731, 43525, 39891, 56642, 60150, 54445, 64445, 57189, 63218]
)}

function _7(md){return(
md`
`
)}

function _data(_,yearsExperience,salaries){return(
_.zipWith(yearsExperience, salaries, (year, salary) => (
  {
    x: year,
    y: salary
  }
))
)}

function _9(md){return(
md``
)}

function _height(){return(
500
)}

function _width(){return(
700
)}

function _margin(){return(
{ top: 20, right: 20, bottom: 20, left: 50 }
)}

function _13(md){return(
md``
)}

function _xScale(d3,data,margin,width){return(
d3.scaleLinear()
           .domain([0, d3.max(data, d => d.x)])
           .range([margin.left, width - margin.right])
)}

function _yScale(d3,data,height,margin){return(
d3.scaleLinear()
           .domain([0, 20000 + d3.max(data, d => d.y)]) // added a bit of breathing room (20,000)
           .range([height - margin.bottom, margin.top])
)}

function _16(md){return(
md``
)}

function _xAxis(height,margin,d3,xScale){return(
g => g.attr('transform', `translate(0, ${height - margin.bottom})`)
              .attr("class", "xAxis")
              .call(d3.axisBottom(xScale))
)}

function _yAxis(margin,d3,yScale){return(
g => g.attr('transform', `translate(${margin.left}, 0)`)
              .attr("class", "yAxis")
              .call(d3.axisLeft(yScale))
)}

function _19(md){return(
md``
)}

function _linearRegression(ss,data){return(
ss.linearRegression(data.map(d => [d.x, d.y]))
)}

function _linearRegressionLine(ss,linearRegression){return(
ss.linearRegressionLine(linearRegression)
)}

function _regressionPoints(data,linearRegressionLine)
{
  const firstX = data[0].x;
  const lastX = data.slice(-1)[0].x;
  const xCoordinates = [firstX, lastX];
  
  return xCoordinates.map(d => ({
    x: d,                         // We pick x and y arbitrarily, just make sure they match d3.line accessors
    y: linearRegressionLine(d)
  }));
}


function _line(d3,xScale,yScale){return(
d3.line()
         .x(d => xScale(d.x))
         .y(d => yScale(d.y))
)}

function _renderChart(data,xScale,yScale,regressionPoints,line,xAxis,yAxis){return(
(target) => {
  
  // First, let's make the scatterplot
  target.selectAll('circle')
          .data(data)
        .enter().append('circle')
          .attr('r', 10)
          .attr('cx', d => xScale(d.x))
          .attr('cy', d => yScale(d.y));
          
  // Next, we'll draw the regression line
  target.append('path')
        .classed('regressionLine', true)
        .datum(regressionPoints)
        .attr('d', line);
          
  // Lastly, we add the axes!
  target.append('g')
        .call(xAxis);
  target.append('g')
        .call(yAxis);
}
)}

function _25(md){return(
md``
)}

function _26(html){return(
html`
<style>
  .chart .xAxis path,line {
    stroke: #dddddd;
  }

  .chart .yAxis path,line {
    stroke: #dddddd;
  }

  .chart circle {
    fill: #FF0000;
  }

  .chart path.regressionLine {
    stroke: #0000FF;
    fill: none;
    stroke-width: 1.2;
    stroke-dasharray: 3,5;
  }

</style>
`
)}

function _27(md){return(
md``
)}

function _28(md){return(
md`##

`
)}

function _29(md){return(
md`##
`
)}

function _d3(require){return(
require('d3@4')
)}

function _ss(require){return(
require('simple-statistics')
)}

function __(require){return(
require('lodash')
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["d3","DOM","width","height","renderChart","data"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer("yearsExperience")).define("yearsExperience", _yearsExperience);
  main.variable(observer("salaries")).define("salaries", _salaries);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer("data")).define("data", ["_","yearsExperience","salaries"], _data);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer("height")).define("height", _height);
  main.variable(observer("width")).define("width", _width);
  main.variable(observer("margin")).define("margin", _margin);
  main.variable(observer()).define(["md"], _13);
  main.variable(observer("xScale")).define("xScale", ["d3","data","margin","width"], _xScale);
  main.variable(observer("yScale")).define("yScale", ["d3","data","height","margin"], _yScale);
  main.variable(observer()).define(["md"], _16);
  main.variable(observer("xAxis")).define("xAxis", ["height","margin","d3","xScale"], _xAxis);
  main.variable(observer("yAxis")).define("yAxis", ["margin","d3","yScale"], _yAxis);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer("linearRegression")).define("linearRegression", ["ss","data"], _linearRegression);
  main.variable(observer("linearRegressionLine")).define("linearRegressionLine", ["ss","linearRegression"], _linearRegressionLine);
  main.variable(observer("regressionPoints")).define("regressionPoints", ["data","linearRegressionLine"], _regressionPoints);
  main.variable(observer("line")).define("line", ["d3","xScale","yScale"], _line);
  main.variable(observer("renderChart")).define("renderChart", ["data","xScale","yScale","regressionPoints","line","xAxis","yAxis"], _renderChart);
  main.variable(observer()).define(["md"], _25);
  main.variable(observer()).define(["html"], _26);
  main.variable(observer()).define(["md"], _27);
  main.variable(observer()).define(["md"], _28);
  main.variable(observer()).define(["md"], _29);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("ss")).define("ss", ["require"], _ss);
  main.variable(observer("_")).define("_", ["require"], __);
  return main;
}
