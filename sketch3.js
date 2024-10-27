var xLoc;
var xSpeed;
var yLoc;
var ySpeed;
let x = 0;
let y = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  xLoc = random(400);
  yLoc = random(400);
  xSpeed = 2;
  ySpeed = 3;
  sketch3 = select("#sketch3")
  screenthree = select("#screenthree")
  home = select("#home")
}
function draw(){
  background(252, 172, 209)
  
  home.position(10,10)
  screenthree.position(100,100)
  screenthree.size(width-200, height-200)
  sketch3.position(10,50)
  
  if(xLoc > width - 25 || xLoc < 25) { 
    xSpeed = -xSpeed; 
    x--
  }
    
  if(yLoc > height - 25 || yLoc < 25) { 
    ySpeed = -ySpeed;
    y--
		 
  }
  xLoc = xLoc + xSpeed;  
  yLoc = yLoc + ySpeed;
  
  fill(250, 220, 120);
  noStroke()
  ellipse(xLoc, yLoc, 50, 50);

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight); 

} 
