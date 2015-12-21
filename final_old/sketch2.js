var block1;
var block2;
var block3;
var block4;
var block5;

var circle1;
var circle2;
var circle3;

var person1;
var person2;
var person3;
var person4;
var person5;

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

  fill(0, 0, 250);
  person1 = ellipse(35, 120, 20, 20);
  person2 = ellipse(720, 260, 20, 20);
  person3 = ellipse(175, 385, 20, 20);
  person4 = ellipse(515, 75, 20, 20);
  person5 = ellipse(585, 375, 20, 20);
  
  fill(255);
  pLabel1 = text("P", 31, 125);
  pLabel2 = text("P", 716, 265);
  pLabel3 = text("P", 171, 390);
  pLabel4 = text("P", 511, 80);
  pLabal5 = text("P", 581, 380);

  distance1 = dist(30, 120, mouseX, mouseY);
  distance2 = dist(720, 260, mouseX, mouseY);
  distance3 = dist(175, 385, mouseX, mouseY);
  distance4 = dist(515, 75, mouseX, mouseY);
  distance5 = dist(585, 375, mouseX, mouseY);
  
	fill(255,204,51);
	player = ellipse(mouseX, mouseY, 20, 20);

  if (distance1 <= 20) {
    textSize(14);
    fill(0,0,250);
    text("Go away!", 30, 100);
    fill(0);
    text("Can you spare some change?", mouseX + 15, mouseY + 15);
  } else if (distance2 <= 20) {
    textSize(14);
    fill(0,0,250);
    text("Get a job!", 700, 240);
    fill(0);
    text("Can you help me out?", mouseX + 15, mouseY);
  } else if (distance3 <= 20) {
    textSize(14);
    fill(0,0,250);
    text("**Ignores you**", 155, 365);
    fill(0);
    text("Can you help me with", mouseX - 15, mouseY + 25);
    text("some money for some food?", mouseX - 15, mouseY + 35);
  } else if (distance4 <= 20) {
    textSize(14);
    fill(0,0,250);
    text("Ugh! You stink! Leave me alone!", 495, 55);
    fill(0);
    text("Hey, buddy, help a guy out?", mouseX + 15, mouseY);
  } else if (distance5 <= 20) {
    textSize(14);
    fill(0,0,250);
    text("Eek! Police!", 565, 355);
    fill(0);
    text("Hey, miss, could you help me out with some change?", mouseX - 15, mouseY + 25);
  } else {
    text("", 30, 100);
  }
};
