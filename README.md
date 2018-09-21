# hw2
Comp Pract HW2 (here is also the HSB/RGB assignment:)

function setup() {
  createCanvas(400, 400);
  background(220);
  // if HSB with H range 0-400, S range 0-400, B range 0-100, how would that translate 
	// to RGB? -> RGB ranges 0-255!
  colorMode(RGB, 255, 255, 255);
}

function draw() {
  let cat = random(width);
  let dog = random(height);
  fill(cat, dog, 100);
  noStroke()
  ellipse(cat, dog, 20);
}

"Assignment: Rename the x and y variables h and s (for "hue" and "saturation"). In your README.me file, answer: what changes in the animation? What if you change them to nonsense names, like "dog" and "cat"?"

Nothng changed because we defined those variables to be the height and width, meaning those instances of the words in the code will reflect that they already have an assigned meaning.
