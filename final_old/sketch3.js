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
	background(126,211,23);
	
	fill(200);
	block1 = rect(350, 75, 350, 75);
	block2 = rect(350, 250, 350, 200);
	block3 = rect(213, 500, 75, 200);
	block4 = rect(352, 500, 75, 200);
	block5 = rect(487, 500, 75, 200);
	circle1 = ellipse(212, 670, 50, 50);
	circle2 = ellipse(350, 700, 50, 50);
	circle3 = ellipse(490, 670, 50, 50);

	player = ellipse(mouseX, mouseY, 20, 20);

	// if(mouseX>(250-20)&mouseX<(250+20)&
	// 	mouseY>(250-20)&mouseY<(250+20) ){
	// 	fill(255);
	// }else{
	// 	fill(126,211,23);
	// };
};