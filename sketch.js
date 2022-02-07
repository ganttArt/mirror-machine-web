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
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}