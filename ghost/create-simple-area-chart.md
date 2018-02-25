<style type="text/css">
    .area {
        fill: lightsteelblue;
    }

    #d3-area-chart-example {
        height: 300px;
    }
</style>

#Learning D3.js - Create a Simple Area Chart

I've recently had to do some work using D3.js. I've found it a very interesting library and I've seen some really impressive examples of other people's work. My stuff has been very rudimentary so far. 

I've had a couple of small items that I needed to use it for and I want to record some proper documentation for myself before I forget how to use it all over again.

I previously used version 3 and version 4 was released in 2016 and there are a few differences so I'm hoping to document some examples in my own way so that I won't have the same issue in the future.

### Some D3.js Basics

[D3.js](https://d3js.org/) is a JavaScript library that uses SVG elements to create visualizations of data. It was [created](http://vis.stanford.edu/papers/d3) by [Michael Bostock](https://github.com/mbostock) ([Twitter](https://twitter.com/mbostock?lang=en)), [Vadim Ogievetsky](https://github.com/vogievetsky/) ([Twitter](https://twitter.com/VOgievetsky?lang=en)), and [Jeffrey Heer](https://homes.cs.washington.edu/~jheer/) ([Twitter](https://twitter.com/jeffrey_heer?lang=en)) and you can see the [source code on GitHub](https://github.com/d3/d3) and see the documentation [here](https://github.com/d3/d3/wiki) and the API reference [here](http://devdocs.io/d3~4/)

The example below is based on [this example](https://bl.ocks.org/d3noob/119a138ef9bd1d8f0a8d57ea72355252). There are loads of examples that can be found online especially on [Bl.ocks](https://bl.ocks.org/) (which is also run by Mike Bostock) where you can see just what is possible with D3.js.

### A Simple Area Chart

<div id="d3-area-chart-example"></div>

### What's Going On?

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.1/knockout-min.js"></script>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script type="text/javascript">
// Area Chart Example with Grid
// https://bl.ocks.org/d3noob/119a138ef9bd1d8f0a8d57ea72355252

// My example is at https://codepen.io/tctruckscience/pen/wpyGRo
var margin = {top: 20, right: 20, bottom: 20, left: 20},
    width = document.getElementById("d3-area-chart-example").scrollWidth - margin.left - margin.right,
    height = document.getElementById("d3-area-chart-example").scrollHeight - margin.top - margin.bottom,
    numberOfTicksOnXAxis = 5,
    numberOfTicksOnYAxis = 5;

// set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the area
var area = d3.area()
    .x(function(d, index) { 
      return x(index); 
    })
    .y0(height)
    .y1(function(d) { return y(d); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#d3-area-chart-example").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// scale the range of the data
var data = [0, 1, 2, 3, 4, 20, 3, 0, 20, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 20, 3, 0, 20, 0, 3, 4];

x.domain(d3.extent(data, function(d, index) { 
  return index; 
}));
y.domain([0, d3.max(data, function(d) { 
  return d;
})]);

// add the area
svg.append("path")
  .data([data])
  .attr("class", "area")
  .attr("d", area);

// add the X Axis
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x).ticks(numberOfTicksOnXAxis));

// add the Y Axis
svg.append("g")
  .call(d3.axisLeft(y).ticks(numberOfTicksOnYAxis));
</script>