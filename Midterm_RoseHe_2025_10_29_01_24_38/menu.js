let snake;
let grid = 20;
let w, h;

let food = [
  {pos: null, color: [255,0,0], url: "sketch1.html", label: "Balls"},
  {pos: null, color: [0,255,0], url: "sketch2.html", label: "Snake Game"},
  {pos: null, color: [0,0,255], url: "sketch3.html", label: "Clock"},
 ]

class Snake {
  constructor(){
    this.body = [createVector(floor(w/2), floor(h/2))];
    this.xDirection = 0;
    this.yDirection = 0;
    this.length = 0;
  }

  setDirection(x,y){
    this.xDirection = x;
    this.yDirection = y;
  }

  grow(){
    let head = this.body[this.body.length-1].copy();
    this.length++;
    this.body.push(head);
  }

  update(){
    let head = this.body[this.body.length-1].copy();
    head.x += this.xDirection;
    head.y += this.yDirection;
    this.body.push(head);
    if(this.body.length > this.length+1) this.body.shift();
  }

  endGame(){
    let head = this.body[this.body.length-1];
    if(head.x < 0 || head.x >= w || head.y < 0 || head.y >= h) 
      return true;
    
    for(let i=0;i<this.body.length-1;i++){
    if(this.body[i].x === head.x && this.body[i].y === head.y) 
      return true;
    }
    return false;
  }

  eat(pos){
    let head = this.body[this.body.length-1];
    if(head.x === pos.x && head.y === pos.y){
      this.grow();
      return true;
    }
    return false;
  }

  show(){
    for(let part of this.body){
      fill(0,255,150);
      noStroke();
      rect(part.x, part.y, 1, 1);
    }
  }
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  w = floor(width / grid);
  h = floor(height / grid);
  frameRate(10);

  snake = new Snake();
  initFood();
}

function initFood(){
  for(let f of food){
    f.pos = createVector(floor(random(w)), floor(random(h)));
  }
}

function draw(){
  scale(grid);
  background(0);


  for(let f of food){
    fill(...f.color);
    rect(f.pos.x, f.pos.y, 1, 1);

    if(snake.eat(f.pos)){
      window.location.href = f.url;
    }
  }

  
  resetMatrix(); 
  scale(1);     
  textSize(16);
  noStroke();
  for(let i=0;i<food.length;i++){
    fill(...food[i].color);
    text(food[i].label, 10, 20 + i * 20);
  }

  scale(grid); 
  snake.update();
  snake.show();

  if(snake.endGame()){
    resetMatrix();
    background('#e60005');
    noLoop();
  }
}

function keyPressed(){
  if(keyCode === LEFT_ARROW) snake.setDirection(-1,0);
  if(keyCode === RIGHT_ARROW) snake.setDirection(1,0);
  if(keyCode === UP_ARROW) snake.setDirection(0,-1);
  if(keyCode === DOWN_ARROW) snake.setDirection(0,1);
}

function mousePressed(){
  snake = new Snake();
  initFood();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  w = floor(width / grid);
  h = floor(height / grid);
}

