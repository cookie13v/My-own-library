
var fixed, moving;
var object1, object2;


function setup() {
  createCanvas(1200,400);

 fixed =  createSprite(100, 200, 100, 50);
 fixed.shapeColor = "green";
 moving = createSprite(1000,200,100,50);
 moving.shapeColor = "green";
 
 object1 =  createSprite(100, 70, 100, 50);
 object1.shapeColor = "red";
 object2 = createSprite(1000,70,100,50);
 object2.shapeColor = "blue";



 object1.velocityX = 3;
 object2.velocityX = -3;
}

function draw() {
  background(150); 
  
  moving.x = World.mouseX;
  moving.y = World.mouseY;


bounce_off (object1,object2);
if (isTouching (moving,fixed)){
  moving.shapeColor = "red";
  fixed.shapeColor = "red";
}
else {
  moving.shapeColor = "green";
  fixed.shapeColor = "green";
}


  drawSprites();
}

