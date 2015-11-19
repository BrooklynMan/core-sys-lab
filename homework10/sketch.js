var back;
var r;
var b;
var s;

function setup() {
	createCanvas(600, 500);  // sets up canvas

	back=0;
	b=200;
	r=255;  
	s = "Hello! My name is Adam!";

	strokeWeight(2);
	rectMode(CENTER);
}

function draw() {
	background(back);

	fill(r,200,6);
	ellipse(200, 250, 50, 50);

	fill(255,100,b);
	ellipse(400, 250, 50, 50);

	fill(255);
	ellipse(mouseX, mouseY, 50, 50);

	textSize(12);
	fill(255);
	text(s, 200, 50, 250, 100); // Text wraps within text box

	distanceA = dist(200, 250, mouseX, mouseY);
	distanceB = dist(400, 250, mouseX, mouseY);

	// print (distanceA, distanceB);


	if(distanceA<=50){
		r = random(255);
		back=150;
		print ("You bumped the left object!");
		bumpLeft();
	}else if(distanceB<=50){
		b = random(255);
		back=150;
		print ("You bumped the right object!");
		bumpRight();
	}else{
		back=0;
	}
}
