let patatas;

function setup() {
  createCanvas(windowWidth, windowHeight);
  const maxASize = 100;
  patatas = new Array(1)
              .fill(0)
              .map((_, i, {length}) => {
                return new Patata(20, 10, maxASize - (i * maxASize / length));
              });
  background(0);
}

function draw() {
  // fill(0, 255);
  // noStroke();
  translate(frameCount * 0.5, height/2)
  for(const p of patatas){
    p.draw();
  }
}

class Patata{
  constructor(ptLen, id, radius){
    this.id = id;
    this.radius = radius;
    this.pts = new Array(ptLen+3).fill(0).map((_, i) => {
      const a = (TWO_PI / ptLen) * i;
      return [
        cos(a),
        sin(a),
        noise(cos( a ) * 0.5 + 0.5, sin( a ) * 0.5 + 0.5)
      ]
    });
  }

  draw(){
    noFill();
    stroke(255)
    beginShape();
    const t = millis()*0.001;
    for(const [x, y, z] of this.pts){
      curveVertex(
        x * noise(this.id, z, t) * this.radius, 
        y * noise(this.id, z, t) * this.radius, 
      )
    }
    endShape();
  }
}