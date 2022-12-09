function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  
  rectMode(CENTER);
  
}

function draw() {
  // put drawing code here
  background(0);
  translate(width/2, height/2);

  push();//recSoleil
  rotate( millis() / 1000 );
  fill(255, 255, 0);
  rect(0, 0, 400, 400);
  pop();

  push();//recTerre
  rotate( millis() / 1500)
  translate(300, 0);
  rotate( millis() / 2000)
  fill(0, 128, 255);
  rect(0, 0, 100, 100);
  //recLune
  // translate(200, 0);
  // rotate( millis() / 4000)
  // fill(128);
  // rect(0, 0, 50, 50);
  pop();



}