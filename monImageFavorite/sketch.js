let myFav;
let myGrey;


function preload(){
  myFav = loadImage("Photo-0064.jpg");
}
let pix;
function setup() {
  createCanvas(windowWidth, windowHeight);
  myGrey = createGraphics(myFav.width, myFav.height);
  myFav.loadPixels();
  pix = myFav.pixels.reduce((acc, val, key)=>{
    if(key%4 ==0){
      acc.push([val])
    }else{
      acc[acc.length-1].push(val)
    }
    return acc;
  }, [])
  let id = 0;

  // pix = pix.sort((a, b)=> random()<0.5);
  // pix = pix.filter(a => random()<0.5);
  // pix = pix.map(a => random()<0.1?a : [0, 0, 0, 0]);
  // pix.reverse();

  for(const [R, G, B, A] of pix){
    let x = id % myFav.width;
    let y = floor(id / myFav.width);
    
    myGrey.stroke(color(R, G, B, A));
    myGrey.noFill();
    myGrey.point(x>>3, y>>3);
    id++;
  }
}

function draw() {
  background(255, 0, 0);
  // if(
  //   mouseX > 0 && mouseX < 200 &&
  //   mouseY > 0 && mouseY < 300
  // ){
  //   image(myFav, 0, 0, 200, 300);  
  // }else{
  scale(4)
  image(myGrey, 0, 0);  
  // }
}


