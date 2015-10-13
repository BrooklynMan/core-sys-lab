function setup(){
  createCanvas(1000,1000);
  strokeWeight(10);
  stroke(0);
}

function touchMoved(){
  line(touchX, touchY, ptouchX, ptouchY);
  return false;
}