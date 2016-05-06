// Config
var width = $('.canvas').width(),
    height = $('.canvas').height(),
    backgroundColor = 'hsl(253, 100%, 6%)',
    midX = width*0.5,
    midY = height*0.5,
    circleColor = 'hsl(30, 100%, 38%)',
    circleData = [];

d3.select('body').style('background-color', backgroundColor);

// Generate circles data
for (var i = 0; i < 92; i++) {
    circleData.push({'centerX': midX, 'randomX': midX*(0.1 + 1.8*Math.random()), 'centerY': midY, 'randomY':  midY*(0.1 + 1.8*Math.random()),'smallRadius': 50*Math.pow(0.99, i), 'largeRadius': 250*Math.pow(0.9, i), 'color': circleColor});
};

var canvas = d3.select('.canvas').append('svg')
            .attr('width',width)
            .attr('height',height)
            .style('background-color',backgroundColor);

var circles = canvas.selectAll('circle')
                .data(circleData)
                .enter()
                .append('circle')
                .attr('cx',function (d) {return d.randomX})
                .attr('cy',function (d) {return d.centerY})
                .attr('r',function (d) {return d.smallRadius;})
                .style('fill',function (d) {return d.color;})
                .attr('opacity', 0.1);

function animate() {
    // Gather into heart shape
    canvas.selectAll('circle')
    .transition()
    .delay(function (d, i) {return Math.pow(i, 1.1) * 10})
    .duration(700)
    .attr('r',  function (d, i) {return i <= 46 ? 30 : 20})
    .attr('cx', function (d, i) {var radius = i <= 46 ? 13 : 13 + (-1 + 2*Math.random()); return d.centerX + radius*16*Math.pow(Math.sin(i),3)})
    .attr('cy', function (d, i) {var radius = i <= 46 ? 13 : 13 + (-1 + 2*Math.random()); return d.centerY - radius*(13*Math.cos(i) - 5*Math.cos(2*i) - 2*Math.cos(3*i) - Math.cos(4*i))});

    // First bump out
    canvas.selectAll('circle')
    .transition()
    .delay(2150)
    .duration(200)
    .attr('cx', function (d, i) {var radius = i <= 46 ? 20 : 20 + (-1 + 2*Math.random()); return d.centerX + radius*16*Math.pow(Math.sin(i),3)})
    .attr('cy', function (d, i) {var radius = i <= 46 ? 20 : 20 + (-1 + 2*Math.random()); return d.centerY - radius*(13*Math.cos(i) - 5*Math.cos(2*i) - 2*Math.cos(3*i) - Math.cos(4*i))});

    // First bump in
    canvas.selectAll('circle')
    .transition()
    .delay(2350)
    .duration(300)
    .ease('bounce')
    .attr('cx', function (d, i) {var radius = i <= 46 ? 13 : 13 + (-1 + 2*Math.random()); return d.centerX + radius*16*Math.pow(Math.sin(i),3)})
    .attr('cy', function (d, i) {var radius = i <= 46 ? 13 : 13 + (-1 + 2*Math.random()); return d.centerY - radius*(13*Math.cos(i) - 5*Math.cos(2*i) - 2*Math.cos(3*i) - Math.cos(4*i))});

    // Second bump out
    canvas.selectAll('circle')
    .transition()
    .delay(2850)
    .duration(200)
    .attr('cx', function (d, i) {var radius = i <= 46 ? 20 : 20 + (-1 + 2*Math.random()); return d.centerX + radius*16*Math.pow(Math.sin(i),3)})
    .attr('cy', function (d, i) {var radius = i <= 46 ? 20 : 20 + (-1 + 2*Math.random()); return d.centerY - radius*(13*Math.cos(i) - 5*Math.cos(2*i) - 2*Math.cos(3*i) - Math.cos(4*i))});

    // Second bump in
    canvas.selectAll('circle')
    .transition()
    .delay(3150)
    .duration(300)
    .ease('bounce')
    .attr('cx', function (d, i) {var radius = i <= 46 ? 13 : 13 + (-1 + 2*Math.random()); return d.centerX + radius*16*Math.pow(Math.sin(i),3)})
    .attr('cy', function (d, i) {var radius = i <= 46 ? 13 : 13 + (-1 + 2*Math.random()); return d.centerY - radius*(13*Math.cos(i) - 5*Math.cos(2*i) - 2*Math.cos(3*i) - Math.cos(4*i))});
    
    //Spread out again
    canvas.selectAll('circle')
    .transition()
    .delay(function (d, i) {return 3900 + Math.pow(i, 1.1) * 10})
    .duration(400)
    .attr('cx', function (d) {return d.randomX})
    .attr('cy', function (d) {return d.centerY})
    .attr('r', function (d) {return d.smallRadius});
};

setTimeout(animate, 500);
setInterval(animate, 6500);
