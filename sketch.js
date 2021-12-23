
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world; 
var court, courtImg;
var playerleft , playerleftImg;
var playerright, playerrightImg;
var rball, lball;


function preload()
{
	courtImg = loadImage("Images/Basketcourt.jpg");
	playerleftImg = loadImage("Images/leftplayer.png");
	playerrightImg = loadImage("Images/rightplayer.png");


}

function setup() {
	createCanvas(1500, 800);
 court = createSprite(750,400);
court.addImage(courtImg);
court.scale= 2.3;

playerleft = createSprite(260,400);
playerleft.addImage(playerleftImg);
playerleft.scale = 0.3;

playerright = createSprite(1240,400);
playerright.addImage(playerrightImg);
playerright.scale = 0.3;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rball = new Ball(1220,365,10);
	lball = new Ball(280,365,10);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  drawSprites();
 rball.display();
 lball.display();
}



