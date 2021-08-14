var snowflake,snowflakeimg
var bgimg

function preload(){

  snowflakeimg=loadImage("snow4.webp")
  bgimg=loadImage("snow2.jpg")

}

function setup() {
  createCanvas(1500,600);
  
}

function draw() {
  background(bgimg);  
  createSnowflake()
  drawSprites();
  
}

function createSnowflake(){
if(frameCount%10===0){
  snowflake=createSprite(random(0,1499),0,50,50)
  snowflake.velocityX=-2
  snowflake.velocityY=2
  snowflake.addImage(snowflakeimg)
  snowflake.scale=0.15
}

}

