const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(200,450,70);
	ground = new Ground(600,height,1200,20);

	redBox1 = new Dustbin(870, 615, 140, 70);

	redBox2 = new Dustbin(800, 610, 30, 140);

	redBox3 = new Dustbin(950, 610, 30, 140);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paper.display();
  ground.display();

  redBox1.display();
  redBox2.display();
  redBox3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-125});

  }
}
