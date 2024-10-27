let startAngle = 0;
let deltaAngle = 130;
let canvas; 
let x = 0;
let xspeed = 3.5
let a = 0;
let aspeed = 2.5
let b = 0;
let bspeed = 3
let c = 0;
let cspeed = 1.5


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  canvas.position(0,0)
  canvas.style("z-index:-1")
  title = select("#id1");
  page1 = select("#page1")
  page2 = select("#page2")
  page3 = select("#page3")
  
}

function draw() {
  background(250, 220, 120, 10)
  let angle = startAngle;
  for (let y = 0; y <= height; y += 15) {
    let x = map(sin(angle), -1, 1, 0, width);
    noStroke()
    fill(200, 80, 240);
    rect(x, y, 11, 60);
    
    angle += deltaAngle;
  }
  
  
  startAngle += 0.5;
 
  title.position(x, 10)
  x += xspeed
  if (x > width - 260 || x < 0) {
    xspeed = -xspeed;
}
  page1.position(a, height/4)
  push()
  fill(252, 151, 194)
  noStroke()
  let recta = rect(a, height/4.6, 95,70)
  pop()
  
  a += aspeed
  if (a > width - 100 || a < 0) {
    aspeed = -aspeed;
}
  page2.position(b, height/2.25)
  push()
  fill(252, 121, 187)
  noStroke()
  let rectb = rect(b, height/2.42, 95,70)
  pop()
  b += bspeed
  if (b > width - 100 || b < 0) {
    bspeed = -bspeed;
}
  page3.position(c, height/1.25)
  push()
  fill(255, 163, 206)
  noStroke()
  let rectc = rect(c, height/1.3, 95,70)
  pop()
  c += cspeed
  if (c > width - 100 || c < 0) {
    cspeed = -cspeed;
}
}

function mouseDragged() {
  let angle = startAngle;
  for (let y = 0; y <= height; y += 15) {
    let x = map(sin(angle), -1, 1, 0, width);
    noStroke()
    fill(200, 80, 240);
    rect(x, y, 15, 60);
    angle += deltaAngle;
  }
  startAngle += 1;
  
}
function windowResized() {

  resizeCanvas(windowWidth, windowHeight); 

} 
