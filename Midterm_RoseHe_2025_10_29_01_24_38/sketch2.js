let snake
let grid=20
let food
let w
let h

class Snake{
  constructor(){
    this.body = []
    this.body[0] = createVector(floor(w/2),floor(h/2))
    
    this.xDirection = 0
    this.yDirection = 0
    
    this.length = 0
  }
  
  setDirection(x,y){
    this.xDirection = x
    this.yDirection = y
  }
  
  grow(){
    let head = this.body[this.body.length-1].copy()
    this.length++
    this.body.push(head)
  }
  
  update(){
    let head = this.body[this.body.length-1].copy()
    head.x += this.xDirection
    head.y += this.yDirection
    
    this.body.push(head)
    if(this.body.length > this.length+1){
      this.body.shift()
    }
  }
  
  endGame(){
    let x = this.body[this.body.length-1].x
    let y = this.body[this.body.length-1].y
    
    if (x>w-1 || x < 0 || y > h - 1 || y < 0) return true
    
    for ( let i = 0; i < this.body.length - 1; i++){
      let part = this.body[i]
      if (part.x == x && part.y == y) return true
    }
    return false
  }
  
  eat(pos){
    let head = this.body[this.body.length-1]
    if (head.x === pos.x && head.y === pos.y){
      this.grow()
      return true
    }
    return false
    }
  
  show(){
    for ( let i = 0; i < this.body.length; i++){
      fill(0,255,150)
      noStroke()
      rect(this.body[i].x, this.body[i].y, 1, 1)
    }
  }
}
function setup() {
  
  createCanvas(600,600);
  
  w = floor(width / grid)
  h = floor(height / grid)
  
  frameRate(10)
  initialGame()
}

function initialGame(){
  snake = new Snake()
  
  foodLocation()
  loop()
}

function foodLocation(){
  let x = floor(random(w))
  let y = floor(random(h))
  food = createVector(x,y)
}

function draw() {

  scale(grid)
  
  background(0);
  
  if (snake.eat(food)){
    foodLocation()
  }
  
  snake.update()
  snake.show()
  
  if(snake.endGame()){
    print("GAME OVER")
    
    background('#e60005')
    
    textSize(45);
    fill(255)
    text('GAME OVER', 50, 50);

    noLoop()
  }
  
  noStroke()
  fill(255,0,0)
  rect(food.x,food.y,1,1)
}

function keyPressed(){
  if(keyCode === LEFT_ARROW)snake.setDirection(-1,0)
  else if(keyCode === RIGHT_ARROW)snake.setDirection(1,0)
  else if(keyCode === DOWN_ARROW)snake.setDirection(0,1)
  else if(keyCode === UP_ARROW)snake.setDirection(0,-1)
  
}

function mousePressed(){
  initialGame()
}