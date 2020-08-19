
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof1,roof2;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;
    roof1 = new Roof (600,100,600,50);
	bobObject1 = new Bob(400,350,50);
	bobObject2 = new Bob(501,350,50);
	bobObject3 = new Bob(602,350,50);
	bobObject4 = new Bob(703,350,50);
	bobObject5 = new Bob(804,350,50);
	rope1 = new Rope(bobObject1.body,{x:400,y:100});
	rope2 = new Rope(bobObject2.body,{x:501,y:100});
	rope3 = new Rope(bobObject3.body,{x:602,y:100});
	rope4 = new Rope(bobObject4.body,{x:703,y:100});
	rope5 = new Rope(bobObject5.body,{x:804,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position, {x:-475,y:0});
	}
}



