let img;

function preload() {
  img = loadImage('assets/OpeningScreen.jpg');
  if (img.height!=displayHeight) {
    img.resize(0, displayHeight);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(img, 0, 0);
}

function draw() {
  background(0);
  image(img, 0, 0);
  mirrorImage(.5);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


//percentageWidth is between 0.05 to 1 for all functions
function mirrorImage(percentageWidth) { 
  background(0);    
  push();
  copy(
    img, 0, 0, int(img.width*percentageWidth), img.height, 
    0, 0, int(img.width*(percentageWidth)), img.height
  ); //left side
  scale(-1, 1);
  translate(int(-img.width*(2*percentageWidth)), 0);
  copy(
    img, 0, 0, int(img.width*percentageWidth), img.height, 
    1, 0, int(img.width*percentageWidth), img.height); //right side
  pop();
}