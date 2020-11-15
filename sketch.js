const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;

var paperball,dustside1,dustside2,dustside3,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(3000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new ground(width/2,490,width,20);
	paperball=new paper(30,165,30,30);
	//dustside1=new dustbin(675,455,10,50);
	dustside2=new dustbin(1155,475,100,10);
	//dustside3=new dustbin(775,455,10,50);

	/*var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 600,
		  height: 200,
		  wireframes: false
		}
	  });*/


	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 // keyPressed();

  paperball.display();
  //dustside1.display();
  dustside2.display();
  //dustside3.display();
  ground1.display();
  drawSprites();

  
	
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:25,y:-40})
	}
	
	
	
}




