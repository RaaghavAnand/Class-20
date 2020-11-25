
var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(300, 200, 80, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  fixedRect.velocityX=4
  movingRect=createSprite(600,200,50,80);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  movingRect.velocityX=-4;
}

function draw() {
  background(55,0,25);  //(r,g,b)  (0-255,0-255,0-255)
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;

  //detecting collision in horizontal direction
  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2 ){
      fixedRect.velocityX=fixedRect.velocityX*(-1);
      movingRect.velocityX=movingRect.velocityX*(-1);
    }

     //detecting collision in vertical direction
    if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y <  movingRect.height/2 + fixedRect.height/2){
    

  }
  drawSprites();
}