
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render; 

var ground;
var Dust;
var Zone1 , Zone2 , Zone3;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255,255,0);


	//Create the Bodies Here.
   ground = Bodies.rectangle(width/2,650,800,20,{isStatic:true});
   fill("yellow");
   World.add(world,ground);

   

   Dust = new paper(200,450,40);

	

	Zone1 = new Dustbin(298+850,605,20,100);
	Zone2 = new Dustbin(483+850,605,20,100);
	Zone3 = new Dustbin(390+850,650,200,20);
  

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width:1200,
			height:700,
			wireframes: false
		}
	});
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);
	
	keyPressed();
	drawSprites();
	


	Dust.display();
	Zone1.display();
	Zone2.display();
	Zone3.display();
	
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(Dust.body,Dust.body.position,{x:85,y:-85});
  
	}
}
