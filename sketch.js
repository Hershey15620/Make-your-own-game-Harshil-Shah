const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var Gpobj, soccer,groundObject, backGround
var world, engine;

function preload(){
backGround=loadImage("Images/background.jpg")
sound= loadSound("3-1-10030.mp3");

}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	GpObj=new GoalPost(1200,610);
	soccer=new Ball(200,665);
	groundObject=new Ground(700,690,width,40);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}



function draw() {
  background(backGround);
 
  GpObj.display();
  soccer.display();
  groundObject.display();
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(soccer.body,soccer.body.position,{x:1200,y:610});
		//Matter.Body.setStatic(soccer.body, {isStatic:true})
		playSound()
  	}
}

function MousePressed(){
	
		//Matter.Body.setPosition(soccer.body, {x:200,y:665})
		
	}
