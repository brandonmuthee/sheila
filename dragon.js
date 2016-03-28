var xpos= 650;
var xspeed= 3;
 
function setup(){
 	createCanvas(1500,900);
	
}
function draw(){
	background(220,220,220);
	fill(250,0,0);
	rect(0,200,50,50);
	fill(0,255,0);
	rect(0,700,50,50);
	line(0,255,1500,255);
	line(0,755,1500,755);
	fill(0,0,250);
	rect(1000,150,50,100);
	fill(0,140,230);
	rect(650,650,50,100);

	xpos= xpos+xspeed;
	ellipse(xpos,210,70,70);
	triangle(300,650,250,750,350,750);
}

