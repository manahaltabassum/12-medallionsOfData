var svg = document.getElementById("svg");
var nor = document.getElementById("nor");
var swed = document.getElementById("swed");

var col = ["gold", "silver", "#966008"];
var c_xpos = [100, 300, 500];
var c_ypos = [300, 300, 300];

var nor_size = [14, 14, 11];
var swed_size = [7,6,1];

var medals = function(country){
    var gold = document.createElementNS("http://www.w3.org/2000/svg","circle");
    svg.appendChild(gold);

    var silver = document.createElementNS("http://www.w3.org/2000/svg","circle");
    svg.appendChild(silver);

    var bronze = document.createElementNS("http://www.w3.org/2000/svg","circle");
    svg.appendChild(bronze);

    var i = 0;
    while ( i < 3 ){
	svg.appendChild(document.createElementNS("http://www.w3.org/2000/svg","text"));
	i++;
    }

    // circle
    cs = d3.selectAll('circle');
    if (country == "nor"){
	cs.data( nor_size ).attr('r', function(d){ return d*5; });
    }
    else{
	cs.data( swed_size ).attr('r', function(d){ return d*5; });
    }
    cs.data( c_xpos ).attr('cx', function(d){ return d; });
    cs.data( c_ypos ).attr('cy', function(d){ return d; });
    cs.data( col ).attr('fill', function(d){ return d; });
    cs.attr('stroke', 'black');

    // text
    var text = d3.selectAll('text');
    text.data( c_xpos ).attr('x', function(d) { return d });
    text.data( c_ypos ).attr('y', function(d) { return d });
    if (country == "nor"){
	text.data( nor_size ).text(function(d) { return d });
    }
    else {
	text.data( swed_size ).text(function(d) { return d });
    }
    text.attr('font-family', 'sans-serif');
    text.attr('fill', 'black');
    text.attr('font-size', '2em');
    
}
