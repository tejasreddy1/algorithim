var rectangle,rectangle1



function setup() {
  createCanvas(800,400);
  rectangle=createSprite(400, 200, 70, 50);
  rectangle.shapeColor="green";
  rectangle1=createSprite(600,200,70,50);
  rectangle1.shapeColor="green";
}

function draw() {
  background("black");  

rectangle1.x=World.mouseX;
rectangle1.y=World.mouseY;
if(rectangle1.x-rectangle.x<rectangle1.width/2+rectangle.width/2 &&
  rectangle.x-rectangle1.x<rectangle1.width/2+rectangle.width/2 &&
  rectangle1.y-rectangle.y<rectangle1.height/2+rectangle.height/2 &&
  rectangle.y-rectangle1.y<rectangle1.height/2+rectangle.height/2){
  rectangle.shapeColor="blue";
  rectangle1.shapeColor="blue";
}
else{rectangle.shapeColor="green"; 
    rectangle1.shapeColor="green";
}
  drawSprites();
}