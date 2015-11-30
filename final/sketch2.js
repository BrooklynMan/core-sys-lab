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
  createCanvas(1000, 450);  // sets up canvas
  strokeWeight(1);
  	rectMode(LEFT);
}


function draw() {
	background(200);
	
	fill(126,211,23);
	block1 = rect(20, 20, 375, 150);
	block2 = rect(605, 20, 375, 150);
	block3 = rect(20, 280, 375, 150);
	block4 = rect(605, 280, 375, 150);

	fill(0,61,245);
	circle1 = ellipse(500, 225, 100, 100);

	fill(150);
	block5 = rect(450, 10, 100, 50);

	fill(255,204,51);
	player = ellipse(mouseX, mouseY, 20, 20);

	// if(mouseX>(250-20)&mouseX<(250+20)&
	// 	mouseY>(250-20)&mouseY<(250+20) ){
	// 	fill(255);
	// }else{
	// 	fill(126,211,23);
	// };
};