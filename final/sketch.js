var block1;
var block2;
var block3;
var block4;
var block5;

var circle1;
var circle2;
var circle3;

var player;

function setup() {
  createCanvas(650, 750);  // sets up canvas
  strokeWeight(1);
  	rectMode(CENTER);
}


function draw() {
	background(200);
	
	fill(126,211,23);
	block1 = rect(340, 75, 400, 75);
	block2 = rect(340, 250, 400, 200);
	block3 = rect(178, 500, 75, 200);
	block4 = rect(342, 500, 100, 200);
	block5 = rect(502, 500, 75, 200);

	fill(150);
	circle1 = ellipse(178, 670, 50, 50);
	circle2 = ellipse(340, 700, 50, 50);
	circle3 = ellipse(502, 670, 50, 50);

	fill(255,204,51);
	player = ellipse(mouseX, mouseY, 20, 20);

	// if(mouseX>(250-20)&mouseX<(250+20)&
	// 	mouseY>(250-20)&mouseY<(250+20) ){
	// 	fill(255);
	// }else{
	// 	fill(126,211,23);
	// };
};