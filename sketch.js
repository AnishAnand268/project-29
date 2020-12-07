const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;


var ground1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;

function setup() {
  createCanvas(800,800);
  
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(390,238,150,5);  
  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);
  block6 = new Block(360,195,30,40);
  block7 = new Block(390,195,30,40);
  block8 = new Block(420,195,30,40);
  block9 = new Block(390,155,30,40);

  










   Engine.run(engine);


}

function draw() {
background(0)
Engine.update(engine);









 drawSprites();
}