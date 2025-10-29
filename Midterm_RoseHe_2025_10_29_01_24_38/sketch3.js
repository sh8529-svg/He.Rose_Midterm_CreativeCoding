let col1,col2;
let x=0,y=0,z=0;

function setup(){
  createCanvas(windowWidth,windowHeight);
  col1=color('#dccef3');
  col2=color('#E5F3CE');
  angleMode(DEGREES);
}

function draw(){
  background(col2);
  fill(col1,20);
  ellipse(width/2,height/2,300,300);
  fill(0);
  ellipse(width/2,height/2,20,20);
  translate(width/2,height/2);
  x+=0.1; y+=0.5; z+=1.5;
  push(); rotate(x); stroke(0); strokeWeight(9); line(0,0,60,0); pop();
  push(); rotate(y); stroke(0); strokeWeight(6); line(0,0,100,0); pop();
  push(); rotate(z); stroke(0); strokeWeight(3); line(0,0,150,0); pop();
}
