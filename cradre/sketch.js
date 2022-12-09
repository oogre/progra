function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

}

function draw() {
  // put drawing code here
  background(0);

  fill(255);
  rect(
    100, 
    100, 
    width - 2 * 100,
    height - 2 * 100
  );

  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  textSize(8000)
  text("Bonjour", width/2, height/2);
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}




