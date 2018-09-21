function setup() {
  createCanvas(400, 400);
}

var x = 20;
var changeInX = 20;

var y = 20;
var changeInY = 20;

function draw() {
  background(220);
  
  ellipse(x, y, 100);
	fill(25, 20, 200, 200);
	
	ellipse(x, 200, 50);
	fill(305, 20, 200, 200);
  
  x = x + changeInX;
	y = y + changeInY;
  
  if (x > width) {
    changeInX = -20;
  }
  
  if (x < 0) {
    changeInX = 20;
  }
	
	  if (y > width) {
    changeInY = -40;
  }
  
  if (y < 0) {
    changeInY = 20;
  }
}
