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

var person1;
var person2;
var person3;
var person4;
var person5;

var player;

function setup() {
  createCanvas(650, 750); // sets up canvas
  strokeWeight(1);
  rectMode(LEFT);
}


function draw() {
  background(200);

  fill(126, 211, 23);
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

  fill(0, 0, 250);
  person1 = ellipse(35, 120, 20, 20);
  person2 = ellipse(325, 660, 20, 20);
  person3 = ellipse(475, 385, 20, 20);
  person4 = ellipse(100, 640, 20, 20);
  person5 = ellipse(300, 275, 20, 20);
  
  fill(255);
  pLabel1 = text("P", 31, 125);
  pLabel2 = text("P", 321, 665);
  pLabel3 = text("P", 471, 390);
  pLabel4 = text("P", 96, 645);
  pLabel5 = text("P", 296, 280);

  distance1 = dist(35, 120, mouseX, mouseY);
  distance2 = dist(325, 660, mouseX, mouseY);
  distance3 = dist(475, 385, mouseX, mouseY);
  distance4 = dist(100, 640, mouseX, mouseY);
  distance5 = dist(300, 275, mouseX, mouseY);

  fill(255, 204, 51);
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
    text("Get a job!", 320, 640);
    fill(0);
    text("Can you help me out?", mouseX + 15, mouseY);
  } else if (distance3 <= 20) {
    textSize(14);
    fill(0,0,250);
    text("**Ignores you**", 470, 365);
    fill(0);
    text("Can you help me with", mouseX - 15, mouseY + 25);
    text("some money for some food?", mouseX - 15, mouseY + 35);
  } else if (distance4 <= 20) {
    textSize(14);
    fill(0,0,250);
    text("Ugh! You stink! Leave me alone!", 95, 620);
    fill(0);
    text("Hey, buddy, help a guy out?", mouseX + 15, mouseY);
  } else if (distance5 <= 20) {
    textSize(14);
    fill(0,0,250);
    text("Eek! Police!", 260, 260);
    fill(0);
    text("Hey, miss, could you help me out with some change?", mouseX - 15, mouseY + 25);
  } else {
    text("", 30, 100);
  }
};