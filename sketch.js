const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var balls = []
var plinkos = []
var divisions = []
var divisionheight = 200
var ground, division, balls
var ball
var score = 0
var count = 0
var gameState = "start"

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
world = engine.world;

  ground = new Ground(400,595,800,20)
  for (var i = 75;i<= width;i = i+75){
    plinkos.push(new Plinko(i,75))
  
}
 
for (var i = 50;i<= width;i = i+75){
  plinkos.push(new Plinko(i,165))
}
for (var i = 75;i<= width;i = i+75){
  plinkos.push(new Plinko(i,255))
}
for (var i = 50;i<= width;i = i+75){
  plinkos.push(new Plinko(i,345))
}
}

function draw() {
  background(0); 
  textSize(35)
  text("score "+score,20,40)
  fill("white")
  text("500",5,550)
  text("100",80,550)
  text("20",160,550)
  text("300",400,550)
  text("10",320,550)
  text("0",240,550)
  text("1000",480,550)
  Engine.update(engine);
  if (gameState === "end"){
    textSize(100)
    text("Game Over",150,250)
  }

  if (ball!= null){
    ball.display()
    if (ball.body.position.y>760){
      if (ball.body.position.x<300){
        score = score+500
        ball = null
        if (count>=5){
          gameState = "end"
        }
      }
      else if(ball.body.position.x<600 && ball.body.position.x>300){
        score = score+100
        ball = null
        if (count>=5){
          gameState = "end"
        }
      }
      else if(ball.body.position.x<900 && ball.body.position.x>600){
        score = score+200
        ball = null
        if (count>=5){
          gameState = "end"
        }
      }
    }
  }

  for (var i = 0;i< balls.length;i++){
  balls[i].display()
  }
  for (var i = 0;i< plinkos.length;i++){
    plinkos[i].display();
  
}
ground.display();
for (var i = 0;i<width;i=i+80){
divisions.push(new Divisions(i,height-divisionheight/2,10,divisionheight))

}
for (var i = 0;i< divisions.length;i++){
  divisions[i].display();
}
} 
function mousePressed(){
  if (gameState!=="end"){
    count++
    ball = new Ball(mouseX,10,10,10)
  }
}