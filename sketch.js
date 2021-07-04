const Engine = Matter.Engine;
const  World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var score =0;
var count = 0;
var particle, line;

var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  
  //scoring texts
  textSize(26)
  text("300", 20,590);
  text("300",100,590);
  text("300",180,590);
  text("300",260,590);
  text("400",340,590);
  text("400",420,590);
  text("400",500,590);
  text("500",580,590);
  text("500",660,590);
  text("500",740,590);

  Engine.update(engine);
 
  if(particle != null){
    particle.display();
    if(particle.body.position.y>750){
      if(particle.body.position.x<330){
        score = score+300;
      }else if(particle.body.position.x<570){
        score = score+400;
      } else if(particle.body.position.x<810){
        score = score+500;
      }
        particle=null;
        if(count>= 5){
          gameState = "end";
        }
    }
  }
  
  
   

   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(gameState === "end"){
     push();
    textSize(30);
    fill("yellow");
    text("GAME OVER! You have scored:"+score, width/2-200, height-450);

    pop();
  }
}

function mousePressed(){
  if(gameState !== "end"){
    count++;
    particle = new Particle(mouseX,10,10);

  }
}