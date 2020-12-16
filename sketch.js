var car, wall;
var speed, weight;
var carImage;

function preload(){

 carImage = loadImage("car for gcso.png");



}

function setup() {
  createCanvas(1600,400);
  

speed = random(55, 90)
weight = random(400, 1500)

car = createSprite(50, 200, 50, 50)
wall = createSprite(1500, 200, 60, height/2)

car.velocityX = speed;

  car.addImage(carImage);

}

function draw() {
  background("blue");  
 

if (wall.x-car.x < car.width/2 + wall.width/2){

  car.velocityX=0;

  var deformation = 0.5 * weight * speed * speed / 22500;

  if (deformation > 180){
    wall.shapeColor = color(255,0,0);
  }

  if (deformation < 180 && deformation > 100){

    wall.shapeColor = color(230,230,0);
  }

  if (deformation < 100){

    wall.shapeColor = color(0,255,0);
  }

}




drawSprites();

}