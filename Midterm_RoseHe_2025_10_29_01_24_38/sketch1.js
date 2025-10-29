let x,y
let z,h
let col1,col2

function setup() {
  createCanvas(windowWidth, windowHeight);
  x=windowWidth/2
  y=windowHeight/2
  
  col1=color('#cbe0fb')
  col2=color('#FFFAF0')
}

function draw() {
  background(col2);
  
  
  x=lerp(x,mouseX,0.01)
  y=lerp(y,mouseY,0.01)
  
  fill(col1)
  ellipse(x,y,50)
  
  z=lerp(x,mouseX,0.1)
  h=lerp(y,mouseY,0.1)
  ellipse(z,h,20)
  
  
}

function mousePressed(){
  col1=color(random(255),random(255),random(255))
}