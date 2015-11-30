var grass1;
var grass2;
var grass3;
var grass4;
var grass5;

var lamp1;
var lamp2;
var lamp3;
var lamp4;
var lamp5;

var statue1;
var statue2;

var player;

function setup() {
  createCanvas(650, 750);  // sets up canvas
  strokeWeight(1);
  	rectMode(LEFT);
}


function draw() {
	background(200);
	
	fill(126,211,23);
	grass1 = rect(25, 25, 600, 75);
	grass2 = rect(75, 150, 500, 200);

	grass3 = rect(50, 400, 150, 220);
	grass4 = rect(249, 400, 150, 200);
	grass5 = rect(450, 400, 150, 220);

	fill(150);
	lamp1 = ellipse(60, 660, 30, 30);
	lamp2 = ellipse(192, 700, 30, 30);
	lamp3 = ellipse(325, 720, 30, 30);
	lamp4 = ellipse(458, 700, 30, 30);
	lamp5 = ellipse(590, 660, 30, 30);

	statue1 = ellipse(325, 250, 50, 50);
	statue2 = ellipse(325, 595, 75, 100);

	fill(255,204,51);
	player = ellipse(mouseX, mouseY, 20, 20);

	// if(mouseX>(250-20)&mouseX<(250+20)&
	// 	mouseY>(250-20)&mouseY<(250+20) ){
	// 	fill(255);
	// }else{
	// 	fill(126,211,23);
	// };
};