const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var Block1,Block2,Block3,Block4,Block5,Block6,Block7,Block8,Block9;
var Slingshot;
var polygon;
var bg = 255;
function preload(){
  backgroundimg();
}
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  // stand  (both)
  stand = new Ground(390,300,220,10);
  stand2 = new Ground(590,235,150,10);

  //blocks on right //
  //level 1st
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level 2nd
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level 3
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //level 4
  block16 = new Block(390,155,30,40);
  

  // Blocks on left//
  // level 1
  Block1 = new Block(530,210,30,40);
  Block2 = new Block(560,210,30,40);
  Block3 = new Block(590,210,30,40);
  Block4 = new Block(620,210,30,40);
  Block5 = new Block(650,210,30,40);
  //level 2
  Block6 = new Block(560,170,30,40);
  Block7 = new Block(590,170,30,40);
  Block8 = new Block(620,170,30,40);
  //level 3
  Block9 = new Block(590,130,30,40);


  //polygon
  var options = {
    restitution : 0.3,
    friction : 0.5,
    density : 1.2
  }
  polygon = Bodies.circle(50,200,20,options);
  World.add(world,polygon);

  Slingshot = new SlingShot(this.polygon,{x:100,y:150});
    
}

function draw() {
  background(bg,bg,100);  
  Engine.update(engine);
  stand.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  //left blocks display
  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();
  Block8.display();
  Block9.display();

  Slingshot.display();
  fill(255,0,0);
  ellipse(polygon.position.x,polygon.position.y,40,40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon , { x:mouseX, y:mouseY});
}
function mouseReleased(){
  Slingshot.fly();
}
function keyPressed(){
  if (keyCode === 32) {
    Slingshot.attach(this.polygon);
  }  
}
async function backgroundimg(){
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);
  //var hour = 20;////
  if (hour >= 06 && hour <= 18) {
      bg  = 255;
  } else {
      bg = 100;
  }

}