// Final project for Adam McBride
// Core: Networks & Systems
// Fall 2015

// variable declarations
var bg;

var point1;
var point2;
var point3;
// var point4;

var distance1;
var distance2;
var distance3;
// var distance4;

function setup() {
    createCanvas(800, 480);
    rectMode(LEFT);

    // load background image
    bg = loadImage("img/slide2.jpg");

    // load popout images
    popImg1 = loadImage("img/popout2-1.jpg");
    popImg2 = loadImage("img/popout2-2.jpg");
    popImg3 = loadImage("img/popout2-3.jpg");
    // popImg4 = loadImage("img/popoutPlaceholder.jpg");
};

function draw() {
    background(bg);

    // drawing the collision points
    noFill();
    point1 = ellipse(51, 147, 33, 33);
    point2 = ellipse(51, 241, 33, 33);
    point3 = ellipse(51, 334, 33, 33);
    // point4 = ellipse(51, 428, 33, 33);

    // defining the distance points
    distance1 = dist(51, 147, mouseX, mouseY);
    distance2 = dist(51, 241, mouseX, mouseY);
    distance3 = dist(51, 334, mouseX, mouseY);
    // distance4 = dist(51, 428, mouseX, mouseY);

    // detecting the collisions
    if (distance1 <= 15) {
        image(popImg1, 85, 20);
    } else if (distance2 <= 15) {
        image(popImg2, 85, 20);
    } else if (distance3 <= 15) {
        image(popImg3, 85, 20);
    } //else if (distance4 <= 15) {
    //     image(popImg4, 85, 20);
    // }
};
