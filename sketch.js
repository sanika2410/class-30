const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var backgroundimg,fruitimg,rabbitimg,bunny,button;
function preload(){
  backgroundimg = loadImage("background.png")
  fruitimg = loadImage("melon.png")
  rabbitimg = loadImage("Rabbit-01.png")
}


function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  bunny = createSprite(250,600,100,100)
  bunny.addImage(rabbitimg)
  bunny.scale=0.2
console.log(bunny.x)
rope = new Rope(6,{x:245,y:30})
var fruit_options={
  density:0.001
}

fruit = Bodies.circle(300,300,15,fruit_options)
Matter.Composite.add(rope.body,fruit)
button = createImg("cut_button.png")
button.position(200,30)
button.size(50,50)
button.mouseClicked(drop)
link = new Link(rope,fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER)
}

function draw() 
{
  background(51);
  image(backgroundimg,width/2,height/2,500,700)
  ground.show();
  rope.show();
  image(fruitimg,fruit.position.x,fruit.position.y,60,60)
  Engine.update(engine);
  

 drawSprites()
   
}

function drop(){
  rope.break()
  link.detach()
  link= null

}
