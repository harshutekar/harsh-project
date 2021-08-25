var runnerImage
var runner
var coinImage
var coin
var pathImage
var path 
var energyDrinkImage
var energyDrink
var powerImage
var power
var bombImage
var bomb 

function preload(){
  //pre-load images
runnerImage = loadAnimation("Runner-1.png","Runner-2.png");
coinImage = loadImage("coin.png");
bombImage = loadImage("bomb.png");
energyDrinkImage = loadImage("energyDrink.png");
pathImage = loadImage("path.png");
powerImage = loadImage("power.png");
}

function setup(){
  createCanvas(400,400);
  //moving background
path = createSprite(200,200)
path.addImage(pathImage);
path.velocityY=4;

path.scale=1.2;
runner=createSprite("200,250,10,20");
runner.addAnimation("runnerrunning",runnerImage)


//adding scale position to the runner
runner.scale = 0.10
runner.x = 200
runner.y = 200
}

function draw() {
  background("black");
// reset the background
if (path.y>400) {
  path.y =  height/2;
}
drawSprites()
}


