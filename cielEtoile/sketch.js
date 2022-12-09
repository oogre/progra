let bg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createGraphics(width, height);
  for(let i = 0 ; i < bg.height ; i ++){
    bg.fill(
      lerp(13, 90, i/bg.height), 
      lerp(5, 60, i/bg.height), 
      lerp(45, 55, i/bg.height)
      );
    bg.noStroke();
    bg.ellipse(bg.width/2, bg.height, (bg.height-i) * 2.5, (bg.height-i) * 2.5);
  }
}

function draw() {
  image(bg, 0, 0, width, height);
  
  
  let counter = 0;
  while(counter < 1000){
    stroke(noise(4, counter)*255, 128);
    mouliStar(
      lerp(-width/2, 3 * width/2, noise(1, counter)), 
      lerp(-height/2, 3 * height/2, noise(2, counter)), 
      noise(3, counter) * 5, 
      noise(4, counter) * 5);
    counter ++;
  }
}

function mouliStar(x, y, w, h){
  push();
  translate(x, y);
  if(frameCount%10==floor(random(5))){
    line(-w/2, 0, w/2, 0);
  }else{
    line(0, -h/2, 0, h/2);
  }
  pop();
}



