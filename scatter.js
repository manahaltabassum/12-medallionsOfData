var svg = document.getElementById("svg");

var info =
    {
	firedpeeps:[1,1,1,2,3,0,9,4,3,0,0,2,5,3,6],
	month: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    }
var firedpeeps = [1,1,1,2,3,0,9,4,3,0,0,2,5,3,6];
var month = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];


var yourefired = function(e){

    console.log("hi");
    var cont = d3.select("svg");
    console.log(cont);
    var circles = cont.selectAll("circle").data(info);
    console.log(circles);
    circles.append("circle")
	.attr("cy", function(d) { return d.firedpeeps*50; })
	.attr("cx", function(d) { return d.month*40; })
	.attr("r", 10)
	.attr("fill", "powderblue")
    console.log(circles);

    /*
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
    */
}
svg.addEventListener("click", yourefired);
