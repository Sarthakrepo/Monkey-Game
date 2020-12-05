var survivalTime = 0;
var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var ground

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 450);

  monkey = createSprite(50, 360, 20, 20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.09;

  ground = createSprite(300, 390, 1000, 8);


  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("lightgray");
  monkey.collide(ground);

  if (keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY += 0.8;

  textSize(16);
  text("Score:" + score, 535, 50);

  if (monkey.isTouching(FoodGroup)) {
    FoodGroup.destroyEach();
    score = score + 1;
  }
  if (monkey.isTouching(obstacleGroup)) {

    obstacleGroup.destroyEach();
    monkey.destroy();
    textSize(20);
    text("game Over",300,225);
 }



  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate())
  text("survival Time:" + survivalTime, 100, 50);

  obs();
  bananna();
  drawSprites();
}

function bananna() {

  if (frameCount % 80 === 0) {
    banana = createSprite(600, 200, 20, 20);
    banana.velocityX = -5;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(120, 300));
    banana.lifetime = 120;
    FoodGroup.add(banana);
  }
}

function obs() {

  if (frameCount % 300 === 0) {

    obstacle = createSprite(600, 367, 20, 20);
    obstacle.velocityX = -5;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 120;
    obstacleGroup.add(obstacle);
  }

}