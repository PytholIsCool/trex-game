var trex,trexrun
var edges
var ground
  function preload(){
trexrun=loadAnimation("trex1.png","trex2.png","trex3.png")
  }
  function setup(){
createCanvas(600,200)
trex=createSprite(50,160,20,50)
edges = createEdgeSprites()
trex.addAnimation("running",trexrun)
trex.scale = 0.4
ground=createSprite(200,180,400,20)
}
  function draw(){
background("white")

if(keyDown("space")){
trex.velocityY = -10
}
trex.velocityY = trex.velocityY +0.8
trex.collide(ground)
ground.velocityX = -2
drawSprites()
  }