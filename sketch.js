var box;

function setup() {
  createCanvas(750 ,750);
  box = createSprite(500,500,100,100);
}


function draw() 
{
  background("blue");

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }
  if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x = box.position.x -5;
  }
  if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y -5;
  }
  if (keyIsDown(DOWN_ARROW))
  {
    box.position.y = box.position.y +5;
  }

  drawSprites();
}




