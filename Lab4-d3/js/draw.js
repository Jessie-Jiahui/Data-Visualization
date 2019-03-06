var data = []; // the variable that holds the data from csv file
var category_colors = {
    "clothing, beauty, & fashion": "#5B7BE9",
    "computers & internet": "#E0D22E",
    "education": "#2CCEF6",
    "food & drink": "#FB7F23",
    "grab bag": "#D63CA3",
    "health & fitness": "#c38014",
    "home & garden": "#E24062",
    "human relations": "#5BB923",
    "law & government": "#555",
    "media & arts": "#B190D0",
    "pets & animals": "#bcc832",
    "religion & philosophy": "#ee7b9c",
    "science & nature": "#f299b3",
    "shopping": "#01d99f",
    "society & culture": "#177d62",
    "sports, hobbies, & recreation": "#a16c2f",
    "technology": "#a2262a",
    "travel & transportation": "#f29a76",
    "work & money": "#88a8b9",
    "writing & language": "#a46067"
}; // JSON object with colors assigned to each category.

$(document).ready(function () {
    loadData();
});


function loadData() {
    d3.csv("data/data.csv", (d) => {
        data = d;
        data.forEach((item) => {
            item.n = parseInt(item.n);
        });
        visualizeBarChart(groupDataByYear());

        visualizeSmallMultipleBarChart(groupDataByCategory());

        visualizeOneCategoryChart(groupDataByCategory()[0]);
    });
}

function groupDataByCategory() {
    var groupedData = d3.nest()
        .key((d) => d.category)
        .entries(data);
    return groupedData;
}

function groupDataByYear() {
    var groupedData = d3.nest()
        .key((d) => d.year)
        .rollup((v) => d3.sum(v, (d) => d.n))
        .entries(data);
    return groupedData;
}

function groupDataByYearMean() {
    var groupedData = d3.nest()
        .key((d) => d.year)
        .rollup((v) => d3.mean(v, (d) => d.n))
        .entries(data);
    return groupedData;
}


function visualizeBarChart(dataitems) {
    // code for Q4 goes here
    // set the dimensions and margins of the graph
    var margin = {top: 20, right: 20, bottom: 30, left: 60}
    var width = 940 - margin.left - margin.right;
    var height = 500 - margin.top - margin.bottom;

    // code for Q5 goes here
    var x = d3.scaleBand()
        .domain(dataitems.map((d) => d.key)) // x to be the key of data
        .range([0, width])
        .padding(0.1);

    // code for Q6 goes here
    var y = d3.scaleLinear()
        .domain([0, d3.max(dataitems, (d) => d.value)]) //  define the y-scale using the maximum n value.
        .range([height, 0]);

    // code for Q7 goes here
    var svg = d3.select("#chart1").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // code for Q8 goes here
    svg.selectAll(".bar")  // select all gonna to create bar class stuffs
        .data(dataitems)
        .enter()
        .append("rect") // create 'rect' tags
        .attr("class", "bar") // define 
        .attr("fill", "#E0D22E")
        .attr("x", (d) => x(d.key))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y(d.value))
        .attr("height", (d) => height - y(d.value));

    // code for Q9 goes here
    // add the x axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // add the y axis
    svg.append("g")
        .call(d3.axisLeft(y));   
}

function visualizeSmallMultipleBarChart(dataitems) {

    // code for Q13 goes here
    // define a margin and dimensions for each small SVG
    var margin = {top:0, right:10, bottom:40, left:40};
    var width = 280 - margin.left - margin.right;
    var height = 150 - margin.top - margin.bottom;

    // code for Q14.1 goes here
    // Define the x scale
    var x = d3.scaleBand()
        .domain(dataitems[0].values.map((d) => d.year))
        .range([0, width])
        .padding(0.1);

    // code for Q14.2 goes here
    // Define the x scale
    var y = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => d.n)]) // data, not dataitems, to make sure each set has the same y scale, which is the maximum value in data
        .range([height, 0]);

    // code for Q15 goes here
    dataitems.forEach((v, i) => {    
        // code for Q16 goes here
        // draw the div wrapper for each chart
        var div = d3.select("#chart2").append(div)
            .attr("id", "holder" + v.key)
            .attr("class", "chartholder");
       
        // code for Q17 goes here
        // add header
        div.append("h6").html(v.key);

        // code for Q18 goes here
        var svg = div.append("svg")
            .attr("class", "categoryBar")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // code for Q19 goes here
        svg.selectAll(".bar")  // select all gonna to create bar class stuffs
            .data(v.values)
            .enter()
            .append("rect") // create 'rect' tags
            .attr("class", "bar") // define 
            .attr("fill", (d) => category_colors[v.key]) // check the top color array
            .attr("x", (d) => x(d.year))
            .attr("width", x.bandwidth())
            .attr("y", (d) => y(d.n))
            .attr("height", (d) => height - y(d.n));

        // code for Q20 goes here
        // add the y axis 
        svg.append("g")
            .call(d3.axisLeft(y).ticks(5)); // limit #ticks to 5

        // code for Q21 goes here
        // add the x axis
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "- .8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)")
    })
}


// CODE FOR SECTION 2 GOES HERE
// see instructions

// set the dimensions and margins of the graph
var c_margin = { top: 20, right: 20, bottom: 30, left: 60 }
var c_width = 940 - c_margin.left - c_margin.right;
var c_height = 500 - c_margin.top - c_margin.bottom;

function visualizeOneCategoryChart(dataitems) { 
    // create and draw chart (DONT CHANGE)
    createOneCategoryChart(dataitems)
    drawOneCategoryChart(dataitems)
}

function createOneCategoryChart(dataitems) {    
    // append an svg and g element to the #chart3 element
    var svg = d3.select("#chart3").append("svg")
        .attr("width", c_width + c_margin.left + c_margin.right)
        .attr("height", c_height + c_margin.top + c_margin.bottom)
        .append("g")
        .attr("transform", "translate(" + c_margin.left + "," + c_margin.top + ")");
}

//default transition settings    
t = d3.transition()        
	  .duration(2000)

function drawOneCategoryChart(dataitems) { 
    // select the already-created svg group element (DONT CHANGE)
    // console.log(dataitems);
    var svg = d3.select("#chart3 > svg > g");

    // set the title of the chart (the h6 element in the #chart3 element)
    // to the name of this category
    d3.select("#chart3 h6").html(dataitems.key);

    // create an x axis scale
    var x = d3.scaleBand()
        .domain(dataitems.values.map((d) => d.year)) // x to be the key of data
        .range([0, c_width])
        .padding(0.1);

    // create a y axis scale
    var y = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => d.n)]) //  define the y-scale using the maximum n value.
        .range([c_height, 0]);

    // // create / update the bars
    // svg.selectAll(".bar")  
    //     .data(dataitems.values)
    //     .enter()
    //     .append("rect") 
    //     .attr("class", "bar") 
    //     .attr("fill", (d) => category_colors[dataitems.key])
    //     .attr("x", (d) => x(d.year))
    //     .attr("width", x.bandwidth())
    //     .attr("y", (d) => y(d.n))
    //     .attr("height", (d) => c_height - y(d.n));

    // join
    var bar = svg.selectAll(".bar")  // select all gonna to create bar class stuffs
        .data(dataitems.values);

    //EXIT (elements to be removed)        
    bar.exit()  
    	.transition(t)   //transition         
    	.attr("fill", (d) => category_colors[dataitems.key])  //transition          
    	.attr("width", 0)    //transition        
        .remove();

    // update
    bar.transition(t) //transition            
    	.attr("fill", (d) => category_colors[dataitems.key])  //transition
    	.attr("x", (d) => x(d.year))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y(d.n))
        .attr("height", (d) => c_height - y(d.n));

    // enter
    bar.enter()
        .append("rect") // create 'rect' tags
        .attr("class", "bar") // define 
        .attr("x", (d) => x(d.year))
        .attr("width", 0)   //transition       
        .transition(t)    //transition        
        .attr("fill", (d) => category_colors[dataitems.key])  //transition
        .attr("width", x.bandwidth())
        .attr("y", (d) => y(d.n))
        .attr("height", (d) => c_height - y(d.n));


    // add the x Axis
    svg.append("g")
        .attr("transform", "translate(0," + c_height + ")")
        .call(d3.axisBottom(x));

    // add the y Axis
    svg.append("g")
        .call(d3.axisLeft(y)); 
}
