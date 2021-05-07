var fixedrectangle,movingrectangle;

function setup() {
  createCanvas(800,400);
  fixedrectangle=createSprite(400, 200, 80, 80);//25
  fixedrectangle.shapeColor="green"
  movingrectangle=createSprite(300,250,80,60);  //25
  movingrectangle.shapeColor="green"
}

function draw() {
  background(0); 
  
  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;
  
console.log(movingrectangle.x-fixedrectangle.x)



if(movingrectangle.x-fixedrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&
  fixedrectangle.x-movingrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&
  movingrectangle.y-fixedrectangle.y<fixedrectangle.height/2+movingrectangle.height/2&&
  fixedrectangle.y-movingrectangle.y<fixedrectangle.height/2+movingrectangle.height/2
  ){
  fixedrectangle.shapeColor="red"
  movingrectangle.shapeColor="red"
}
else{
  fixedrectangle.shapeColor="green"
  movingrectangle.shapeColor="green"
}

  drawSprites();
}