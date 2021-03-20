
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var treeImage,boyImage;
var ground;
var boy;
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12,mango13;
var stone; 
var sling1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
   
	

	ground = new Ground(500,600,1000,20)

	tree = new Tree(440,70,550,550); 
	

	boy = new Boy(80,440,200,200);

	mango1 = new Mango(480,220,60);
	mango2 = new Mango(550,220,60);
	mango3 = new Mango(510,300,60);
	mango4 = new Mango(680,280,70);
	mango5 = new Mango(600,280,60);
	mango6 = new Mango(630,210,60);
	mango7 = new Mango(600,150,70);
	mango8 = new Mango(690,100,80);
	mango9 = new Mango(780,110,70);
	mango10 = new Mango(720,200,60);
	mango11 = new Mango(800,200,70);
	mango12 = new Mango(780,300,70);
	mango13 = new Mango(870,250,80);

 
   stone = new Stone(100,470,50)
	

	


	sling1 = new SlingShot(stone.body,{x:120,y:490});

	

	
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange")

 // detectCollision(stone,mango1);
 // detectCollision(stone,mango2);
 // detectCollision(stone,mango3);
 // detectCollision(stone,mango4);
 // detectCollision(stone,mango5);
 // detectCollision(stone,mango6);
  //detectCollision(stone,mango7);
  //detectCollision(stone,mango8); 
 /// detectCollision(stone,mango9);
 /// detectCollision(stone,mango10);
 /// detectCollision(stone,mango11);
  ///detectCollision(stone,mango12);
  ///detectCollision(stone,mango13);

    boy.display();
    tree.display();
    
    ground.display();
    mango1.display();
	mango2.display();
	mango3.display(); 
	mango4.display(); 
	mango5.display(); 
	mango6.display(); 
	mango7.display(); 
	mango8.display(); 
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	mango13.display();
	
	stone.display();
	sling1.display();
	
	keypressed();
  drawSprites();
 
}



function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
	sling1.fly();
}

function detectollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
    stoneBodyPosition = lstone.body.position
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.Y)

	if(distance<=lmango.r+lstone.r){


    Matter.Body.setStatic(lmango.body,false);




	}
}

function keypressed(){
	if(keyDown("space")){

		Matter.Body.setPosition(stone.body,{x:120,y:490})
		sling1.launch(stone.body);


	}
}